/*
 * Aula 105 - Funções Factory - Parte 01
 * Função Factory ou Funções Fábricas (na realidade,
 * Funções Factories são um padrão de projetos usadas
 * não somente com a linguagem Javascript).
 *
 * Função Factory são funções que retornam um objeto, 
 * uma nova instância de objeto.
*/

// Factory simples
// Cria uma nova instância de pessoa. 
// Gera um objeto mesmo sem o operador new.
// Abaixo, os valores do novo objeto são fixos e não 
// passados por parãmetros.
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
// Resposta: { nome: 'Detergente', preco: 2.1, desconto: 0.1 }