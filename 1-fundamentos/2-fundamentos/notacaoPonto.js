console.log(typeof Math)
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')


console.log(obj1)
console.log(obj2)
console.log(obj3)

