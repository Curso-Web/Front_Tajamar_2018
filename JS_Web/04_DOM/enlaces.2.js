class Enlace {
    constructor() {
        this.count = 0;
        this.aLinks = document.querySelectorAll('.social')
        this.items = this.aLinks.length

        this.aLinks.forEach( (node) => {
            node.addEventListener('click', this.cambiaLista.bind(this))
        });
    }

    cambiaLista(ev) {
        let nodeItem = ev.target
        if (nodeItem.textContent.indexOf('Ops') >= 0) {
            return
        }
        nodeItem.textContent = "Ops, no tengo " + nodeItem.textContent;
        this.count++;
        if (this.count === this.items) {
            nodeItem.parentNode.parentNode.outerHTML = 
                    `<div>
                        <p>Lo siento, parece que estoy ilocalizable</p>
                    </div>`;
        }
    }
}


document.addEventListener("DOMContentLoaded",() => {new Enlace()})