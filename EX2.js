function verificarMensagem() {
    let name = document.getElementById("nameInput").value;
    let day = document.getElementById("dayInput").value.trim();

    let dayNumber = verificandoDia(day);

    let message = mensagemDia(dayNumber, name);
    document.getElementById("result").innerText = message;
}

// Função para converter o nome do dia em um número
function verificandoDia(day) {
    let dayNumber;
    if (day == "Domingo") {
        dayNumber = 1;
    } else if (day == "Segunda") {
        dayNumber = 2;
    } else if (day == "Terça") {
        dayNumber = 3;
    } else if (day == "Quarta") {
        dayNumber = 4;
    } else if (day == "Quinta") {
        dayNumber = 5;
    } else if (day == "Sexta") {
        dayNumber = 6;
    } else {
        dayNumber = 7;
    }
    return dayNumber;
}

function mensagemDia(day, name) {
    let message = "";
    if (day == 1) {
        message = "Essa semana será incrível!";
    } else if (day == 2) {
        message = "O que é mais uma semana?";
    } else if (day == 3) {
        message = "BORAAA!";
    } else if (day == 4) {
        message = `Vamos, ${name}!`;
    } else if (day == 5) {
        message = `Você consegue, ${name}!`;
    } else if (day == 6) {
        message = "Está quase no fim!";
    } else {
        message = "Finalmente fim!";
    }
    return message;
}
