function app () {

    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eBtnCerrar = document.querySelector('#btnCerrar')
    eBtnCerrar.disabled="true"
    let ventana
    let aVentanas = []

    eBtnAbrir.addEventListener('click', btnAbrir)
    eBtnCerrar.addEventListener('click', btnCerrar)


    function btnAbrir () {
        ventana = window.open()
        togleButtons()
        aVentanas.push(ventana)
        console.log(aVentanas)
    }

    function btnCerrar () {
        aVentanas.forEach( (v) => {v.close()} )
        togleButtons()
        aVentanas = []
    }

    function togleButtons() {
        eBtnAbrir.disabled = !eBtnAbrir.disabled
        eBtnCerrar.disabled = !eBtnCerrar.disabled
    }
}

window.addEventListener('load', app)