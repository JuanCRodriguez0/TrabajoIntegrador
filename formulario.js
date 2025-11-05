document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("form");
    const botonReset = document.getElementById("botonReset");

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const tel = document.getElementById("telefono");
    const textArea = document.getElementById("textoDeArea");

    const nombreIngresado = document.getElementById("nombreIngresado");
    const apellidoIngresado = document.getElementById("apellidoIngresado");
    const emailIngresado = document.getElementById("emailIngresado");
    const telIngresado = document.getElementById("telIngresado");
    const comentarioIngresado = document.getElementById("comentarioIngresado");

    const msjAlertaNombre = document.getElementById("msjAlertaNombre");
    const msjAlertaApellido = document.getElementById("msjAlertaApellido");
    const msjAlertaEmail = document.getElementById("msjAlertaEmail");
    const msjAlertaTel = document.getElementById("msjAlertaTel");
    const msjAlertaTextArea = document.getElementById("msjAlertaTextArea");
    const msjExito = document.getElementById("msjExito");

    const validacionNyA = /^[A-ZÁÉÍÓÚÑa-záéíóúñ]+(\s*[A-ZÁÉÍÓÚÑa-záéíóúñ]+)*$/;
    const validacionMail = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+(\.[A-Za-z]+){1,}$/;
    const validacionTel = /^(\+)?[\d\s]{8,20}$/;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let esNombreValido = validarNombre();
        let esApellidoValido = validarApellido();
        let esEmailValido = validarEmail();
        let esTelValido = validarTel();
        let esTextAreaValido = validarTextArea();

        if (esNombreValido && esApellidoValido && esEmailValido && esTelValido && esTextAreaValido) {

            msjExito.style.display = "block";

            nombreIngresado.textContent = nombre.value;
            apellidoIngresado.textContent = apellido.value;
            emailIngresado.textContent = email.value;
            telIngresado.textContent = tel.value;
            comentarioIngresado.textContent = textArea.value;

            /* setTimeout(function() {
                botonReset.click();
            }, 3000);

            así habría que hacer esto si quisiésemos que ande
            y sin hacerlo de la otra forma que yo había hecho antes */

        }

    });

    botonReset.addEventListener("click", function (event) {

        msjExito.style.display = "none";

        nombreIngresado.textContent = "";
        apellidoIngresado.textContent = "";
        emailIngresado.textContent = "";
        telIngresado.textContent = "";
        comentarioIngresado.textContent = "";

    });

    function validarNombre() {

        if (nombre.value === "") {
            msjAlertaNombre.innerHTML = "Este campo es obligatorio!<br>";
            return false;
        } else if (!validacionNyA.test(nombre.value)) {
            msjAlertaNombre.innerHTML = "El formato del nombre no es válido.<br>";
            return false;
        } else {
            msjAlertaNombre.innerHTML = "";
            return true;
        }

    }

    function validarApellido() {

        if (apellido.value === "") {
            msjAlertaApellido.innerHTML = "Este campo es obligatorio!<br>";
            return false;
        } else if (!validacionNyA.test(apellido.value)) {
            msjAlertaApellido.innerHTML = "El formato del apellido no es válido.<br>";
            return false;
        } else {
            msjAlertaApellido.innerHTML = "";
            return true;
        }

    }

    function validarEmail() {

        if (email.value === "") {
            msjAlertaEmail.innerHTML = "Este campo es obligatorio!<br>";
            return false;
        } else if (!validacionMail.test(email.value)) {
            msjAlertaEmail.innerHTML = "El formato del mail no es válido.<br>";
            return false;
        } else {
            msjAlertaEmail.innerHTML = "";
            return true;
        }

    }

    function validarTel() {

        if (tel.value === "") {
            msjAlertaTel.innerHTML = "Este campo es obligatorio!<br>";
            return false;
        } else if (!validacionTel.test(tel.value)) {
            msjAlertaTel.innerHTML = "El formato del número telefónico no es válido.<br>";
            return false;
        } else {
            msjAlertaTel.innerHTML = "";
            return true;
        }

    }

    function validarTextArea() {

        if (textArea.value.trim() === "") {
            msjAlertaTextArea.innerHTML = "Este campo no puede estar vacío.<br>";
            return false;
        } else {
            msjAlertaTextArea.innerHTML = "";
            return true;
        }

    }

});