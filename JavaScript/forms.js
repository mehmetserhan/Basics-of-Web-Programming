// input içerisinden değer almak
let form = document.querySelector("#userForm")
form.addEventListener("submit", formSubmit)

// form'da göndere basıldığında sayfayı YENİLEME (get işlemini iptal et)
function formSubmit(event){
    event.preventDefault()

    let userName = document.querySelector("#userName")
    let password = document.querySelector("#password")
    if(userName.value && password.value){
        register(userName.value, password.value)
        reset(userName, password)
    }
    else{
        alert(`Düzgün veri girişi yapınız !!!`)
        reset(userName, password)
    }
    
}

function register(uN, pW){
    console.log(`Kullanici adi: ${uN}`)
    console.log(`Sifre: ${pW}`)
    localStorage.setItem("userName", uN)
    localStorage.setItem("password", pW)
    console.log("Kayit islemi gerceklesti")
}

function reset(userName, password){
    userName.value = ""
    password.value = ""
}