$(function() {
    $('#btnSaludar').on('click', function() {
        let user = $('#inpName').val()
        console.log(user)
        $('#outSaludo').html(`<p>Hola ${user}</p>`)
    }) 
    $('#btnBorrar').on('click', function() {
        $('#inpName').val('')
        $('#outSaludo').html('')
    }) 
})