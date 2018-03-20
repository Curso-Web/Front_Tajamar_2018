(function() {
    appMayusculas = {
        cadena: '',
        aMensajes : [
            'se mezclan Mayúsculas y minúsculas',
            'todas las letras son Mayúsculas',
            'todas las letras son minúsculas'],
        comprobar : function  () {
            let r = 0
            if (this.cadena.toUpperCase() === this.cadena) {
                r = 1
            } else if (this.cadena.toLowerCase() === this.cadena) {
                r = 2
            } 
            return r
        },
        mostrar: function () {
            let sMensaje = `
                En la frase "${this.cadena}"
                ${this.aMensajes[this.comprobar()]}`
            console.log(sMensaje)
        }
        
    }

    appMayusculas.cadena = 'HOLA PEPE'  
    appMayusculas.mostrar()
    appMayusculas.cadena = 'hola pepe'  
    appMayusculas.mostrar()
    appMayusculas.cadena = 'Hola Pepe' 
    appMayusculas.mostrar()  
})()




