const userPepe = {
    nombre : 'Pepe',
    apellido : 'Perez',
    edad : 17,
    aficiones : ['deporte', 'papiroflexia'],
    isCasado : false,
    genero :  'M'}

const userMaria = {
    nombre : 'Maria',
    apellido : 'Lopez',
    edad : 53,
    aficiones : ['papiroflexia', 'lectura'],
    isCasado : true,
    genero :  'F'
    }

const MAYORIAEDAD = 18

function crearSaludo(user) {
    let mensaje = 'Hola ' 
    if (user.edad >= MAYORIAEDAD && user.genero == 'M') {
        mensaje += 'D. '
    } else if(user.edad >= MAYORIAEDAD && user.genero == 'F') {
        mensaje += 'Dña. '
    }
    mensaje += user.nombre
    if ( user.isCasado ) {
        if (user.genero == 'M') {
            mensaje += '. Saludos a tu mujer'
        } else {
            mensaje += '. Saludos a tu marido'
        }   
    }
    return mensaje
}

function saludar(usuario) {
    console.log(crearSaludo(usuario))
}

function saludarHtml(usuario) {
    document.write(crearSaludo(usuario)+'<br>')
}

saludar(userMaria)
saludar(userPepe)
saludarHtml(userMaria)
saludarHtml(userPepe)


/* if ( 1 ) {}
else {}

if ( 1 ) {}
else if ( 2 ) {}
else if ( 3 ) {} 
else {}
 */