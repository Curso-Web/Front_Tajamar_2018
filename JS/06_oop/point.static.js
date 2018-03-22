Point = (function() {
    let radio = 0
    return class Point {
        constructor(x=0,y=0) {
            this.x = x
            this.y = y
        }
        toString() {
            return `(${this.x}, ${this.y}, ${radio})`
        }
        static setRadio (r) {
            radio = r
        }
    }
})()

p1 = new Point(0, 0)
console.log(p1.toString())
Point.setRadio(1)
p2 = new Point (1, 1)

console.log(p1.toString())
console.log(p2.toString())