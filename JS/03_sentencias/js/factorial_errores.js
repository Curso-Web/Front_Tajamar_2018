function calcularFactorial (n) {
    if (typeof n === 'undefined') { throw 0 }
    else if (isNaN(n/2)) { throw 1}
    else if (parseInt(n) !== parseFloat (n)) { throw 2}
    else if (n <= 0) {throw 3}
    else {
        let r = 1
        for (let i = n; i >=1; i--) {
            r *= i;
        }
        // TODO Comprobar rendimiento
        if (r === Infinity ) {throw 4}
        else { return r }
    }
}

// test 

function test (n) {
    const ERROR_BASE = 'No puedo calcular el factorial de '
    aErrores = [
        'nada',
        'algo no numérico',
        'un número con decimales',
        'un número menor que 0']
    let r
    try {
        r = calcularFactorial(n)
        console.log(r)       
    } catch (error) {
        console.log(ERROR_BASE + aErrores[error])
    }
}

/* test(1)
test(2) // 2
test(3) // 6
test(4) // 24
test(5) //120
test(3.5)
test(-4)
test(0)
test('Pepe')
test()
 */



 function mostrarFactorial (n) {
    const ERROR_BASE = 'No puedo calcular el factorial de '
    aErrores = [
        'nada',
        'algo no numérico',
        'un número con decimales',
        'un número menor que 0',
        'un número tan grande']
    try {
        let mensaje = `El factorial de ${n} es `
                    + calcularFactorial(n)
        console.log(mensaje)            
    } catch (error) {
        console.log(ERROR_BASE + aErrores[error])
    }
}

mostrarFactorial()