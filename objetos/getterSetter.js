const sequencia = {
    _valor: 1, // É uma convenção de iniciar nome de variável 
    // com underline e considerá-la de acesso privado.
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
    // Não existe sobrecarga de métodos em Javascript.
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)