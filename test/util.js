const fs = require('fs');
const path = require('path');


// Thanks! https://stackoverflow.com/a/24594123
const isDirectory = source => fs.lstatSync(source).isDirectory()

const getDirectories = base => fs.readdirSync(base)
    .map(p => path.join(base, p))
    .filter(isDirectory);

const isFunction = value => typeof value == 'function';

const notUndefined = value => typeof value != 'undefined';

module.exports = {
    getDirectories,
    isFunction, 
    notUndefined
};
