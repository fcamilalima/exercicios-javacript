console.log(7 / 0)       //Infinity
console.log("10.2" / 2)  //5.1
console.log("10,2" / 2)  //NaN - Not a Number
console.log("Show!" * 2) //NaN - Not a Number 
//Não multiplica a string Show! por 2.
console.log(0.1 + 0.7)   //0.7999999999999999
//Imprecisão
//Especificação de ponto flutuante
//Imprecisão de numeração de ponto flutuante segundo o IEEE
//Algumas especificações não são tão precisas para evitarem 
//lentidão no processamento com a entrada de dados de 
//ponto flutuante
//console.log(10.toString()) // Dá um erro de invalid or 
//unexpected token
console.log((10.345).toFixed(2)) // Resposta é 10.35
//Colocar o literal - o número 10.345, no caso - colocado entre
//parênteses
console.log('3' + 2) /* A reposta será 32 e não a soma 
de 3 + 2, pois o operador + indica concatenação 
e não adição.  */
