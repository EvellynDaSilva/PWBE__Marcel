/********************************************************************************************************
 * Objetivo:Projeto para realizar calculos matematicos
 * Data: 03/02/2023
 * Autor: Evellyn
 * Versão:1.0 
 **********************************************************************************************************/

var matematica = require('./modulo/calculadora')

 //Import de biblioteca de entrada de dados
 var readline = require ('readline')

 //Cria um objeto para manipular as entradas de dados
 var entradaDados = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 })

 //Valor1
 entradaDados.question('valor: \n', function (numero1) {

    let valor1 = numero1.replace(',', '.')
     
    //Alguns exemplos de metodos importantes de classe string
    //replace, substring, length, upercase, lowercase, trim


        //Valor2
        entradaDados.question('valor2: \n', function (numero2) {

            // replace -> metodo da classe string que localiza um caracter e substitui por outro
            let valor2 = numero2.replace(',', '.')
    
                //Tipo de operação matematica
                entradaDados.question('Escolha uma operação matematica: \n', function (tipoCalculo) {
                    let operacao = tipoCalculo.toUpperCase()

                    let resultado

                    //Validação de entrada de dados vazia
                    if (valor1 == '' || valor2 == ''|| operacao == ''){
                     console.log('ERRO: Não é possível calcular se algum dado estiver em branco.')
                    
                    //typeof() -> Identifica o tipo de dados de conteúdo de um elemento
                    //O isNaN -> Idemtifica o tipo de conteúdo independente do tipo dos dados
                
                    //*let x = 10
                    //*console.log(typeof(x))

                    }else if (isNaN(valor1) || isNaN(valor2)){
                        console.log('ERRO: Não é possível calcular se os dados digitados não forem números.')
                    }else{

                        //toUpperCase - converte um string em MAIUSCULO
                        //toLowerCase - converte uma string em minuscula
                     resultado = matematica.calculadora(valor1, valor2, operacao)
                     if (resultado != false)
                        console.log(resultado)
                        else
                        entradaDados.close()
                    }


            })
        })
    })
