let num1 = "10"
let num2 = 10
let bool = false

console.log("'10': ", typeof(num1))
console.log("10: ", typeof(num2))
console.log("false: ", typeof(bool))
console.log("Is Type Equal?: ", typeof(num1) === typeof(num2))
console.log("-------------------------------------------------")

let num3 = "3.14"
let num4 = parseInt(num3)
let num5 = parseFloat(num3)
console.log(num3, typeof(num3))
console.log(num4, typeof(num4))
console.log(num5, typeof(num5))
console.log("-------------------------------------------------")

let str = 50
let str1 = str.toString()
console.log(str, typeof(str))
console.log(str1, typeof(str1))