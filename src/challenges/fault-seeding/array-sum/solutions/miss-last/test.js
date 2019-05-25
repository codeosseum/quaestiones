module.exports = [
    {
        description: 'Will return 3 instead of 6.',
        test(solution) {
            return solution([1, 2, 3]);
        }
    },
    {
        description: 'Will return -1 instead of 0.',
        test(solution) {
            return solution([-1, 0, 1]);
        }
    }
];
