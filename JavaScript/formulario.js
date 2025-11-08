document.addEventListener("DOMContentLoaded", function () {


    const form = document.getElementById("form");
    const botonReset = document.getElementById("botonReset");

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const tel = document.getElementById("telefono");
    const textArea = document.getElementById("textoDeArea");

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

        const msjExitoViejo = document.getElementById("msjExito");

        if (msjExitoViejo) {

            msjExitoViejo.remove();

        }

        if (esNombreValido && esApellidoValido && esEmailValido && esTelValido && esTextAreaValido) {
            const contenedorExito = document.createElement("div");
            contenedorExito.classList.add("mensajeExito");

            const tituloExito = document.createElement("h2");
            tituloExito.classList.add("tituloH2");
            tituloExito.textContent = "Datos enviados con éxito";

            const listaDatos = document.createElement("ul");

            const li1 = document.createElement("li");
            li1.textContent = "Nombre: " + nombre.value;
            listaDatos.appendChild(li1);

            const li2 = document.createElement("li");
            li2.textContent = "Apellido: " + apellido.value;
            listaDatos.appendChild(li2);

            const li3 = document.createElement("li");
            li3.textContent = "Email: " + email.value;
            listaDatos.appendChild(li3);

            const li4 = document.createElement("li");
            li4.textContent = "Teléfono: " + tel.value;
            listaDatos.appendChild(li4);

            const li5 = document.createElement("li");
            li5.textContent = "Mensaje: " + textArea.value;
            listaDatos.appendChild(li5);

            contenedorExito.appendChild(tituloExito);
            contenedorExito.appendChild(listaDatos);
            
            form.insertAdjacentElement("afterend", contenedorExito);
            

            form.reset();
        }

    });

    botonReset.addEventListener("click", function (event) {

        const msjExitoViejo = document.getElementById("msjExito");

        if (msjExitoViejo) {

            msjExitoViejo.remove();

        }

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