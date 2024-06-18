#!/usr/bin/node
const args = parseInt(process.argv[2], 10);

if (isNaN(args)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < args; i++) {
    let square = '';
    for (let y = 0; y < args; y++) {
      square += 'X';
    }
    console.log(square);
  }
}
