const escola = "cod3r"

console.log(escola.charAt(4)) // Resposta é R.
console.log(escola.charAt(5)) // Não existe a posição 5.
console.log(escola.charCodeAt(3)) //Número relacionado ao 
// código da posição 3 na tabela ASCII.
// Resposta: 51.

console.log(escola.indexOf('3')) // A posição do literal '3' 
// dentro da constante escola é 3.

console.log(escola.substring(1)) // Imprime o caracter da 
// posição 1 até o final.
// Resposta: od3r

console.log(escola.substring(0, 3)) // Imprime os caracteres 
// da posição 0 até a posição 2 (Não inclui a posição 3).
// Resposta: cod

console.log('Escola '.concat(escola).concat("!"))
// Resposta: Escola cod3r!

console.log('Escola ' + escola + "!") /* 
    * Resposta: Escola cod3r!
*/

console.log(escola.replace(3, 'e')) /* Resposta: coder */
console.log(escola.replace(/\d/, 'e')) /* Resposta: coder 
    * Substitui o primeiro dígito por e.
*/

console.log(escola.replace(/\w/, 'e')) /* Resposta: eod3r 
    * Substitui a primeira letra por e.
*/

console.log(escola.replace(/\w/g, 'e')) /* Resposta: eeeee 
    * Substitui todas as letras e dígitos por e.
    * g de ocorrências globais.
*/

console.log('Ana, Maria, Pedro'.split(',')) /* Pode gerar 
    * um array a partir do delimitador que foi incluído entre 
    * parênteses. 
    * Resposta: [ 'Ana', ' Maria', ' Pedro' ]  */

console.log('Ana, Maria, Pedro'.split(/,/)) /* 
    * A notação /./ é um REGEX (Expressão Regular). 
    * Resposta: [ 'Ana', ' Maria', ' Pedro' ]  */

console.log('Ana, Maria, Pedro'.split(/./)) /*  
    * Resposta: [
  '', '', '', '', '', '', '',
  '', '', '', '', '', '', '',
  '', '', '', ''
]
*/

