# Throw Error on Non-String

Throws an inappropriate error on non-string arguments.

## Breakdown

Immediately tries to invoke `split` on the argument thus fails if the argument is not a string.

However, the thrown exception will not include the appropriate message as stated in the specification.

~~~~JavaScript
function stringReverse(str) {
    const charArray = str.split('');
~~~~

The rest is okay.

~~~~js
    const reversed = charArray.reverse();

    return reversed.join('');
};

module.exports = stringReverse;
~~~~
