/* Creamos una interfaz en ella los campos que se definan se deben respetar, es decir se deben proporcionar
	si deseamos que un campo sea opcional lo definimos colocando al final del nombre del campo el simbolo de pregunta '?' */
interface Usuario {
	nombreUsuario: string;
	password: string;
	confirmarPassword?: string;
}

/* Creamos una variable de tipo usuario  y proporcionamos los valores solicitados*/
let usuario1: Usuario = { nombreUsuario: "Roger", password: "inge@neo" };

/* Imprimimos en consola la información del usuario creado */
console.log(usuario1);
/* Si solo deseamos imprimir un campo de la variable Usuario podemos hacerlo llamando la propiedad anteponiendo un punto '.' */
console.log(usuario1.nombreUsuario);

interface Abordar {
	abordarTransporte(): void;
}

let avion: Abordar = {
	abordarTransporte: function () {
		console.log("abordando");
	}
}

avion.abordarTransporte();