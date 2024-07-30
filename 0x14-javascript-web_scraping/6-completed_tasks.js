#!/usr/bin/node
const request = require('request');

const url = process.argv[2];
if (!url) {
  console.error('Please provide a url as a command-line argument.');
  process.exit(1);
}

request(url, { json: true }, (err, response, body) => {
  if (err) {
    console.log('Error:', err);
    return;
  }
  const count = {};

  body.forEach(task => {
    if (task.completed) {
      if (!count[task.userId]) {
        count[task.userId] = 0;
      }
      count[task.userId]++;
    }
  });

  console.log(count);
});
