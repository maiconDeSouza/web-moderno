const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(() => console.log(i))
}

funcs[2]()
funcs[8]() // ele continua buscando o valor que parou o i