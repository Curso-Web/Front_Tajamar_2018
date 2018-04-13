function app () {

    document.querySelector("#btnAjax")
    .addEventListener('click', getDatos)

    document.querySelector("#btnAjaxAdd")
    .addEventListener('click', postDatos) // Añadir

    function getDatos() {
        let metodo = 'GET'
        let url = 'http://localhost:3000/posts'
        fetch(url)
        .then( response => response.json() )
        .then( data => console.log(data) )
    }
}

    function postDatos () {
        let data = {
            title: "El Hobbit",
            author: "JRR Tolkien"}
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Accept':  'application/json'
        })
        let options = {
            method : 'POST',
            headers: headers,
            body : JSON.stringify(data)}
        let url = 'http://localhost:3000/posts'
        fetch(url, options)
        .then( response => response.json() )
        .then( data => console.log(data) )
    }

window.addEventListener('load', app, false)