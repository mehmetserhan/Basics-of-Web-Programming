// FOREACH KULLANIMI

let TECH = ["Laptop", "Telefon", "Masaüstü", "Tablet", "Kulaklık", "Mouse"]
TECH.forEach( (param) => console.log(`Item: ${param}`) )

TECH.forEach( (param, index, array) => {array[index] = `${param.toUpperCase()}`} )  // forEach, ana array'in üzerinde KALICI değişiklikler yapar
console.log(TECH)

let ulDOM = document.querySelector("#list")
TECH.forEach( (item) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML= item
    ulDOM.appendChild(liDOM)
} )

/*
Multiply each element:

const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, arr, index) {
  arr[index] = item * 10;
}
*/