(function () {

    function app() {
        let oDom = {
            eBotonSaludar: document.querySelector('#btnSaludar'),
            eBotonBorrar: document.querySelector('#btnBorrar'),
            eInputName: document.querySelector('#inpName'),
            eOutSaludo: document.querySelector('#outSaludo')
        }
        

        /**
         * Manejador del evento click del boton #btnSaludar  
        */
        let saludar = () => {
            let user = oDom.eInputName.value
            console.log(user)
            oDom.eOutSaludo.innerHTML = `<p>Hola ${user}</p>`
        }

        /**
         * Manejador del evento click del boton #btnBorrar  
        */
        let borrar = () => {
            oDom.eInputName.value = ''
            oDom.eOutSaludo.innerHTML = ''
        }

        oDom.eBotonSaludar.addEventListener('click', saludar) 
        oDom.eBotonBorrar.addEventListener('click', borrar) 

    }

    window.addEventListener('load', app)
})()







