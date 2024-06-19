#!/usr/bin/node

class Rectangle {
  constructor (w, h) {
    if (w >= 0 && h >= 0) {
      this.width = w;
      this.height = h;
    }
  }

  rotate () {
    const swap = this.height;
    this.height = this.width;
    this.width = swap;
  }

  double () {
    this.height *= 2;
    this.width *= 2;
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      let rectangle = '';
      for (let y = 0; y < this.width; y++) {
        rectangle += 'X';
      }
      console.log(rectangle);
    }
  }
}
module.exports = Rectangle;
