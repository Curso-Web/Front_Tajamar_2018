function calcularFactorial (n) {
    let r = 1
    for (let i = n; i >=1; i--) {
        r *= i;
    }
    /* for (let i = 1; i <=n ; i++) {
        r *= i;
    } */
    return r
}

// test 
/* console.log(calcularFactorial (1)) // 1
console.log(calcularFactorial (2)) // 2
console.log(calcularFactorial (3)) // 6
console.log(calcularFactorial (4)) // 24
console.log(calcularFactorial (5)) //120
console.log(calcularFactorial (3.5))
console.log(calcularFactorial (-4))
console.log(calcularFactorial (0))
console.log(calcularFactorial ('Pepe'))
console.log(calcularFactorial ())  */


  function mostrarFactorial (n) {
  let mensaje = `El factorial de ${n} es ` 
                    + calcularFactorial(n) 
    console.log(mensaje)

    /* console.log(`El factorial de ${n} es ${calcularFactorial(n)}`) */
}

mostrarFactorial(5)


