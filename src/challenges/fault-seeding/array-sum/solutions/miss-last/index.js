function arraySum(array) {
    if (!Array.isArray(array)) {
        return 0;
    }

    let acc = 0;
    for (let i = 0; i < array.length - 1; ++i) {
        acc += array[i];
    }

    return acc;
};

module.exports = arraySum;
