#!/usr/bin/node

function addMeMaybe (number, theFunction) {
    for (let i = 0; i < number; i++) {
        theFunction();
    }

}
module.exports.addMeMaybe = addMeMaybe;
