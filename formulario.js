document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("form");
    const botonReset = document.getElementById("botonReset");

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const mail = document.getElementById("mail");
    const tel = document.getElementById("telefono");

    const msjAlertaNombre = document.getElementById("msjAlertaNombre");
    const msjAlertaApellido = document.getElementById("msjAlertaApellido");
    const msjAlertaMail = document.getElementById("msjAlertaMail");
    const msjAlertaTel = document.getElementById("msjAlertaTel");
    const msjExito = document.getElementById("msjExito");

    const validacionNyA = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+$/;
    const validacionMail = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,}$/;
    const validacionTel = /^\+?[\d\s]{6,15}$/;

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        let esNombreValido = validarNombre();
        let esApellidoValido = validarApellido();
        let esMailValido = validarMail();
        let esTelValido = validarTel();

        if (esNombreValido && esApellidoValido && esMailValido && esTelValido) {

            msjExito.style.display = "block";

            setTimeout(() => {
                botonReset.click();
            }, 5000);
        }

    });

    botonReset.addEventListener("click", function(event) {

        msjExito.style.display = "none";

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

    function validarMail() {

        if (mail.value === "") {
            msjAlertaMail.innerHTML = "Este campo es obligatorio!<br>";
            return false;
        } else if (!validacionMail.test(mail.value)) {
            msjAlertaMail.innerHTML = "El formato del mail no es válido.<br>";
            return false;
        } else {
            msjAlertaMail.innerHTML = "";
            return true;
        }

    }
    
    function validarTel() {

        if (tel.value === "") {
            msjAlertaTel.innerHTML = "Este campo es obligatorio!<br>";
            return false;
        } else if (!validacionTel.test(tel.value)){
            msjAlertaTel.innerHTML = "El formato del número telefónico no es válido.<br>";
            return false;
        } else {
            msjAlertaTel.innerHTML = "";
            return true;
        }

    }

});