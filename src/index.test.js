var expect = require('chai').expect;
var slBenficaNames = require('./index');

describe('slbenfica-names', function() {
    /*
    it('should work!', function() {
        expect(true).to.be.true;
    })
    */
    describe('all', function() {
        it('should be an array of strings', function() {
            expect(slBenficaNames.all).to.satisfy(isArrayofStrings);

            function isArrayofStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                })
            }
        })

        it('should contain Marcelo', function() {
            expect(slBenficaNames.all).to.include('Marcelo');
        })
    })

    describe('random', function() {
        it('should return a random name from slBenficaNames.all', function() {
            var randomItem = slBenficaNames.random();
            expect(slBenficaNames.all).to.include(randomItem);
        })

        it('should return an array of items if passed a number', function() {
            var randomItems = slBenficaNames.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item) {
                expect(slBenficaNames.all).to.include(item);
            })
        })
    })
})