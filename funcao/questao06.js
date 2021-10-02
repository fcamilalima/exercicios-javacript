/*
 * Aula 112 - Lista de exercícios: Fundamentos,
 * Estruturas de controle e Funções
 *
 * 06) Elabore duas funções que recebem três parãmetros:
 * capital inicial. taxa de juros e tempo de aplicação.
 * A primeira função retornará o montante da aplicação
 * financeira sob o regime de juros simples e a segunda
 * retornará o valor da aplicação sob o regime de juros
 * compostos.
 *
 */

function jurosSimples(capitalInicial, taxaDeJuros,
    tempoDeAplicacao) {
    return console.log(`${(capitalInicial + capitalInicial *
        taxaDeJuros * tempoDeAplicacao).toFixed(2).toString().
        replace('.', ',')}`)
}

function jurosCompostos(capitalInicial, taxaDeJuros,
    tempoDeAplicacao) {
    return console.log(`${(capitalInicial *
        ((1 + taxaDeJuros) ** tempoDeAplicacao)).toFixed(2).
        toString().replace('.', ',')}`)
}

function jurosCompostosMoedaCorrente(capitalInicial,
    taxaDeJuros, tempoDeAplicacao) {
    return console.log(`R$ ${((capitalInicial *
        ((1 + taxaDeJuros) ** tempoDeAplicacao)).toFixed(2).
        toString().replace('.', ',').
        replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'))}`)
}

jurosSimples(1200, 0.02, 14)
jurosCompostos(620, 0.015, 24)
jurosCompostosMoedaCorrente(1000, 0.04, 14)