// Variables globales del juego

let total_partides = 0;
let total_guanyades = 0;
let total_perdudes = 0;
let has_ganado = false;
let intentos_maximos = 7;
let intentos = 0;
// Array de imagenes ,en una carpeta del proyecto
const imagenes = ["img_penjat/penjat_0.png","img_penjat/penjat_1.png","img_penjat/penjat_2.png","img_penjat/penjat_3.png","img_penjat/penjat_4.png","img_penjat/penjat_5.png","img_penjat/penjat_6.png"];

// Elementos del DOM
// Creamos elementos del DOM 
const abecedarioDiv = document.getElementById("abecedari");
const imagenPenjat = document.getElementById("imatgePenjat");

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
    let nuevaVentaEstats = window.open("", "titulo","height=200px,width=300px");
    nuevaVentaEstats.document.write("<p>" + mensaje + "</p>");
}


function novaPartida() {
    reiniciarJuego();
    // Empezamos mostrando las imagenes desde el 0
    imagenPenjat.src = imagenes[0];
    abecedario();
    mostrarImagen();
    // Si tenemos hacemos mas de 7 intentos reiniciamos el juego
    if(intentos == 7){
        reiniciarJuego();
    }

}

function abecedario() {
    // Pasamos una constante de letras de abecedario
    const letras = "abcdefghijklmnopqrstuvwxyz";
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
            intentos++;
            clickLetra(letra);
            mostrarImagen(index);

        })
    }
}
function clickLetra(letra) {


}
function mostrarImagen(index){
    index=0;
    
    imagenPenjat.src = imagenes[index];

}
function reiniciarJuego(){
    imagenPenjat.src = imagenes[0];
    abecedarioDiv.innerHTML="";
}

