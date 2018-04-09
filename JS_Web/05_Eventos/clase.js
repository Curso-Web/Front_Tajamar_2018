/* function PersonaOld (x) {
    this.x = x 
    this.fx = function () {}
}

PersonaOld.prototype.saludar = function () {}

x1 = new PersonaOld(1)
x2 = new PersonaOld(2)
x3 = new PersonaOld(3)
x4 = new PersonaOld(4) */



class Persona {
    constructor(name, apellido) {
        this.name = name;
        this.apellido = apellido;
    }

    saludar() {
        console.log(`Hola, soy ${this.name}`)
    }

    despedirse() {}
}

class Usuario extends Persona {
    constructor (name, apellido, clave) {
        super(name, apellido)
        this.clave = clave
    }

    saludar() {
        super.saludar()
        console.log(`Mi clave es ${this.clave}`)
    }
}


let us1 = new Usuario('Pepe', 'Perez', '007')
console.log(us1)

us1.saludar()