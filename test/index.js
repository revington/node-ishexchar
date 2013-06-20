var assert = require('assert'),
    isHexChar = require('..');
describe('isHexChar', function () {
    it('should return true for 0 to 9 and "a" to "f" —case insensitive— chars', function () {
        // we expect that all "testValues" are evaluated as true
        var testValues = '0123456789abcdefABCDEF'.split('');
        var truishValues = testValues.map(function (x) {
            return isHexChar(x);
        }).filter(function (x) {
            return x;
        });
        assert.equal(truishValues.length, testValues.length);
    });
    it('should return false for non hex values', function () {
        assert(!isHexChar('ß'));
        assert(!isHexChar('x'));
        assert(!isHexChar('♥'));
        assert(!isHexChar('我'));
        assert(!isHexChar('∑'));
        assert(!isHexChar('á'));
        assert(!isHexChar(''));
        assert(!isHexChar(' '));
        assert(!isHexChar('-'));
    });
});
