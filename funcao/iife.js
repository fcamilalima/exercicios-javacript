/*
 * Aula 108 - IIFE - Função Auto-invocada.
 *
 * IIFE => Immediately Invoked Function Expression.
 * Função declarada mesmo sem nome, anônima.
 * O intuito é fugir da manipulação do escopo global.
 * Tudo criado na função auto-invocada será escopo local.
 * Muitos trechos do código acessam as variáveis em
 * escopo global facilmente.
 * No caso do node, não é tão crítico a questão do escopo 
 * global pois a estrutura do NODE.js é modularizada.
 */

(function () {
    console.log('Será executada na hora!')
    console.log('Foge do escopo mais abrangente!')
})()