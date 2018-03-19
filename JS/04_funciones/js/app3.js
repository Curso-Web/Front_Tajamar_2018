
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

let n = 5
/* 
MostrarCalculo(n, calcularCuadrado)
MostrarCalculo(n, calcularCubo)
MostrarCalculo(n, function() {
    return n*2
}) */

setTimeout( function () {
    console.log(calcularCubo(n))
}, 3000)
for (let i = 0; i < 1000; i++) {
    console.log(i); 
}
