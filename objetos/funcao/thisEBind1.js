/* 
 * Aula 92 - "this" e a Função Bind 
*/

const pessoa = {
    saudacao: 'Bom dia!',
    falar() { // O ES2015 introduziu o conceito de adicionar 
        // funções dentro de um objeto. Objetos não são 
        // somente pares chave-valores como também podem ter 
        // funções.
        console.log(this.saudacao)
        // neste exemplo, "this" representa o objeto pessoa.
        // O "this" se faz importante para exibir 
        // a saudação. Chamando somente a saudacao (sem o this), 
        // irá ocorrer um erro em execução. 

    }
}

pessoa.falar() // Resposta: Bom dia!

const falar = pessoa.falar
falar() // Resposta: undefined
// Conflito entre paradigmas funcional e 
// Orientação a Objetos. this
// perde a referencia do objeto pessoa. Isso é 
// corrigido com a função bind() recebendo o 
// objeto pessoa.

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // Resposta: Bom dia!


