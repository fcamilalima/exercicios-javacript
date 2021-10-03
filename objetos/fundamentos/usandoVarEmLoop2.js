const funcs = [] //Inicialização de uma constante com um Array vazio

for (var i = 0; i < 10; i++) {
    funcs.push(function () { // função anonima
        console.log(i)
    })
}

funcs[2]() // Resposta: 10
funcs[8]() // Resposta: 10 - Erro. A resposta é 10 para todas 
// os índices pois é o último valor assumido pela variável definida
// por VAR chamada de i. Em caso de var definida por LET mudará as respostas.