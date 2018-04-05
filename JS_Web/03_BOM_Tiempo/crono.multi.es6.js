    // Definición de la Función Constructora de la Pseudoclase Crono
    class Crono {
        constructor(posicion) {
            this.t = 0;
            this.posicion = posicion;
        }
        
        // Se añade el método mostrar al prototipo 
        mostrar() {
            var oCrono = document.getElementById('crono'+this.posicion),
                timeCrono = +oCrono.innerHTML + 0.1;
            oCrono.innerHTML = timeCrono.toFixed(1); // Convierte el número a string con 1 decimal
        }; 

        arrancar() { this.t = setInterval(this.mostrar.bind(this), 100); };

        parar() { clearInterval(this.t); this.t = undefined; };

        limpiarCrono() {
            document.getElementById('crono'+this.posicion).innerHTML = "0.0";
        };

        cambiarCrono() {
            if (!this.t) { this.arrancar(); }
            else { this.parar(); }
        };
    }

// Función main del script
function main() {

    //**************************************************************

    // Se creean n objetos de la "clase" Crono,
    // correspondientes a los elementos definidos en HTML

    let n = 4
    const aCronos = []

    for (let i = 0; i < n; i++) {
        aCronos.push(new Crono(i+1))
    }

    // Se definen como manejadores de los eventos
    // los métodos de los correspondientes objetos 
    // en lugar de una única función creada al margen de los objetos

    aCronos.forEach( (crono) => {
        document.getElementById('btn_cambiar_'+crono.posicion).onclick = 
            function () { crono.cambiarCrono(); };
        document.getElementById('btn_inicializar_'+crono.posicion).onclick = 
            function () { crono.limpiarCrono(); };
    })

} //Fin de la función main()

document.addEventListener("DOMContentLoaded", main);