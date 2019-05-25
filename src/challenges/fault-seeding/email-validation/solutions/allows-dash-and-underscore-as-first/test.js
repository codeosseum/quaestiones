module.exports = [
    {
        description: 'Returns true, even though it starts with a dash.',
        test: ['-wrong@bad.com']
    },
    {
        description: 'Returns true, even though it starts with an underscore',
        test: ['_wrong@bad.com']
    },
    {
        description: 'Returns true, even though the part after @ starts with a dash.',
        test: ['wrong@-bad.com']
    },
    {
        description: 'Returns true, even though the part after @ starts with an underscore.',
        test: ['wrong@_bad.com']
    }
];
