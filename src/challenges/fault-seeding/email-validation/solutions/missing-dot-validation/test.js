module.exports = [
    {
        description: 'Returns true, even though, there\'s no dot.',
        test: ['wrong@badcom'] 
    },
    {
        description: 'Returns true, even though, there\'s no dot, but a completely off character.',
        test: ['wrong@bad#com'] 
    }
];
