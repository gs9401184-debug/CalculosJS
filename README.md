📌 SOBRE ESTE PROJETO  

Este projeto foi desenvolvido como parte de uma atividade de Back-end com o objetivo de criar uma aplicação para a empresa Cálculos SA, uma escola especializada em treinamentos corporativos.

A aplicação consiste em uma calculadora em Node.js, executada via terminal, capaz de realizar as principais operações matemáticas básicas com validações completas de entrada de dados.

🎯 OBJETIVO DA ATIVIDADE

Desenvolver um sistema capaz de:

Receber dois números informados pelo usuário

Permitir a escolha da operação matemática desejada

Realizar o cálculo corretamente

Exibir o resultado com duas casas decimais

Garantir validações para evitar erros e entradas inválidas

➕ OPERAÇÕES DISPONÍVEIS

A calculadora realiza as seguintes operações:

Soma

Subtração

Multiplicação

Divisão

🛡️ VALIDAÇÕES IMPLEMENTADAS 

O sistema foi desenvolvido com tratamento de erros para garantir maior robustez:

✅ Bloqueia entradas vazias

✅ Permite apenas valores numéricos

✅ Converte automaticamente vírgula para ponto (ex: 1,5 → 1.5)

✅ Impede múltiplos separadores decimais inválidos como:

66.6.6

66,6,6

66.3,2

66,3.6

✅ Impede divisão por zero

✅ Aceita números decimais sem travar o sistema

✅ Limita o resultado final a duas casas decimais

🧩 ESTRUTURA DO PROJETO

O projeto foi desenvolvido de forma modularizada, tornando o código mais organizado e profissional:

index.js → Responsável pela interação com o usuário

Modulo/tratamentos.js → Responsável pela validação e tratamento dos dados

Modulo/calculos.js → Responsável pela execução das operações matemáticas

Essa separação segue boas práticas de desenvolvimento, facilitando manutenção e escalabilidade.

🖥️ TECNOLOGIAS UTILIZADAS 

Node.js

Módulo readline para entrada de dados via terminal

🚀 COMO EXECUTAR

Instale o Node.js na sua máquina

Clone o repositório

Execute no terminal:

node .\app.js

📚 CONCLUSÃO

Este projeto reforça conceitos importantes de:

Entrada e saída de dados no Node.js

Modularização de código

Validação e tratamento de erros

Manipulação de números decimais

Boas práticas de organização de projeto

A atividade demonstra a importância de criar sistemas seguros, organizados e preparados para lidar com diferentes tipos de entrada do usuário.



