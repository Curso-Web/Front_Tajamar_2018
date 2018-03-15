// Objeto literal
const user = {
    nombre : 'Pepe',
    apellido : 'Perez',
    direccion : {
        calle : '',
        ciudad : '',
        c_postal: ''
    },
    edad : 23,
    aficiones : ['deporte', 'papiroflexia'],
    isCasado : false}
console.log(typeof user)
user.cargo = "CEO"
console.log(user)

// Otros tipos de Objetos

// Array

let aDatos = [12, 23, 45, 45, 87]
let aDatosChungo = [12, 'Pepe', true, null, undefined]
console.log(aDatos)
console.log(aDatos[1])
aDatos[15] = 30
console.log(aDatos)

aUsuarios = [
    {nombre : 'Pepe',
    apellido : 'Perez',
    direccion : {
        calle : '',
        ciudad : '',
        c_postal: ''
    },
    edad : 23,
    isCasado : false}, 
    {nombre : 'Pepe',
    apellido : 'Perez',
    direccion : {
        calle : '',
        ciudad : '',
        c_postal: ''
    },
    edad : 23,
    isCasado : false}
]

console.log(typeof aUsuarios)
console.log(Array.isArray(aUsuarios))

// String
// Number 
// Boolean 

// Function, Method, Constructor

let fecha = new Date() 
let exp = new RegExp()
let error = new Error() 

// Math.cos(90)
// JSON.parse()