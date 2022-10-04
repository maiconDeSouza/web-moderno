let a = 3

console.log(a)

global.b = 123
console.log(b)
console.log(global.b)

this.c = 'texto'

console.log(global.c)
console.log(module.exports.c)

console.log(module.exports === this)

