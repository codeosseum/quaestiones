# Throw on Non-Array

Tries to invoke reduce on the argument thus fails if the argument is not an array.

## Breakdown

There's not much to see here: `reduce` is a function on `Array.prototype`, therefore, this will fail on any value which is not an array.

~~~~JavaScript
function arraySum(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
};

module.exports = arraySum;
~~~~
