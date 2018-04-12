function app () {

    document.querySelector("#btnAjax")
    .addEventListener('click', getDatos)

    function getDatos() {
        let metodo = 'GET'
        let url = 'http://localhost:3000/posts'
        fetch(url)
        .then( (data) => {console.log(data.json())} )
    }
}

window.addEventListener('load', app, false)