document.addEventListener("DOMContentLoaded", function () {

    const divForms = document.querySelector(".divForms");
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

        /*  const pExito = document.createElement("p");
            pExito.className = "msjExito";
            pExito.id = "msjExito";
            pExito.style.display = "block";

            const spanTitulo = document.createElement("span");
            spanTitulo.className = "exitoTitulo";
            spanTitulo.textContent = "¡Formulario enviado con éxito!";
            pExito.appendChild(spanTitulo);

            pExito.appendChild(document.createElement("br")); // Primer salto de línea
            
            const labelNombre = document.createElement("span");
            labelNombre.id = "labelForm";
            labelNombre.textContent = "Nombre ingresado:";
            pExito.appendChild(labelNombre);
            
            const valorNombre = document.createElement("span");
            valorNombre.className = "inputsExito";
            valorNombre.textContent = nombre.value;
            pExito.appendChild(valorNombre);

            // D. APELLIDO (Label + Br + Valor)
            pExito.appendChild(document.createElement("br"));
            
            const labelApellido = document.createElement("span");
            labelApellido.id = "labelForm";
            labelApellido.textContent = "Apellido ingresado:";
            pExito.appendChild(labelApellido);
            pExito.appendChild(document.createElement("br"));
            
            const valorApellido = document.createElement("span");
            valorApellido.className = "inputsExito";
            valorApellido.textContent = apellido.value;
            pExito.appendChild(valorApellido);

            // E. EMAIL (Label + Br + Valor)
            pExito.appendChild(document.createElement("br"));
            
            const labelEmail = document.createElement("span");
            labelEmail.id = "labelForm";
            labelEmail.textContent = "Email ingresado:";
            pExito.appendChild(labelEmail);
            pExito.appendChild(document.createElement("br"));
            
            const valorEmail = document.createElement("span");
            valorEmail.className = "inputsExito";
            valorEmail.textContent = email.value;
            pExito.appendChild(valorEmail);

            // F. TELÉFONO (Label + Br + Valor)
            pExito.appendChild(document.createElement("br"));
            
            const labelTel = document.createElement("span");
            labelTel.id = "labelForm";
            labelTel.textContent = "Teléfono ingresado:";
            pExito.appendChild(labelTel);
            pExito.appendChild(document.createElement("br"));
            
            const valorTel = document.createElement("span");
            valorTel.className = "inputsExito";
            valorTel.textContent = tel.value;
            pExito.appendChild(valorTel);

            // G. COMENTARIO (Label + Br + Valor)
            pExito.appendChild(document.createElement("br"));
            
            const labelComentario = document.createElement("span");
            labelComentario.id = "labelForm";
            labelComentario.textContent = "Comentario ingresado:";
            pExito.appendChild(labelComentario);
            pExito.appendChild(document.createElement("br"));
            
            const valorComentario = document.createElement("span");
            valorComentario.className = "inputsExito";
            valorComentario.textContent = textArea.value;
            pExito.appendChild(valorComentario);
            
            // H. Inyectar el <p> completo al DOM
            divForms.appendChild(pExito);
            


            Y acá te dejo la otra versión con la función por si decidís usarla:
            


            // 3. Creamos una función simple para no repetir código
            function crearLineaDato(label, valor) {
                // Label (Ej: "Nombre ingresado:")
                const spanLabel = document.createElement("span");
                spanLabel.id = "labelForm"; // Aplicamos tu estilo
                spanLabel.textContent = label;
                
                // Dato (Ej: "Diego Armando")
                const spanDato = document.createElement("span");
                spanDato.className = "inputsExito"; // Aplicamos tu estilo
                spanDato.textContent = valor;

                // Agregamos todo al <p> padre
                pExito.appendChild(document.createElement("br")); // <br>
                pExito.appendChild(document.createElement("br")); // <br> (un espacio)
                pExito.appendChild(spanLabel);
                pExito.appendChild(document.createElement("br")); // <br>
                pExito.appendChild(spanDato);
            }

            // 4. Usamos la función para crear todas las líneas
            crearLineaDato("Nombre ingresado:", nombre.value);
            crearLineaDato("Apellido ingresado:", apellido.value);
            crearLineaDato("Email ingresado:", email.value);
            crearLineaDato("Teléfono ingresado:", tel.value);
            crearLineaDato("Comentario ingresado:", textArea.value);
            
            // 5. Agregamos el <p> (ya listo) al DOM
            divForms.appendChild(pExito);  */

});