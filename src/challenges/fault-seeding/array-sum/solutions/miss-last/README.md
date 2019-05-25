# Miss Last

This solution will not add the last element of the array to the sum.

## Breakdown

Argument check.

~~~~JavaScript
function arraySum(array) {
    if (!Array.isArray(array)) {
        return 0;
    }
~~~~

Initialize the accumulator with `0`.

~~~~js
    let acc = 0;
~~~~

The predicate in the loop head is clearly off: it should go up to `array.length`.

~~~~JavaScript
    for (let i = 0; i < array.length - 1; ++i) {
        acc += array[i];
    }

    return acc;
};

module.exports = arraySum;
~~~~
