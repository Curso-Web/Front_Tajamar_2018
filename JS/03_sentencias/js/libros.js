{
    let libro = {
        titulo: '',
        autor: '',
        editorial: '',
        fecha: 0,
        generos: []
    }

    let libro1 = Object.create(libro)
    let libro2 = Object.create(libro)

    libro1.autor = 'J. R. R. Tolkien'
    libro1.titulo = 'El Señor de los Anillos'
    libro1.editorial = 'Minotauro'
    // libro1.fecha = '1954'
    // libro1.generos = ['Fantasia']

    libro2.autor = 'William Gibson'
    libro2.titulo = 'Neuromante'
    libro2.editorial = 'Minotauro'
    // libro2.fecha = '1954'
    // libro2.generos = ['Fantasia']
}
{
    let libro1 = {
        autor: 'J. R. R. Tolkien',
        titulo: 'El Señor de los Anillos',
        editorial: 'Minotauro',
        fecha: 1954,
        generos: ['Fantasia']
    }
    
    let libro2 = {
        titulo: 'Neuromante',
        autor: 'William Gibson',
        editorial: 'Minotauro',
        fecha: 1982,
        primera_edicion: {
            editorial : "Acme",
            fecha : 1980
        },
        generos: ['SciFi', 'CyberPunk']
    }
    
/*     console.log(libro1)
    console.log(`El autor es ${libro2.autor}` )
    console.log(typeof libro2.autor)
    console.log(libro2.fecha)
    console.log(typeof libro2.fecha)
    console.log(typeof libro2.generos)
    console.log(libro2.primera_edicion.editorial) */

    for (let key in libro1) {
        console.log(`La clave ${key} vale `, libro1[key])     
    }

}


