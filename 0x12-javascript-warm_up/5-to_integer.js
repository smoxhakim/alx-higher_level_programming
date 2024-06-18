#!/usr/bin/node

const args = process.argv;
const num = parseInt(args[2], 10);

if (!args[2]) {
  console.log('Not a number');
} else if (isNaN(num)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${num}`);
}
