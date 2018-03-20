// Funcion "clasica" asignada a variable


let  calcularCubo = function ( a ) {
    return a * a * a 
}

// En E6 funcion "arrow" (lambdas) asignada a variable
// => 
// Formato extenso
let  calcularCuboES6Ext = ( a ) => { return a * a * a }
// Abresiado en parte
let  calcularCuboES6Semi = a => { 
    a = a * a * a
    return  a
}
// Abreviado
let  calcularCuboES6 = a => a * a * a


let a = 12
setTimeout(function ( ) {
    console.log(a * a * a)
}, 2000)
setTimeout(() => {
    a = 12
    console.log(a * a * a)
} , 3000)

