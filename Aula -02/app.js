/*********************************************************************
 * Objetivo: Calcular a media de 4 notas escolares
 * Autor : Evellyn
 * Data: 27/01/2023
 * Versão: 1.0
 ***************************************************/

 //importe da biblioteca readline
 var readline = require('readline')

  //Cria o objeto para ser especialista em entrada de dados pelo teclado
 var entradaDados = readline.createInterface({
     input : process.stdin,
     output : process.stdout
 })

 /****
  * Criação de Variáveis
    * var -> Cria um espaço em memoria no escopo global para o projeto, ou seja, 
    * essa variável poderá ser utilizada em qualquer do arquivo (várias funções)
    * 
    * let -> Cria um espaço em memoria no escopo local para o projeto, ou seja, 
    * essa variável  somente poderá ser utilizada em dentro da função que foi criada
    * 
    * const -> Cria um espaço em memoria no escopo global para o projeto, ou seja, 
    * essa constante  poderá ser utilizado em qualquer parte do projeto e nunca sofrerá 
    * alteração
    * 
  */


  //Função de CallBack para entrar o nome do aluno
 entradaDados.question('Digite seu nome: \n', function(nome){
     //Receber o valor digitado pelo teclado
    let nomeAluno = nome;
     
  //Função de CallBack para entrar a nota1
    entradaDados.question('Digite a nota1: \n', function (nota1) {
        let valor1 = nota1;
        console.log('Sua nota' + nota1 )

          //Função de CallBack para entrar a nota2
        entradaDados.question('Digite a nota2: \n', function (nota2) {
            let valor2 = nota2;
            console.log('Sua nota' + nota2 )

            //Função de CallBack para entrar a nota3
        entradaDados.question('Digite a nota3: \n', function (nota3) {
            let valor3 = nota3;
            console.log('Sua nota' + nota3 )

            //Função de CallBack para entrar a nota4
        entradaDados.question('Digite a nota4: \n', function (nota4) {
            let valor4 = nota4;
            let media;

            /**
             * conversão de tipos de dados
             *  
             *  parseInt() ou Number.parseInt - Converte uma string em inteiro
             *  parseFloat() ou Number.parseFloat - Converte um string em real
             * 
             * Number() -- converte uma string para número , conforme a entrada
             * do valor o JS define se será inteiro ou real
             * 
             * Operadores de comparação
             * == ( Verifica a igualdade entre conteudos)
             * != ( Verifica a diferença entre conteudos)
             * ===( Verifica a igualdade entre conteudos e tipo de dados)
             * !==(Verifica a diferença entre conteudos e igualdade de tipo de dados)
             * ==!(Verifica a igualdade entre conteudos e diferença de tipo de dados)
             *  Ex:
             *      0 === 0 V
             *      0 === '0' F
             *      '0 === 0 F
             *      0 === 0.0 F
             *      0 == 0 V
             *      0 == '0' V
             *      '0' == 0 V
             * <(menor)
             * >(maior)
             * <=(menor ou igual)
             * >=(maior ou igual)
             * 
             * Operadores Lógicos
             * 
             * E         &&      AND
             * OU        ||      OR
             * NEGAÇÃO    |      NOT
             */
            //Varificação para entrada vazia
            if(valor1 =='' || valor2 == '' || valor3 == '' || valor4 == '')
            {
                    console.log('ERRO:Você deixou de entrar com algum valor')
                //Validação para entrada de txto  (inválida)
                }else if( isNaN (valor1)||  isNaN (valor2) || isNaN (valor3) || isNaN (valor4))
            {
                console.log('ERRO: Você não digitou um número válido.')
                //Validação para entrada de dados somete entre 0 e 10
            }else if(valor1 < 0 || valor1 > 10 || valor2 < 0 || valor2 > 10 || valor3 < 0 || valor3 > 10 || valor4 < 0 || valor4 > 10)
            {
                console.log('ERRO: Os valores informados precisam ser entre 0 e 10')
            }

            else
            {
                media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4))/4;
                   //Validação De media 
                   if(media > '7'){
                console.log('Aprovado(a)')
                    }else if (media < '7'){
                console.log('Reprovado(a)')
            }
                console.log('Média do aluno: ' +  media.toFixed(1));
            }
            

            
            
           
                })
            })
        })
    })
 })