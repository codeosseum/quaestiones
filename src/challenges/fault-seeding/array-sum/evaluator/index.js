function arraySum(array) {
    if (Array.isArray(array)) {
        return array.reduce((acc, curr) => acc + curr, 0);
    } else {
        return 0;
    }
};

module.exports = arraySum;
