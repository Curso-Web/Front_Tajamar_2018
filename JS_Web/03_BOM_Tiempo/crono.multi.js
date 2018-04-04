// Función main del script
function main() {

    //***************************************************************
    // Se crea la "CLASE" Crono
    //***************************************************************

    // Definición de la Función Constructora de la Pseudoclase Crono

    'use strict';
    function Crono(posicion) {
        this.t = 0;
        this.posicion = posicion;

        // Se añade el método mostrar al prototipo 
        Crono.prototype.mostrar = function () {
            var oCrono = document.getElementById(this.posicion),
                timeCrono = +oCrono.innerHTML + 0.1;
            oCrono.innerHTML = timeCrono.toFixed(1); // Convierte el número a string con 1 decimal
        };

        Crono.prototype.arrancar = function () { this.t = setInterval(this.mostrar.bind(this), 100); };

        Crono.prototype.parar = function () { clearInterval(this.t); this.t = undefined; };

        Crono.prototype.limpiarCrono = function () {
            document.getElementById(this.posicion).innerHTML = "0.0";
        };

        Crono.prototype.cambiarCrono = function () {
            if (!this.t) { this.arrancar(); }
            else { this.parar(); }

        };

    }


    //**************************************************************

    // Se creean dos objetos de la "clase" Crono,
    // correspondientes a los elementos definidos en HTML

    var oCrono1 = new Crono("crono1"),
        oCrono2 = new Crono("crono2");

    // Se definen como manejadores de los eventos
    // los métodos de los correspondientes objetos 
    // en lugar de una única función creada al margen de los objetos

    document.getElementById("btn_cambiar_1").onclick = function () { oCrono1.cambiarCrono(); };
    document.getElementById("btn_inicializar_1").onclick = function () { oCrono1.limpiarCrono(); };

    document.getElementById("btn_cambiar_2").onclick = function () { oCrono2.cambiarCrono(); };
    document.getElementById("btn_inicializar_2").onclick = function () { oCrono2.limpiarCrono(); };


} //Fin de la función main()

document.addEventListener("DOMContentLoaded", main);