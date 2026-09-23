const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'public', 'images');

fs.readdirSync(dir).forEach(file => {
  const match = file.match(/^([a-z_]+)_\d+\.jpg$/);
  if (match) {
    const cleanName = match[1] + '.jpg';
    fs.copyFileSync(path.join(dir, file), path.join(dir, cleanName));
    console.log(`Copied ${file} to ${cleanName}`);
  }
});
