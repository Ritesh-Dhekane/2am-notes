import fs from 'fs';
import path from 'path';

const CONTENT_DIR = 'public/content';
const DATA_DIR = 'data';

// Helper to get all files recursively
function getFiles(dir, allFiles = []) {
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
  const allContentFiles = getFiles(CONTENT_DIR);
  
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
        navigation[subjectId].units[unitId] = {
          title: `Unit ${i}`,
          topics: []
        };

        const topicsPath = path.join(unitPath, 'topics');
        if (fs.existsSync(topicsPath)) {
          const topics = fs.readdirSync(topicsPath);
          topics.forEach(topicId => {
            const topicNotesPath = path.join(topicsPath, topicId, 'notes.md');
            if (fs.existsSync(topicNotesPath)) {
              const relativePath = path.relative('public', topicNotesPath).replace(/\\/g, '/');
              navigation[subjectId].units[unitId].topics.push({
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
      }
    }

    // Process Extras (PYQs, Revision, etc.)
    const extrasDirs = ['pyq-solutions', 'revision', 'mindmaps'];
    extrasDirs.forEach(extra => {
      const extraPath = path.join(CONTENT_DIR, subjectId, extra);
      if (fs.existsSync(extraPath)) {
        const files = fs.readdirSync(extraPath).filter(f => f.endsWith('.md'));
        files.forEach(file => {
          const relativePath = path.relative('public', path.join(extraPath, file)).replace(/\\/g, '/');
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
