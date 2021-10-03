/* Em Javascript, o array é heterogêneo (A linguagem é 
    tipicamente fraca). Não tem tamanho fixo e é um objeto. */

const valores = [7.7, 8.9, 6.3, 9.2] // Vírgula é o separador 
// dos elementos do array.
console.log(valores[0], valores[1])
console.log(valores[4]) // Quando o elemento de um array  
// não existe, retorna um undefined.

valores[4] = 10
console.log(valores) // Nas posições que não existem elementos,
// aparecerá n empty items.
valores[10] = 10
console.log(valores)
console.log(valores.length)

valores.push({ id: 3 }, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)
console.log(typeof valores) // O retorno é do tipo Object.
