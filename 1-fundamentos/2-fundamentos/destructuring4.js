function rand([min, max]){
    if(min > max){
        [min, max] = [max, min]
    }
    const valor = Math.floor(Math.random() * (max - min) + min)
    return `Valor Min = ${min}, Valor Max = ${max} - Valor aleatório ${valor}`
}

const arr = [85, 50]
console.log(rand(arr))