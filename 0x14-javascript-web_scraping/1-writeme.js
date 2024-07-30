#!/usr/bin/node
const fs = require('fs');

const file = process.argv[2];
const fileUpdat = process.argv[3];
if (!file) {
  console.error('Please provide a file path as a command-line argument.');
  process.exit(1);
}

fs.writeFile(file, fileUpdat, 'utf8', (error) => {
  if (error) {
    console.log('Error', error);
  }
});
