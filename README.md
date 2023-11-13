# Juego Del Ahorcado

## Enunciado

Al iniciar el programa, el usuario verá un menú por consola con las siguientes opciones:

1. Iniciar un juego
2. Estadísticas
3. Salir

Se verificará que la opción sea correcta. En caso de error, se mostrará un mensaje de error y se volverá a mostrar el menú. 

El programa no se detendrá hasta que se seleccione la opción 3.

# Primer programa por consola en JavaScript

## Si el usuario escribe 1 (Empieza el programa):

1. Nos saldra un prompt y nos pide una palabra
2. Veremos por consola la longitud de la palabra con barras bajas (Ex: _ _ _ _)
3. El programa nos preguntara por una letra
4. Hasta que el usuario no acierte o quede eliminado podra escribir las letras en el prompt
5. En cada tirada podemos ver si ha fallado o ha acertado y por consola mostraremos los resultados

* Ejemplo:  C _ S _
*           Letras falladas 3/7: B, X, E

6. Si el usuario acierta la palabra mostraremos un mensaje de enorabuena i volveremos al menu principal
7. Si el usuario "muere ahorcado" mostraremos un mensaje y volveremos al menu


## Si el usuario escribe 2 (Estadísticas del programa):

* Mostraremos la cantidad de partidas jugadas.
* Mostraremos la cantidad de partidas ganadas y el %.
* Mostraremos la cantidad de partidas perdidas y el %

* Ejemplo:
*          Total de partidas: 8
*          Partidas ganadas (50%):  4
*          Partidas perdidas (50%): 4


## Si el usuario escribe 3 (Salir del programa):

* Saldremos del juego.


# Segundo programa con interficie grafica (HTML y Boostrap)

Ahora tenemos que hacer el mismo programa del ahorcado ,pero ahora añadiendo interficie grafica con HTML y Boostrap.

### Requisitos del programa

1. Tienen que aparecer 2 botones (Inici partida,Estadistiques)

2. Si damos click al Boton Inici Partida

*   Tenemos que mostrar imagenes del juego del ahorcado cuando va iniciar una partida ,si no acierta la palabra    *   secreta . Mostraremos una imagen del muñeco del ahorcado
*   Mostramos al usuario el abecedario cuando va iniciar la partida
*   Mostramos al usuario la cantidad de caracteres que tiene su palabra secreta
*   Seguiremos mostrando los botones de Inici partida y Estadistiques


3. Si damos click al Boton Estadistiques

*   Se tiene que abrir una nueva ventana donde nos muestra las estadisticas del juego hasta que hemos dado click al boton de estadisticas


4. Si al final no acertamos todas las letras de la palabra secreta

*   Nos muestra una alerta de que el usuario a muerto ahorcado

5. Si al final hemos acertado todas las letras de la palabra secreta


*   Nos tiene que mostrar todas las letras que hemos utilizado para adivinar la palabra
*   Tambien nos tiene que aparecer un mensaje de que hemos ganado el juego del ahorcado


