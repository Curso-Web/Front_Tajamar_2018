class Persona {
    constructor (nombre, fecha, altura) {
        this.nombre = nombre
        this.fechaNacim = fecha
        this.altura = altura
    }

    _calcularAños() {
        let hoy = new Date()
        return parseInt((hoy - this.fechaNacim)/(1000*60*60*24*365))
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}
        y tengo ${this._calcularAños()} años`) 
    }
}

let persona1 = new Persona('Pepe', new Date(1995,3,3), 1.60)
persona1.saludar()

class Alumno extends Persona {
    constructor(nombre, fecha, altura, aula, equipo) {
        super(nombre, fecha, altura)
        this.aula = aula
        this.equipo = equipo
    }

    saludar() {
        super.saludar()
        console.log(`Soy del equipo ${this.equipo}`)
    }
}

let alumno1 = new Alumno('Juan', new Date(1999,3,3), 1.60, 'T22', 'Delta')
alumno1.saludar()