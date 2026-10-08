const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

fs.mkdirSync(logsDir, { recursive: true });
process.chdir(logsDir);

for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(fileName, `This is log file number ${i}`);
  console.log(fileName);
}