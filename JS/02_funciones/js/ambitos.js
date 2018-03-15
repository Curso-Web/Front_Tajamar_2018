'use strict'

// ES6 existen let y const con ámbito {}

function mostrar() {
    let x = 2  
    x = 124  
    {
        let x = 23 
        
    }
    console.log(x)  
}

let x = 5
x = 25
mostrar() 

