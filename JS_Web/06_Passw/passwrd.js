function main() {	//envio de evento a la funcion manejadora.

    var domForm = document.getElementById('formulario');
    var domPass1 = document.getElementById("inputPass_1");
    var domPass2 = document.getElementById("inputPass_2");
    var aPasswd = ["", ""]

    domForm.addEventListener('submit', comprobar)
    domPass2.addEventListener('input', prepararMensaje)

    function prepararMensaje() {
        // funcion manejadorea del evento oninput
        var msg = "";			        
        if (domPass1.value != domPass2.value) {
                msg = "Las contraseñas no coinciden" 
        }
        domPass2.setCustomValidity(msg)
    }; // fin de la función comprobar()

    function comprobar(oEvento) {
        console.log("Funcion comprobar")
        // funcion manejadorea del evento submit:
        // solo se llega aqui si las contraseñas son válidas
        let validado = true;
        oEvento.preventDefault();

        aPasswd[0] = domPass1.value;
        aPasswd[1] = domPass2.value;

        if (aPasswd[0] != aPasswd[1]) {
            validado = false;
        }
        mostrarResultado(validado);
    }; // fin de la función comprobar()

    function mostrarResultado (val) {
        let domRespuesta = document.getElementById('parrafo'); 
        // nodo donde escribiremos la respuesta
        if (!val) {
            domRespuesta.innerHTML = 'Las contraseñas no coinciden';
            domPass1.focus();
        } else  {
            domRespuesta.innerHTML = 'Tu contraseña ' + aPasswd[0] + ' es valida';
        }
        
    }; // fin de la función mostrarResultado()
        
};//fin de la función main

document.addEventListener("DOMContentLoaded", main, false);
