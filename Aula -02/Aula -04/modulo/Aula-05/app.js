/***************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade
 * Data: 10/02/2023
 * Autor: Evellyn
 * Versão: 1.0
 **************************************************************/

var readline = require('readline')
var calculadora = require ('./media.js')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDados.question('Nome do(a) aluno(a): \n', function (nome) {
    let nomeAluno = nome;

    entradaDados.question('Sexo do(a) aluno(a): \n 1 - masculino\n 2 - feminino \n', function (sexo) {
        
        let sexoDoAluno = sexo

        entradaDados.question('Nome do(a) professor(a): \n', function (nome) {
            let nomeProfessor = nome

            entradaDados.question('Sexo do(a) professor(a): \n  1 - masculino\n 2 - feminino \n', function (sexo) {
                let sexoDoProfessor = sexo

                entradaDados.question('Nome do curso: \n', function (curso) {
                    let nomeDoCurso = curso

                    entradaDados.question('Nome da disciplina: \n', function (disciplina) {
                        let nomeDaDisciplina = disciplina



                        entradaDados.question('Digite a nota1: \n', function (nota1) {
                            let valor1 = nota1;
                            console.log('Sua nota' + nota1)


                            entradaDados.question('Digite a nota2: \n', function (nota2) {
                                let valor2 = nota2;
                                console.log('Sua nota' + nota2)


                                entradaDados.question('Digite a nota3: \n', function (nota3) {
                                    let valor3 = nota3;
                                    console.log('Sua nota' + nota3)


                                    entradaDados.question('Digite a nota4: \n', function (nota4) {
                                        let valor4 = nota4;
                                        let media;

                                        if (valor1 == '' || valor2 == '' || valor3 == '' || valor4 == '') {
                                            console.log('ERRO:Você deixou de entrar com algum valor')

                                        } else if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) {
                                            console.log('ERRO: Você não digitou um número válido.')

                                        } else if (valor1 < 0 || valor1 > 100 || valor2 < 0 || valor2 > 100 | valor3 < 0 || valor3 > 100 || valor4 < 0 || valor4 > 100) {
                                            console.log('ERRO: Os valores informados precisam ser entre 0 e 100')
                                        }else if (nomeAluno == '' || nomeProfessor == '' || sexoDoProfessor == '' || sexoDoAluno == '' || nomeDoCurso == '' || nomeDaDisciplina == ''){
                                            console.log('ERRO:Você deixou de entrar com alguma informação.')
                                        // }else if(isNaN(valor1) || ) {
                                        


                                        }else{
                                            let media2 = calculadora.calcularMedia(nota1, nota2, nota3, nota4)
                                            console.log('A media é ' + media2)

                                        }

                                           

                                        
                                            let sexAluno
                                            let sexProfessor

                                            if(sexoDoAluno == 1 || sexoDoProfessor == 1){
                                                sexAluno = ' O Aluno'
                                                sexProfessor = 'Porfessor:'
                                            }else if(sexoDoAluno == 2 || sexoDoProfessor == 2){
                                                sexAluno = 'A Aluna'
                                                sexProfessor = 'professora:'
                                            }else if(sexoDoAluno == 1 || sexoDoProfessor == 2){
                                                sexAluno = 'O Aluno'
                                                sexProfessor = 'professora:'
                                            }else if(sexoDoAluno == 2 || sexoDoProfessor == 1){
                                                sexAluno = 'A Aluna'
                                                sexProfessor = 'professor:'
                                            }

                                            // console.log(`${sexAluno} ${nomeAluno} foi  `)


                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})