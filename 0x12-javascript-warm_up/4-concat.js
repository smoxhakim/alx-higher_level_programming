#!/usr/bin/node

const args1 = process.argv[2];
const args2 = process.argv[3];
const noArg = 'undefined';

if (!args2) {
  console.log(`${args1} is ${noArg}`);
} else if (!args1 && !args2) {
  console.log(`${noArg} is ${noArg}`);
} else {
  console.log(`${args1} is ${args2}`);
}
