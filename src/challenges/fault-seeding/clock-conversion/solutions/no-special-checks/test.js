module.exports = [
    {
        description: 'Returns 24:00:00 for noon.',
        test(solution) {
            return solution('12:00:00 PM');
        }
    },
    {
        description: 'Returns 12:00:00 for midnight.',
        test(solution) {
            return solution('12:00:00 AM');
        }
    }
];
