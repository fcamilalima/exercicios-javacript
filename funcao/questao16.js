function calculadora(a, operacao, b) {
    switch (operacao) {
        case '+':
            return console.log(a + b)
        case '-':
            return console.log(a - b)
        case '*':
            return console.log(a * b)
        case '/':
            return console.log(a / b)
        default:
            return console.log('Operação inválida!')
    }
}

calculadora(2, '+', 3)
calculadora(4, '-', 3)
calculadora(5, '*', 2)
calculadora(5, '/', 2)
calculadora(8, '%', 2)