console.log(typeof console) // Resposta: object.

console.log(Math.ceil(6.1)) // Resposta: 7.
// Math.ceil(): arredondamento para cima.

console.log(Math.floor(6.1)) // Resposta: 6.
// Math.floor(): arredondamento para baixo.

const obj1 = {}
obj1.nome = 'Bola' // Gera dinamicamente um atributo do objeto 
// com a notação ponto.

// obj1['nome2'] = 'Bola2' 
// Gera um atributo com colchetes [].
// Pode-se inserir nome de atributo com espaço entre os
// colchetes. Porém, isso não é recomendado.

console.log(obj1.nome)
// console.log(obj1.nome2)

function Obj(nome) {
    this.nome = nome // this dá um alcance público a uma variável. 
    // O atributo tem alcance além do escopo de 
    // função (escopo global).
    this.exec = function () {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
//  Se o objeto fosse 
// instanciado sem os parâmetros dentro dos parênteses, 
// o objeto seria produzido como undefined. 

const obj3 = new Obj()
const obj4 = new Obj('Mesa')

console.log(obj2.nome) // Resposta: Cadeira
console.log(obj3.nome)  // Resposta: undefined
console.log(obj4.nome) // Resposta: Mesa
console.log(obj2.exec()) // Resposta: Exec...
// undefined.
obj3.exec() // Resposta: Exec...





