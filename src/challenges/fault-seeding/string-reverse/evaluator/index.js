function stringReverse(str) {
    if (!(typeof str == 'string')) {
        throw new TypeError('Expected a single string argument.')
    }

    const charArray = str.split('')
    const reversed = charArray.reverse()

    return reversed.join('')
};

module.exports = stringReverse;
