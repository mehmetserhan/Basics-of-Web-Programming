// manipulating list items
// append -> adding from rear
// prepend -> adding from back

let item1 = document.querySelector("ul#list>li:first-child")
let item2 = document.querySelector("ul#list>li:last-child")

console.log(`First item: ${item1.innerHTML}`)
console.log(`Last item: ${item2.innerHTML}`)

item2.innerHTML = "XYZXYZXYZ"
console.log(`Last item got changed to: ${item2.innerHTML}`)

let ul = document.querySelector("ul#list")
let itemFirst = document.createElement("li")
let itemLast = document.createElement("li")

itemFirst.innerHTML = "firstttt"
itemLast.innerHTML = "lastttt"

ul.append(itemLast)
ul.prepend(itemFirst)