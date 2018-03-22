function Libro (autor, titulo, editorial, fecha, generos) {
    // var autor = 'Pepe'
    this.autor = autor,
    this.titulo = titulo,
    this.editorial = editorial,
    this.fecha = fecha,
    this.generos = generos,
    this.mostrarReferencia = function () {
        let ref = this.autor + '. '
        ref += '"' + this.titulo + '". '
        ref += this.editorial + ', ' + this.fecha.getFullYear() + '. '
        return ref
    }
}

/* Libro()
console.log(autor)
 */
let libro1 = new Libro(
    'J. R. R. Tolkien',
    'El Señor de los Anillos',
    'Minotauro',
    new Date('1954'),
    ['Fantasia'])
console.log(libro1.mostrarReferencia())

let libro2 = new Libro(
    'William Gibson', 'Neuromante', 
    'Minotauro', new Date('1980'), ['SciFi'])
console.log(libro2.mostrarReferencia())



/* let libro1 = {
    
    mostrarReferencia: 
} */