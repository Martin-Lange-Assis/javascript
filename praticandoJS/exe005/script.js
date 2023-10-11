/*Na pele de um empreendedor online que busca proporcionar experiências de compra atraentes e vantajosas, você pretende desenvolver uma calculadora de desconto. Essa ferramenta será destinada aos seus valiosos clientes, permitindo que eles insiram o valor original de um produto desejado, bem como a porcentagem de desconto disponível. Ao pressionar o botão de cálculo, o sistema revelará o novo preço com desconto, garantindo que seus clientes tenham total visibilidade das economias potenciais. Essa iniciativa visa não apenas aumentar a satisfação do cliente, mas também aprimorar a transparência e a eficácia das ofertas em sua loja online.*/

// Aguarda o carregamento completo do documento antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
    // Adiciona um ouvinte de evento ao botão com o ID "calcular" e define a função "calcular" como a ação ao clicar
    document.getElementById("calcular").addEventListener("click", calcular);

    // Variável para armazenar o valor final com desconto
    var valorFinal;

    // Função para calcular o valor final com desconto
    function calcular() {
        // Obtém o valor original do produto inserido pelo usuário e converte para um número de ponto flutuante
        var valorOriginal = parseFloat(document.getElementById("inputValorOriginal").value);

        // Obtém a porcentagem de desconto inserida pelo usuário e converte para um número de ponto flutuante
        var porcDesconto = parseFloat(document.getElementById("inputDesconto").value);

        // Verifica se o valor original é válido (maior que zero)
        if (isNaN(valorOriginal) || valorOriginal <= 0) {
            window.alert("Digite um valor válido");
        }
        // Verifica se a porcentagem de desconto está no intervalo de 0 a 100
        else if (isNaN(porcDesconto) || porcDesconto < 0 || porcDesconto > 100) {
            window.alert("Digite uma porcentagem entre 0 e 100");
        } else {
            // Calcula o valor final com desconto
            valorFinal = valorOriginal - (valorOriginal * porcDesconto) / 100;

            // Exibe o valor final com desconto no elemento de resultado
            document.getElementById("resultado").innerText = `Valor Final: R$ ${valorFinal}`;
        }

        // Limpa os campos de entrada para que o usuário possa inserir novos valores
        document.getElementById("inputValorOriginal").value = "";
        document.getElementById("inputDesconto").value = "";
    }
});