function stringReverse(str) {
    const charArray = str.split('');
    const reversed = charArray.reverse();

    return reversed.join('');
};

module.exports = stringReverse;
