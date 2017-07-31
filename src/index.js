var uniqueRandomArray = require('unique-random-array');
var slBenficaNames = require('./slbenfica-names.json');

module.exports = {
    all: slBenficaNames,
    random: uniqueRandomArray(slBenficaNames)
};