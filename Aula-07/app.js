/*********************************************************************
 * Objetivo: Criar uma API oara disponibilizar dadis de Estados e Cidades
 * Autor : Evellyn
 * Data: 10/03/2023
 * Versão: 1.0
 ***************************************************/
/**
 * Express -  dependencia para realizar requisições de API pelo protocolo HTTP
 *          Instalação = npm install express --save
 * Cors- dependencia para gerenciar permissões de requisição da API
 *          Instalação = npm install cors --save
 * Body-Parser - depedencia que gerencia corpo das requisições
 *          Instalação = npm install body-parser --save
 * 
 * 
 * 
 */

 //Import das dependencias do ptojeto

 //Dependencia pra criar as requisisções da API
 const express = require('express')
  //Dependencia pra gerenciar as premissões da API
 const cors = require('cors')
  //Dependencia pra gerenciar o corpo das requisisções da API
 const bodyParser = require('body-parser')

 const estadosCidades = require('./modulo/modulo.js')

 //Criar um objeto com as caracteristica do express
 const app = express()

 app.use((request, response, next) =>{
     //API publica - fica disponivel para utilização de quaquer aplicação
     //API privada - somente o IP informado poderá consumir dados da API
     //Define se a API será publica ou privada
     response.header('Access-Control-Allow-Origin', '*')

     //PERMITE DEFINIR QUAIS METODOS PODERÃO SER UTILIZADOS NAS REQUISIÇÕES DA API
     response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
 
    //Envia para o cors() as regras de permissões
    app.use(cors())

    next()
})

//EndPoints
//async  -  estabelece um statusde aguarde,assim que eu processor te devolvo os dados.
//Obs: se não usar o async a requisição é perdida , pois o front acha a API
//esta fora do ar

//EndPoints para listar todos os estados
app.get('/estados', cors(), async function (request, response, next) {
    
    
    //Chama a função que vai todos os estados
    let estados = estadosCidades.getListaDeEstados()

    //Tratamento para validar o sucesso da requisição
    if (estados)
    {
        response.status(200)
        response.json(estados)
    }
    else
    {
        response.status(500)
    }
    
})

//

//EndPoint : Lista os adados do estados filtrando pela sigla do estado
app.get('/estado/:uf', cors(), async function(request, response, next){
    let statusCode
    let dadosEstado = {}

    //Recebe a sigla do estado que será enviada pela URL de requisição
    let siglaEstado = request.params.uf;
    
    //Tratamento
    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length !=2 || !isNaN(siglaEstado))
    {
        statusCode = 400
        dadosEstado.message = 'Não foi possivel processar pois os dados de entrada (uf) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa ser caracteres e ter 2 digitos.'
    }else{
        //Chama a função para retornar os dados do estado
        let estado = estadosCidades.getDadosEstado(siglaEstado)
        
        if(estado){
            statusCode = 200
            dadosEstado = estado
            
        }else{
            statusCode = 404
            

        }
    }
    //Retorna o codigo e o JSON
    response.status(statusCode)
    response.json(dadosEstado)
})


//Roda o serviço da API para ficar aguardando requisições
app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080')
})