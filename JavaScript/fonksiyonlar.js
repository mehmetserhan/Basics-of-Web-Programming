// return kullanımı
function func1(param1){
    let info1 = func2(param1)
    console.log(info1)
}
function func2(param2){
    let info2 = param2 + "mrb canim"
    return info2
}
func1("selam ")
console.log("---------------------------------------------")


// örnek - not hesaplayıcı
let not = parseInt(prompt("Not giriniz: "))

if(not>=0 && not<=100){
    notlandirma(not)
}
else{
    console.log("Düzgün not girişi yapınız!!!")
}

function notlandirma(param){
    let notInfo = document.querySelector("#notInfo")
    let harfInfo = document.querySelector("#harfInfo")

    notInfo.innerHTML += param
    console.log(`Notunuz: ${param} -> ${typeof(param)}`)
    
    let harfNotu = notHesapla(param)
    harfInfo.innerHTML += harfNotu
    console.log(`Harf notunuz: ${harfNotu} -> ${typeof(harfNotu)}`)
}

function notHesapla(param){
    let harfNotu
    if(param>=0 && param<20){
        harfNotu = 'F'
    }
    else if(param>=21 && param<40){
        harfNotu = 'D'
    }
    else if(param>=41 && param<60){
        harfNotu = 'C'
    }
    else if(param>=61 && param<80){
        harfNotu = 'B'
    }
    else{
        harfNotu = 'A'
    }
    return harfNotu;
}
