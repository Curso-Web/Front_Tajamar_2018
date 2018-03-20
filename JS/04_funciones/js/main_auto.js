// Clousure
// patrón IIFE (Immediately-invoked function expression)
    
(function (n) {

    function calcularCubo(a) {
        a = a * a * a
        return a 
    }

    let mostrarResultado2 = function () {
        console.log(calcularCubo(n))
    } 
    
    mostrarResultado2()
})(6)

