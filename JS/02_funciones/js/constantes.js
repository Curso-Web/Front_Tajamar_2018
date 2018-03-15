'use strict'

// ES6 existen let y const con ámbito {}

function mostrar() {
    const X = 2  
    {
        const X = 23 
    }
    console.log(X)  
}

function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio
}

function moatrarCircunferencia(radio) {
    let cir = calcularCircunferencia(radio)
    console.log(`
    La circunferencia de radio ${radio}
    tiene de longitud ${cir}
    `)
}

const X = 5
mostrar() 
moatrarCircunferencia(5)


