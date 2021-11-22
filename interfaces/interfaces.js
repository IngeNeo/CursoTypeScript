/* Creamos una variable de tipo usuario  y proporcionamos los valores solicitados*/
var usuario1 = { nombreUsuario: "Roger", password: "inge@neo" };
/* Imprimimos en consola la información del usuario creado */
console.log(usuario1);
/* Si solo deseamos imprimir un campo de la variable Usuario podemos hacerlo llamando la propiedad anteponiendo un punto '.' */
console.log(usuario1.nombreUsuario);
var avion = {
	abordarTransporte: function () {
		console.log("abordando");
	}
};
avion.abordarTransporte();
