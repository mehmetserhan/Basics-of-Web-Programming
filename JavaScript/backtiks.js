let userName = "serhan"
const DOMAIN = "gmail.com"
let email = userName + "@" + DOMAIN
console.log("Hi ", userName, ", welcome: ", email) 
console.log("---------------------------------------")

// Using backtiks
let info = `Hi ${userName}, welcome: ${email}`
console.log(info)
console.log("---------------------------------------")

// Writing multiple lines
console.log(`Hi ${userName}
Welcome ${email}
Total: ${$ (3 + 5) * 100} `)
console.log("---------------------------------------")


// backtiks are space sensitive
console.log(`First paragraph
No space`)

console.log(`
    Second paragraph
    Space space             space
            See?
`)