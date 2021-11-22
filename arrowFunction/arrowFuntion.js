//Difinición de función tradicional
var suma = function (a, b) {
    return a + b;
};
console.log(suma(5, 3));
//let sumaFlecha = (a:number, b:number) => a + b;
//Definición de metodo flecha
var sumaFlecha = function (a, b) {
    return a + b;
};
console.log(sumaFlecha(3, 2));
//Función tradicional
var obtenerNombre = function () {
    return "Roger Valencia";
};
//Función flecha
var obtenerNombreFlecha = function () { return "Isabel Miranda"; };
console.log(obtenerNombre());
console.log(obtenerNombreFlecha());
