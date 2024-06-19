#!/usr/bin/node

exports.esrever = function (list) {
  const newArray = [];

  for (let i = list.length - 1, j = 0; i >= 0; j++, i--) {
    newArray[j] = list[i];
  }

  return newArray;
};
