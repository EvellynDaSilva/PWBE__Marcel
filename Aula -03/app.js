/*********************************************************************
 * Objetivo: Calculadora
 * Autor : Evellyn
 * Data: 30/01/2023
 * Versão: 1.0
 ***************************************************/

var readline = require('readline')

var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout

})
entradaDados.question('Qual operacao deseja efetuar (+) (-) (*) (/)? : \n')
entradaDados.question('Insira o primeiro numero: \n', function (numero1) {
    let valor1 = numero1
entradaDados.question('Insira o segundo numero: \n', function (numero2) {
    let valor2 = numero2


    if (operaçao =='numero' || 'numero') {
        var numero1 = parseInt(prompt('Digite o primeiro número'))
        var numero2 = parseInt(prompt('Digite o segundo número'))
        var somar = numero1 + numero2
        console.log('Somar')
    } else if 
      (operaçao == 'numero' || 'numero') {
        var numero1 = parseInt(prompt('Digite o primeiro número'))
        var numero2 = parseInt(prompt('Digite o segundo número'))
        var diminuir = numero1 - numero2
        console.log('Diminuir')
    } else if
       (operaçao == 'numero' || 'numero') {
        var numero1 = parseInt(prompt('Digite o primeiro número'))
        var numero2 = parseInt(prompt('Digite o segundo número'))
        var mutiplicar =  numero1 * numero2
        console.log('Mutiplicar')
    } else if 
        (operaçao == 'numero' || 'numero') {
        var numero1 = parseInt(prompt('Digite o primeiro número'))
        var numero2 = parseInt(prompt('Digite o segundo número'))
        var dividir = numero1 / numero2
        console.log('Dividir')
    } else {
      console.log('Não foi possível calcular')
    }
   
        })
    })