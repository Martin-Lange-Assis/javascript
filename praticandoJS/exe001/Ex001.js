/*Você está em uma viagem internacional emocionante e deseja criar uma aplicação de conversão de moedas para ajudá-lo a acompanhar seus gastos em moeda estrangeira. Nesse contexto, imagine que você está visitando um país estrangeiro e precisa converter seus dólares americanos em moeda local.

Entrada de Dados: Peça ao usuário para inserir o valor em dólares que deseja converter e a taxa de câmbio atual da moeda local em relação ao dólar. Por exemplo, o usuário pode inserir $100 como valor em dólares e uma taxa de câmbio de 5,0 para a moeda local.OK

Cálculo da Conversão: Utilizando os dados inseridos pelo usuário, calcule o valor equivalente na moeda estrangeira. Neste exemplo, o cálculo seria: $100 (valor em dólares) * 5,0 (taxa de câmbio) = 500 unidades da moeda local. OK

Exibição do Resultado: Apresente ao usuário o valor equivalente na moeda estrangeira. No caso acima, você exibiria "Você terá 500 unidades da moeda local após a conversão." OK

Flexibilidade de Moedas: Considere permitir que o usuário escolha a moeda de destino a partir de uma lista de moedas disponíveis, para tornar a aplicação mais versátil. OK

Atualização da Taxa de Câmbio: Pode ser interessante permitir que o usuário atualize a taxa de câmbio caso ela varie durante a viagem. OK
*/

// Aguarda o carregamento completo do documento
document.addEventListener("DOMContentLoaded", function () {

    // Adiciona um ouvinte de evento ao botão "Calcular"
    document.getElementById("calcular").addEventListener("click", converter);

    var valorConversão; // Variável para armazenar o valor convertido
    var respostaAlterarTaxa = document.getElementById("resposta"); // Elemento de resposta do checkbox
    var taxasDeCambio = {
        "Real": 5.08,
        "Euro": 0.95,
        "Iene": 150,
        "Libra Esterlina": 0.83,
        "Dólar Australiano": 1.59
    }; // Taxas de câmbio por moeda

    var simbolosDeMoeda = {
        "Real": "R$",
        "Euro": "€",
        "Iene": "¥",
        "Libra Esterlina": "£",
        "Dólar Australiano": "AU$"
    }; // Símbolos de moeda por moeda

    // Função para buscar a taxa de câmbio com base na moeda selecionada
    function buscarTaxaDeCambio(moeda) {
        return taxasDeCambio[moeda] || 1; // Retorna a taxa de câmbio ou 1 se não estiver definida
    }

    // Função para converter o valor em dólares para a moeda selecionada
    function converter() {
        var dolares = parseFloat(document.getElementById("inputDolares").value); // Valor em dólares inserido pelo usuário
        var moeda = document.getElementById("selectMoeda").value; // Moeda selecionada pelo usuário
        var txCambio = buscarTaxaDeCambio(moeda); // Busca a taxa de câmbio com base na moeda selecionada
        valorConversão = dolares * txCambio; // Calcula o valor convertido

        // Verifica se o valor em dólares é inválido ou não foi informado
        if (isNaN(dolares) || dolares <= 0) {
            window.alert("Informe um valor a ser convertido");
        } else {
            // Verifica se o checkbox "Alterar a taxa cambial" está marcado
            if (respostaAlterarTaxa.checked) {
                txCambio = parseFloat(document.getElementById("novaTaxa").value); // Obtém a nova taxa de câmbio do input
                valorConversão = dolares * txCambio; // Recalcula o valor convertido com a nova taxa de câmbio
            }

            // Exibe o resultado da conversão com o símbolo da moeda
            document.getElementById("resultado").innerHTML = `Você terá ${simbolosDeMoeda[moeda]} ${valorConversão} após a conversão`;
        }
    }
});
