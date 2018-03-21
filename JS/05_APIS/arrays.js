
// aDatos es una INSTANCIA de Array
let aDatos = [1, 12, 67]

let aDatos2 = new Array(5)
console.log(aDatos2.length)
console.log(aDatos2)

let aDatos3 = new Array(5, 23, 21, 5)
console.log(aDatos3)
let oDatos = {}
// new Object()

let dni
let code = dni%23
let aLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 
'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
aLetras[code]

console.log(aLetras.length)

// Metodos de Arrays
// Inmutables
// Mutables

// console.log(aLetras.join(''))
// console.log(aLetras)
aLetrasOriginal = aLetras.slice(0, aLetras.length)
aLetras.sort() // Mutable
console.log('Copia No Sort: ', aLetrasOriginal)
aLetras.reverse() // Mutable
console.log('Reverse', aLetras)


// Mutable
let aNuevo = aLetras.splice(0,9,"X","Z")
console.log(aNuevo)
console.log(aLetras)

// Mutables
aLetras.push("") // añadir al final
aLetras.unshift("") // añadir al principio
aLetras.pop() // quitar último
aLetras.shift() // quitar primero


