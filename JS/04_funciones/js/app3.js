
function calcularCuadrado ( a ) {
    a *= a
    return a 
}

function calcularCubo ( a ) {
    a = a * a * a
    return a 
}

function MostrarCalculo(n, f) {
    console.log(`El resultado es ${f(n)}`)    
}

/* 
MostrarCalculo(n, calcularCuadrado)
MostrarCalculo(n, calcularCubo)
MostrarCalculo(n, function() {
    return n*2
}) */

let n = 5

function mostrarResultado1 () {
    console.log(calcularCubo(n))
}

let mostrarResultado2 = function () {
    console.log(calcularCubo(n))
} 

setTimeout( mostrarResultado1 , 1000)
setTimeout( mostrarResultado2 , 2000)
setTimeout( function () {
    console.log(calcularCubo(n))}  , 3000)

for (let i = 0; i < 10000; i++) {
    console.log(i); 
}

console.log(typeof mostrarResultado1)
console.log(typeof mostrarResultado2)

let miFuncion = mostrarResultado2
console.log(typeof miFuncion)

