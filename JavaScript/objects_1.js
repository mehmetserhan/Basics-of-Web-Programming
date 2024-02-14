// OBJECTS

// let ... = new Object()
// let ... = {key1: value1, key2: value2, ...}
let info = {
    name: "Ali Yalcin", 
    email: "abcdef@gmail.com", 
    age: 21
}
console.log(typeof(info))


// keys-values Öğrenme
console.log(Object.keys(info))
console.log(Object.values(info))
let keys = Object.keys(info)
keys.forEach( key => console.log(`${key} -> ${info[key]}`) )


// key'ler string tanımlanabilir
let info2 = {
    "1kilo": "1000 gram",
    "1metre": "100 cm"
}
console.log(info2["1kilo"])


// value'yu değiştirmek
let item = {brand: "Samsung"}
item.brand = "Apple"
console.log(item.brand)


// yeni value-key eklemek
item.product = "iPhone"
console.log(item)
