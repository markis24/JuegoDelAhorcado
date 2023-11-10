function Menu() {
    let menu = parseInt(prompt("Selecciona una opción para empezar:\n1. Iniciar el juego\n2. Mostrar estadísticas\n3. Salir\n"));
    switch (menu) {
      case 1:
        IniciarJoc();
        break;
      case 2:
        Estadistiques();
        break;
      case 3:
        console.log("El juego ha terminado");
        break;
    }
  }
  
  let total_partides = 0;
  let total_guanyades = 0;
  let total_perdudes = 0;
  let has_ganado = false;
  
  function IniciarJoc() {
    let numero_intents = 0;
    total_partides++;
    const intentos_maximos = 6;
    const palabra = prompt("Escribe una palabra: ");
    let palabraAdivinada = "_".repeat(palabra.length);
  
    while (numero_intents < intentos_maximos && !has_ganado) {
      let letra = prompt("Escribe una letra: ");
      if (ValidarLetra(letra)) {
        if (ComprobacionLetra(palabra, letra)) {
          console.log("Palabra: " + palabraAdivinada);
          if (palabra === palabraAdivinada) {
            console.log("¡Has ganado el juego!");
            has_ganado = true;
            total_guanyades++;
            Menu();
          }
        } else {
          console.log("Letra fallada: " + letra);
          numero_intents++;
        }
      }
    }
  
    if (intentos_maximos <= numero_intents) {
      console.log("L'usuari mor penjat");
      total_perdudes++;
      Menu();
    }
  }
  
  function ValidarLetra(letra) {
    if (letra.match(/[a-z]/i) && letra.length == 1) {
      return true;
    } else {
      console.log("No es una letra y no se aceptan otros caracteres");
      return false;
    }
  }
  
  function ComprobacionLetra(palabra, letra) {
    if (palabra.includes(letra)) {
      console.log("Existe la letra " + letra);
      return true;
    } else {
      console.log("No existe la letra " + letra);
      return false;
    }
  }
  
  function Estadistiques() {
    const porcentajePartidas = (total_partides / (total_guanyades + total_perdudes) * 100).toFixed(2);
    const porcentajeGanadas = (total_guanyades / total_partides * 100).toFixed(2);
    const porcentajePerdidas = (total_perdudes / total_partides * 100).toFixed(2);
  
    console.log("Total de partides: " + total_partides);
    console.log("Partides guanyades: " + total_guanyades + " (" + porcentajeGanadas + "%)");
    console.log("Partides perdudes: " + total_perdudes + " (" + porcentajePerdidas + "%)");
    console.log("Porcentaje de partidas: " + porcentajePartidas + "%");
  }
  
  Menu();
  