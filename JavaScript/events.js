// Events
let btn1 = document.querySelector("#btn1")
let id1 = document.querySelector("#id1")
function hello1(){
    console.log(`Hoşgeldiniz BUTON1`)
    id1.style.color = "red"
}
btn1.addEventListener("click", hello1)

// fonksiyonu event içinde tanımlamak (önerilmez)
let btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", function hello2(){
    console.log(`Hoşgeldiniz BUTON2`)
    id1.style.color = "green"
})

// parametre alan bir fonksiyon kullanılacaksa parametre olarak anonim fonksiyon verilir. bu anonim fonksiyonun görevi asıl fonksiyonu çağırmaktır.
let btn3 = document.querySelector("#btn3")
function hello3(param){
    console.log(`Hosgeldiniz ${param}`)
    id1.style.color = "blue"
}
btn3.addEventListener("click", function (){
    hello3("Serhan")
})

/*
EventListener'larda aslında üç adet parametre vardır -> addEventListener(event, func, useCapture)

useCapture -> Olay Bubbling veya Olay Yakalama

Örneğin <div> içerisinde bir <p> varsa: 
    1) <p>'ye tıklandığında önce <p> ardından <div>'e ait event'ler tetiklenecekse yani içten dışa öncelik varsa kabarcıklanma (bubbling) 
    2) önce <div> ardından <p>'e ait event'ler tetiklenecekse yani dıştan içe öncelik varsa yakalama (capture)

Kabarcıklanmanın parametresi -> false
Yakalamanın parametresi -> true
*/