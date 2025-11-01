document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("form");

    const nombre = document.getElementById("nombre1");
    const apellido = document.getElementById("apellido");
    const mail = document.getElementById("mail");
    const tel = document.getElementById("telefono");
    const comment = document.getElementById("textoDeArea");

    const msj = document.getElementById("msjAlerta");
    const boton = document.getElementById("botonardo");

    const validacionNyA = /^[A-Z][a-z]+\s{1,*}$/;
    const validacionMail = / /;
    const validacionTel = / /;

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });

    function validarNombre() {
        if (nombre.value == "" || validacionNyA.test(nombre)) {
            msj.textContent = "Este campo es obligatorio!";
        } else {
            msj.textContent = "";
        }
    }

    function validarApellido() {
        if (apellido.value == "" || validacionNyA.test(apellido)) {
            msj.textContent = "Este campo es obligatorio!";
        } else {
            msj.textContent = "";
        }
    }

    function validarMail() {
        if (mail.value == "" || validacionNyA.test(mail)) {
            msj.textContent = "Este campo es obligatorio!";
        } else {
            msj.textContent = "";
        }    
    }
    
    function validarTel() {
        if (tel.value == "" || validacionNyA.test(tel)) {
            msj.textContent = "Este campo es obligatorio!";
        } else {
            msj.textContent = "";
        }
    }

    boton.addEventListener("click", validarNombre);
    boton.addEventListener("click", validarApellido);
    boton.addEventListener("click", validarMail);
    boton.addEventListener("click", validarTel);
});