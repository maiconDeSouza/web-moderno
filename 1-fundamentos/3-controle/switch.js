function imprimirResultado(nota){
    switch(Math.floor(nota)){
        case 10: case 9:
            console.log(`Com a Nota ${nota} você chegou no quadro de Honra!`)
            break
        case 8: case 7:
            console.log(`Com a Nota ${nota} você está aprovado!`)
            break
        case 6:
            console.log(`Com a Nota ${nota} você está de recuperação!`)
            break
        case 5: case 4: case 3: case 2: case 1: case 0:
            console.log(`Com a Nota ${nota} você Reprovou!`)
            break
        default:
            console.log(`Nota invalida!`)
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(2)
imprimirResultado(12)