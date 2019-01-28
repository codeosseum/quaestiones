function arraySum(array) {
    if (Array.isArray()) {
        return array.reduce((acc, curr) => acc + curr, 0);
    } else {
        return 0;
    }
};

module.exports = arraySum;
