let cont = 1

while(cont <= 10){
    console.log(cont)
    cont++
}
console.log(`-----For-----`)
for(let i = 11; i <= 20; i++){
    console.log(i)
}

console.log(`-----For em um Array-----`)
const notas = [ 3.5, 9.6, 7.5, 9.9]

for(let i = 0; i < notas.length; i++){
    console.log(`Nota ${notas[i]}`)
}
