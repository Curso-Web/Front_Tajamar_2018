

(function () {

    function app() {
        const aAcertados = []
        const listaReyes = new Array('Fernando', 'Isabel', 'Juana', 'Carlos', 'Felipe',
            'Luis', 'Jose', "Amadeo", 'Alfonso', 'Juan Carlos');
        const listaReyesMay = listaReyes.map(item => item.toUpperCase())

        const boton = document.getElementById("btnAdd")
        const mensaje = document.getElementById("respuesta");
        const lista = document.getElementById("lista");
        const input = document.getElementById('inpRey')

        boton.addEventListener('click', nuevoName)
        
        function nuevoName() {
            mensaje.innerHTML = " ";
            let cad = input.value
            // let pos = buscarItem(listaReyes, cad);
            let pos = listaReyesMay.indexOf(cad.toUpperCase())
            if (pos >= 0) {
                if (aAcertados.indexOf(pos) < 0) {
                    add(listaReyes[pos]);
                    aAcertados.push(pos)
                }
            } else {
                mensaje.innerHTML = cad + ' no es el nombre de un rey / reina de España.';
            }
        }

        /* function buscarItem(lista = [], cad = '') {
            var ind, pos;
            for (ind = 0; ind < lista.length; ind++) {
                if (lista[ind].toUpperCase() == cad.toUpperCase())
                    break;
            }
            return (ind < lista.length ? ind : -1);
        } */

        function add(nuevoElemento) {
            /* var elemento = document.createElement("li");
            var texto = document.createTextNode(nuevoElemento);
            elemento.appendChild(texto);
            var lista = document.getElementById("lista");
            lista.appendChild(elemento); */
            lista.innerHTML += nuevoElemento;
        }
    }
    document.addEventListener("DOMContentLoaded", app);
})()