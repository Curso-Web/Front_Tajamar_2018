
function main() {
    
    let eMain = document.querySelector('main')
    let aPreguntas = document.querySelectorAll('main h2')
    let aRespuestas = document.querySelectorAll('.answer')
    

    document.querySelector('.main h2:first-of-type')
        .classList.add('close')
    document.querySelectorAll('.answer:not(:first-of-type').forEach(
        (item) => item.classList.add('ocultar')
    )

    eMain.addEventListener('desplegar', desplegar)
    aPreguntas.forEach(item => {
        item.addEventListener('click', elegirPregunta, false)
    });
   
    function elegirPregunta(ev) {
        if (!ev.target.classList.contains("close")) {
            // si no tiene el icono de cerrar: esta cerrado y hay que abrirlo
            // let evento = new CustomEvent('desplegar', {bubbles: true})
            // console.log("Lanzado ", evento)
            // ev.target.dispatchEvent(evento)        
            ev.target.dispatchEvent(new CustomEvent('desplegar', {bubbles: true}))        
        }
    } 

    function desplegar(ev) {
        /* El manejador de evento del main 
        actua por delegación del h2,
        respondiendo al evento propio desplegar */
        console.dir(ev.target) // h2
        // elimina clase close de los h2
        aPreguntas.forEach(item => {
            item.classList.remove('close')
        })
        // añade clase close al h2 implicado 
        ev.target.classList.add('close')


        // oculta los divs
        aRespuestas.forEach(item => item.classList.add('ocultar'))
        //  muestra el siguiente ('.answer') del h2 implicado
        console.log(ev.target.nextElementSibling)
        ev.target.nextElementSibling.classList.remove('ocultar')
    } 
}

window.addEventListener('load', main)