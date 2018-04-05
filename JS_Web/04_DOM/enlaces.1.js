function main() {

    function cambiaLista(nameItem) {
        idItem = document.getElementById(nameItem);
        idItem.textContent = "Ops, no tengo " + nameItem;
        count++;
        if (count == 4) document.write("Lo siento, parece que estoy ilocalizable");
    }

    var count = 0;
    document.getElementById("twitter").onclick = function () { cambiaLista('twitter') }
    document.getElementById("facebook").onclick = function () { cambiaLista('facebook') }
    document.getElementById("flickr").onclick = function () { cambiaLista('flickr') }
    document.getElementById("linkedin").onclick = function () { cambiaLista('linkedin') }
};

document.addEventListener("DOMContentLoaded", main)