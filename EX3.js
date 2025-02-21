
function contagemProgressiva(numero) {
    let resultado = '';
    for (let i = 1; i <= numero; i++) {
        resultado += `${i}<br>`;
    }
    resultado += "Fim da contagem!";
    document.getElementById("resultado").innerHTML = resultado;
}

function iniciarContagem() {
    let numero = parseInt(document.getElementById("idade").value);
    if (!isNaN(numero) && numero >= 0) {
        contagemProgressiva(numero);
    } else {
        document.getElementById("resultado").innerHTML = "Número inválido! Informe um número positivo.";
    }
}
