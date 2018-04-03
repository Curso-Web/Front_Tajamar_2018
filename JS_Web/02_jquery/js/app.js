/* $(document).ready(
    function() {
}) */

$(function() {
    let oDom = {
        eBotonSaludar: $('#btnSaludar'),
        eBotonBorrar: $('#btnBorrar'),
        eInputName: $('#inpName'),
        eOutSaludo: $('#outSaludo')
    }

    function saludar () {
        let user = oDom.eInputName.val()
        console.log(user)
        oDom.eOutSaludo.html(`<p>Hola ${user}</p>`)
    }

    function borrar() {
        oDom.eInputName.val('')
        oDom.eOutSaludo.html('')
    }

    oDom.eBotonSaludar.on('click', saludar) 
    oDom.eBotonBorrar.on('click', borrar) 
})