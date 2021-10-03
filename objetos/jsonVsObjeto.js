// Javascript Object Notation (JSON) vs Objeto
//  - JSON é usado para formato de dados.
//  - JSON é o formato mais usado para interoperabilidade
//    entre sistemas.
// Formato textual genérico (JSON).
// JSON comunica informações entre sistemas de diferentes 
// tecnologias.
// Trabalhar com webservices:
// - JSON:
//      - Mais simples e direto.
//      - Configurações de sistema.
// - XML:
//      - SOAP -> formato de Webservices antigo.

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))
// Resposta: {"a":1,"b":2,"c":3}

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
// O objeto entre aspas simples e os atributos JSON entre 
// aspas duplas.
// Resposta: {a: 1,b: 2,c: 3}

console.log(JSON.parse('{"a": 1.7, "b": "string", "c": ' +
    'true, "d": {}, "e": []}'))

// Os atributos JSON devem estar entre aspas duplas.
// JSON suporta vários formatos diferentes: decimal, string,
// booleano, objetos, arrays.
// Resposta: { a: 1.7, b: 'string', c: true, d: {}, e: [] }

// console.log(JSON.parse('{"a": 1.7, "b": \'string\', "c":' + 
//     'true, "d": {}, "e": []}')) -> Vai dar erro no  
//      \'string\' por não aceitar a representação de 
//      strings entre \' .. \'.

// JSON Validator.
// https://jsonlint.com

// {
// 	"nome": "Ana",
// 	"idade": 56,
// 	"legal": true,
// 	"filhos": [{
// 			"nome": "Júnior",
// 			"idade": 18
// 		},
// 		{
// 			"legal": true
// 		}
// 	]
// }

// JSON faz compartilhamento de dados entre sistemas e 
// dentro do sistema. Banco de dados que fazem interações 
// com JSON como o MongoDB que trabalha fortemente com este 
// formato.


