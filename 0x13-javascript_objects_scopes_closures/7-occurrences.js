#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  let i = 0; let occur = 0;
  for (i; i < list.length; i++) {
    if (list[i] === searchElement) {
      occur++;
    }
  }
  return occur;
};
