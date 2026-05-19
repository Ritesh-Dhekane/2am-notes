import fs from 'fs';
import path from 'path';

const CONTENT_DIR = 'public/content';
const DATA_DIR = 'data';

// Helper to check if a file contains real study material
function isRealContent(filePath) {
  if (!fs.existsSync(filePath)) return false;
  const content = fs.readFileSync(filePath, 'utf-8');
  const size = fs.statSync(filePath).size;
  // Threshold: size >= 200 bytes and does not contain placeholder strings and length >= 150
  return size >= 200 && 
    !content.includes('Coming Soon') && 
    !content.includes('Placeholder structure') &&
    content.trim().length >= 150;
}

// Helper to get all files recursively
function getFiles(dir, allFiles = []) {
  if (!fs.existsSync(dir)) return allFiles;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, allFiles);
    } else {
      allFiles.push(name);
    }
  }
  return allFiles;
}

function generateMetadata() {
  const subjects = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'subjects.json'), 'utf-8'));
  
  const contentIndex = [];
  const navigation = {};

  subjects.forEach(subject => {
    const subjectId = subject.id;
    navigation[subjectId] = {
      title: subject.title,
      units: {},
      extras: []
    };

    // Process Units
    for (let i = 1; i <= 5; i++) {
      const unitId = `unit${i}`;
      const unitPath = path.join(CONTENT_DIR, subjectId, 'units', unitId);
      
      if (fs.existsSync(unitPath)) {
        const topicsPath = path.join(unitPath, 'topics');
        const unitTopics = [];

        if (fs.existsSync(topicsPath)) {
          const topics = fs.readdirSync(topicsPath);
          topics.forEach(topicId => {
            const topicNotesPath = path.join(topicsPath, topicId, 'notes.md');
            if (isRealContent(topicNotesPath)) {
              const relativePath = path.relative('public', topicNotesPath).replace(/\\/g, '/');
              unitTopics.push({
                id: topicId,
                title: topicId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
                path: relativePath
              });
              
              contentIndex.push({
                subjectId,
                unitId,
                topicId,
                title: topicId,
                path: relativePath,
                type: 'topic'
              });
            }
          });
        }

        // Only add unit to navigation if it has at least one valid topic notes file
        if (unitTopics.length > 0) {
          navigation[subjectId].units[unitId] = {
            title: `Unit ${i}`,
            topics: unitTopics
          };
        }
      }
    }

    // Process Extras (PYQs, Revision, etc.)
    const extrasDirs = ['pyq-solutions', 'revision', 'mindmaps'];
    extrasDirs.forEach(extra => {
      const extraPath = path.join(CONTENT_DIR, subjectId, extra);
      if (fs.existsSync(extraPath)) {
        const files = fs.readdirSync(extraPath).filter(f => f.endsWith('.md'));
        files.forEach(file => {
          const filePath = path.join(extraPath, file);
          if (isRealContent(filePath)) {
            const relativePath = path.relative('public', filePath).replace(/\\/g, '/');
            navigation[subjectId].extras.push({
              id: file.replace('.md', ''),
              title: file.replace('.md', '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
              path: relativePath,
              category: extra
            });

            contentIndex.push({
              subjectId,
              title: file.replace('.md', ''),
              path: relativePath,
              type: extra
            });
          }
        });
      }
    });
  });

  // Save results
  fs.writeFileSync(path.join(DATA_DIR, 'content-index.json'), JSON.stringify(contentIndex, null, 2));
  fs.writeFileSync(path.join(DATA_DIR, 'navigation.json'), JSON.stringify(navigation, null, 2));
  
  console.log('Metadata generation completed.');
}

generateMetadata();

