/*
Imagine que você é um garçom trabalhando em um restaurante e deseja criar uma calculadora de gorjetas para facilitar o cálculo das gorjetas que os clientes devem deixar. Essa calculadora ajudará a garantir que as gorjetas sejam calculadas de forma precisa e eficiente. Aqui está como você pode criar essa calculadora:

Passos:

Solicitar os dados do usuário: Crie uma interface simples onde o usuário pode inserir o valor total da conta do restaurante e a porcentagem de gorjeta desejada. Você pode fazer isso por meio de campos de entrada de texto ou caixas de seleção, por exemplo.OK

Calcular a gorjeta: Após o usuário inserir o valor da conta e a porcentagem de gorjeta desejada, você precisará calcular a quantia da gorjeta. Isso pode ser feito multiplicando o valor total da conta pela porcentagem de gorjeta e dividindo por 100. A fórmula é a seguinte:

Gorjeta = (Valor Total da Conta * Porcentagem de Gorjeta) / 100 OK

Exibir o resultado: Mostre ao usuário o valor da gorjeta calculada. Isso pode ser feito em uma mensagem na tela, em um pop-up ou em qualquer outra forma que você preferir. OK

Finalizar: Depois de calcular e exibir o valor da gorjeta, seu aplicativo estará pronto para uso. O usuário poderá usar sua calculadora de gorjetas para obter um cálculo rápido e preciso das gorjetas a serem deixadas no restaurante.
*/
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("gorjeta").addEventListener("click", calcularGorjeta);

    var gorjeta;

    function calcularGorjeta() {
        var valorTotConta = parseFloat(document.getElementById("inputValorTotConta").value);
        var porcGorjeta = parseFloat(document.getElementById("inputPorcentagem").value);
        gorjeta = (valorTotConta * porcGorjeta) / 100;
        if (isNaN(valorTotConta) || valorTotConta <= 0) {
            window.alert("Informe um valor a ser convertido");
        } else if (isNaN(porcGorjeta) || porcGorjeta <= 0) {
            window.alert("Informe a porcentagem que será recebida");
        } else {
            document.getElementById("resultado").innerHTML = `Você recebeu uma gorjeta de R$ ${gorjeta}`;
        }


    }

})
