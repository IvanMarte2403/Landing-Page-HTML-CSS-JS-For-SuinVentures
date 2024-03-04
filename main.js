window.onload = function() {
    function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        // Añade un cero si los minutos o los segundos son menores a 10
        minutes = (minutes < 10 ? "0" : "") + minutes;
        seconds = (seconds < 10 ? "0" : "") + seconds;

        // Convierte el formato de 24 horas a 12 horas y establece AM o PM
        var timeOfDay = (hours < 12) ? "AM" : "PM";
        hours = (hours > 12) ? hours - 12 : hours;
        hours = (hours == 0) ? 12 : hours;

        // Crea la cadena de tiempo
        var currentTimeStr = hours + ":" + minutes + ":" + seconds + " " + timeOfDay;

        // Actualiza el elemento span
        document.querySelector('.time span').textContent = currentTimeStr;
    }

    // Actualiza la hora cada segundo
    setInterval(updateTime, 1000);
}