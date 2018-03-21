let aDatos =  [2, 5, 7, 4, 9]
let oDatos = {
    alto: 2,
    ancho: 5,
    largo: 7,
    peso: 4,
    color: 9
}

/* console.log("Array con for")
for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i]
    console.log(item)
}

console.log("Objeto for in")
for (const key in oDatos) {
    const item = oDatos[key];
    console.log(key, item)
}

console.log("Array con for in")
let sum = 0
for (const i in aDatos) {
    const item = aDatos[i];
    sum += item
    console.log(item)
}
console.log(sum)

// ES6
console.log("Objeto for of")
let i = 0
for (const item of aDatos) {
    console.log(i, item)   
    i++
} */

aDatos =  [2, 5, 7, 4, 9]
aDatos.forEach(item => console.log(item))

// map crea una proyeccion del original
let aCuadrados = aDatos.map(item => item*item)
console.log(aCuadrados)

let aPares = aDatos.filter(item => item%2 === 0 )
console.log(aPares)

let aImparesCuadrados = aDatos
    .filter(item => item%2 !== 0)
    .map(item => item*item)
console.log(aImparesCuadrados)

let total = aDatos.reduce((prev, item) => prev += item)
console.log(total)
//aDatos.reduceRight()

// aDatos.every()
// aDatos.some()