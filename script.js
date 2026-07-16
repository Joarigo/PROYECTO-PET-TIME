function mostrarRegistro() {

    let informacion = document.getElementById("infoRegistro");

    if (informacion.style.display === "none") {
        informacion.style.display = "block";
    } else {
        informacion.style.display = "none";
    }

}

function mostrarCita() {

    let cita = document.getElementById("infoCita");

    if (cita.style.display === "none") {
        cita.style.display = "block";
    } else {
        cita.style.display = "none";
    }

}

function mostrarNotificacion() {

    alert(
        "Recordatorio PET-TIME: Max tiene una cita programada para el 20 de junio de 2026 a las 10:00 a.m."
    );

}

function enviarFormulario() {

    alert(
        "Mensaje enviado correctamente. Nuestro equipo de soporte se comunicará contigo pronto."
    );

}