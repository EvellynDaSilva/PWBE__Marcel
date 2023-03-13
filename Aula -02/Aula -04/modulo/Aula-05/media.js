/*************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade
 * Data:17/02/2023
 * Autor:Evellyn
 * Versão:1.0
 ****************************************************************/

const calcularMedia = function (nota1, nota2, nota3, nota4) {
    let valor1 = Number(nota1)
    let valor2 = Number(nota2)
    let valor3 = Number(nota3)
    let valor4 = Number(nota4)
    let media


    media = (valor1 + valor2 + valor3 + valor4) / 4
    return media.toFixed(2)

}


// {
//     media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4))/4;

//     if(media > '60'){
//     console.log('Aprovado(a)')
//         }else if (media < '50'){
//     console.log('Reprovado(a)')
// }
//     console.log('Média do aluno: ' +  media.toFixed(1));
// }

module.exports={
    calcularMedia
}