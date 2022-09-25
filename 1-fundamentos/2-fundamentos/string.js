const escola = "Cod3r"

console.log(escola.charAt(3)) //Pegar pelo indice
console.log(escola.charAt(5)) //Não tem este indice o js não gera erro
console.log(escola.charCodeAt(3)) //Vai retornar o valor segundo a tabela ascii
console.log(escola.indexOf('3')) // retorna em qual indice está o caracter buscado
console.log(escola.substring(1)) // vai mostrar a partir apenas as letras a partir do index 1
console.log(escola.substring(0, 2)) // vc seta onde inicia e onde termina
console.log('Escola '.concat(escola).concat(' !')) //concatenar
console.log(escola.replace('3', 'e')) //substituir quando acha algo correspondente
console.log(escola.replace('C', 'e')) //substituir quando acha algo correspondente
console.log(escola.replace(/\w/g, 'e')) //aceita regex
console.log('Ana,Maria,Pedro'.split(',')) //transformando em um array
