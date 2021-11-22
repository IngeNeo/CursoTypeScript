var Persona = /** @class */ (function () {
	function Persona(nombre) {
		this.nombre = nombre;
	}
	Persona.prototype.getNombre = function () {
		return this.nombre;
	};
	Persona.metodoEstatico = function () {
		return 31;
	};
	return Persona;
}());
var persona1 = new Persona("Roger");
console.log(persona1.getNombre());
console.log(Persona.metodoEstatico());
