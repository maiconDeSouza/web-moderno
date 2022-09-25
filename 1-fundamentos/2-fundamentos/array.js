const valores = [7.7, 8.8, 9.2]
console.log(valores)
console.log(valores[0])
console.log(valores[550])
valores[550] = 23
console.log(valores)

valores.push(true)
console.log(valores)
valores.pop()
delete valores[550]
console.log(valores)

