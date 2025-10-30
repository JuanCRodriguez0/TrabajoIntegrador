// se implementa la siguiente línea para "esperar" a que se cargue todo el HTML antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function(){

    // el arreglo con las imágenes
    const imagenes = [
        "Imagenes/Maradona1.JPG", // posición 0
        "Imagenes/Maradona2.jpg", // " 1
        "Imagenes/Maradona3.jpg", // " 2, etc...
        "Imagenes/Maradona4.jpg",
        "Imagenes/Maradona5.jpg",
        "Imagenes/Maradona6.jpg",
        "Imagenes/Maradona7.jpg",
        "Imagenes/Maradona8.webp",
    ];

    // este va a ser el número que va a representar las posiciones de la matriz con las imágenes
    let indiceActual = 0;
    
    // creación de variables que se relacionan con los elementos creados en el index/inicio
    const imgAMostrar = document.getElementById("carruselImg");
    const botonAnterior = document.getElementById("carruselBotonAnterior");
    const botonSiguiente = document.getElementById("carruselBotonSiguiente");

    // esta función se encarga de mostrar una de las imágenes en la página
    // recibe como parámetro un indice (i) que representará a la posición del arreglo/imagen que queremos mostrar
    function mostrarImagen(i) {
        // crea una variable que almacena el arreglo en esa posición "i" (siendo i = un número) lo cual representaría una de todas las imágenes
        const rutaImg = imagenes[i];
        // y se la asigna en el atributo "src" de la <img> de la página
        imgAMostrar.src = rutaImg;
    }

    function avanzarImagen() {
        // esta función aumenta el índice en 1
        indiceActual++;
        // y pregunta si este ha superado (al número que representa a) la longitud del arreglo
        if (indiceActual >= imagenes.length) {
            // si esto es verdadero le da al índice un valor de 0, "reseteándolo"
            indiceActual = 0;
        }
        // por último, utiliza el método anterior para mostrar la imagen correspondiente
        mostrarImagen(indiceActual);
    }

    function retrocederImagen() {
        // esta función disminuye el índice en 1
        indiceActual--;
        // y pregunta si este es menor que 0 (es decir, de -1 para "abajo")
        if (indiceActual < 0) {
            /* si esto es verdadero le da al índice un valor igual a la longitud del arreglo - 1, ya que las posiciones de un arreglo
               siempre empiezan en 0 y por ende el tamaño de estos es el valor de su última posición + 1 */
            indiceActual = imagenes.length - 1;
        }
        // por último, utiliza el método anterior para mostrar la imagen correspondiente
        mostrarImagen(indiceActual);
    }

    // acá se les "ordena" a los botones que cuando se haga click en ellos, ejecuten la correspondiente función
    botonSiguiente.addEventListener("click", avanzarImagen);
    botonAnterior.addEventListener("click", retrocederImagen);
    
    // por último, se implementa la siguiente línea para que sí o sí el script empiece mostrando una imagen
    mostrarImagen(indiceActual)

});