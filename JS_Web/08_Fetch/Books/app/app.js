// Eventos al cargar la página
// document > DOMContentLoaded
// window -> load

import { Main } from './main.js'

(function () {
    document.addEventListener("DOMContentLoaded", () => new Main(), false)
})()