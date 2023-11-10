let numero_intents =0;
const intentos_maximos = 7;

function ValidarLetra(letra){
    if(letra.match(/[a-z]/i) && letra.length == 1) {
        return true;
    }
    else {
        return false;
    }
}
function ComprobacionLetra(palabra,letra){
    if(palabra.includes(letra)){
        console.log("Existe la letra" + letra)
        return true;
    }
    else{
        console.log("No existe la letra" + letra)
        return false;
    }
}
function IniciarJoc(){
    const palabra = prompt("Escribe palabra: ");
    while(numero_intents <intentos_maximos){
        let letra = prompt("Escribe letra");
        if(ValidarLetra(letra)){
            if(ComprobacionLetra(palabra,letra)){

            }
            else{
                numero_intents++;
            }
        }
        
    }
}

    // Pasamos una palabra y comprobamos 
    // si esta la letra en la palabra


