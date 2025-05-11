let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;

function atualizarDisplay() {
    const tempo = 
        (horas < 10 ? "0" + horas : horas) + ":" +
        (minutos < 10 ? "0" + minutos : minutos) + ":" +
        (segundos < 10 ? "0" + segundos : segundos);
    document.getElementById("cronometro").innerText = tempo;
}

function iniciar() {
    if (!intervalo) {
        intervalo = setInterval(() => {
            segundos++;
            if (segundos === 60) {
                segundos = 0;
                minutos++;
            }
            if (minutos === 60) {
                minutos = 0;
                horas++;
            }
            atualizarDisplay();
        }, 1000);
    }
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

function reiniciar() {
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    minutos = 0;
    horas = 0;
    atualizarDisplay();
}