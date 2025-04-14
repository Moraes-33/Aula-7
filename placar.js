let score1 = 0;
let score2 = 0;

function incrementarPlacar(time) {
    if (time === 1) {
        score1++;
        document.getElementById("score1").textContent = score1;
    } else if (time === 2) {
        score2++;
        document.getElementById("score2").textContent = score2;
    }

    atualizarMensagemGanhando();
}

function zerarPlacar() {
    if (score1 > score2) {
        document.getElementById("resultado").textContent = `O vencedor é ${document.getElementById("nomeTime1").value || "Time 1"}!`;
    } else if (score2 > score1) {
        document.getElementById("resultado").textContent = `O vencedor é ${document.getElementById("nomeTime2").value || "Time 2"}!`;
    } else {
        document.getElementById("resultado").textContent = "Houve um empate!";
    }

    score1 = 0;
    score2 = 0;
    document.getElementById("score1").textContent = score1;
    document.getElementById("score2").textContent = score2;

    document.getElementById("mensagemGanhando").textContent = '';
}

function novoJogo() {
    score1 = 0;
    score2 = 0;
    document.getElementById("score1").textContent = score1;
    document.getElementById("score2").textContent = score2;
    document.getElementById("resultado").textContent = '';
    document.getElementById("mensagemGanhando").textContent = '';

    document.getElementById("nomeTime1").value = '';
    document.getElementById("nomeTime2").value = '';
}

function atualizarNome(time) {
    const nomeTime1 = document.getElementById("nomeTime1").value || "Time 1";
    const nomeTime2 = document.getElementById("nomeTime2").value || "Time 2";
    
    if (time === 1) {
        document.getElementById("time1").children[0].value = nomeTime1;
    } else if (time === 2) {
        document.getElementById("time2").children[0].value = nomeTime2;
    }
}

function atualizarMensagemGanhando() {
    const mensagemElement = document.getElementById("mensagemGanhando");

    if (score1 > score2) {
        mensagemElement.textContent = `${document.getElementById("nomeTime1").value || "Time 1"} está ganhando!`;
    } else if (score2 > score1) {
        mensagemElement.textContent = `${document.getElementById("nomeTime2").value || "Time 2"} está ganhando!`;
    } else {
        mensagemElement.textContent = '';
    }
}