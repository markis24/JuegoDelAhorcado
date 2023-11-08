
// Programa penjat per consola 
function Menu(){
let menu = parseInt(prompt("Selecciona una opcion para empezar \n 1.Iniciar el juego \n 2.Mostrar stadistiques \n  3.Salir \n"));
switch (menu) {
    case 1:
        // Seleccionamos el numero 1 y iniciamos el programa
        IniciarJoc();
        break;
    case 2:
        Estadistiques();
        break;
    case 3:
        // Seleccionamos el numero 3 y salimos del programa
        console.log("El juego ha terminado")
        break;
}       
}
let total_partides = 0;
let total_guanyades = 0;
let total_perdudes = 0;
let has_ganado = false;

function IniciarJoc(){
    let numero_intents = 0;
    total_partides++;
    // Numero de veces que podemos probar 
    const intentos_maximos = 6;
    const palabra = prompt("Escribe una palabra: ");   
    for (i=1 ; i < palabra.length; i++){
        console.log("_");
    }
    while(numero_intents <= intentos_maximos || has_ganado==false){
        let letra = prompt("Escribe una letra: ");
        if(ValidarLetra(letra)){
            if(ComprobacionLetra(palabra,letra)){
                console.log(letra);
            }
            else{
                console.log("Lletres fallades: " + letra )
                numero_intents++;
            }
        }
        
    }
    if (intentos_maximos <= numero_intents){
        console.log("Has ganado el juego ")
        has_ganado = true;
        Menu();
    }else{
        console.log("L'usuari mor penjat");
        Menu();
    }
}
function ValidarLetra(letra){
    if(letra.match(/[a-z]/i) && letra.length == 1) {
        return true;
    }
    else {
        console.log("No es una letra y no se aceptan otros caracteres")
        return false;
    }
}
function ComprobacionLetra(palabra,letra){
    if(palabra.includes(letra)){
        console.log("Existe la letra " + letra)
        return true;
    }
    else{
        console.log("No existe la letra " + letra)
        return false;
    }
}






function Estadistiques() {
    console.log("Total de partides: Porcentaje de partidas " + total_partides );
    console.log("Partides ganadas: Porcentaje de partidas  " + total_guanyades);
    console.log("Partidas perdudes: Porcentaje de partidas " + total_perdudes);
}
