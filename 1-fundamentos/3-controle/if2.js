function teste(num){
    if(num > 7)
        console.log(num) // como não colocou chaaves só um entra no escopo do if
        console.log('fim') // ele sai pq ele entra no escopo de função
}

teste(8)
teste(6)

function teste2(num){
    if(num > 7); { //cuidado com ponto e virgula
        console.log(num)
    }
}
teste2(8)
teste2(6)
