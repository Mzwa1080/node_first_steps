const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');

module.exports = chalk.bgGreen.black(greet('Xola'));
