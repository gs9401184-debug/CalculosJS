/*************************************************************** 
 * Objetivo: Exercicio Back-end - Atividade 2
 * Data: 13/02/2026
 * Autor: Gabriel Sousa        
 * Versão: 1.0
****************************************************************/

//Função para tratar de todos os erros de dados
function tratarDados(numero1,numero2,operacao){
    let dados1 = Number(numero1)
    let dados2 = Number(numero2)
    let dados3 = operacao

    //Verifica se os campos estão preenchidos corretamente
    if(numero1 == '' || numero2 == '' || isNaN(numero1) || isNaN(numero2)){
        console.log('ERRO: valores digitados estão inválidos!')
        return false

    }else if(dados3 != 'SOMAR' && dados3 != 'SUBTRAIR'  && dados3 != 'MULTIPLICAR' && dados3  != 'DIVIDIR' ){
        console.log('ERRO: Escolha inválida. Digite umas das opções acima!')
        return false
    }else{
        return true
    }

}
module.exports ={
    tratarDados
}