let isAtivo = false
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os Verdadeiros...')
console.log(!!3)
console.log(!!-25)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

console.log('os Falsos')
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)

const nome = ''

console.log('' || 'Desconhecido')