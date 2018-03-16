let aDatos = [23, 54, 65, 34, 78, 67, 57, 89]

for (let i = 0; i < 6; i++ ) {
    console.log("Hola a todos, esta es la vuelta ", i+1)
}

for (let i = 6; i > 0; i-- ) {
    console.log("Hola al revés, esta es la vuelta ", i)
}

let total = 0
for (let i = 0; i < aDatos.length; i++) {
    // total += aDatos[i];
    total = total + aDatos[i]
    console.log(`El parcial es ${total}`)
}
console.log(`El total es ${total}`)

total = 0
for (let i = aDatos.length-1; i >= 0; i--) {
    total = total + aDatos[i]
} 

console.log(`El total al revés es ${total}`)


