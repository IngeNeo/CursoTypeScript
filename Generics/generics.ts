/* El concepto de Generics es que se defina el tipo de dato a almacenar en el arreglo y con ello
	no permitirá valores que no sean del mismo tipo definido */

/* Definimos una variable y espefificamos de que tipo sera, con ello en esta caso decimos que
	será un arreglo y que almacenará unicamente valores de tiupo número*/
let arregloNumeros: Array<number>;

/* Inicialiazmos el arreglo con los valores numericos*/
arregloNumeros = [1, 2, 3, 4];

/* Si definimos el arrglo y colocamos un valor diferente al numerico nos mostrará el error pues no permite su ejecución*/
// Error que nos muestra => Type 'string' is not assignable to type 'number'.
//arregloNumeros = ["Roger","Isabel"];

console.log(arregloNumeros);
console.log(arregloNumeros[0]);