/*

Você é um professor dedicado e está buscando criar uma ferramenta prática para registrar as notas dos alunos em um determinado curso. Sua intenção é facilitar o cálculo da média da turma e fornecer uma avaliação do desempenho geral dos estudantes. Inicialmente, solicite ao usuário que insira as notas individuais dos alunos. Após coletar todas as notas, calcule a média da turma. Agora, surge a possibilidade de oferecer uma análise adicional para determinar se a turma atingiu um padrão de aprovação. Com base em um valor de corte definido, permita que o programa classifique a turma como "Aprovada" se a média for igual ou superior a esse valor, ou "Reprovada" caso contrário. Essa funcionalidade adicional visa simplificar o processo de avaliação e fornecer feedback instantâneo sobre o desempenho da turma, além de manter um registro organizado das notas dos alunos.

*/

document.addEventListener("DOMContentLoaded", function () {
    // Adiciona um evento de escuta no botão com o ID "calcular" que dispara a função "calcular" quando clicado.
    document.getElementById("calcular").addEventListener("click", calcular);

    // Variáveis para armazenar a média e a situação do aluno.
    var media = 0;
    var situacaoAluno;
    var notasInvalidas = false;

    // Função para calcular a média e determinar a situação do aluno.
    function calcular() {
        // Obtém as notas inseridas pelo usuário.
        var notas = document.getElementById("inputNotas").value;

        // Remove espaços em branco extras.
        notas = notas.replace(/\s+/g, '');

        // Divide as notas com base nas vírgulas e converte em um array de números.
        notas = notas.split(',');
        notas = notas.map(function (temp) {
            return parseFloat(temp);
        });

        // Loop através das notas para validar e calcular a média.
        for (let index = 0; index < notas.length; index++) {
            if (isNaN(notas[index])) {
                notasInvalidas = true;
                window.alert("Nenhuma nota registrada. Favor preencher o campo com a(s) notas de 0 a 10");
                break;
            } else if (notas[index] < 0 || notas[index] > 10) {
                notasInvalidas = true;
                window.alert("Não podem haver notas negativas, nem acima de 10. Favor corrigir...");
                document.getElementById("inputNotas").value = "";
                break;
            } else {
                notasInvalidas = false;
                media += notas[index] / notas.length;
            }
        }

        // Se as notas forem válidas, determina a situação do aluno com base na média.
        if (!notasInvalidas) {
            if (media >= 6) {
                situacaoAluno = "aprovado(a)";
            } else {
                situacaoAluno = "repovado(a)";
            }

            // Exibe o resultado da média e a situação do aluno no elemento "resultado".
            document.getElementById("resultado").innerHTML = `A média do aluno foi ${media}.<br>`;
            document.getElementById("resultado").innerHTML += `O(a) aluno(a) está ${situacaoAluno}`;
        }

        // Limpa o campo de entrada das notas após o cálculo.
        document.getElementById("inputNotas").value = "";
    }
});

