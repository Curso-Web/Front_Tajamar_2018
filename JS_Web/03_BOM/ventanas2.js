function app () {

    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eBtnCerrar = document.querySelector('#btnCerrar')
    eBtnCerrar.disabled="true"
    let ventana
    let aVentanas = []

    eBtnAbrir.addEventListener('click', btnClick)
    eBtnCerrar.addEventListener('click', btnClick)

    function btnClick(ev) {
        console.log(ev.target.id)
        switch (ev.target.id) {
            case 'btnAbrir':
                ventana = window.open()
                aVentanas.push(ventana)
                togleButtons()
                break
            case 'btnCerrar':
                aVentanas.forEach( (v) => {v.close()} )
                togleButtons()
                aVentanas = []
                break
        }

    }

    function togleButtons() {
        eBtnAbrir.disabled = !eBtnAbrir.disabled
        eBtnCerrar.disabled = !eBtnCerrar.disabled
    }
}

window.addEventListener('load', app)