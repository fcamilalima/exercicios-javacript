/* Aula 73 - Parâmetro Padrão. */
// Estratégia 1 para gerar valor-padrão.
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
// Resposta: 3 5 6 3
// soma1(0, 0, 0) em vez de retornar o somatório 0, 
// os valores de a, b e c serão 1, 1 e 1, que correspondem ao 
// valor verdadeiro (0 é um valor falso).

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão no ES2015.
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))