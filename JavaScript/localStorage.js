// LocalStorage Kullanımı
// >> Application >> Local Storage kısmında key-value çiftleri görülebilir
localStorage.setItem("09", "Aydın")
localStorage.setItem("35", "İzmir")
localStorage.setItem("55", "Samsun")

const PLAKA_09 = localStorage.getItem("09")
const PLAKA_35 = localStorage.getItem("35")
const PLAKA_55 = localStorage.getItem("55")

let cities = [PLAKA_09, PLAKA_35, PLAKA_55]
for(let i=0; i<cities.length; i++){
    console.log(`${cities[i]}`)
}

localStorage.removeItem("09")
localStorage.removeItem("35")
localStorage.removeItem("55")


/*  JSON - Stringfy ve Parse Kullanımı. 
    Object olan veriyi string olarak kaydetmek için JSON.stringfy
    String olan veriyi tekrar object olarak dönüştürmek için JSON.parse kullanılır */
let user = {username: "mserhant", isActive: true}
localStorage.setItem("userInfo", JSON.stringify(user))      // object halinde olan user verisini stringfy edip, localstorage'a userInfo olarak set et
console.log(`${localStorage.getItem("userInfo")}`)

user = JSON.parse(localStorage.getItem("userInfo"))         // string halineki userInfo verisini al, parse ile object'e geri dönüştür
console.log(`Username: ${user.username} -> Is active?: ${user.isActive}`)

localStorage.removeItem("userInfo")                     // bilgisayar hafızasında yer kaplamasın diye siliyorum