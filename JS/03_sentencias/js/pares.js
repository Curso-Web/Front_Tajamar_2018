'user stric'

/*  Función que comprueba si el argumento es par o impar
    devolviedo 0, 1, o 
     -2 si el argumento no es un número
     -3 si el argumento contene decimales
*/
function calcularPar(n) {
        let r = 0
        if (isNaN(n/2)) {
            r = -2
        } else if (parseInt(n) != parseFloat(n)) {
            r = -3
        } else {
            r = n%2
        }
        return r
    }


/*  Función que comprueba si el argumento es par o impar
    devolviedo 0, 1, o -1 si el argumento no es un número
*/
function calcParEnteros(n) {
    return isNaN(n/2) ? -1 : parseInt(n)%2
}
 function test(n) {
        console.log(n)
    } 

/*     test(calcularPar())
    test(calcularPar('Pepe'))
    test(calcularPar('12'))
    test(calcularPar(0))
    test(calcularPar(12))
    test(calcularPar(11)) 
    test(calcularPar(12.4))
    test(calcularPar(11.7))
    test(calcPar())
    test(calcPar('Pepe'))
    test(calcPar('12'))
    test(calcPar(0))
    test(calcPar(12))
    test(calcPar(11)) 
*/

function mostrarEsPar (n) {
    const aMensajes = [
        `El número ${n} es PAR`,
        `El número ${n} es IMPAR`,
        `El dato ${n} no es un número`,
        `El número ${n} es decimal`
        ]
    // r puede valer 0, 1, -1    
    let r = calcularPar(n)
    // si r es -2 o -3, lo convierto en 2 o 3
    if (r < 0) { r = -r }
    // muestro la posicion r del array
    console.log(aMensajes[r])
}

function mostrarEsParCasos (n) {
      // r puede valer 0, 1, -2, -3    
      let r = calcularPar(n)
      let mensaje
      switch (r) {
          case 0 :
            mensaje =  `El número ${n} es PAR`
            break
          case 1 :
            mensaje = `El número ${n} es IMPAR`
            break
          case -2 :
            mensaje = `El dato ${n} no es un número`
            break
          case -3 :
            mensaje =  `El número ${n} es decimal`
            break
      }
      console.log(mensaje)
}


// Test

/* mostrarEsPar('Pepe')
mostrarEsPar(12)
mostrarEsPar(11)
mostrarEsPar(12.5)
mostrarEsPar(11.5)
 */


mostrarEsParCasos('Pepe')
mostrarEsParCasos(12)
mostrarEsParCasos(11)
mostrarEsParCasos(12.5)
mostrarEsParCasos(11.5)
