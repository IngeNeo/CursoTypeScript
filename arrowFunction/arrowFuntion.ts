//Difinición de función tradicional
let suma = function (a: number, b: number) {
	return a + b;
};

console.log(suma(5, 3));

//let sumaFlecha = (a:number, b:number) => a + b;
//Definición de metodo flecha
let sumaFlecha = (a: number, b: number) => {
	return a + b;
};

console.log(sumaFlecha(3, 2));

//Función tradicional
var obtenerNombre = function () {
	return "Roger Valencia";
}

//Función flecha
let obtenerNombreFlecha = () => "Isabel Miranda";

console.log(obtenerNombre());
console.log(obtenerNombreFlecha());