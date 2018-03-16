// expresion de asignacion
let x = 25
// instruccion -> side effect
console.log(x)
x++
// x = x + 1
console.log(x)
x--
// x = x - 1
console.log(x)

// Operadores aritméticos
x = 27
y = parseInt( x / 5) // 5
console.log(y)
let r = x % 5 // 2
console.log(r)
y = x / 5 // 5.4
console.log(y)

// Operadores de asignación aritmética
x = 12
x += 4 // x = x + 4 = 16
console.log(x)

// Operadores relacionales
x = 12
y = '12'

console.log(x == y)
console.log(x != y)
console.log(x === y)
console.log(x !== y)

// ERROOOOOOR
// if(x = 22) {
// }

if(x === 12) {
    console.log("Estoy dentro del if")
}

console.log(!!x)

x = 'abc'
y = 'def'

console.log(x < y)

console.log(x.length === y.length)

// Operador ternario
// expresion ? true : false

let edad = 32
console.log(edad > 30 ? 'Buenos días' : 'Hola chaval')

let a = 12
let b = 2
let c = 4

if( a > b || a < z ) {
    console.log("Comprobado")
}

console.log(2 * 4 + 5)
