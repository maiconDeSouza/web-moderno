function soBoaNoticias(nota){
    if(nota >= 7){
        console.log(`Aprovado com ${nota}`)
    }
}

soBoaNoticias(8.8)
soBoaNoticias(6.2)

function truthyFalsy(valor){
    return valor ? `${valor} é Truthy` : `${valor} é Falsy`
}

console.log(truthyFalsy())
console.log(truthyFalsy(null))
console.log(truthyFalsy(NaN))
console.log(truthyFalsy(''))
console.log(truthyFalsy(0))
console.log(truthyFalsy(-1))
console.log(truthyFalsy(' '))
console.log(truthyFalsy('Texto'))
console.log(truthyFalsy([]))
console.log(truthyFalsy([1, 2]))
console.log(truthyFalsy({}))

