/*************************************************************** 
 * Objetivo: Exercicio Back-end - Atividade 2
 * Data: 13/02/2026
 * Autor: Gabriel Sousa        
 * Versão: 1.0
****************************************************************/

function somar(numero1,numero2){
    let dados1 = Number(numero1)
    let dados2 = Number(numero2)

    let conta = dados1 + dados2
    return conta
}
function subrair(){

}
function multiplicar(){

}
function dividir(){
    
}
function escolha(numero1,numero2,escolha){
    let resultado
    
    if(escolha == 'SOMAR'){
       resultado = somar(numero1,numero2)
       return resultado
    }else if(escolha == 'SUBTRAIR'){

    }
}

module.exports={
    escolha
    
}