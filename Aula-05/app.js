/*******************************************************************************
 * Objetivo: Utilizar códigos e métodos de arry
 * Data:24/02/2023
 * Autor:Evellyn
 * Versão:1.0
 ******************************************************************************/

//[ ] - representa um objeto do tipo arry
//{ } -representa um objeto do tipo JSON


const listaNomes = ['José', 'Maria', 'Luiz', 'Ana', 'Carlos', 'Livía']
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Gabinete','HD', ' Mémoria']
const exibindoDados = function () {


    //Verifica o tipo de dados elementos listaNomes
    console.log(typeof (listaNomes))

    //Verifica o tipo de dados dos itens de arry
    console.log(typeof (listaNomes[0]))

    //Exibe o conteúdo de um indice
    console.log(listaNomes[0])

    //Exibe todos os itens do arry
    console.log(listaNomes)

    //table - permite visualizar o conteúdo do arry em formato de tabela
    console.table(listaNomes)

    console.log('O nome do aluno é: ' + listaNomes[0])
    console.log(`O nome do aluno é:  ${listaNomes[1]}`)

    //Length - retorna a quantidade de itens de um arry
    console.log(listaNomes.length)

    //Percorrendo um arry com While
    console.log('Exemplo com o While')
    let cont = 0 // Start
    let qtdeItens = listaNomes.length //Stop

    while (cont < qtdeItens) {
        console.log(`O nome do aluno é: ${listaNomes[cont]}`)
        cont += 1
    }

    //Percorrendo um arry com FOR
    //Ele  você tera que converter pra usar no json
    console.log('Exemplo com o FOR')
    for (let cont = 0; cont < qtdeItens; cont++)
        console.log(`O nome do aluno é: ${listaNomes[cont]}`)


    //percorrendo um arry com FOREACH
    //Ele não existe em json
    console.log('Exemplo de FOREACH')
    listaNomes.forEach(function (nome) {
        console.log(`O nome do aluno é: ${nome}`)

    })
}

const emanipulandoDados = function () {
    //push - Adicionar novos itens no final do Arry
    listaProdutos.push('Mémoria')
    listaProdutos.push('WedCam', 'Gabinete', 'Fone')
    console.table(listaProdutos)

    //unshift - Adiciona novos itens no inicio do Arry, re-organizando todos os elementos
    listaProdutos.unshift('HD', 'Placa mãe', 'SSD')
    console.table(listaProdutos)

    //pop -Remove o último item do Arry, preservando os elementos anteriores
    listaProdutos.pop()
    console.table(listaProdutos)

    //shift - Remove o item do inicio do Arry , re-organizando todos os elementos
    listaProdutos.shift()
    console.table(listaProdutos)

    const novosProdutos = listaProdutos.slice()
    console.log(novosProdutos)

    //indexof - Permite buscar dentro de um arry um item
    //Se o retorno for -1,  o item não foi encontrado
    //Se o retorno for maior ou igual 0 , o item foi encontrado e ele retorna o indice

    console.log(listaProdutos.indexOf('Mouse'))


    //Exemplo de utilização do indeXOF
    if(listaProdutos.indexOf('Teclado')>= 0)
    console.log('Item encontrado')
    else
    console.log('')

}

const removerProduto = function (nomeProduto) {
    let nome = nomeProduto  
    let indice = listaProdutos.indexOf(nome)
    let status

    //splice - Apagar um ou mais itens de um arry através do indice
    //Se for encaminhando somente o indice ele irá apagar todos os itens
    //para baixo
    //Para limitar a quantidade de itens a ser apagado, devemos informar como segundo parametro

    if(indice >= 0 ){
        listaProdutos.splice(indice, 1) // definir a quantidade que quer tirar de item
        status = true
    }else{
        status = false
    }

}

const nomeItem = function () {
    //Entrada
    let nome = nomeItem
    let novoArry = arry.slice()
    let indice = novoArry.indexOf(nome)
    let status

    //Processamento da função
    if (indice >= 0) {
        novoArry.splice(indice,1)
        status = true
    }else{
        status = false
    }
    //Saída
    if (status) {
        return novoArry
    }else
        return false 
        
    }
    // manipulandoDados();
console.table(listaProdutos)
console.log(removerProduto('Mouse'))
console.table(listaProdutos)


const listagemProdutos = function(){
//     //Forma 1 de criar um JSON e já atribuir chaves e valores
//     // listProdutosJSON = {produtos : listaProdutos, clientes : listaNomes}

//     //Forma 2 de criar un JSON, onde as chaves  e valores são atribuidas no decorer do projeto

//     let listProdutosJSON = {}

//     listProdutosJSON.produtos = listaProdutos
//     listProdutosJSON.clientes = listaNomes
//     console.log(listProdutosJSON)
//     console.log(listProdutosJSON.produtos[1])
//     console.log(listProdutosJSON.clientes[1])

// // manipulandoDados();
// console.table(listaProdutos)
// console.log(removerProduto('Mouse'))
// console.table(listaProdutos)


    let listProdutosJSON = {}
    let listProdutosArray = [
                            {nome : 'Monitor', quantidade : 300, marca : 'DELL, valor : 1000', descricao : 'Monitor DELL ....', codigo : 1446},
                            {nome : 'Monitor', quantidade : 301, marca : 'LG, valor : 1000', descricao : 'Monitor DELL ....', codigo : 146},
                            {nome : 'Teclado', quantidade : 302, marca : 'DELL, valor : 1000', descricao : 'Monitor DELL ....', codigo : 144},
                            {nome : 'Teclado', quantidade : 303, marca : 'LG, valor : 1000', descricao : 'Monitor DELL ....', codigo : 14},
                            {nome : 'Teclado', quantidade : 304, marca : 'DELL, valor : 1000', descricao : 'Monitor DELL ....', codigo : 144},
                            {nome : 'Mouse', quantidade : 305, marca : 'LG, valor : 1000', descricao : 'Monitor DELL ....', codigo : 46},
                            {nome : 'Mouse', quantidade : 306, marca : 'DELL, valor : 1000', descricao : 'Monitor DELL ....', codigo : 16},
                            {nome : 'Mouse', quantidade : 307, marca : 'LG, valor : 1000', descricao : 'Monitor DELL ....', codigo : 46},
    ]//Arry para Cores
let listCoresDellArray = ['Preto', 'Branco', 'Cinza']
let listCoresLgArray = ['Preto', 'Cinza']
let listCoresTecladoArray = ['Preto', 'Branco', 'Cinza', 'Rosa', 'Azul']
let listCoresMouseArray = ['Preto', 'Branco', 'Cinza', 'Rosa', 'Azul', 'Verde', 'Amarelo', ' Roxo', 'Vermelho']

//Arrys para modelos
let listModelosMonitor = ['LCD', 'LED', 'OLED', '4K', 'IPS']
let ListModelosTeclado = ['Mecânico', 'Semi-Mecânico', 'Menbrana', 'Óptipo']


// adiciona o array de produtos dentro de um JSON
listProdutosJSON.produtos = listProdutosArray

//Aicidionar cores ao monitor DELL
listProdutosJSON.produtos[0].cores = listCoresDellArray

//Adicionar cores ao monitor LG
listProdutosJSON.produtos[1].cores = listCoresLgArray

//Adicionar cores ao teclado LG, Logitech e RAZER
listProdutosJSON.produtos[3].cores = listCoresTecladoArray
listProdutosJSON.produtos[2].cores = listCoresTecladoArray
listProdutosJSON.produtos[4].cores = listCoresTecladoArray

//Adicionar cores ao mouse  DELL e RAZER
listProdutosJSON.produtos[3].cores = listCoresMouseArray
listProdutosJSON.produtos[7].cores = listCoresMouseArray
listProdutosJSON.produtos[6].cores = listCoresMouseArray

//Adicionar modelos aos Monitores
listProdutosJSON.produtos[0].modelos = listModelosMonitor
listProdutosJSON.produtos[1].modelos = listModelosMonitor


//Adicionar modelos aos Teclados
listProdutosJSON.produtos[0].modelos = ListModelosTeclado
listProdutosJSON.produtos[1].modelos = ListModelosTeclado
listProdutosJSON.produtos[2].modelos = ListModelosTeclado

console.log(listProdutosJSON)

//Percorre o arry de produtos para listar os itens
listProdutosJSON.produtos.forEach(function(itemProduto){
    console.log('Nome: ' + itemProduto.nome)
    console.log('Marca: ' + itemProduto.marca)

    //Tratamento de erro para quando não existir array de cores
    if(itemProduto.cores != undefined){
        
        //Percorre o arry  de cores que esta dentro do arry de produtos(item)
        itemProduto.cores.forEach(function (itemCor) {
            console.log('****   Cores:' + itemCor)
        })
    }

     //Tratamento de erro para quando não existir array de modelos
    if(itemProduto.modelos != undefined){

        //Percorre o arry de modelos que esta dentro do arry de produtos
        itemProduto.modelos.forEach(function (itemModelo) {
            console.log('**** Modelos:' + itemModelo)
        })
    }
})


// for(let contProdutos = 0; contProdutos<listProdutosJSON.produtos.length;contProdutos++){
//         console.log('Nome:' + listProdutosJSON.produtos[contProdutos].nome)
//         console.log('Marca:' + listProdutosJSON.produtos[contProdutos].marca
        
//         for(let contCores = 0; contCores < listProdutosJSON.produtos[contProdutos].cores.length;contCores){

//         }



}   



//Relatorio
// console.log('Nome :' + listProdutosJSON.produtos[1].nome)
// console.log('Marca :' + listProdutosJSON.produtos[1].marca)
// console.log('Valor :' + listProdutosJSON.produtos[1].valor)
// console.log('Cor:' + listProdutosJSON.produtos[1].cores[1])
// console.log('Modelos :' + listProdutosJSON.produtos[1].modelos[1])

// console.log(listProdutosJSON.produtos[1].nome)
// console.log(listProdutosJSON.produtos[1].marca)

// console.log(listProdutosJSON.produtos)





// }

listagemProdutos()
// // listProdutosJSON.produtos[0].cores = listCoresDellArray

// console.log(listProdutosJSON.produtos[0])





