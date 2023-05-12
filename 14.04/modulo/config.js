/********************************************************************************************************************
 *  Objetivo:Arquivo responsivel por padronizar as menssagem de ERRO, SUCESSO, funcões, variaveis para o projeto
 * Data:28/04/2023
 * Autor:Evellyn S.
 * Versão:1.0
 */

 /********************MENSAGENS DE ERRO ************************************************************ */
 const ERROR_REQUTRED_FIELDS = {status:400, message: 'Campo obrigatorios não foram preenchidos.'}
 const ERROR_INTERNAL_SERVER = {status:500, message: 'Devido a um erro interno no servidor, não foi possivel processar a reposição.'}


/******************MENSAGENS DE SUCESSO************************************************************************/
const SUCCESS_CREATED_ITEM = {status:201, message: 'Item criado com sucesso'}

module.exports ={
    ERROR_REQUTRED_FIELDS,
    SUCCESS_CREATED_ITEM,
    ERROR_INTERNAL_SERVER
}