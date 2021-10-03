/* 
 * Uma variável definida por VAR dentro de um bloco de código, 
 * que não seja uma função, será visível por todo o bloco.  
 * 
 * Uma variável VAR só tem dois escopos específicos. Quando 
 * se define uma variável pode-se definir dentro de um escopo 
 * de função e dentro de um escopo global (window no browser 
 * e global dentro do Noje.js). 
 * O escopo da variável VAR dentro de uma função será visível SOMENTE 
 * dentro do bloco (escopo) da função.
 * Existe um objeto dentro do BROWSER chamado WINDOW que 
 * é um OBJETO GLOBAL. Uma variável criada dentro do browser 
 * e esteja fora do escopo de uma função, ela é acessível pelo 
 * objeto window. O objeto global no NODE.js é chamado de global 
 * e no browser é chamado de WINDOW. 
 * Node.js existe um sistema de módulos.
 * 
 * */
{
    {
        {
            {
                var sera = 'Será?'
                console.log(sera)
            }
        }
    }
}
console.log(sera) //Resposta: Sera?

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)
