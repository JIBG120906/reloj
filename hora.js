function actualizarHora() {
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    var tiempo = horas + ':' + minutos + ':' + segundos;
    document.getElementById('reloj').innerText = tiempo;
}

setInterval(actualizarHora, 1000);
actualizarHora(); // Inicializar la función al cargar la página
