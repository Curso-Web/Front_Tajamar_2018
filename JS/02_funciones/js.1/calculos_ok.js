'use strict'

// a y b son argumentos 
function sumar(a, b) {
    var c = a + b
    return c
}

function restar(a, b) {
    var c = a - b
    return c
}

function mostrar(r) {
    console.log("El resultado es ", r)
}

// paso 2 parámetros
var x = 123
var y = 34
var r = sumar(x, y)
mostrar(r)
mostrar(sumar(23, 45))
mostrar(sumar(2, 5))
var a = 123
var b = 34
var r = restar(b, a)
mostrar(r)
