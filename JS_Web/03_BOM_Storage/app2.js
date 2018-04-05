(function () {

    function app () {
        let eNombre = document.querySelector('#inpNombre')
        let eApellido = document.querySelector('#inpApellido')
        let eGuardar = document.querySelector('#btnGuardar')
        let eBorrar = document.querySelector('#btnBorrar')
        let eSaludo = document.querySelector('#outSaludo')

        eGuardar.addEventListener('click', guardar)
        eBorrar.addEventListener('click', borrar )

        function guardar() {
            let persona = {
                nombre : eNombre.value,
                apellido : eApellido.value
            }
            localStorage.setItem('persona', JSON.stringify(persona))
            saludar()
        }

        function borrar() {
            localStorage.removeItem('persona')
            eSaludo.innerHTML = ''
            eNombre.value = ''
            eApellido.value = ''
        }       
        function saludar() {
            let persona = localStorage.getItem('persona')
            persona = JSON.parse(persona)
            if(persona.nombre || persona.apellido) {
                eSaludo.innerHTML = `Hola ${persona.nombre} ${persona.apellido}` 
            } 
        }

        saludar()
    }



    window.addEventListener('load', app)
})()