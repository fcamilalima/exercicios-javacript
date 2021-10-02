/* Aula 57 - Tratamento de Erro (Try/Catch/Throw) */

function tratarErroELancar(erro) {
    // throw new Error('...') // Resposta: Error: ...
    // throw 10 //Resposta: 10
    // throw true //Resposta: true
    // throw 'mensagem' //Resposta: mensagem

    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }

    //Resposta: { 
    // nome: 'TypeError', 
    // msg: undefined, 
    // date: 2021-07-04T17:50:05.341Z 
    // }

    // Throw significa lançar uma erro.
    // Na linguaggem Javascript, aceita vários tipos de retorno no 
    // throw permitindo flexibilidade que outras linguagens
    // não possuem.
    // Throw lançando tipos inteiros, booleanos, strings, objetos, 
    // etc...
}

function imprimirNomeGritado(obj) {
    try { //O bloco try é inserido num contexto de 
        // potencialidade alta de gerar um erro.
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally { // Bloco executado sempre independente de erro ou não.
        console.log('final')
    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)

