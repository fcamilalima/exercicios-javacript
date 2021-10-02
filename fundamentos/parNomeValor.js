const saudacao = 'Opa' // Contexto léxico 1
// Contexto léxico é a região onde a variável ou o par chave-valor foi 
//fisicamento definida.
function exec() {
    const saudacao = 'Falaaa' // Contexto léxico 2
}

// Objetos são grupos aninhados de pares nome-valor.
const clientes = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao) // Resposta: Opa
console.log(exec())   // Resposta: undefined
console.log(clientes) // Resposta:
                      // {
                      //     nome: 'Pedro',
                      //     idade: 32,
                      //     peso: 90,
                      //     endereco: { 
                      //        logradouro: 'Rua Muito Legal', 
                      //        numero: 123 
                      //     }
                      // }