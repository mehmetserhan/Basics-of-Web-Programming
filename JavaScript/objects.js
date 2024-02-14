// let ... = new Object()
// let ... = {key1: value1, key2: value2, ...}
let info = {
    name: "Ali Yalcin", 
    email: "abcdef@gmail.com", 
    age: 21
}
console.log(typeof(info))

// keys-values
console.log(Object.keys(info))
console.log(Object.values(info))
let keys = Object.keys(info)
keys.forEach( key => console.log(`${key} -> ${info[key]}`) )

// keys as strings
let info2 = {
    "1 kilograms": "1000 grams",
    "1 meter": "100 centimeter"
}
console.log(info2["1kilo"])

// changing a value
let item = {brand: "Samsung"}
item.brand = "Apple"
console.log(item.brand)

// adding new key-value
item.product = "iPhone"
console.log(item)

// Initializing a function in an object
let info3 = {
    firstName: "Ali", 
    lastName: "Yilmaz",
    fullName: function() { return `${this.firstName[0].toUpperCase()}. ${this.lastName}` },
}
console.log(info.fullName())

// Object destructing
let settings = {
    userName: "Admin",
    password: "admin123",
    isActive: true,
    ip: "127.0.0.1",
    serverName: "server123.com"
}

// Fetching a data from objects
/* let user = settings.userName
console.log(user) */
let { userName, password } = settings
console.log(userName, password)

// Changing names without affecting the original object
let { serverName, ip: serverIP } = settings
console.log(serverName, serverIP)

// Delete
// get userName and password, set the remaninings as newSettings
let { userName:un1, password:pw2, ...newSettings } = settings
console.log(newSettings)

// Copying objects
let settings2 = {...settings}
settings2.userName = "Normal User"
settings2.password = "normaluser123"
console.log("settings -> ", settings)
console.log("settings2 -> ", settings2)