// getting input
let form = document.querySelector("#userForm")
form.addEventListener("submit", formSubmit)

function formSubmit(event){
    event.preventDefault()

    let userName = document.querySelector("#userName")
    let password = document.querySelector("#password")
    if(userName.value && password.value){
        register(userName.value, password.value)
        reset(userName, password)
    }
    else{
        alert(`Invalid input !!!`)
        reset(userName, password)
    }
    
}

function register(uN, pW){
    console.log(`Username: ${uN}`)
    console.log(`Password: ${pW}`)
    localStorage.setItem("userName", uN)
    localStorage.setItem("password", pW)
    console.log("Registration is done.")
}

function reset(userName, password){
    userName.value = ""
    password.value = ""
}