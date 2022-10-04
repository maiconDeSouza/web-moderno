/*
v e v -> true
v e f -> false
f e ? -> false

v ou ? -> true
f ou v -> true
f ou f -> false

//Ou exclusivo simulado com !==
v xor v -> false
f xor f -> false
v xor f -> true
f xor v -> true

!v -> false
!f -> true

*/

const trabalho1 = false
const trabalho2 = false

function fimDesemana(trabalho1, trabalho2){
    const objFimDeSemana = {
        comprarSorvete : trabalho1 || trabalho2,
        comprarTV50 : trabalho1 && trabalho2,
        // comprarTV32 : !!(trabalho1 ^ trabalho2),
        comprarTV32: trabalho1 !== trabalho2,
        dieta : !this.comprarSorvete
    }
    console.log(objFimDeSemana)
}

fimDesemana(trabalho1, trabalho2)