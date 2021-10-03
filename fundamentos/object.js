/* Javascript Funcional 
 *  Obs1: JSON (Javascript Object Notation) não é um objeto 
 * Javascript e sim uma notação textual. 
 * 
 * Obs2: os valores de JSON são delimitados por aspas duplas.
 * {"nome": "Camisa Polo", "preco": 79.90}
 * pode testar num JSON validator
 * 
 * Objeto é uma coleção, grupo de pares chaves-valor.
 * Chave é um nome único (nome do elemento).
 * */

const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //Evite atributos com espaço.

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

