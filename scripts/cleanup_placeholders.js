import fs from 'fs';
import path from 'path';

const CONTENT_DIR = 'content';

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

function cleanEmptyDirs(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  if (files.length === 0) {
    fs.rmdirSync(dir);
    console.log(`Removed empty directory: ${dir}`);
    return;
  }
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      cleanEmptyDirs(fullPath);
    }
  }
  
  // Re-read after cleaning subdirs
  const filesAfter = fs.readdirSync(dir);
  if (filesAfter.length === 0) {
    fs.rmdirSync(dir);
    console.log(`Removed empty directory: ${dir}`);
  }
}

function runCleanup() {
  const allFiles = getFiles(CONTENT_DIR);
  console.log(`Total files found before cleanup: ${allFiles.length}`);
  
  let deletedCount = 0;
  
  allFiles.forEach(file => {
    if (!file.endsWith('.md')) return;
    
    const content = fs.readFileSync(file, 'utf-8');
    const size = fs.statSync(file).size;
    
    const isPlaceholder = size < 200 || 
      content.includes('Coming Soon') || 
      content.includes('Placeholder structure') ||
      content.trim().length < 150;
      
    if (isPlaceholder) {
      fs.unlinkSync(file);
      console.log(`Deleted placeholder: ${file} (${size} bytes)`);
      deletedCount++;
    }
  });
  
  console.log(`Deleted ${deletedCount} placeholder files.`);
  
  console.log('Cleaning up empty directories...');
  // Clean empty directories multiple times to propagate upwards
  for (let i = 0; i < 5; i++) {
    cleanEmptyDirs(CONTENT_DIR);
  }
  
  console.log('Cleanup process completed.');
}

runCleanup();
