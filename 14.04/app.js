//Import das bibliotecas para a API
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { request, response } = require('express');
const controller_aluno = require('./controller_aluno');

//Cria o objeto app conforme a classe do express
const app = express();

//Permissões do cors
app.use((request, response, next) => {
    //Define quem poderá acessar a API (* - Todos)
    response.header('Acess-Control-Allow-Origin', '*');
    //Define quais métodos serão utilizados na API
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Atribui as permissões ao cors
    app.use(cors());

    next();
});

//CRUD: Create, Read, Update e Delete.

/*********************************************************************
 * Objetivo: API de controle de alunos
 * Autor : Evellyn
 * Data: 24/04/2023
 * Versão: 1.0
 ***************************************************/

 //Define que os dados que irão chegar no body da requisição será no padrão JSON
const bodyParserJSON = bodyParser.json();

//EndPoint:Retorna todos os dados de alunos
app.get('/v1/lion-shool/aluno', cors(), async function (resquest, reponse) {
    //Import do arquivo da controller que irá solicitar a model os dados do banco de dados
    let controllerAluno = require ('./controller_aluno')

    //Recebe os dados da controller do aluno
    let dadosAluno = await controllerAluno.getAlunos()

    //Valida se existe registros de aluno
    if(dadosAluno){
        reponse.json(dadosAluno)
        reponse.status(200)
    }else{
        response.json()
        response.status(404)
    }
})

//EndPoint: Retorna os aluno filtrando pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

});

//EndPoint: Atualiza um aluno existente, filtrando pelo id
app.post('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

});

//EndPoint: Exclui um aluno existente, filtrando pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

});

app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080')
})
