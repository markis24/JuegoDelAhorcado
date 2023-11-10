// Variables globales del juego

let total_partides = 0;
let total_guanyades = 0;
let total_perdudes = 0;
let has_ganado = false;
let intentos_maximos = 7;
let intentos = 0;
let palabra = "";
let palabraSecreta = "";
let letrasUsadas = [];
let intentosFallados = 0;


// Array de imagenes ,en una carpeta del proyecto
const imagenes = ["img_penjat/penjat_0.png", "img_penjat/penjat_1.png", "img_penjat/penjat_2.png", "img_penjat/penjat_3.png", "img_penjat/penjat_4.png", "img_penjat/penjat_5.png", "img_penjat/penjat_6.png"];

// Elementos del DOM
// Creamos elementos del DOM 
const abecedarioDiv = document.getElementById("abecedari");
const imagenPenjat = document.getElementById("imatgePenjat");
const jocPenjatDiv = document.getElementById("jocPenjat");
const lletresUtilitzades = document.getElementById("lletresUtilitzades");


function Estadistiques() {

    const porcentajePartidas = (total_partides / (total_guanyades + total_perdudes) * 100).toFixed(2);
    const porcentajeGanadas = (total_guanyades / total_partides * 100).toFixed(2);
    const porcentajePerdidas = (total_perdudes / total_partides * 100).toFixed(2);
    let mensaje = "Total de partides: " + total_partides + "\n" +
        "Partides guanyades: " + total_guanyades + " (" + porcentajeGanadas + "%)\n" +
        "Partides perdudes: " + total_perdudes + " (" + porcentajePerdidas + "%)\n" +
        "Porcentaje de partidas: " + porcentajePartidas + "%";
    // Abrimos una nueva venta para mostrar las estadisticas
    // Definimos la altura y anchura de la ventana emergente
    let nuevaVentaEstats = window.open("", "titulo", "height=200px,width=300px");
    nuevaVentaEstats.document.write("<p>" + mensaje + "</p>");
}


function novaPartida() {
    palabra = prompt("Introduce una palabra");
    palabraSecreta = palabra.repeat("_");
    reiniciarJuego();
   jocPenjatDiv.innerHTML = palabraSecreta;
    // Empezamos mostrando las imagenes desde el 0
    imagenPenjat.src = imagenes[0];
    abecedario();
    mostrarImagen();

}

function abecedario() {
    // Pasamos una constante de letras de abecedario
    const letras = "abcdefghijklmnopqrstuvwxyz";
    letrasUsadas = [];
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
            letrasUsadas.push(letra);
            clickLetra(letra);
            mostrarImagen(index);

        })
    }
}
function clickLetra(letra) {
    if (palabra.includes(letra)) {

        console.log(letra);
        
    }
    else{
    intentosFallados++;
    }
    actualizarPalabra();
    mostrarResultado();
    mostrarlletresUtilitzades();
}
// Alerta cuando finalizas el juego
function actualizarPalabra() {
    jocPenjatDiv.innerHTML = "";
    palabraSecreta = "";
    for (let index = 0; index < palabra.length; index++) {
        const letra = palabra[index];
        const span = document.createElement("span");
        span.style.fontSize = "30px";
        span.style.margin = "16px";
        if (letrasUsadas.includes(letra)) {
            span.textContent = letra;
            palabraSecreta = palabraSecreta + letra;
        }
        else {
            span.textContent = "_";
        }
        jocPenjatDiv.appendChild(span);

    }
}
function finalizatJoc() {

}
function mostrarImagen() {

    imagenPenjat.src = imagenes[intentosFallados];

}
function reiniciarJuego() {
    palabraSecreta = "";
    intentosFallados = 0;
    imagenPenjat.src = imagenes[intentosFallados];
    abecedarioDiv.innerHTML = "";
    jocPenjatDiv.innerHTML = "";

}
function mostrarResultado(){
    if (palabra == palabraSecreta) {
        alert("Has ganado");
        reiniciarJuego();

    }
    if (intentosFallados == intentos_maximos) {
        alert("Has perdido");
        reiniciarJuego();

    }

}
function mostrarlletresUtilitzades(){
    lletresUtilitzades.innerHTML="";
    for (let index = 0; index < letrasUsadas.length; index++) {
        const letra = letrasUsadas[index];
        let boton = document.createElement("button");
        // Asignamos una letra 
        boton.textContent = letra;
        // Damos estilos a los botones con Boostrap
        boton.classList.add("btn", "btn-danger", "m-2");
    lletresUtilitzades.appendChild(boton);

        
    }
}