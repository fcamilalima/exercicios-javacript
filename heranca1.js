// CApítulo sobre herança em Javascript

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) // Resposta: undefined
console.log(ferrari.__proto__) // Resposta: 
// [Object: null prototype] {}
console.log(ferrari.__proto__ === Object.prototype)
// Resposta: true
console.log(volvo.__proto__ === Object.prototype)
// Resposta: true
console.log(Object.prototype.__proto__)
// Resposta: null

function MeuObjeto() { }
console.log(typeof Object, typeof MeuObjeto)
// Resposta: function function
console.log(Object.prototype, MeuObjeto.prototype)
// [Object: null prototype] {} {}