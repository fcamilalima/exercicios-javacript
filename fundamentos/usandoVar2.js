/* Uma variável var existe somente dentro de escopo de função. 
 * Não existe escopo de bloco {} com variáveis var. */
var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero) //Resposta: 2
}
console.log('fora = ', numero) //Resposta: 2