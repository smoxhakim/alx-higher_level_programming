#!/usr/bin/node
const fs = require('fs');

const file = process.argv[2];
if (!file) {
  console.error('Please provide a file path as a command-line argument.');
  process.exit(1);
}

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data);
});
