
// Maximo de letra falladas es 7 


let menu = prompt("Selecciona una opcion para empezar \n 1.Iniciar el juego\n 2.Mostrar stadisticas \n 3.Salir \n");
// Seleccionamos 1 Iniciamos el juego y vamos al case 1
switch (menu) {
    case 1:
        IniciarJuego();
        break;
    case 2:
       Estadisticas();
        break;
    case 3:
        // Seleccionamos el numero 3 y se para el programa
        break;
    default:
        // Mostrar mensaje error y volver al menu
        console.error("Error")
}
function IniciarJuego(){
    console.log("Iniciamos el juego")
    let palabra = prompt("Escribe una palabra para comenzar el ahorcado: ");
    console.log(palabra)
    let letra;
    do {
letra = prompt("Por favor, escribe una letra: ");
}while(!letra || letra.length == 1 );
}
function Estadisticas(){
    console.log("Total de partidas: " + total_partidas);
    console.log("Partidas ganadas: " + total_ganidas);
    console.log("Partidas perdidas: " + total_perdidas);
}
