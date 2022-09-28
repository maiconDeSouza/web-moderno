//Armazenando um função em uma variavél 

const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variavel
const soma = (a, b) => a + b //retorno implícito

console.log(soma(2, 3))

const saudacao = msg => console.log(msg)

saudacao('Olá')