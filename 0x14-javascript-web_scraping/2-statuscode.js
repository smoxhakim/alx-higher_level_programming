#!/usr/bin/node
const request = require('request');

const url = process.argv[2];
if (!url) {
  console.error('Please provide a url as a command-line argument.');
  process.exit(1);
}

request(url, (err, response) => {
  if (err) {
    console.log('Error:', err);
  }
  console.log('code:', response.statusCode);
});
