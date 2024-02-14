// STRING İŞLEMLERİ

let info = "AdfdsgffZhgFJgdjggkkAAAD"

// uzunluk
console.log(info.length)

// initial (baş harf) alma
console.log(info[0])

// toUpperCase - toLowerCase
console.log(info.toUpperCase(), info.toLowerCase())

// search
console.log("F karakteri şu indexte: ", info.search("F"))           // bulduğu ilk indexten sonra fonksiyondan çıkar. kalan kısma bakmaz

// slice
console.log(info.slice(0, 3))                                       // verilen indexler ARASINDAKİ kısmı alır
console.log(info.slice(11))                                         // verilen indexten SONRASINI alır
console.log(info.slice(0, info.search("F")))                        // aralık değeri olarak, kendi aradığımız bilginin indexi atanabilir
console.log(info.slice(info.search("Z"), info.search("J")))

// replace
console.log(info.replace('A', 'B'))                                 // bulduğu ilk veriyi değiştirir ve kalan kısma bakmaz/değiştirmez

// includes
console.log(info.includes('Z'))
console.log(info.includes('X'))

// startsWith - endsWith
console.log(info.startsWith('A'))                                   // A veya a ile mi başlıyor? .startsWith('A' || 'a') vs.
console.log(info.startsWith('Adfds'))
console.log(info.endsWith('K'))
console.log(info.endsWith('AAD'))

// capitalize -> javascript'te capitalize fonksiyonu yoktur. onun yerine kendimiz capitalize fonksiyonu yazabiliriz:
function capitalize(param){
    newItem = `${param[0].toUpperCase()}${param.slice(1).toLowerCase()}`
    return newItem
}
console.log( capitalize("serhan") )