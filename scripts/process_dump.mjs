import fs from 'node:fs/promises';
import path from 'node:path';

const BASE_DIR = process.cwd();
const DUMP_DIR = path.join(BASE_DIR, 'source-material', 'dump');
const SOURCE_MATERIAL_DIR = path.join(BASE_DIR, 'source-material');
const EXTRACTED_DIR = path.join(BASE_DIR, 'source-material', 'dump-extracted');
const PUBLIC_DUMP_DIR = path.join(BASE_DIR, 'public', 'dump');
const DATA_INDEX_FILE = path.join(BASE_DIR, 'data', 'dump-index.json');

const SUBJECT_ALIASES = {
  awd: 'advanced-web-design',
  'advanced-web-design': 'advanced-web-design',
  java: 'java-programming',
  'java-programming': 'java-programming',
  stqa: 'software-testing-quality-assurance',
  'software-testing-quality-assurance': 'software-testing-quality-assurance',
  rm: 'research-methodology',
  'research-methodology': 'research-methodology',
  ml: 'machine-learning-techniques',
  'machine-learning-techniques': 'machine-learning-techniques',
  ot: 'optimization-techniques',
  'optimization-techniques': 'optimization-techniques',
  pbi: 'power-bi',
  'power-bi': 'power-bi',
  js: 'javascript',
  javascript: 'javascript',
  cyber: 'cyber-security',
  'cyber-security': 'cyber-security',
  'info-security': 'information-security',
  'information-security': 'information-security',
  'information security': 'information-security',
  info: 'information-security',
  ecc: 'eccs',
  eccs: 'eccs',
  ccms: 'ccms',
};

const CATEGORY_PATTERNS = [
  ['unit-notes', ['unit', 'chapter', 'notes']],
  ['question-papers', ['question bank', 'question paper', 'paper', 'pyq', 'qb']],
  ['templates', ['sample', 'manual', 'mannual', 'test case', 'test plan', 'photo']],
  ['references', ['research paper', 'reference', 'research', 'ethics', 'anova', 'hypothesis', 'distribution']],
  ['assignments', ['assignment', 'assignmnet', 'assignmnets']],
  ['case-studies', ['case study']],
];

const CATEGORY_ORDER = {
  'unit-notes': 0,
  'question-papers': 1,
  assignments: 2,
  'case-studies': 3,
  templates: 4,
  references: 5,
  other: 6,
};

const formatSize = (bytesSize) => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let value = bytesSize;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(1)} ${units[unitIndex]}`;
};

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'file';

const classifyFile = (filename) => {
  const lowered = filename.toLowerCase();
  for (const [category, keywords] of CATEGORY_PATTERNS) {
    if (keywords.some((keyword) => lowered.includes(keyword))) {
      return category;
    }
  }
  return 'other';
};

const normalizeSubjectId = (parts) => {
  for (let index = parts.length - 1; index >= 0; index -= 1) {
    const subjectId = SUBJECT_ALIASES[slugify(parts[index])];
    if (subjectId) return subjectId;
  }
  return null;
};

const ensureDir = async (dirPath) => {
  await fs.mkdir(dirPath, { recursive: true });
};

const removeDirContents = async (dirPath) => {
  await ensureDir(dirPath);
  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    await fs.rm(path.join(dirPath, entry.name), { recursive: true, force: true });
  }
};

const walkFiles = async (dirPath) => {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.name.startsWith('.') || entry.name.startsWith('~$')) continue;
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
};

const collectArchiveRoots = async () => {
  const roots = [{ dirPath: DUMP_DIR, subjectId: null }];
  const entries = await fs.readdir(SOURCE_MATERIAL_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const subjectId = SUBJECT_ALIASES[slugify(entry.name)];
    if (!subjectId) continue;

    const archiveDir = path.join(SOURCE_MATERIAL_DIR, entry.name, 'dump-archive');
    try {
      const stat = await fs.stat(archiveDir);
      if (stat.isDirectory()) {
        roots.push({ dirPath: archiveDir, subjectId });
      }
    } catch {
      // No archive for this subject yet.
    }
  }

  return roots;
};

const processDump = async () => {
  await ensureDir(DUMP_DIR);
  await ensureDir(EXTRACTED_DIR);
  await ensureDir(PUBLIC_DUMP_DIR);
  await removeDirContents(PUBLIC_DUMP_DIR);

  const metadata = {};
  const scanRoots = await collectArchiveRoots();

  for (const { dirPath, subjectId: forcedSubjectId } of scanRoots) {
    const dumpFiles = await walkFiles(dirPath);

    for (const filePath of dumpFiles) {
      const relativeDumpPath = path.relative(dirPath, filePath);
      const relativeParts = relativeDumpPath.split(path.sep);
      const subjectId = forcedSubjectId || normalizeSubjectId(relativeParts.slice(0, -1));

      if (!subjectId) {
        console.warn(`[Warning] Skipping unmapped file: ${relativeDumpPath}`);
        continue;
      }

      let relAfterSubject = relativeParts;

      if (!forcedSubjectId) {
        let subjectIndex = 0;
        while (
          subjectIndex < relativeParts.length - 1 &&
          SUBJECT_ALIASES[slugify(relativeParts[subjectIndex])] !== subjectId
        ) {
          subjectIndex += 1;
        }
        relAfterSubject = relativeParts.slice(subjectIndex + 1);
      }

      const relativePublicPath = relAfterSubject.join('/');
      const fileName = path.basename(filePath);
      const fileStat = await fs.stat(filePath);
      const category = classifyFile(fileName);
      const docId = slugify(relativePublicPath.replace(/\.[^/.]+$/, ''));
      const ext = path.extname(fileName).replace('.', '').trim().toLowerCase() || 'unknown';

      const publicDestination = path.join(PUBLIC_DUMP_DIR, subjectId, ...relAfterSubject);
      await ensureDir(path.dirname(publicDestination));
      await fs.copyFile(filePath, publicDestination);

      if (ext === 'txt') {
        const extractedDestination = path.join(
          EXTRACTED_DIR,
          subjectId,
          relativePublicPath.replace(/\.[^/.]+$/, '.txt')
        );
        await ensureDir(path.dirname(extractedDestination));
        const text = await fs.readFile(filePath, 'utf8');
        await fs.writeFile(extractedDestination, text, 'utf8');
      }

      metadata[subjectId] ||= [];
      metadata[subjectId].push({
        id: docId,
        name: fileName,
        path: `dump/${subjectId}/${relativePublicPath}`,
        relativePath: relativePublicPath,
        type: ext,
        size: formatSize(fileStat.size),
        category,
        sourceFolder: path.dirname(relativePublicPath).replaceAll('\\', '/') || '.',
        addedAt: fileStat.mtimeMs / 1000,
      });
    }
  }

  for (const docs of Object.values(metadata)) {
    docs.sort((left, right) => {
      const categoryDelta = (CATEGORY_ORDER[left.category] ?? 99) - (CATEGORY_ORDER[right.category] ?? 99);
      if (categoryDelta !== 0) return categoryDelta;
      const folderDelta = left.sourceFolder.localeCompare(right.sourceFolder);
      if (folderDelta !== 0) return folderDelta;
      return left.name.localeCompare(right.name);
    });
  }

  await fs.writeFile(DATA_INDEX_FILE, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8');
  console.log(`Metadata generated successfully at ${DATA_INDEX_FILE}`);
};

await processDump();
