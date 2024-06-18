#!/usr/bin/node

const args = process.argv;
let i = 0;

if (!args[2]) {
  console.log('Missing number of occurrences');
} else {
  for (i; i < args[2]; i++) {
    console.log('C is fun');
  }
}
