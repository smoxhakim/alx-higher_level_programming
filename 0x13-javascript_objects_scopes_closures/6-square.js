#!/usr/bin/node

const Rectangle = require('./4-rectangle');

class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }

  charPrint (c) {
    let char = c;
    if (c === undefined) {
      char = 'X';
    }

    for (let i = 0; i < this.height; i++) {
      let square = '';
      for (let y = 0; y < this.width; y++) {
        square += char;
      }
      console.log(square);
    }
  }
}

module.exports = Square;
