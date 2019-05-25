module.exports = [
    {
        description: 'Will return 1201:00:00 instead of 13:00:00.',
        test(solution) {
            return solution('01:00:00 PM');
        }
    },
    {
        description: 'Will return 1211:42:23 instead of 23:42:23.',
        test(solution) {
            return solution('11:42:23 PM');
        }
    }
];
