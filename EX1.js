// Função para verificar a idade
function verificaridade() {
    let age = parseInt(document.getElementById("idade").value);

    // Verificando se foi digitada corretamente
    if (isNaN(age)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira uma idade válida.";
        return;
    }

    let resultado = "";

    if (age < 0) {
        resultado = "Não existe essa idade.";
    } else if (age < 18) {
        resultado = "Você é menor de idade.";
    } else if (age < 60) {
        resultado = "Você é um adulto.";
    } else {
        resultado = "Você é um idoso.";
    }
    document.getElementById("resultado").innerHTML = resultado;
}
