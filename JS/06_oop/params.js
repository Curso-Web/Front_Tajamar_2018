function Point (param) {
    this.x = param.x || 0
    this.y = param.y || 0
    this.r = param.r || 1
    this.calculaCircunf = function () {},
    this.calculaCirculo = function () {},
    this.calculaOtro = function () {},
    this.calculaOtroMas = function () {}
}

p1 = new Point ( {y:2, x:3})
p1.calculaOtro()
p1.calculaCirculo()


function App(param)

app = new App({user: 'Pepe'})