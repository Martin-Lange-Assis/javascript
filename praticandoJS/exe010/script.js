/*
Você trabalha em um banco e deseja criar uma calculadora que permita aos clientes calcular os juros compostos de seus investimentos. Para isso, você solicita ao usuário que insira três informações cruciais:

1. O principal (valor inicial) do investimento: Este é o montante inicial que o cliente está disposto a investir.

2. A taxa de juros anual: Esta é a taxa de juros aplicada ao investimento a cada ano. Representa o quanto o investimento crescerá anualmente.

3. O período de investimento em anos: Isso representa o tempo durante o qual o investimento será mantido.

O objetivo é calcular e exibir o montante final, ou seja, o valor total do investimento após o período de tempo especificado. A calculadora fornecerá aos clientes uma estimativa clara de quanto dinheiro eles podem esperar ter em seus investimentos com base nas informações fornecidas.

Além disso, a calculadora de taxa de juros pode ser uma ferramenta valiosa para auxiliar os clientes no planejamento de suas finanças e na tomada de decisões informadas sobre investimentos. No entanto, lembre-se de que a calculadora se concentra apenas na taxa de juros e não leva em consideração outros fatores financeiros, como depósitos adicionais, impostos ou flutuações de mercado.

Autor: Martin Lange de Assis
Data: 19/10/2023
*/

/**
 * Função que é executada quando o DOM está pronto.
 * Adiciona um ouvinte de evento de clique ao botão "calcular".
 * Esse ouvinte chama a função "calcular" quando o botão é clicado.
 */
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calcular").addEventListener("click", calcular);

    var montanteFinal;

    /**
     * Função que calcula o montante final do investimento com base nas entradas do usuário.
     * Verifica se os campos estão preenchidos e se os valores são válidos.
     * Exibe alertas apropriados em caso de entradas inválidas ou ausentes.
     */
    function calcular() {
        var valorInicial = parseFloat(document.getElementById("inputCapitalInicial").value);
        var txJuros = parseFloat(document.getElementById("inputJuros").value);
        var periodo = parseFloat(document.getElementById("inputPeriodo").value);

        if (isNaN(valorInicial) || isNaN(txJuros) || isNaN(periodo)) {
            window.alert("Por favor, preencha todos os campos")
            document.getElementById("inputCapitalInicial").value = "";
            document.getElementById("inputJuros").value = "";
            document.getElementById("inputPeriodo").value = "";
        } else if (valorInicial < 0 || txJuros < 0 || periodo < 0) {
            window.alert("Não são aceitos valores negativos em nenhum dos campos.");
            document.getElementById("inputCapitalInicial").value = "";
            document.getElementById("inputJuros").value = "";
            document.getElementById("inputPeriodo").value = "";
        } else {
            montanteFinal = valorInicial * Math.pow(1 + txJuros, periodo);
            document.getElementById("resultado").innerHTML = `O montante final será de R$ ${montanteFinal.toFixed(2)}`;
            document.getElementById("inputCapitalInicial").value = "";
            document.getElementById("inputJuros").value = "";
            document.getElementById("inputPeriodo").value = "";
        }
    }
});
