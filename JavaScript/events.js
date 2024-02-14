// Events
let btn1 = document.querySelector("#btn1")
let id1 = document.querySelector("#id1")
function hello1(){
    console.log(`Welcome BUTTON1`)
    id1.style.color = "red"
}
btn1.addEventListener("click", hello1)

// does the same
let btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", function hello2(){
    console.log(`Welcome BUTTON2`)
    id1.style.color = "green"
})

// how to use parameters? use anonymus functions
let btn3 = document.querySelector("#btn3")
function hello3(param){
    console.log(`Welcome ${param}`)
    id1.style.color = "blue"
}
btn3.addEventListener("click", function (){
    hello3("Serhan")
})

/*
EventListener actually has 3 parameters, which are (event, func, useCapture)
useCapture -> Event Bubbling or Event Capturing

Imagine a <p> inside a <div>: 
1) Bubbling prioritizes <p> over <div> events 
2) Capturing prioritizes <div> over <p> events 

Parameter for bubbling is "false", capturing is "true"
*/