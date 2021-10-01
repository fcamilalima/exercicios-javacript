let isAtivo = false // Javascript prioriza constantes ao 
//invés de variáveis (prioriza const e let).

console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!true)
console.log(!!true)
console.log(!isAtivo)
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![]) // Array vazio negado duas vezes 
//representa condição verdadeira (true).
console.log(!!{}) // Objeto vazio negado duas vezes 
// representa uma condição verdadeira.
console.log(!!Infinity) // Tipo Infinito como uma divisão 
// por zero, negado duas vezes, tornar-se-á condição
// verdadeira (true). 
console.log(!!(isAtivo = true)) // Quando se insere uma 
console.log(!!(isAtivo = Infinity)) // atribuição que 
console.log(!!(isAtivo = 33))  //assume um valor verdadeiro. 

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log(!!('' || null || 0 || ' '))
console.log(('' || null || 0 || 'epa')) // Resposta: 'epa'
console.log(('' || null || 0 || 123)) // Resposta: 123

let nome = ''
console.log(nome || 'Desconhecido') //Resposta: 'Desconhecido'

nome = 'Lucas'
console.log(nome || 'Desconhecido') // Resposta: 'Lucas'