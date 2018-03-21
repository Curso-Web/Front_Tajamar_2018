app = {
    cadena: '',
    isPalindromo: true,
    aRespuestas: [
        " no parece ser un palíndromo",
        " es un palíndromo"
    ],
}
app.probarPalindromo = function () {
    let cadena = this.cadena
    // Pasar la cadena a minusculas  y
    // Convertirla en un array seperando las palabras
    // Introduce una frase
    // cadena = cadena.toLowerCase() // 'introduce una frase'
    // aPalabras = cadena.split(' ') // ['introduce', 'una', 'frase']
    // cadena = aPalabras.join(''); // 'introduceunafrase'

    // var aPalabras = cadena.toLowerCase().split(" ");
    // Reconstruir la cadena sin los espacios en blanco 
    // cadena = aPalabras.join("");

    // Pasar la cadena a minusculas  y
    // Convertirla en un array seperando las palabras
    // Reconstruir la cadena sin los espacios en blanco 
    cadena = cadena.toLowerCase().split(" ").join(""); // 'introduceunafrase'

    // Crear dos arrays, directo y reverso, con las letras de la cadena
    //var aLetras = cadena.split(""); // [i,n,t,r,o,d,u,c,e,u,n,a,f,r,a,s,e]
    //var aLetrasReves = cadena.split("").reverse(); 

    // comparar las cadenas correspondientes a los arrays
    //if (aLetras.join() != aLetrasReves.join()) {
    //    return false;
    //}
    //return true;

    // comparar la cadenas
    // con la cadena convertida a array, invertido este y vuelta a hacer cadena 
    /* if (cadena != cadena.split("").reverse().join("")) {
        this.isPalindromo = false;
    } */
    this.isPalindromo = (cadena === cadena.split("").reverse().join("")) ?  true : false

} // Fin del metodo probarPalindromo()

app.respuesta = function() {
    let  sFrase = `La cadena "${this.cadena}"
    ${this.aRespuestas[Number(this.isPalindromo)]}`
    console.log(sFrase)
}

app.respuestaHtml = function() {
    let  sFrase = 'La cadena "' + this.cadena + '"<br>';
    sFrase += this.aRespuestas[Number(this.esPali)];
    document.write("<p>" + sFrase + "</p>");
}

app.main = function (cadena) {
    this.cadena = cadena
    this.probarPalindromo()
    this.respuesta()
}

let sFrase = "Introduce una frase";
app.main(sFrase);
sFrase = "La ruta nos aporto otro paso natural";
app.main(sFrase);
sFrase = "Dabale arroz a la zorra el abad";
app.main(sFrase);
