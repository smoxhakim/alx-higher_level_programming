const request = require('request');
const fs = require('fs');

const url = process.argv[2];
if (!url) {
  console.error('Please provide a url as a command-line argument.');
  process.exit(1);
}
const file = process.argv[3];
if (!file) {
  console.error('Please provide a file path as a command-line argument.');
  process.exit(1);
}

request(url, (err, response, body) => {
  if (err) {
    console.log('Error:', err);
    return;
  }
  fs.writeFile(file, body, 'utf8', (err) => {
    if (err) {
      console.log('Error:', err);
    }
  });
});
