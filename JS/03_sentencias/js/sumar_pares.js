'user stric'

/*  Función que comprueba si el argumento es par o impar
    devolviedo 0, 1, o 
     -2 si el argumento no es un número
     -3 si el argumento contene decimales
*/
function isPar(n) {
    let r = 0
    if (isNaN(n / 2)) {
        r = -2
    } else if (parseInt(n) != parseFloat(n)) {
        r = -3
    } else {
        r = n % 2
    }
    return r
}

function sumarPares (aDatos) {

    let total = 0
    for (let i = 0; i < aDatos.length; i++) {
        if (!isPar(aDatos[i])) {
            total += aDatos[i]
            console.log(`El parcial es ${total}`)
        }
    }
    return total
}

function verSumaPares(aDatos) {
    console.log('El resultado de la suma de los pares es ',
                    sumarPares(aDatos))
}

let aDatos = [23, 54, 65, 34, 78, 67, 57, 89]
verSumaPares(aDatos)

