const arr = []

for(let i = 1; i <= 10; i++){
    arr.push(i)
}
console.log(`Continue 5`)

for(let el of arr){
    if(el === 5){
        continue
    }

    console.log(el)
}

console.log(`Break no 3`)

for(let el of arr){
    if(el === 3){
        break
    }

    console.log(el)
}