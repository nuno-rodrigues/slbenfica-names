var uniqueRandomArray = require('unique-random-array');
var slBenficaNames = require('./slbenfica-names.json');
var getRandomItem = uniqueRandomArray(slBenficaNames);

module.exports = {
    all: slBenficaNames,
    random: random
};

function random(number) {
    if (number === undefined) {
        return getRandomItem();
    } else {
        var randomItems = [];
        for (var i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}