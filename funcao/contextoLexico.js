/*
 * Aula 103 - Contexto Léxico
*/
const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() // Resposta será Global e não Local 
// como tendemos a raciocinar. A função se atenta
// ao contexto léxico onde foi definida e NÃO onde 
// está sendo invocada. Isso está associado ao conceito 
// de closure.
