const fs = require('fs');

const filename = process.argv[2];

if (!filename) {
  console.error('Please give a filename.');
  process.exit(1);
}

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    process.exit(1);
  }

  console.log(data);
});



