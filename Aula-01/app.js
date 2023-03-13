//Comentario em linha
/*
Comentario
em bloco
*/

//Permite exibir no terminal uma mensagem
console.log('Testando o Node.js')


//Import da biblioteca que permite entrada de dados via teclado
var readline = require('readline')

//Criamos um objeto ou variável que vai ser especialista na entrada
//de dados via tecledo
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//CallBack -  Uma finção de CallBack permite que na própria linha de programação
//seja um variavel, um processamento, a chamda de um método possa acontecer
//um retorno de dados automaticamente, sem precisar sair deste processamento.

//Cria uma interação com o usuário, para entrda de dados.
//Ápos o usuário digitar o conteúdo, o objeto entradaDados permite
//retornar o conteúdo digitado para ser utilizado. Isso acontece através
//de uma função de CallBack.
entradaDados.question('Favor digitar o seu nome: \n', function(nome){
    console.log('Bem vindo,' + nome + ' ao servidor Node.JS!')
})


