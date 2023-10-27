/*Descrição:

Imagine que você é um engenheiro de automóveis e deseja criar uma calculadora que auxilie os consumidores a calcular a economia de combustível ao considerar a troca de veículo. A calculadora permite ao usuário inserir o consumo médio de combustível em litros por quilômetro de dois veículos diferentes. Em seguida, realiza cálculos para determinar a economia de combustível em litros e o valor econômico economizado.

Fluxo de Funcionamento:

1. O programa solicita que o usuário insira o consumo médio de combustível em litros por quilômetro do primeiro veículo.
2. O programa solicita que o usuário insira o consumo médio de combustível em litros por quilômetro do segundo veículo.
3. Com base nas informações fornecidas, a calculadora realiza cálculos para determinar a economia de combustível nos seguintes aspectos:
    - Litros economizados: A diferença entre o consumo de combustível dos dois veículos em litros.
    - Economia em dinheiro: Calcula o valor em dinheiro economizado com base no preço médio do litro de combustível.

4. O programa exibe a quantidade de litros economizados ao escolher o segundo veículo em vez do primeiro.
5. Além disso, exibe o valor econômico equivalente economizado ao fazer essa escolha.
6. A ferramenta fornece aos consumidores uma análise clara da economia potencial ao trocar de veículo, ajudando-os a tomar decisões informadas.

*/

// Aguarda o evento "DOMContentLoaded" para garantir que o DOM foi carregado antes de executar o código.
document.addEventListener("DOMContentLoaded", function () {
    // Adiciona um ouvinte de evento de clique ao botão com ID "calcular" que dispara a função "calcular".
    document.getElementById("calcular").addEventListener("click", calcular);

    // Variáveis para armazenar os litros economizados e o dinheiro economizado.
    var litrosEconomizados;
    var dinheiroEconomizado;
    var valorComb = 5.82; // Valor médio do combustível.

    // Função "calcular" é chamada quando o botão é clicado.
    function calcular() {
        // Obtém os valores do campo de entrada para o consumo dos carros e converte para números de ponto flutuante.
        var consumoCarro1 = parseFloat(document.getElementById("inputCombCarro1").value);
        var consumoCarro2 = parseFloat(document.getElementById("inputCombCarro2").value);

        // Verifica se os valores inseridos são numéricos e não negativos.
        if (isNaN(consumoCarro1) || isNaN(consumoCarro2)) {
            window.alert("Por favor, insira valores numéricos válidos para o consumo de combustível em ambos os carros.");
            document.getElementById("inputCombCarro1").value = "";
            document.getElementById("inputCombCarro2").value = "";
        } else if (consumoCarro1 < 0 || consumoCarro2 < 0) {
            window.alert("O consumo de combustível não pode ser negativo. Por favor, insira valores válidos.");
            document.getElementById("inputCombCarro1").value = "";
            document.getElementById("inputCombCarro2").value = "";
        } else {
            // Calcula os litros economizados e fornece feedback sobre qual carro é mais econômico.
            litrosEconomizados = consumoCarro1 - consumoCarro2;
            if (litrosEconomizados > 0) {
                document.getElementById("resultado").innerHTML = "Carro 2 é mais econômico.";
            } else if (litrosEconomizados < 0) {
                document.getElementById("resultado").innerHTML = "Carro 1 é mais econômico.";
            } else {
                document.getElementById("resultado").innerHTML = "Os dois carros bebem iguais.";
            }

            // Calcula o dinheiro economizado usando o valor médio do combustível e exibe o resultado.
            dinheiroEconomizado = Math.abs((consumoCarro1 * valorComb) - (consumoCarro2 * valorComb));
            document.getElementById("resultado").innerHTML += `Você economizará R$ ${dinheiroEconomizado.toFixed(2)}`;

            // Limpa os campos de entrada.
            document.getElementById("inputCombCarro1").value = "";
            document.getElementById("inputCombCarro2").value = "";
        }
    }
});