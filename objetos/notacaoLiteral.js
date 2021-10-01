const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // Duplicidade desnecessária.
const obj2 = { a, b, c } // Nova sintaxe mais reduzida 
// introduzida no ES7 (ECMAScript2015).

console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = { [nomeAttr]: valorAttr } // na versão nova
// do ES7, suporta este tipo de nomenclatura.
console.log(obj4) // Se equipara ao exemplo do obj3.

const obj5 = {
    funcao1: function () {
        // ...
    },
    // Forma reduzida, mais curta, inserida no ES7 será 
    // demonstrada abaixo na descrição da funcao2().
    funcao2() {
        // ...
    }
}

console.log(obj5)
