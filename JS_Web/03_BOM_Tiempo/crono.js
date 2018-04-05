// Una sola vez
/* let idT = setTimeout(algo, 1000)
clearTimeout(idT) */
//setTimeout(algo, 1000)

(function() {
    function app () {
        let idI
        let crono = 0
        let aBotones = document.querySelectorAll('button')
        let eCrono = document.querySelector('.crono')
        aBotones.forEach(item => {
            item.addEventListener('click', btnClick)
        });
        aBotones[1].disabled = true
        aBotones[2].disabled = true

        function btnClick(ev) {
            if (ev.target.id === 'btnIniciar') {
                aBotones[0].disabled = true
                aBotones[0].textContent = 'Continuar'
                aBotones[1].disabled = false
                aBotones[2].disabled = true   
                idI = setInterval(() => {
                    crono += 0.01
                    eCrono.innerHTML = crono.toFixed(2)
                }, 100)
            } else if (ev.target.id === 'btnParar') {
                aBotones[0].disabled = false
                aBotones[1].disabled = true
                aBotones[2].disabled = false 
                clearInterval(idI)
            } else { // btnReset
                aBotones[0].disabled = false
                crono = 0
                eCrono.innerHTML = crono.toFixed(2)
                aBotones[0].textContent = 'Iniciar'
                aBotones[1].disabled = true
                aBotones[2].disabled = true
            }
        }
    }

    window.addEventListener('load', app)
})()
