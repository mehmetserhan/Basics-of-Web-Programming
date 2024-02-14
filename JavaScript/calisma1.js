let counter = document.querySelector("#cntr")
let artrBtn = document.querySelector("#artr")
let azltBtn = document.querySelector("#azlt")

let sayac = localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0
counter.innerHTML = sayac

function arttir(){
    sayac++
    counter.innerHTML = sayac
    localStorage.setItem("counter", sayac)
}

function azalt(){
    sayac--
    counter.innerHTML = sayac
    localStorage.setItem("counter", sayac)
}

artrBtn.addEventListener("click", arttir)
azltBtn.addEventListener("click", azalt)