/*
 * Aula 112 - Lista de exercícios: Fundamentos,
 * Estruturas de controle e Funções
 * 
 * 02) Os triângulos podem ser classificados em 3 tipos 
 * quanto ao tamanho de seus lados: Equilátero: Os três lados 
 * são iguais. Isósceles: Dois laddos iguais. Escaleno: Todos 
 * os lados são diferentes. Crie uma função que recebe os 
 * comprimentos dos três lados de um triângulo e retorne 
 * sua classificação quanto ao tamanho de seus lados. 
 * (Neste exemplo deve-se abstrair as condições matemáticas 
 * de existência de um triângulo). 
 * 
 */

const triangulo = (a, b, c) => {
    if (a == b || b == c || a == c) {
        if (a == b && a == c && b == c) {
            console.log('Esse triângulo é equilátero.')
        } else {
            console.log('Esse triângulo é isósceles.')
        }
    } else {
        console.log('Esse triângulo é escaleno.')
    }
}

triangulo(3, 3, 3)
triangulo(4, 4, 5)
triangulo(2, 3, 7)

/*

Resposta do exercício


function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'
    }else {
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));


*/