const arr = [12, 15, 1, 25, 'casa', true, 3]
const [ constA ] = arr

console.log(constA)

const [, constB, , , constC] = arr
console.log(constB, constC)

const [, [, constD] ] = [[, 8, 8], [9, 6, 8]] 
console.log(constD)