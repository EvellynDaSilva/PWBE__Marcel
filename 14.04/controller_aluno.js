/*************************************************************************************************************
 * Objetvivo: Responsável pela regra de negócio de referente ao CRUD de alunos
 * Data: 24/04/2023
 * Autor: Evellyn
 * Versão: 1.0
 *************************************************************************************************************/

//Inserir um novo aluno
const novoAluno = function (dadosAluno) {

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
    
    //Import o arquivo DAO para acessar dados do aluno no banco de dados
    let alunoDAO = require('../14.04/alunoDAO.js')

    //Chama a funçaõ do arquivo DAO que irá retornar todos os regristros do banco de dados
    let dadosAluno = await alunoDAO.selectAllAlunos()

    if (dadosAluno) {
        //Criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunoJSON.quantidade = dadosAluno.length
        dadosAlunoJSON.alunos = dadosAluno
        return dadosAlunoJSON
    }else
    return false
}

//Retorna o aluno filtrando pelo id
const getBuscarAlunoID = async function (id) {

    
}

module.exports ={
    getAlunos
}