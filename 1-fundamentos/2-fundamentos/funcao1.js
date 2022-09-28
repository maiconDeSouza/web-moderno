//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2,5,9,12,5)
imprimirSoma()

//função com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(14, 9))
console.log(soma(11))
