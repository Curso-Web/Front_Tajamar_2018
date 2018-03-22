// let oDatos = new Object() = {}

let libro1 = {
    autor: 'J. R. R. Tolkien',
    titulo: 'El Señor de los Anillos',
    editorial: 'Minotauro',
    fecha: new Date('1954'),
    generos: ['Fantasia'],
    mostrarReferencia: function () {
        let ref = this.autor + '. '
        ref += '"' + this.titulo + '". '
        ref += this.editorial + ', ' + this.fecha.getFullYear() + '. '
        console.log(ref)
    }
}

libro1.mostrarReferencia()

let miFuncion = function() {
    console.log ('Soy una funcion')
    console.log(this)
}

/* Opciones de invocación
La diferencia entre funciones y métodos está en el patrón de invocación , 
que determina cual es el valor de this */

// Patrón de invocación Function
// this es el objeto global del programa
miFuncion()

let o = {head: 'Soy un objeto',
        metodo: miFuncion }
// Patrón de invocación Method
// this es el objeto en el que esta el método
o.metodo()

// Patrón de invocación Constructor
// this es el nuevo objeto creado

let MiFuncion = miFuncion
let oNuevoObjeto = new MiFuncion()

// Patrón de invocación Apply
// permite definir el valor de this

let obj = {head: 'Soy un objeto'}
miFuncion.call(obj)