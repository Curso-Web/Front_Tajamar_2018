export class Main {
    constructor() {
        console.log("Main loaded")
        this.aLibros = []
        this.vista = {
            eBtnBuscar: document.querySelector('#btnBuscar'),
            iClave: document.querySelector("#clave"),
            eSection : document.querySelector('section')
        }
        this.sURL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
        this.vista.eBtnBuscar
        .addEventListener('click',this.buscar.bind(this),false)
    }

   buscar() {
        this.aLibros = []
        const url = this.sURL + this.vista.iClave.value
        console.log(`Buscar en ${url}`)
        fetch(url)
        .then( (response) => {
            console.log(response)
            return response.json()
        })
        .then( (response) => {
            console.log(response)
            response.items.forEach(
             element => {
               this.aLibros.push(element.volumeInfo.title);
             }
           ) // Fin del forEach
           console.log( this.aLibros)
           this._mostrarLibros()
        })

    }

    _mostrarLibros() {
        if(this.aLibros.length) {
           let lista;
           lista = "<ul>"
           this.aLibros.forEach(item=>lista+=`<li>${item}</li>`)
           lista += "</ul>"
           this.vista.eSection.innerHTML = lista
        }
    }
}