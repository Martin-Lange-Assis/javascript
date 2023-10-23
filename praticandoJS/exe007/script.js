/*
Descrição:
Você é um apaixonado por animais, especialmente por cachorros, e deseja desenvolver uma calculadora de idade canina. O objetivo desta ferramenta é permitir que os usuários insiram a idade de seus cachorros em anos humanos e, em seguida, calcular a idade equivalente em anos de cachorro. Isso proporcionará aos donos de cães uma maneira prática de entender melhor o envelhecimento de seus companheiros peludos e aprofundar sua conexão com os animais de estimação. A calculadora de idade de cachorro deve ser simples e acessível, fornecendo informações úteis sobre o ciclo de vida dos cães.

Fluxo de Funcionamento:
1. O programa permite que o usuário insira a idade de seu cachorro em anos caninos (idade real do cachorro).
2. A idade inserida pelo usuário é usada como entrada para um cálculo que determina a idade equivalente em anos humanos, para melhor compreensão.
3. A idade canina e a idade humana calculada são exibidas ao usuário para fornecer informações sobre a idade de seu cachorro em termos humanos.

Autor: Martin Lange de Assis
Data: 16/10/2023
*/

// Aguarda até que o conteúdo da página esteja completamente carregado
document.addEventListener("DOMContentLoaded", function () {
    // Adiciona um ouvinte de eventos ao botão de cálculo
    document.getElementById("calcular").addEventListener("click", calcular);

    // Variável para armazenar a idade humana calculada
    var idadeHumana;

    // Função que é chamada quando o botão de cálculo é clicado
    function calcular() {
        // Obtém o valor da idade canina inserida pelo usuário
        var idadeCanina = parseFloat(document.getElementById("inputIdadeCao").value);

        // Verifica se a idade canina é válida (não é NaN e é maior ou igual a 1)
        if (isNaN(idadeCanina) || idadeCanina < 1) {
            window.alert("Por favor, digite um valor válido");
        } else {
            // Calcula a idade humana com base na idade canina fornecida
            idadeHumana = (Math.log(idadeCanina) * 16) + 31;
            // Exibe a idade do cão em anos humanos arredondada e limpa o campo de entrada
            document.getElementById("resultado").innerHTML = `A idade do seu cão é de aproximadamente ${idadeHumana.toFixed(0)} anos`;
            document.getElementById("inputIdadeCao").value = "";
        }
    }
});
