(function () {

    function app() {
        let oDom = {
            eBotonSaluadar: document.querySelector('#btnSaludar')
        }
    
        let saludo = (oE, user = 'amigo') => {
            console.log(`Hola ${user}`)
            console.log(oE)
        }
    
        // document.getElementById('btnSaludar')
        // oDom.eBotonSaluadar.onclick = () => saludo(event, "Pepe")
        oDom.eBotonSaluadar.addEventListener(
                    'click',
                    () => saludo(event, "Pepe"))
        // oDom.eBotonSaluadar.removeEventListener('click',)    
    }

    window.addEventListener('load', app)
    // document.addEventListener('DOMContentLoaded', app)
})()







