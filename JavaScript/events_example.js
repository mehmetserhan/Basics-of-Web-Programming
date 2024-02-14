let counter = document.querySelector("#cntr")
let incrBtn = document.querySelector("#incr")
let decrBtn = document.querySelector("#decr")

let count = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0
counter.innerHTML = count

function increase(){
    count++
    counter.innerHTML = count
    localStorage.setItem("counter", count)
}

function decrease(){
    count--
    counter.innerHTML = count
    localStorage.setItem("counter", count)
}

incrBtn.addEventListener("click", increase)
decrBtn.addEventListener("click", decrease)