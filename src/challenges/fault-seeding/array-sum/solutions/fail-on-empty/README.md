# Fail On Empty

This solution will throw an error if the array is an empty one.

## Breakdown

We check if the argument is an array or not.

~~~~JavaScript
function arraySum(array) {
    if (!Array.isArray(array)) {
        return 0;
    }
~~~~

However, afterwards we try to initialize the accumulator with the first element of the array. Obsiously, this fails if the array is empty.

~~~~JavaScript
    let acc = array[0];
    for (let i = 1; i < array.length; ++i) {
        acc += array[i]
    }

    return acc
};

module.exports = arraySum;
~~~~
