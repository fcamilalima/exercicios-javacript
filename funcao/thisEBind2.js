/* 
 * Aula 93 - "this" e a Função Bind - Parte 2
*/

function Pessoa() {
    this.idade = 0
    const self = this

    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
    // A função será executada novamente a cada 1000ms.
}

new Pessoa // Criando um objeto.