/* Differences between let and var

    "let" is only accesible in the scope it is defined in. not accessible from anywhere in the code
    "var" can be accessed from anywhere in the code

    Also: 
        var a = 3
        var a = 5 --> is a correct usage. The new value of a becomes 5

        let a = 3
        let a = 5 --> is wrong usage

        let a = 3
        a = 5 --> is a correct usage
*/

// var
var serverName1 = "Server1"
var password1 = "123456"
console.log("Server: " + serverName1, "Password: " + password1)

// let
let serverName2 = "Server2"
let password2 = "abcdef"
console.log("Server: " + serverName2)
console.log("Password: " + password2)
password2 += "X1Y2Z3"
console.log("New password: " + password2)

// const is unchangeable. also it can't be NULL
// const USER -> Wrong
const USER = "Admin"
// USER = "Admin2" -> Wrong
console.log(USER)