#!/usr/bin/node
const request = require('request');

const id = process.argv[2];
if (!id) {
  console.error('Please provide a episode number as a command-line argument.');
  process.exit(1);
}
const url = 'https://swapi-api.alx-tools.com/api/films/${id}';

request(url, { json: true }, (err, response, body) => {
  if (err) {
    console.log('Error:', err);
    return;
  }
  console.log(body.title);
});
