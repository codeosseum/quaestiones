module.exports = [
    {
        description: 'Returns true, even though there are multiple @s.',
        test: ['includes@multiple.com@ats']
    },
    {
        description: 'Throws, because there\'s no @.',
        test: ['theres-no-at.com']
    }
];
