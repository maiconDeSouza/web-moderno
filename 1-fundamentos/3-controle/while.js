function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let isValid = true
let i = 0

while(isValid){
    const numero = getInteiroAleatorioEntre(1, 1000)
    console.log(`${++i} -> ${numero}`)
    if(numero === 729){
        isValid = false
    }
}