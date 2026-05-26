import fs from 'fs';
import path from 'path';

const CONTENT_DIR = 'content';
const PUBLIC_DIR = 'public';
const PUBLIC_CONTENT_DIR = path.join(PUBLIC_DIR, 'content');
const DATA_DIR = 'data';
const EXTRA_DIRS = ['pyq-solutions', 'revision', 'mindmaps'];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function removeDirContents(dirPath) {
  if (!fs.existsSync(dirPath)) return;

  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    fs.rmSync(fullPath, { recursive: true, force: true });
  }
}

function copyDir(sourceDir, targetDir) {
  if (!fs.existsSync(sourceDir)) return;

  ensureDir(targetDir);

  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      copyDir(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

function isRealContent(filePath) {
  if (!fs.existsSync(filePath)) return false;

  const content = fs.readFileSync(filePath, 'utf-8');
  const size = fs.statSync(filePath).size;

  return (
    size >= 200 &&
    !content.includes('Coming Soon') &&
    !content.includes('Placeholder structure') &&
    content.trim().length >= 150
  );
}

function slugToTitle(value) {
  return value
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function normalizeTitle(rawTitle) {
  return rawTitle
    .replace(/\s*[—-]\s*/g, ' - ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractMarkdownMetadata(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const normalizedRaw = raw
    .replace(/^#\s*File Name\s*$/gim, '')
    .replace(/^#\s*PART\s+\d+.*$/gim, '')
    .replace(/^`[^`]+\.md`\s*$/gim, '')
    .trim();
  const lines = normalizedRaw.split(/\r?\n/);
  const headings = lines
    .map((line) => line.trim())
    .filter((line) => /^#\s+/.test(line))
    .map((line) => line.replace(/^#\s+/, '').replace(/`/g, '').trim());

  const firstMeaningfulHeading =
    headings.find(
      (heading) =>
        !heading.toLowerCase().endsWith('.md') &&
        heading.toLowerCase() !== 'file name' &&
        !/^part\s+\d+/i.test(heading)
    ) ||
    headings[0] ||
    path.basename(filePath, '.md');

  const cleanText = normalizedRaw
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[[^\]]+\]\([^)]+\)/g, ' ')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_~>|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return {
    raw,
    title: normalizeTitle(firstMeaningfulHeading),
    excerpt: cleanText.slice(0, 220),
    searchableText: cleanText.toLowerCase(),
  };
}

function inferItemLabels({ fileName, category, parsedTitle }) {
  if (category === 'pyq-solutions') {
    const match = fileName.match(/(?:^|-)(apr|jan)-(\d{4})$/i);
    if (match) {
      return {
        title: `PYQ ${match[1].toUpperCase()} ${match[2]}`,
        shortTitle: `PYQ ${match[1].toUpperCase()} ${match[2]}`,
      };
    }
  }

  if (fileName.includes('question-bank')) {
    return { title: 'Question Bank', shortTitle: 'Question Bank' };
  }

  return {
    title: parsedTitle || slugToTitle(fileName),
    shortTitle: parsedTitle || slugToTitle(fileName),
  };
}

function buildSearchKeywords({ subject, item, category, markdown }) {
  const parts = [
    subject.id,
    subject.title,
    subject.description,
    item.id,
    item.title,
    item.shortTitle,
    item.categoryLabel,
    category,
    markdown.searchableText,
  ];

  return parts
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function generateMetadata() {
  const subjects = readJson(path.join(DATA_DIR, 'subjects.json'));
  const contentIndex = [];
  const navigation = {};
  const searchIndex = [];

  ensureDir(PUBLIC_DIR);
  ensureDir(PUBLIC_CONTENT_DIR);
  removeDirContents(PUBLIC_CONTENT_DIR);
  copyDir(CONTENT_DIR, PUBLIC_CONTENT_DIR);

  for (const subject of subjects) {
    const subjectId = subject.id;
    navigation[subjectId] = {
      title: subject.title,
      units: {},
      extras: [],
    };

    for (let i = 1; i <= subject.unitCount; i += 1) {
      const unitId = `unit${i}`;
      const unitPath = path.join(CONTENT_DIR, subjectId, 'units', unitId);

      if (!fs.existsSync(unitPath)) continue;

      const topicsPath = path.join(unitPath, 'topics');
      const unitTopics = [];

      if (fs.existsSync(topicsPath)) {
        for (const topicId of fs.readdirSync(topicsPath)) {
          const topicNotesPath = path.join(topicsPath, topicId, 'notes.md');
          if (!isRealContent(topicNotesPath)) continue;

          const relativePath = topicNotesPath.replace(/\\/g, '/');
          const markdown = extractMarkdownMetadata(topicNotesPath);
          const topicTitle = markdown.title || slugToTitle(topicId);

          unitTopics.push({
            id: topicId,
            title: topicTitle,
            path: relativePath,
          });

          contentIndex.push({
            subjectId,
            unitId,
            topicId,
            title: topicTitle,
            path: relativePath,
            type: 'topic',
          });

          searchIndex.push({
            subjectId,
            subjectTitle: subject.title,
            unitId,
            title: topicTitle,
            path: relativePath,
            type: 'topic',
            categoryLabel: 'Topic Notes',
            excerpt: markdown.excerpt,
            keywords: buildSearchKeywords({
              subject,
              item: {
                id: topicId,
                title: topicTitle,
                shortTitle: topicTitle,
                categoryLabel: 'Topic Notes',
              },
              category: 'topic',
              markdown,
            }),
          });
        }
      }

      if (unitTopics.length > 0) {
        navigation[subjectId].units[unitId] = {
          title: `Unit ${i}`,
          topics: unitTopics,
        };
      }
    }

    for (const category of EXTRA_DIRS) {
      const extraPath = path.join(CONTENT_DIR, subjectId, category);
      if (!fs.existsSync(extraPath)) continue;

      const files = fs
        .readdirSync(extraPath)
        .filter((file) => file.endsWith('.md'))
        .sort((a, b) => a.localeCompare(b));

      for (const file of files) {
        const filePath = path.join(extraPath, file);
        if (!isRealContent(filePath)) continue;

        const relativePath = filePath.replace(/\\/g, '/');
        const itemId = file.replace(/\.md$/, '');
        const markdown = extractMarkdownMetadata(filePath);
        const labels = inferItemLabels({
          fileName: itemId,
          category,
          parsedTitle: markdown.title,
        });

        const item = {
          id: itemId,
          title: labels.title,
          shortTitle: labels.shortTitle,
          path: relativePath,
          category,
          sourceTitle: markdown.title,
        };

        navigation[subjectId].extras.push(item);

        contentIndex.push({
          subjectId,
          title: item.title,
          path: relativePath,
          type: category,
          sourceTitle: item.sourceTitle,
        });

        const categoryLabelMap = {
          'pyq-solutions': 'Solved PYQs',
          revision: 'Revision Notes',
          mindmaps: 'Concept Maps',
        };

        searchIndex.push({
          subjectId,
          subjectTitle: subject.title,
          title: item.title,
          sourceTitle: item.sourceTitle,
          path: relativePath,
          type: category,
          categoryLabel: categoryLabelMap[category] || slugToTitle(category),
          excerpt: markdown.excerpt,
          keywords: buildSearchKeywords({
            subject,
            item: {
              ...item,
              categoryLabel: categoryLabelMap[category] || slugToTitle(category),
            },
            category,
            markdown,
          }),
        });
      }
    }

    navigation[subjectId].extras.sort((a, b) => {
      const categoryOrder = EXTRA_DIRS.indexOf(a.category) - EXTRA_DIRS.indexOf(b.category);
      if (categoryOrder !== 0) return categoryOrder;
      return a.title.localeCompare(b.title, undefined, { numeric: true });
    });
  }

  fs.writeFileSync(path.join(DATA_DIR, 'content-index.json'), JSON.stringify(contentIndex, null, 2));
  fs.writeFileSync(path.join(DATA_DIR, 'navigation.json'), JSON.stringify(navigation, null, 2));
  fs.writeFileSync(path.join(DATA_DIR, 'search-index.json'), JSON.stringify(searchIndex, null, 2));

  console.log(`Metadata generation completed. Indexed ${contentIndex.length} content items.`);
}

generateMetadata();
