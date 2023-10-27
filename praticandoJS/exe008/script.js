/*
Descrição:
Em um cenário de projeto de engenharia, surge a necessidade de desenvolver uma ferramenta prática para converter unidades de comprimento. Essa ferramenta visa simplificar o processo de conversão de distâncias, permitindo que o usuário insira uma medida em metros e, em seguida, converta essa medida para diversas unidades alternativas de comprimento, como pés, polegadas, quilômetros e muito mais. A conversão de unidades de comprimento é uma tarefa comum em projetos de construção, design e engenharia, tornando essa ferramenta uma adição valiosa para profissionais da área.

Fluxo de Funcionamento:
1. O programa solicita ao usuário que insira a distância em metros que deseja converter.
2. A distância em metros inserida pelo usuário é usada como entrada para os cálculos de conversão.
3. O programa realiza os cálculos para converter a distância para outras unidades de comprimento, como pés, polegadas, quilômetros e assim por diante.
4. Após a conversão, as distâncias equivalentes em diferentes unidades são exibidas ao usuário, proporcionando uma compreensão clara de como a medida se traduz em outras unidades de comprimento.
5. A ferramenta de conversão de unidades de comprimento deve ser de uso fácil, tornando-se uma solução conveniente para engenheiros, arquitetos, projetistas e outros profissionais da área.

Autor: Martin Lange de Assis
Data: 17/10/2023
*/

// Aguarde até que o DOM esteja completamente carregado antes de executar o código JavaScript.
document.addEventListener("DOMContentLoaded", function () {
    // Adicione um ouvinte de evento ao botão "calcular" para chamar a função "converter" quando clicado.
    document.getElementById("calcular").addEventListener("click", converter);

    var valorConvertido; // Variável para armazenar o valor convertido.

    // Função "converter" que é chamada quando o botão "calcular" é clicado.
    function converter() {
        // Obtenha o valor em metros do campo de entrada e a unidade de conversão selecionada no menu suspenso.
        var metros = parseFloat(document.getElementById("inputMetros").value);
        var unidadeComp = document.getElementById("selectUnidade").value;

        // Verifique se o valor em metros é um número válido e se é maior ou igual a zero.
        if (isNaN(metros) || metros < 0) {
            window.alert("Digite um valor apropriado para a conversão");
        } else if (unidadeComp === "") {
            window.alert("Selecione uma unidade de conversão");
        } else {
            // Execute a conversão com base na unidade de conversão selecionada.
            switch (unidadeComp) {
                case "km":
                    valorConvertido = metros / 1000;
                    break;
                case "cm":
                    valorConvertido = metros * 100;
                    break;
                case "mm":
                    valorConvertido = metros * 1000;
                    break;
                default:
                    break;
            }
            // Exiba o resultado da conversão na página e redefina o campo de entrada.
            document.getElementById("resultado").innerHTML = `${metros} metro(s) equivale(m) a ${valorConvertido} ${unidadeComp}`;
            document.getElementById("inputMetros").value = "";
        }
    }
})