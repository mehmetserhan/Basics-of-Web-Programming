// ARRAYS
let array1 = [1, 2, 3, 4, 5]
console.log(array1)
let array2 = [true, array1, "Ali"]
console.log(array2)


// ELEMAN BULMA
// ilk eleman ve son elemanı bulmak
let sehir = ["İstanbul", "İzmir", "Ankara", "Antalya"]
console.log(sehir)
console.log(`İlk: ${sehir[0]} - Son: ${sehir[sehir.length-1]}` )
// ortadaki elemanı bulmak
if(sehir.length % 2 == 1){
    console.log(`Orta eleman: ${sehir[(sehir.length-1)/2]}`)                                // element sayısı tekse
}
else{
    console.log(`Orta eleman: ${sehir[sehir.length/2 - 1]} ve ${sehir[sehir.length/2]}`)    // element sayısı çiftse
}


// ELEMAN EKLEME
sehir = sehir.toSpliced(3, 0, "Aydin");     // herhangi bir yere -> toSpliced(index, 0, element) -> 0 means don't delete any items
sehir.unshift("Mugla")                      // başa
sehir.push("Yalova")                        // sona
console.log(sehir)


// ELEMAN CIKARMA
sehir.shift()         // baştan               // pop'lanan ve shift'lenen değerler tutulabilir. 
sehir.pop()           // sondan               // let item = array.pop() yapılınca atılan son elemanı item'da tutmuş oluruz
console.log(sehir)