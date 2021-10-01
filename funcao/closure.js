/*
 * Aula 104 - Closure
 * Closure é o escopo criado quando uma função é
 * declarada. Esse escopo significa a área de 
 * código ao redor da função gerida também.
 * Esse escopo permite a função a manipular variáveis
 * exteriores.
 * Closure significa fechamento.
 * Contexto léxico em ação.
 *
*/

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
    // Em Javascript, uma função também pode ser retornada.
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // Resposta: Local
