/*************************************************************************************************************
 * Objetvivo: Responsável pela manipulação de dados dos ALUNOS no Banco de Dados
 * Data: 24/04/2023
 * Autor: Evellyn
 * Versão: 1.0
 *************************************************************************************************************/

 //Import da biblioteca do prisma client
 var { PrismaClient } = require('@prisma/client')

 //Instancia da classe PrismaClient
 var prisma = new PrismaClient()

 //Inerir dados do aluno no Banco de Dados
 const insertAluno = async function(dadosAluno){

    //scriptSQL para inserir dados
    let sql =`insert into tbl_aluno (
                        nome,
                        rg,
                        cpf,
                        data_nascimento,
                        email
                        )values(
                        '${dadosAluno.nome}',
                        '${dadosAluno.rg}',
                        '${dadosAluno.cpf}',
                        '${dadosAluno.data_nascimento}',
                        '${dadosAluno.email}'
                        )`;

        //Executa o scriptSQL no banco de dados
    let resultStatus = await prisma.$queryRawUnsafe(sql)

    if(resultStatus)
        return true;
    else
        return false
};

//Atualizar dados do aluno no Banco de Dados
const updateAluno = function(){

};

//Deletar dados do aluno no Banco de Dados
const deleteAluno = function(){

};

//Retornar todos os alunos no Banco de Dados
const selectAllAlunos = async function(){
    

    //ScriptSQL para buscar todos os itens no banco de dados
    let sql = 'select * from tbl_aluno'

    //$querRawUnsafe(sql) - Permite interpretar uma variavel como sendo um scriptSQL
    //$querRaw('slect * from tbl_aluno') -Permite interpretar o scriptSQL direto no metodo
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o banco de dados retornou algum registro
    if(rsAluno.length > 0)
        return rsAluno
    else
        return false

    };

//Retornar o aluno filtrando pelo ID
const selectByIdAlunos = function(){

};

module.exports ={
    selectAllAlunos,
    insertAluno
}

