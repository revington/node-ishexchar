var hexChars = {
    '0': true,
    '1': true,
    '2': true,
    '3': true,
    '4': true,
    '5': true,
    '6': true,
    '7': true,
    '8': true,
    '9': true,
    a: true,
    b: true,
    c: true,
    d: true,
    e: true,
    f: true,
    A: true,
    B: true,
    C: true,
    D: true,
    E: true,
    F: true
};
module.exports = function (char) {
    return hexChars[char];
};
