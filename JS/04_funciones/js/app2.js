function calcularCuadrado ( a ) {
    a *= a
    return a 
}

// Los parametros ELEMENTALES pasan por valor
let a = 5
console.log(calcularCuadrado(a))
console.log(a)


function calcularCubo ( params ) {
    params.valor = params.valor * params.valor * params.valor
    return params.valor 
}

// Los parametros REFERENCIA pasan como si fuera por referencia
// Es habitual pasar un clon del objeto

params = {valor: 5}
// console.log(calcularCubo(Object.assign({}, params)))
console.log(calcularCubo(JSON.parse(JSON.stringify(params))))

console.log(params)
let oUser = {nombre: 'Pepe', apellido: 'Perez'}
console.log(oUser)

// Transformar objeto en String JSON
let sUser = JSON.stringify(oUser)
console.log(sUser)
let oUser2 = JSON.parse(sUser)
console.log(oUser2)

