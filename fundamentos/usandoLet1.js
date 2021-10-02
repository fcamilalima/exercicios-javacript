/* Variáveis definidas com a palavra reservada VAR tem 
 * escopo de função e escopo global. 
 * Variáveis definidas com a palavra reservada LET tem 
 * escopo de função, de bloco e globbal.
*/
var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero) //Resposta: 2
}
console.log('fora = ', numero) //Resposta: 1