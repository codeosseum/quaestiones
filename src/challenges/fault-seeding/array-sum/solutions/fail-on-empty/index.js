function arraySum(array) {
    if (!Array.isArray(array)) {
        return 0;
    }

    let acc = array[0];
    for (let i = 1; i < array.length; ++i) {
        acc += array[i];
    }

    return acc;
};

module.exports = arraySum;
