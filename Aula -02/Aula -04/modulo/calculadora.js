/*******************************************************************************************************************
*objetivo:arquivo  de funções para calculos matematicos
data:03/02
autor:Evellyn
versão:1.0
*/


//Função que realiza cálculos matematicos
function calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()
    
    if(operacao == 'SOMAR')
    resultado = valor1 + valor2
else if (operacao == 'SUBTRAIR')
    resultado = valor1 - valor2
else if (operacao == 'MUTIPLICAR')
    resultado = valor1 * valor2
else if (operacao == 'DIVIDIR'){
    resultado = valor1 /valor2
    if(valor2 == 0)
    console.log('ERRO: Não é possivel realizar a divisão por 0.')

    else
    resultado = Number(valor1) / Number(valor2)

}

    else{
        console.log('ERRO: A sua escolha matematica foi inválida.')
        entradaDados.close()
    }


if(resultado == undefined){
    return false
}else{
    return resultado
}

   
}

// Permite adicionar um function no espaço global (public)
// As functions que não estiverem aqui no exports, serão tratadas apenas como espaço local  (private)
module.exports ={
    calculadora
}