const { a } = require('./file2.js');
const { a: x } = require('./file3.js');
// const { add } = require('./utils/add.js');
// const { subs } = require('./utils/subs.js');

const { add, subs, capitalize } = require("./utils");

// console.log(a, x);
console.log(add(15, 10));
console.log(subs(15, 10));
console.log(capitalize("shantunu"));