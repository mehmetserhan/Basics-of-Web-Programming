// var ile Değişken Tanımlama (Eski bir yöntemdir)
var serverName1 = "Server1"
var password1 = "123456"
console.log("Server: " + serverName1, "Şifre: " + password1)


// let ile değişken tanımlama
let serverName2 = "Server2"
let password2 = "abcdef"
console.log("Server: " + serverName2)
console.log("Şifre: " + password2)
password2 += "X1Y2Z3"
console.log("Yeni şifre: " + password2)


// const ile Kullanılan değişkenin değeri sonradan DEĞİŞTİRİLEMEZ
// const değişkenleri boş (NULL) tanımlanamaz
// genelde UPPER_CASE düzeni ile yazılır. önemli ve dikkat çekici gözükmeleri için
const USER = "Admin"
console.log(USER)


// boolean değişkenler let ile yazılır
let isDone = false;
console.log(isDone)


/* NOT: let ve var farkı
    "let" sadece tanımlı oldugu blokta tanımlıdır. kodun her yerinden erişilemez
    "var" ile tanımlanan değişkene kodun her yerinden erişilebilir

    var a = 3
    var a = 5    -->    doğru kullanımdır. a'nın yeni değeri 5 olur

    let a = 3
    let a = 5    -->    yanlış kullanımdır

    let a = 3
    a = 5        -->    doğru kullanımdır
*/