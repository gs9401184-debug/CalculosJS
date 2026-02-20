/*************************************************************** 
 * Objetivo: Arquivo resposável pelas funções de calcular (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
 * Data: 13/02/2026
 * Autor: Gabriel Sousa        
 * Versão: 1.0
****************************************************************/

// Importe da biblioteca
const { copyFileSync } = require('fs')
const readline = require('readline')

// Cria objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('----------------- Cálculos SA -----------------')

//Solicitação dos dados e a conversão de vírgula por ponto (caso o usuário digite 10,5 por exemplo)
entradaDeDados.question('Digite o Primeiro número: ', function(valor1){
    let primeiroNumero = parseFloat(valor1.replace(',','.'))

    
    entradaDeDados.question('Digite o Segundo número: ', function(valor2){
        let segundoNumero = parseFloat(valor2.replace(',','.'))

        entradaDeDados.question('Escolha a operação desejada:\n-SOMAR\n-SUBTRAIR\n-MULTIPLICAR\n-DIVIDIR\n Digite aqui: ', function(operacao){
            let escolha = operacao.toLowerCase()


            // Importa o módulo responsável pelos tratamentos
            let tratamentos = require('./Modulo/tratamentos')
            // Executa a validação dos dados informados
            let validar = tratamentos.tratarDados(primeiroNumero,segundoNumero,escolha)
            
            // Importa o módulo de cálculos
            let calculo = require('./Modulo/calculos')
            // Realiza o cálculo conforme a escolha do usuário
            let validar2 = calculo.escolha(primeiroNumero,segundoNumero,escolha)

            //Mostra o resultado e define o resultado para até duas casas decimais
            console.log('O resultado é: ' + validar2.toFixed(2))
            console.log('---------------------------------------------')

        })
    })
})