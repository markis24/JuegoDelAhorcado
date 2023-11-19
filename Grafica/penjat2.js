// Variables globales del juego

let totalPartidas = 0;
let totalPartidasGanadas = 0;
let totalPartidasPerdidas = 0;
let has_ganado = false;
let intentosMaximos = 7;
let intentos = 0;
let palabra = "";
let palabraSecreta = "";
let letrasUsadasPartida = [];
let intentosFallados = 0;


// Array de imagenes ,en una carpeta del proyecto
const imagenes = ["img_penjat/penjat_0.png", "img_penjat/penjat_1.png", "img_penjat/penjat_2.png", "img_penjat/penjat_3.png", "img_penjat/penjat_4.png", "img_penjat/penjat_5.png", "img_penjat/penjat_6.png"];

// Elementos del DOM
// Creamos elementos del DOM 
const abecedarioDiv = document.getElementById("abecedari");
const imagenAhorcado = document.getElementById("imatgePenjat");
const juegoAhorcadoDiv = document.getElementById("jocPenjat");
const letrasUtilizadas = document.getElementById("letrasUtilizadas");


function Estadistiques() {

    const porcentajeTotalPartidas = (totalPartidas / (totalPartidasGanadas + totalPartidasPerdidas) * 100).toFixed(2);
    const porcentajePartidasGanadas = (totalPartidasGanadas / totalPartidas * 100).toFixed(2);
    const porcentajePartidasPerdidas = (totalPartidasPerdidas / totalPartidas * 100).toFixed(2);
    let mensaje = "Total de partides: " + totalPartidas + "\n" +
        "Partides guanyades: " + totalPartidasGanadas + " (" + porcentajePartidasGanadas + "%)\n" +
        "Partides perdudes: " + totalPartidasPerdidas + " (" + porcentajePartidasPerdidas + "%)\n" +
        "Porcentaje de partidas: " + porcentajeTotalPartidas + "%";
    // Abrimos una nueva venta para mostrar las estadisticas
    // Definimos la altura y anchura de la ventana emergente
    let nuevaVentaEstats = window.open("", "titulo", "height=200px,width=300px");
    nuevaVentaEstats.document.write("<p>" + mensaje + "</p>");
}


function nuevaPartida() {
    palabra = prompt("Introduce una palabra"); // Solicita al jugador que ingrese una palabra
    palabraSecreta = palabra.repeat("_");       // Inicializa la representación oculta de la palabra secreta
    reiniciarJuego();                           // Reinicia el estado del juego
    jocPenjatDiv.innerHTML = palabraSecreta;    // Muestra la palabra secreta inicial en el contenedor del juego
    imagenPenjat.src = imagenes[0];              // Establece la primera imagen del progreso del ahorcado
    abecedario();                               // Crea y muestra los botones del abecedario
    mostrarImagen();                            // Muestra la imagen actual del progreso del ahorcado
}

function abecedario() {
    // Pasamos una constante de letras de abecedario
    const letras = "abcdefghijklmnopqrstuvwxyz";
    letrasUsadasPartida = [];
    for (let index = 0; index < letras.length; index++) {
        // Creamos un boton 
        let boton = document.createElement("button");
        // Asignamos una letra 
        const letra = letras[index];
        boton.textContent = letra;
        // Damos estilos a los botones con Boostrap
        boton.classList.add("btn", "btn-secondary", "m-2");
        abecedarioDiv.appendChild(boton);
        // Funcion para añadir letra a la palabra
        boton.addEventListener("click", function () {
            letrasUsadasPartida.push(letra);
            clickLetra(letra);
            mostrarImagen(index);

        })
    }
}
function clickLetra(letra) {
    if (palabra.includes(letra)) {

        console.log(letra);

    }
    else {
        intentosFallados++;
    }
    actualizarPalabra();
    mostrarResultado();
    mostrarletrasUtilizadas();
}
// Alerta cuando finalizas el juego
function actualizarPalabra() {
    juegoAhorcadoDiv.innerHTML = "";
    palabraSecreta = "";
    for (let index = 0; index < palabra.length; index++) {
        const letra = palabra[index];
        const span = document.createElement("span");
        span.style.fontSize = "30px";
        span.style.margin = "16px";
        if (letrasUsadasPartida.includes(letra)) {
            span.textContent = letra;
            palabraSecreta = palabraSecreta + letra;
        }
        else {
            span.textContent = "_";
        }
        juegoAhorcadoDiv.appendChild(span);

    }
}
function finalizatJoc() {

}
function mostrarImagen() {

    imagenAhorcado.src = imagenes[intentosFallados];

}
function reiniciarJuego() {
    palabraSecreta = "";
    intentosFallados = 0;
    imagenAhorcado.src = imagenes[intentosFallados];
    abecedarioDiv.innerHTML = "";
    juegoAhorcadoDiv.innerHTML = "";

}
function mostrarResultado() {
    if (palabra == palabraSecreta) {
        alert("Has ganado");
        reiniciarJuego();

    }
    if (intentosFallados == intentosMaximos) {
        alert("Has perdido");
        reiniciarJuego();

    }

}
function mostrarletrasUtilizadas() {
    letrasUtilizadas.innerHTML = "";
    for (let index = 0; index < letrasUsadasPartida.length; index++) {
        const letra = letrasUsadasPartida[index];
        let boton = document.createElement("button");
        // Asignamos una letra 
        boton.textContent = letra;
        // Damos estilos a los botones con Boostrap
        boton.classList.add("btn", "btn-danger", "m-2");
        letrasUtilizadas.appendChild(boton);


    }
}