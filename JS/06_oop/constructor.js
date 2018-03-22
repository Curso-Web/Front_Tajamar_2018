function Libro (autor, titulo, editorial, fecha, generos) {
    // var autor = 'Pepe'
    this.autor = autor,
    this.titulo = titulo,
    this.editorial = editorial,
    this.fecha = fecha,
    this.generos = generos
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

console.log(libro1)

let libro2 = new Libro(
    'William Gibson', 'Neuromante', 
    'Minotauro', new Date('1980'), ['SciFi'])

// Siempre se puede modificar cualquier objeto
libro2.propietario = 'Pepe'
console.log(libro2)

console.log(typeof libro1)
console.log(libro2.constructor.name)
