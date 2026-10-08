const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

function getFiles(dir, relativeDir = '') {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);
    const relativePath = path.join(relativeDir, entry.name);

    return entry.isDirectory()
      ? getFiles(entryPath, relativePath)
      : [relativePath];
  });
}

if (fs.existsSync(logsDir)) {
  for (const file of getFiles(logsDir)) {
    console.log(`delete files...${file}`);
  }

  fs.rmSync(logsDir, { recursive: true, force: true });
}