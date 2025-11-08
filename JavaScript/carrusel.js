document.addEventListener("DOMContentLoaded", function () {

    const imagenes = [
        "/Imagenes/Maradona1.JPG",
        "/Imagenes/Maradona2.jpg",
        "/Imagenes/Maradona3.jpg",
        "/Imagenes/Maradona4.jpg",
        "/Imagenes/Maradona5.jpg",
        "/Imagenes/Maradona6.jpg",
        "/Imagenes/Maradona7.jpg",
        "/Imagenes/Maradona8.jpg",
    ];

    let indiceActual = 0;

    const imgAMostrar = document.getElementById("carruselImg");
    const botonAnterior = document.getElementById("carruselBotonAnterior");
    const botonSiguiente = document.getElementById("carruselBotonSiguiente");

    function mostrarImagen(i) {

        const rutaImg = imagenes[i];
        imgAMostrar.src = rutaImg;

    }

    function avanzarImagen() {

        indiceActual++;

        if (indiceActual >= imagenes.length) {

            indiceActual = 0;

        }

        mostrarImagen(indiceActual);
        
    }

    function retrocederImagen() {

        indiceActual--;

        if (indiceActual < 0) {

            indiceActual = imagenes.length - 1;
        }

        mostrarImagen(indiceActual);

    }

    botonSiguiente.addEventListener("click", avanzarImagen);
    botonAnterior.addEventListener("click", retrocederImagen);

    mostrarImagen(indiceActual)

});