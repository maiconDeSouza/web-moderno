Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log(`Com a Nota ${nota} você chegou no quadro de Honra!`)
    } else if(nota.entre(7, 8)){
        console.log(`Com a Nota ${nota} você está aprovado!`)
    } else if(nota.entre(6, 6)){
        console.log(`Com a Nota ${nota} você está de recuperação!`)
    } else if(nota.entre(0, 5)){
        console.log(`Com a Nota ${nota} você Reprovou!`)
    } else{
        console.log(`Nota invalida!`)
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(2)
imprimirResultado(12)