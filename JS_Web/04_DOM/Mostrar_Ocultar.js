

class Texto {
    constructor (articulo) {
        this.oArticulo = document.getElementById(articulo);
        this.oElemento = this.oArticulo.querySelector("span"); //texto adicional
        this.oEnlace = this.oArticulo.querySelector("a") //enlace	
        this.oEnlace.addEventListener("click", this.mostrar.bind(this))
    }
	
    mostrar () {
        this.oElemento.classList.toggle("oculto")
        if (this.oElemento.className.indexOf("oculto") >=0 ) {
           this.oEnlace.innerHTML = "Seguir leyendo";
        }
        else { // elemento.className incluye "visible")
            this.oEnlace.innerHTML = "Ocultar artículo";
        }
    }
}

function init() {
    let n = document.querySelectorAll('.article_long').length
    let aTextos = []
    for (let i = 0; i < n; i++) {
        aTextos.push(new Texto("articulo"+(i+1)))
    }
}

/* function main() {
    oTexto1 = new Texto("articulo1")		
    oTexto2 = new Texto("articulo2")
    oTexto3 = new Texto("articulo3") 
} // fin de la función main */

document.addEventListener("DOMContentLoaded", init); 