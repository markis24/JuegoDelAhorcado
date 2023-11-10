
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
        console.log("El joc del penjat ha finalitzat")
        break;
}       
}
let total_partides = 0;
let total_guanyades = 0;
let total_perdudes = 0;
let has_ganado = false;

function IniciarJoc(){
    let numeroIntents = 0;
    total_partides++;
    // Numero de veces que podemos probar 
    const intentsMaxims = 6;
    const paraula = prompt("Escriu una paraula: ");   
    for (i=1 ; i < paraula.length; i++){
        console.log("_");
    }
    while(numeroIntents <= intentsMaxims || has_ganado==false){
        let lletra = prompt("Escriu una lletra: ");
        if(validarLletra(lletra)){
            if(comprobacioLletra(paraula,lletra)){
                console.log(lletra);
            }
            else{
                console.log("Lletres fallades: " + lletra )
                numeroIntents++;
            }
        }
        
    }
    if (intentsMaxims <= numeroIntents){
        console.log("Has ganyat ")
        has_ganado = true;
        Menu();
    }else{
        console.log("L'usuari ha mort penjat");
        Menu();
    }
}
function validarLletra(lletra){
    if(lletra.match(/[a-z]/i) && lletra.length == 1) {
        return true;
    }
    else {
        console.log("No es una lletra y no se aceptan otros caracteres")
        return false;
    }
}
function comprobacioLletra(paraula,lletra){
    if(paraula.includes(lletra)){
        console.log("Existeix la lletra " + lletra)
        return true;
    }
    else{
        console.log("No existeix la lletra " + lletra)
        return false;
    }
}

function Estadistiques() {
    console.log("Total de partides:  " + total_partides );
    console.log("Partides ganadas:   " + total_guanyades);
    console.log("Partidas perdudes:  " + total_perdudes);
}
