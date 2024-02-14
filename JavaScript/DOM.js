console.log(document.URL)
console.log(document.location)
console.log(document.location.hostname)
console.log(document.body)
console.log("------------------------------------------------------------------")

// CSS manipulation by using DOM
document.body.style.backgroundColor = "#ffcccc"

// adding class info to CSS by using DOM
let header = document.querySelector("h1#title1")
header.classList.add("text-primary")
console.log(header.classList)
header.classList.remove("text-primary")
console.log(header.classList)

let x = document.getElementById('id1')          // selecting the first element whose id is id1
console.log(x)
console.log(x.innerText)

let y = document.querySelector("#id2")          // selecting only ONE element whose id is id2
console.log(y)
console.log(y.innerText)

function changeTitle(){
    x.innerText = "Changing text!"
    x.style.fontFamily = "Monospace, Courier New"
    y.style.color = 'red'
}