/*
Imagine que você é um garçom trabalhando em um restaurante e deseja criar uma calculadora de gorjetas para facilitar o cálculo das gorjetas que os clientes devem deixar. Essa calculadora ajudará a garantir que as gorjetas sejam calculadas de forma precisa e eficiente. Aqui está como você pode criar essa calculadora:

Passos:

Solicitar os dados do usuário: Crie uma interface simples onde o usuário pode inserir o valor total da conta do restaurante e a porcentagem de gorjeta desejada. Você pode fazer isso por meio de campos de entrada de texto ou caixas de seleção, por exemplo.OK

Calcular a gorjeta: Após o usuário inserir o valor da conta e a porcentagem de gorjeta desejada, você precisará calcular a quantia da gorjeta. Isso pode ser feito multiplicando o valor total da conta pela porcentagem de gorjeta e dividindo por 100. A fórmula é a seguinte:

Gorjeta = (Valor Total da Conta * Porcentagem de Gorjeta) / 100 OK

Exibir o resultado: Mostre ao usuário o valor da gorjeta calculada. Isso pode ser feito em uma mensagem na tela, em um pop-up ou em qualquer outra forma que você preferir. OK

Finalizar: Depois de calcular e exibir o valor da gorjeta, seu aplicativo estará pronto para uso. O usuário poderá usar sua calculadora de gorjetas para obter um cálculo rápido e preciso das gorjetas a serem deixadas no restaurante.
*/

// Aguarda o carregamento completo do documento antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
    // Adiciona um ouvinte de evento ao botão com o ID "gorjeta" e define a função "calcularGorjeta" como a ação ao clicar
    document.getElementById("gorjeta").addEventListener("click", calcularGorjeta);

    // Variável para armazenar o valor da gorjeta
    var gorjeta;

    // Função para calcular a gorjeta
    function calcularGorjeta() {
        // Obtém o valor total da conta inserido pelo usuário e converte para um número de ponto flutuante
        var valorTotConta = parseFloat(document.getElementById("inputValorTotConta").value);
        
        // Obtém o valor da porcentagem da gorjeta inserido pelo usuário e converte para um número de ponto flutuante
        var porcGorjeta = parseFloat(document.getElementById("inputPorcentagem").value);

        // Calcula a gorjeta com base no valor total da conta e na porcentagem da gorjeta
        gorjeta = (valorTotConta * porcGorjeta) / 100;

        // Verifica se o valor total da conta é inválido ou não foi informado
        if (isNaN(valorTotConta) || valorTotConta <= 0) {
            window.alert("Informe um valor a ser convertido");
        }
        // Verifica se o valor da porcentagem da gorjeta é inválido ou não foi informado
        else if (isNaN(porcGorjeta) || porcGorjeta <= 0) {
            window.alert("Informe a porcentagem que será recebida");
        } else {
            // Exibe o resultado da gorjeta no elemento HTML com o ID "resultado"
            document.getElementById("resultado").innerHTML = `Você recebeu uma gorjeta de R$ ${gorjeta}`;
        }
    }
});
