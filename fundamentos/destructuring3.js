/* 
 * Operador destructuring usado com funções passando 
 * objetos como parâmetros de uma função. 
 */
function rand({ min = 0, max = 1000 }) { //Operador 
    // destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 } // Um objeto como parâmetro.
// Será exposto valores de min= 40 e max=50.
// No processo de destructuring, as variáveis extraídas 
// do objeto, são demonstradas com o símbolo de = (igual). 
// Enquanto, a atribuição de um objeto pelo par chave-valor
// (a atribuição aos atributos do objeto), será utilizando
// o operador : (dois pontos).
// Destructuring -> { min = 0, max = 1000 }
// Objeto -> { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955 })) // Parâmtro padrão.
// Parâmetro padrão foi inserido no ES 2015.
console.log(rand({})) // Passando por valor um objeto vazio.
// Assume os valores padrões de min=0 e max=1000 definidos
// na função, usando o destructuring.

// console.log(rand())
// Erro.
// Apresenterá erros ao passar nenhum parâmetro para
// a função randômico.
