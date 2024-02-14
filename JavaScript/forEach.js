// FOREACH

let TECH = ["Laptop", "Phone", "Desktop", "Tablet", "Headphones", "Mouse"]
TECH.forEach( (param) => console.log(`Item: ${param}`) )

TECH.forEach( (param, index, array) => {array[index] = `${param.toUpperCase()}`} )  // be careful, it is permanent
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