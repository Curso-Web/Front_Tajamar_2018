function app () {

    const HEADERS = new Headers({
        'Content-Type': 'application/json',
        'Accept':  'application/json'
    })

    document.querySelector("#btnAjax")
    .addEventListener('click', getDatos)

    document.querySelector("#btnAjaxItem")
    .addEventListener('click', getDatos)

    document.querySelector("#btnAjaxAdd")
    .addEventListener('click', postDatos) // Añadir

    document.querySelector("#btnAjaxModif")
    .addEventListener('click', putDatos) //Modif

    document.querySelector("#btnAjaxBorrar")
    .addEventListener('click', deleteDatos)

    function getDatos(ev) {
        let url = ''
        if (ev.target.id == 'btnAjax') {
            url = 'http://localhost:3000/postsx'
        } else { // ev.target.id == 'btnAjaxItem'
            let item = document.querySelector('#item').value
            if (item) {
                url = 'http://localhost:3000/posts/'+item
            } else {
                return
            }
        }
        fetch(url)
        .then( (response) => {
            if(response.status === 200) {
                return response.json()
            } else {
               return new Promise ( (resolve, reject) => {
                   resolve('Error de conexion ' + response.status)
               }) 
            }
        })
        .then( data => console.log(data) )
    }

    function postDatos () {
        let data = {
            title: "Alicia",
            author: "Lewis Carol"}   
        let options = {
            method : 'POST',
            headers: HEADERS,
            body : JSON.stringify(data)}
        let url = 'http://localhost:3000/posts/'
        fetch(url, options)
        .then( response => response.json() )
        .then( data => console.log(data) )
    }

    function putDatos() {
        let data = {
            title: "Alicia en el País de las Maravillas",
            author: "Lewis Carroll"}  
        let options = {
            method : 'PUT',
            headers: HEADERS,
            body : JSON.stringify(data)}
        let item = document.querySelector('#itemM').value
        if (item) {
            url = 'http://localhost:3000/posts/'+item
        } else {
            return
        }
        fetch(url, options)
        .then( response => response.json() )
        .then( data => console.log(data) )
    }

    function deleteDatos() {
        let options = {
            method : 'DELETE',
            headers: HEADERS}
        let item = document.querySelector('#itemB').value
        if (item) {
            url = 'http://localhost:3000/posts/'+item
        } else {
            return
        }
        fetch(url, options)
        .then( response => response.json() )
        .then( data => console.log(data) )
    }
}


window.addEventListener('load', app, false)