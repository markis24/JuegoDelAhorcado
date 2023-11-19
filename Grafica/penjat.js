// Declaración de variables globales del juego
let totalPartidas = 0;           // Número total de partidas jugadas
let totalPartidasGanadas = 0;   // Número total de partidas ganadas
let totalPartidasPerdidas = 0;  // Número total de partidas perdidas
let has_ganado = false;         // Indica si el jugador ha ganado la partida actual
let intentosMaximos = 7;        // Número máximo de intentos permitidos en una partida
let intentos = 0;               // Número de intentos realizados en la partida actual
let palabra = "";               // Palabra secreta que el jugador debe adivinar
let palabraSecreta = "";        // Representación actualizada de la palabra secreta con letras adivinadas
let letrasUsadas = [];          // Letras del abecedario que han sido utilizadas durante la partida
let intentosFallados = 0;       // Número de intentos fallidos en la partida actual


// Array que almacena las rutas de las imágenes del juego
const imagenes = ["img_penjat/penjat_0.png", "img_penjat/penjat_1.png", "img_penjat/penjat_2.png", "img_penjat/penjat_3.png", "img_penjat/penjat_4.png", "img_penjat/penjat_5.png", "img_penjat/penjat_6.png"];


// Objetos del DOM utilizados en el juego
const abecedarioDiv = document.getElementById("abecedario");    // Contenedor del abecedario
const imagenAhorcado = document.getElementById("imagenAhorcado");   // Elemento de imagen para mostrar el progreso del ahorcado
const juegoDelAhorcadoDiv = document.getElementById("juegoDelAhorcado");      // Contenedor donde se muestra la palabra secreta
const letrasUtilizadas = document.getElementById("letrasUtilizadas");  // Contenedor de letras utilizadas durante la partida

// Función para iniciar una nueva partida
function nuevaPartida() {
    palabra = prompt("Introduce una palabra"); // Solicita al jugador que ingrese una palabra
    palabraSecreta = palabra.repeat("_");       // Inicializa la representación oculta de la palabra secreta
    reiniciarJuego();                           // Reinicia el estado del juego
    juegoDelAhorcadoDiv.innerHTML = palabraSecreta;    // Muestra la palabra secreta inicial en el contenedor del juego
    imagenAhorcado.src = imagenes[0];              // Establece la primera imagen del progreso del ahorcado
    abecedario();                               // Crea y muestra los botones del abecedario
    mostrarImagen();                            // Muestra la imagen actual del progreso del ahorcado
}


// Función para generar botones con letras del abecedario y manejar sus eventos
function abecedario() {
    // Definimos una constante con todas las letras del abecedario
    const letras = "abcdefghijklmnopqrstuvwxyz";
    letrasUsadas = [];  // Reiniciamos el arreglo de letras utilizadas para la nueva partida

    // Iteramos sobre cada letra del abecedario para crear un botón correspondiente
    for (let index = 0; index < letras.length; index++) {
        // Creamos un nuevo botón para la letra actual
        let boton = document.createElement("button");

        // Asignamos la letra al contenido del botón
        const letra = letras[index];
        boton.textContent = letra;

        // Aplicamos estilos con Bootstrap al botón
        boton.classList.add("btn", "btn-secondary", "m-2");

        // Agregamos el botón al contenedor del abecedario en el DOM
        abecedarioDiv.appendChild(boton);

        // Asociamos un evento de clic al botón para manejar la interacción del usuario
        boton.addEventListener("click", function () {
            // Al hacer clic, añadimos la letra a las letras utilizadas y realizamos acciones relacionadas
            letrasUsadas.push(letra);
            clickLetra(letra);
            mostrarImagen(index);
        });
    }
}

// Función que se ejecuta al hacer clic en una letra del abecedario
function clickLetra(letra) {
    if (palabra.includes(letra)) {
        console.log(letra); // La letra está presente en la palabra, se muestra en la consola
    } else {
        intentosFallados++; // La letra no está presente, incrementa el contador de intentos fallidos
    }
    actualizarPalabra();    // Actualiza la representación de la palabra en el juego
    mostrarResultado();     // Muestra el resultado del juego (si se ha ganado o perdido)
    mostrarLetrasUtilizadas(); // Actualiza y muestra las letras utilizadas durante la partida
}

// Función para actualizar la representación de la palabra en el juego
function actualizarPalabra() {
    juegoDelAhorcadoDiv.innerHTML = "";   // Limpia el contenedor de la palabra actual en el juego
    palabraSecreta = "";           // Reinicia la representación oculta de la palabra secreta

    // Itera sobre cada letra de la palabra secreta
    for (let index = 0; index < palabra.length; index++) {
        const letra = palabra[index];                    // Obtiene la letra actual
        const span = document.createElement("span");     // Crea un elemento de tipo "span"

        span.style.fontSize = "30px";                    // Establece el tamaño de la fuente
        span.style.margin = "16px";                      // Establece el margen entre las letras

        if (letrasUsadas.includes(letra)) {
            // Si la letra ha sido utilizada, la muestra en el juego y la agrega a la palabra secreta
            span.textContent = letra;
            palabraSecreta = palabraSecreta + letra;
        } else {
            // Si la letra no ha sido utilizada, muestra un guion bajo en el juego
            span.textContent = "_";
        }

        juegoDelAhorcadoDiv.appendChild(span);  // Agrega el elemento "span" al contenedor del juego
    }
}



// Función para mostrar la imagen del progreso del ahorcado
function mostrarImagen() {
    imagenAhorcado.src = imagenes[intentosFallados];  // Establece la imagen según el número de intentos fallidos
}

// Función para reiniciar el estado del juego
function reiniciarJuego() {
    palabraSecreta = "";                          // Reinicia la representación de la palabra secreta
    intentosFallados = 0;                         // Reinicia el contador de intentos fallidos
    imagenAhorcado.src = imagenes[intentosFallados];// Restaura la imagen del progreso del ahorcado al inicio
    abecedarioDiv.innerHTML = "";                 // Limpia el contenedor del abecedario en el DOM
    juegoDelAhorcadoDiv.innerHTML = "";                  // Limpia el contenedor de la palabra secreta en el DOM
}

// Función para mostrar el resultado de la partida
function mostrarResultado() {
    // Comprueba si la palabra secreta ha sido completamente adivinada
    if (palabra == palabraSecreta) {
        alert("Has ganado");  // Muestra una alerta indicando que el jugador ha ganado
        reiniciarJuego();     // Reinicia el estado del juego para una nueva partida
    }

    // Comprueba si el número de intentos fallidos ha alcanzado el máximo permitido
    if (intentosFallados == intentosMaximos) {
        alert("Has perdido");  // Muestra una alerta indicando que el jugador ha perdido
        reiniciarJuego();      // Reinicia el estado del juego para una nueva partida
    }
}

// Función para mostrar las letras utilizadas durante la partida
function mostrarLetrasUtilizadas() {
    letrasUtilizadas.innerHTML = "";   // Limpia el contenido anterior del contenedor de letras utilizadas
    for (let index = 0; index < letrasUsadas.length; index++) {
        const letra = letrasUsadas[index];        // Obtiene la letra actual del array de letras utilizadas
        let boton = document.createElement("button");
        // Asignamos una letra al contenido del botón
        boton.textContent = letra;
        // Damos estilos a los botones utilizando Bootstrap
        boton.classList.add("btn", "btn-danger", "m-2");
        letrasUtilizadas.appendChild(boton);    // Agrega el botón al contenedor de letras utilizadas
    }
}
// Función para mostrar estadísticas del juego en una nueva ventana emergente
function estadisticas() {
    // Calculamos los porcentajes de las partidas ganadas, perdidas y totales
    const porcentajeTotalPartidas = (totalPartidas / (totalPartidasGanadas + totalPartidasPerdidas) * 100).toFixed(2);
    const porcentajePartidasGanadas = (totalPartidasGanadas / totalPartidas * 100).toFixed(2);
    const porcentajePartidasPerdidas = (totalPartidasPerdidas / totalPartidas * 100).toFixed(2);

    // Construimos un mensaje con información de las estadísticas
    let mensaje = "Total de partidas: " + totalPartidas + "\n" +
        "Partidas ganadas: " + totalPartidasGanadas + " (" + porcentajePartidasGanadas + "%)\n" +
        "Partidas perdidas: " + totalPartidasPerdidas + " (" + porcentajePartidasPerdidas + "%)\n" +
        "Porcentaje de partidas: " + porcentajeTotalPartidas + "%";

    // Abrimos una nueva ventana emergente para mostrar las estadísticas
    // Definimos la altura y anchura de la ventana emergente
    let nuevaVentanaEstadisticas = window.open("", "titulo", "height=200px,width=300px");

    // Escribimos el mensaje en el documento de la nueva ventana emergente
    nuevaVentanaEstadisticas.document.write("<p>" + mensaje + "</p>");
}