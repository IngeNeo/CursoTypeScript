/* Creamos una clase llamada Persona */
class Persona {
	private nombre: string;

	/* Definimos el metodo constructor */
	constructor(nombre: string) {
		this.nombre = nombre;
	}

	/* Creamos el metodo get para poder acceder al valor de la propiedad */
	getNombre(): string {
		return this.nombre;
	}

	/* Creamos un metodo estati y definimos un valor inicial */
	static metodoEstatico(): number {
		return 31;
	}
}

/* Creamos una variable persona y la instanciamos con un valor */
let persona1 = new Persona("Roger");

/* Imprimimos en consola el valor de la propiedad nombre de la clase Persona */
console.log(persona1.getNombre());

//Imprimimos el valro del metodo estatico
console.log(Persona.metodoEstatico());