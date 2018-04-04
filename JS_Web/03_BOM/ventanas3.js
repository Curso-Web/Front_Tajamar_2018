function app () {

    let eBtnAbrir = document.querySelector('#btnAbrir')
    let eBtnGoogle = document.querySelector('#btnGoogle')
    let eBtnImagen = document.querySelector('#btnImagen')
    let eBtnCerrar = document.querySelector('#btnCerrar')
    let ventana
    let aVentanas = []

    eBtnAbrir.addEventListener('click', btnAbrir)
    eBtnGoogle.addEventListener('click', btnGoogle)
    eBtnImagen.addEventListener('click', btnImagen)
    eBtnCerrar.addEventListener('click', btnCerrar)


    function btnAbrir () {
        ventana = window.open()
        aVentanas.push(ventana)
        ventana.document.write('<p>Documento recien creado</p>')
    }

    function btnGoogle () {
        ventana = window.open('http://google.es', '',
        'top=200, left=300, width=400, height=300, status=yes, menubar=yes, scrollbars=yes' )
        aVentanas.push(ventana)
        console.log(aVentanas)
    }

    function btnImagen () {
        ventana = window.open('33.jpg')
        aVentanas.push(ventana)
    }
    
    
    function btnCerrar () {
        aVentanas.forEach( (v) => {v.close()} )
        aVentanas = []
    }
}

window.addEventListener('load', app)