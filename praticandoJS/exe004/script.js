/*Em um cenário de gerenciamento de um projeto de pesquisa meteorológica, você desempenha um papel fundamental na coleta e análise de dados climáticos. Neste contexto, o objetivo principal é fornecer uma ferramenta prática e eficaz para registrar as condições climáticas diárias. Para isso, você está encarregado de desenvolver um programa intuitivo que permita aos usuários inserir as temperaturas diárias ao longo de uma semana.

Este programa não apenas facilita o registro das informações meteorológicas, mas também oferece funcionalidades essenciais para o processamento desses dados. Ele é capaz de calcular automaticamente a temperatura média semanal, um indicador importante para entender as tendências climáticas. Além disso, o programa identifica a temperatura mais alta e a mais baixa registradas durante a semana, fornecendo uma visão abrangente das variações de temperatura ao longo do período.

Com essa ferramenta em mãos, os pesquisadores podem realizar análises mais aprofundadas dos dados coletados, identificar padrões climáticos e tomar decisões informadas com base nas informações disponíveis. É uma contribuição valiosa para a pesquisa meteorológica e ajuda a entender melhor as condições climáticas locais e regionais. */

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calcular").addEventListener("click", calcular);

    var tempMedia = 0;

    function calcular() {
        var tempDia = document.getElementById("inputTemp").value;

        // Remove todos os espaços em branco da entrada do usuário
        tempDia = tempDia.replace(/\s+/g, '');

        // Divide a string em números usando vírgulas como separadores
        tempDia = tempDia.split(',');

        // Converte os números em valores de ponto flutuante
        tempDia = tempDia.map(function (temp) {
            return parseFloat(temp);
        });

        if (tempDia.length !== 7) {
            window.alert("Você deve inserir exatamente 7 valores para representar os dias da semana.");
            return; // Sai da função se não houver 7 valores
        }

        // Calcula a média, temperatura máxima e temperatura mínima
        for (let index = 0; index < tempDia.length; index++) {
            tempMedia += tempDia[index] / tempDia.length;
        }

        document.getElementById("resultado").innerHTML = `A média da temperatura durante a semana foi de ${tempMedia}°C. A temperatura mais alta registrada foi ${Math.max(...tempDia)}°C. A temperatura mais baixa registrada foi ${Math.min(...tempDia)}°C`;

        // Limpa o campo de entrada
        document.getElementById("inputTemp").value = "";
    }
});

