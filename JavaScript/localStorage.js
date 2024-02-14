// >> Application >> Local Storage
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

/*  JSON - Stringfy and Parse
    Stringfy -> From object to string. JSON.stringfy
    Parse -> From string to object. JSON.parse 
*/
let user = {username: "serhan", isActive: true}
localStorage.setItem("userInfo", JSON.stringify(user))
console.log(`${localStorage.getItem("userInfo")}`)

let user2 = JSON.parse(localStorage.getItem("userInfo"))
console.log(`Username: ${user2.username} -> Is active?: ${user2.isActive}`)

localStorage.removeItem("userInfo")