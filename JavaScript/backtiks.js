let userName = "serhan"
const DOMAIN = "gmail.com"
let email = userName + "@" + DOMAIN
console.log("Merhaba ", userName, ", hoşgeldiniz: ", email) 
console.log("---------------------------------------")


// Back Ticks Kullanmak
let info = `Merhaba ${userName}, hoşgeldiniz: ${email}`
console.log(info)
console.log("---------------------------------------")


// back ticks sayesinde birden fazla satıra yazmak da mümkündür
// back ticks içerisinde ${} kullanılırken parantez içerisine fonksiyon, işlem vs. her şey yazılabilir
console.log(`Merhaba ${userName}
Hoşgeldiniz ${email}
Borcunuz: ${(3 + 5) * 100} TL`)
console.log("---------------------------------------")


// !!! DİKKAT !!! back ticks kullanımı boşluğa duyarlıdır
console.log(`Bu birinci paragraf
Boşluk yok`)

console.log(`
    Bu ikinci paragraf
    Boşluk düzeni farklı
            Anladın mı?
`)