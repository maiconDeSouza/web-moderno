const cachorro = {
    nome: 'Felipe',
    idade: 15,
    raca: 'Vira Lata'
}

for(let chave in cachorro){
    console.log(`${chave} -> ${cachorro[chave]}`)
}

const arr = [23, 2, 14, 67, 32]

for(let i in arr){
    console.log(arr[i])
}