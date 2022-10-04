function tratarError(msg, e){
    throw new Error(`${msg} -> ${e}`)
}
function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        tratarError(`Aqui eu posso especificar o erro`, error)
    } finally {
        console.log('Final')
    }
}

const obj = { nome: 'Maicon' }
imprimirNomeGritado(obj)