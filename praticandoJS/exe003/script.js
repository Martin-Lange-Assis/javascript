/*Entrada de Dados:

Peça ao usuário que insira seu peso em quilogramas e sua altura em metros. Esses dois valores são fundamentais para calcular o IMC. OK

Cálculo do IMC:

Utilizando os dados inseridos pelo usuário, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula padrão: IMC = Peso (kg) / (Altura (m) * Altura (m)). O IMC é uma medida que relaciona o peso de uma pessoa com sua altura e é amplamente utilizado para avaliar o estado nutricional e o risco de saúde. OK

Interpretação do Resultado:

Com base no valor calculado do IMC, forneça uma interpretação clara e relevante para o usuário. Você pode categorizar o IMC em diferentes faixas, como "Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau I", "Obesidade grau II", etc. Cada categoria pode ser acompanhada de uma breve descrição que explique o que significa em termos de saúde e bem-estar. OK

Feedback e Orientação:

Além de fornecer o resultado do IMC, você pode oferecer orientações e dicas personalizadas com base na categoria em que o usuário se encontra. Por exemplo, se o IMC indicar "Sobrepeso", você pode sugerir estratégias de alimentação saudável e atividade física. Se o IMC indicar "Abaixo do peso", você pode orientar sobre como alcançar um peso saudável com segurança. OK

Flexibilidade de Unidades:

Considere permitir que o usuário escolha as unidades de medida que deseja utilizar, como quilogramas/metros ou libras/pés, para atender a diferentes preferências de uso.OK

Esses elementos essenciais proporcionarão aos seus clientes uma ferramenta útil para avaliar sua saúde e bem-estar com base no IMC, além de receber orientações relevantes para a manutenção de um estilo de vida saudável.*/

// Aguarda o carregamento completo do documento antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
    // Adiciona um ouvinte de evento ao botão com o ID "btnImc" e define a função "calcularIMC" como a ação ao clicar
    document.getElementById("btnImc").addEventListener("click", calcularIMC);

    // Variáveis para armazenar o resultado do IMC e descrição
    var imc;
    var descricao;

    // Função para converter unidades de medida (kg/m para lb/ft e vice-versa)
    function converterUnidades(imc, unidadeInicial, unidadeFinal) {
        if (unidadeInicial === "kg/m" && unidadeFinal === "lb/ft") {
            return imc * 0.67197;
        } else if (unidadeInicial === "lb/ft" && unidadeFinal === "kg/m") {
            return imc / 0.67197;
        } else {
            return imc; // Se as unidades forem iguais, não é necessário conversão.
        }
    }

    // Função para calcular o IMC
    function calcularIMC() {
        //declara variável da classificação
        var classificacao;
        // Obtém o valor do peso inserido pelo usuário e converte para um número de ponto flutuante
        var peso = parseFloat(document.getElementById("inputPeso").value);

        // Obtém o valor da altura inserida pelo usuário e converte para um número de ponto flutuante
        var altura = parseFloat(document.getElementById("inputAltura").value);

        // Obtém a unidade de medida selecionada pelo usuário
        var unidadesMedida = document.getElementById("selectUniMed").value;

        // Verifica se o valor do peso é inválido ou não foi informado
        if (isNaN(peso) || peso <= 0) {
            window.alert("Informe seu peso");
        }
        // Verifica se o valor da altura é inválido ou não foi informado
        else if (isNaN(altura) || altura <= 0) {
            window.alert("Informe sua altura");
        } else {
            // Verifica se a unidade de medida selecionada é "lb/ft"
            if (unidadesMedida === "lb/ft") {
                // Converte peso e altura para unidades de medida padrão (kg/m)
                peso = converterUnidades(peso, "lb/ft", "kg/m");
                altura = converterUnidades(altura, "lb/ft", "kg/m");
            }

            // Calcula o IMC usando a fórmula IMC = peso / (altura * altura)
            imc = peso / (altura ** 2);

            // Com base no valor do IMC calculado, determina a classificação e a descrição correspondentes
            if (imc <= 18.5) {
                classificacao = "Magreza";
                descricao = "O IMC indica que você está abaixo do peso adequado para sua altura. Consulte um profissional de saúde para avaliar sua saúde geral. Foque em uma dieta balanceada com calorias suficientes para atender às suas necessidades diárias. Considere um programa de treinamento de força para construir massa muscular.";
            } else if (imc > 18.5 && imc <= 24.9) {
                classificacao = "Normal";
                descricao = "Seu IMC está dentro da faixa de peso saudável para sua altura. Continue com uma dieta equilibrada e mantenha um estilo de vida ativo. Realize exames de saúde regulares para garantir que você mantenha seu peso saudável.";
            } else if (imc >= 25 && imc <= 29.9) {
                classificacao = "Sobrepeso";
                descricao = "Seu IMC indica que você está acima do peso adequado para sua altura. Consulte um nutricionista para criar um plano de alimentação saudável e equilibrado. Pratique atividades físicas regularmente, como caminhadas, natação ou corrida.";
            } else if (imc >= 30 && imc <= 34.9) {
                classificacao = "Obesidade grau I";
                descricao = "Seu IMC indica obesidade de grau I, o que aumenta o risco de problemas de saúde. Consulte um profissional de saúde para avaliar os riscos à saúde. Adote uma dieta rica em vegetais, grãos integrais e proteínas magras. Aumente a atividade física gradualmente, com orientação profissional.";
            } else if (imc >= 35 && imc <= 39.9) {
                classificacao = "Obesidade grau II";
                descricao = "Seu IMC indica obesidade de grau II, o que aumenta significativamente o risco de problemas de saúde. Procure a orientação de um médico para gerenciar os riscos à saúde. Considere um programa de perda de peso supervisionado por profissionais. Priorize atividades físicas que possam suportar seu peso corporal, como natação ou ciclismo.";
            } else if (imc >= 40) {
                classificacao = "Obesidade grau III";
                descricao = "Seu IMC indica obesidade de grau III, a forma mais severa de obesidade. Consulte um médico urgentemente para avaliação e plano de tratamento. Procure um especialista em obesidade ou cirurgião bariátrico, se necessário. Faça mudanças substanciais na dieta e na atividade física sob orientação profissional.";
            }

            // Exibe o resultado do IMC, incluindo a classificação e a descrição
            document.getElementById("resultado").innerHTML = `Seu IMC é ${imc.toFixed(2)} ${unidadesMedida}. ${descricao}`;
        }
    }
});
