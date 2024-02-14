// liste içerisinden elemana ulaşmak veya değiştirmek
let item1 = document.querySelector("ul#list>li:first-child")
let item2 = document.querySelector("ul#list>li:last-child")
console.log(`İlk öge: ${item1.innerHTML}`)
console.log(`Son öge: ${item2.innerHTML}`)
item2.innerHTML = "XYZXYZXYZ"
console.log(`Son ögeyi değiştirdim: ${item2.innerHTML}`)


// başa ve sondan eleman ekleme
let ul = document.querySelector("ul#list")
let itemFirst = document.createElement("li")
let itemLast = document.createElement("li")
itemFirst.innerHTML = "başa eklediğim eleman"
itemLast.innerHTML = "sona eklediğim eleman"
ul.append(itemLast)
ul.prepend(itemFirst)