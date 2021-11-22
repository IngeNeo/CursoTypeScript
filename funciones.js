"use strict";
//Definimos la variable y su tipo
let saludo = "Hola mundo desde TypeScript Con IngeNeo";
//Otro manera de definir una variable y luego inicializarla
let numero;
numero = 31;
//Constantes se nombran en Mayusculas y su valor no se puede modificar posteriormente
const NUMERO_PI = 3.141516;
function saludar() {
    console.log(saludo);
    console.log(numero);
    console.log(NUMERO_PI);
}
saludar();
