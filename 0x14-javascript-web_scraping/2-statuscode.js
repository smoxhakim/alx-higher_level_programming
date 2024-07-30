#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request(url, 'utf8', (err, response) => {
  if (err) {
    console.log('Error:', err);
  }
  console.log('code: ', response.statusCode);
});