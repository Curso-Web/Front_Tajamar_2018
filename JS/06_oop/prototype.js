let point = {x: 0, y: 0}
console.log(point)
console.log(typeof point) // object
console.log(point.constructor) // Function: Object
console.log(Object.getOwnPropertyNames(point.constructor.prototype))

/* console.log(point.__proto__) // {}
console.log(point.constructor.prototype)
Object.getPrototypeOf(point);
console.log(Object.prototype)
 */ 
let aDatos = [0,0]
console.log(aDatos)
console.log(typeof aDatos) // object
console.log(aDatos.constructor) // Function: Array


/*
console.log(aDatos.__proto__) // []
console.log(aDatos.constructor.prototype)
console.log(Array.prototype) */

