// Definición de la función Menu
function Menu() {
  // Solicitar al usuario que seleccione una opción del menú
  let menu = parseInt(prompt("Selecciona una opción para empezar:\n1. Iniciar el juego\n2. Mostrar estadísticas\n3. Salir\n"));

  // Utilizar un switch para manejar las diferentes opciones del menú
  switch (menu) {
    case 1:
      // Llamar a la función IniciarJoc() si el usuario elige la opción 1
      IniciarJoc();
      break;
    case 2:
      // Llamar a la función Estadistiques() si el usuario elige la opción 2
      Estadistiques();
      break;
    case 3:
      // Mostrar un mensaje en la consola si el usuario elige la opción 3
      console.log("El juego ha terminado");
      break;
  }
}
// Declaración de variables globales del juego

let totalPartidas = 0;           // Número total de partidas jugadas
let totalPartidasGanadas = 0;   // Número total de partidas ganadas
let totalPartidasPerdidas = 0;  // Número total de partidas perdidas
let has_ganado = false;         // Indica si el jugador ha ganado la partida actual

function IniciarJoc() {
  let numero_intents = 0;
  totalPartidas++;
  const intentos_maximos = 6;
  const palabra = prompt("Escribe una palabra: ");
  let palabraAdivinada = "_".repeat(palabra.length);

  while (numero_intents < intentos_maximos && !has_ganado) {
    let letra = prompt("Escribe una letra: ");
    if (validarLetra(letra)) {
      if (comprobacionLetra(palabra, letra)) {
        console.log("Palabra: " + palabraAdivinada);
        if (palabra === palabraAdivinada) {
          console.log("¡Has ganado el juego!");
          has_ganado = true;
          totalPartidasGanadas++;
          Menu();
        }
      } else {
        console.log("Letras falladas: " + letra);
        numero_intents++;
      }
    }
  }

  if (intentos_maximos <= numero_intents) {
    console.log("El usuario ha muerto ahorcado");
    totalPartidasPerdidas++;
    Menu();
  }
}

// Esta función valida si la cadena proporcionada es una letra (mayúscula o minúscula) y tiene una longitud de 1.
function validarLetra(letra) {
  // Se utiliza una expresión regular para verificar si la cadena contiene solo letras (mayúsculas o minúsculas).
  // También se verifica que la longitud de la cadena sea igual a 1.
  if (letra.match(/[a-z]/i) && letra.length == 1) {
    // Si cumple con las condiciones, se devuelve true, indicando que es una letra válida.
    return true;
  } else {
    // Si no cumple con las condiciones, se imprime un mensaje en la consola y se devuelve false.
    console.log("No es una letra y no se aceptan otros caracteres");
    return false;
  }
}


// Función que verifica si una letra está presente en una palabra dada.
function comprobacionLetra(palabra, letra) {
  // Verifica si la letra está presente en la palabra.
  if (palabra.includes(letra)) {
    // Imprime un mensaje indicando que la letra existe.
    console.log("Existe la letra " + letra);
    // Devuelve true para indicar que la letra existe.
    return true;
  } else {
    // Imprime un mensaje indicando que la letra no existe.
    console.log("No existe la letra " + letra);
    // Devuelve false para indicar que la letra no existe.
    return false;
  }
}


// Función para mostrar estadísticas del juego en una nueva ventana emergente
function Estadistiques() {
  // Calculamos los porcentajes de las partidas ganadas, perdidas y totales
  const porcentajePartidas = (totalPartidas / (totalPartidasGanadas + totalPartidasPerdidas) * 100).toFixed(2);
  const porcentajeGanadas = (totalPartidasGanadas / totalPartidas * 100).toFixed(2);
  const porcentajePerdidas = (totalPartidasPerdidas / totalPartidas * 100).toFixed(2);
    // Construimos un mensaje con información de las estadísticas

  console.log("Total de partidas: " + totalPartidas);
  console.log("Partidas ganadas: " + totalPartidasGanadas + " (" + porcentajeGanadas + "%)");
  console.log("Partidas perdidas: " + totalPartidasPerdidas + " (" + porcentajePerdidas + "%)");
  console.log("Porcentaje total de partidas: " + porcentajePartidas + "%");
}

Menu();
