/*************************************************************** 
 * Objetivo: Arquivo resposável pelas funções de calcular (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
 * Data: 13/02/2026
 * Autor: Gabriel Sousa        
 * Versão: 1.0
****************************************************************/

// Função para SOMAR 
function somar(numero1,numero2){
    let dados1 = Number(numero1)
    let dados2 = Number(numero2)

    let conta = dados1 + dados2
    return conta
}
// Função para SUBTRAIR
function subrair(numero1, numero2){
    let dados1 = Number(numero1)
    let dados2 = Number(numero2)

    let conta = dados1 - dados2
    return conta
}
// Função para MULTIPLICAR
function multiplicar(numero1, numero2){
    let dados1 = Number(numero1)
    let dados2 = Number(numero2)

    let conta = dados1 * dados2
    return conta
}
// Função para DIVIDIR
function dividir(numero1, numero2){
    let dados1 = Number(numero1)
    let dados2 = Number(numero2)

   if(dados2 == 0 ){
        console.log('ERRO: Não é possivel realizar uma divisão por 0')
        return false
   }else{
        let conta = dados1 / dados2
        return conta
   }
    
}
// Função que recebe dois números e uma string indicando a operação.
// Dependendo do valor de "escolha", ela chama a função correspondente
// (somar, subtrair, multiplicar ou dividir) e retorna o resultado.
// Caso a operação informada não seja válida, retorna false.
function escolha(numero1,numero2,escolha){
    let resultado
    
    if( escolha == 'somar'){
       resultado = somar(numero1,numero2)
       return resultado
    }else if(escolha == 'subtrair'){
        resultado = subrair(numero1,numero2)
        return resultado
    }else if(escolha == 'multiplicar'){
        resultado = multiplicar(numero1,numero2)
        return resultado
    }else if(escolha == 'dividir'){
        resultado = dividir(numero1,numero2)
        return resultado
    }else{
        return false
    }
    
}

module.exports={
    escolha
    
}