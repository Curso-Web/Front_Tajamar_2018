'user stric'

/*  Función que comprueba si el argumento es par o impar
    devolviedo 0, 1, o 
     -2 si el argumento no es un número
     -3 si el argumento contene decimales
*/
function calcularPar(n) {
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
    let data = {
        total : 0,
        parciales : []
    }
    for (let i = 0; i < aDatos.length; i++) {
        if (!calcularPar(aDatos[i])) {
            data.total += aDatos[i]
            data.parciales[data.parciales.length] = aDatos[i] 
        }
    }
    return data
}

function verSumaPares(aDatos) {
    let oResultados = sumarPares(aDatos)
    for (let i = 0; i < oResultados.parciales.length; i++) {
        console.log(`El parcial es ${ oResultados.parciales[i]}`)
    }
    console.log('El resultado de la suma de los pares es ',
            oResultados.total  )
}

let aDatos = [23, 54, 65, 34, 78, 67, 57, 89]
verSumaPares(aDatos)

