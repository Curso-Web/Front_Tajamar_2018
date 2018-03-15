'use strict'

// ES6 existen let y const con ámbito {}

function mostrar() {
    let x = 2     
    {
        let x = 23 
    }
    console.log(x)  
}

let x = 5
mostrar() 

