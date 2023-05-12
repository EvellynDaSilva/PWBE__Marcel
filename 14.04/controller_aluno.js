/*************************************************************************************************************
 * Objetvivo: Responsável pela regra de negócio de referente ao CRUD de alunos
 * Data: 24/04/2023
 * Autor: Evellyn
 * Versão: 1.0
 *************************************************************************************************************/

//import do arquivo de confijuração  das variavei
var message = require('./modulo/config.js')

//Import o arquivo DAO para acessar dados do aluno no banco de dados
var alunoDAO = require('../14.04/alunoDAO.js')

//Inserir um novo aluno
const novoAluno = function (dadosAluno) {
    //Validação para tratr campos obrigatorios e quantidade de caracteres

    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 200 ||

    ){
        return message.ERROR_REQUTRED_FIELDS // Status code 400
    } else {
        //Envia os dados para a model inserir no banco de dados
        let resultDadosAlunos = alunoDAO.insertAluno(dadosAluno)
        //Valida se o BD inseriu corretamente os dados
        if (resultDadosAlunos)
            return message.SUCCESS_CREATED_ITEM //Status code 201
        else
            return message.ERROR_INTERNAL_SERVER //Status code 500

    }
}

//Atualizar um aluno existente
const atualizarAluno = function (dadosAluno) {

}

//Deletar um aluno existente
const deletarAluno = function (id) {

}

//Retorna a lista de todos os alunos
const getAlunos = async function () {

    let dadosAlunoJSON = {}



    //Chama a funçaõ do arquivo DAO que irá retornar todos os regristros do banco de dados
    let dadosAluno = await alunoDAO.selectAllAlunos()

    if (dadosAluno) {
        //Criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunoJSON.quantidade = dadosAluno.length
        dadosAlunoJSON.alunos = dadosAluno
        return dadosAlunoJSON
    } else
        return false
}

//Retorna o aluno filtrando pelo id
const getBuscarAlunoID = async function (id) {


}

module.exports = {
    getAlunos
}