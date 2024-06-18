#!/usr/bin/node

const args = process.argv;

if (!args) {
  console.log('Not a number');
} else {
  console.log(`My number: ${parseInt(args[2])}`);
}
