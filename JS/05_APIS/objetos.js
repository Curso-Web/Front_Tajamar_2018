let libro1 = {
    autor: 'J. R. R. Tolkien',
    titulo: 'El Señor de los Anillos',
    editorial: 'Minotauro',
    fecha: 1954,
    generos: ['Fantasia'],
    mostrarReferencia: function () {
        let ref = this.autor + '. '
        ref += '"' + this.titulo + '". '
        ref += this.editorial + ', ' + this.fecha + '. '
        console.log(ref)
    }
}

libro1.mostrarReferencia()

let x = 'Pepe'

console.log(isNaN(x))

// Wrapper objects
console.log(x.length)
console.log(x.toUpperCase())
let sFrase = 'Un anillo para controlarlos a todos'
let aDatos = sFrase.split(' ')
console.log(aDatos)
let nuevaFrase = aDatos.join('')
console.log(nuevaFrase)


