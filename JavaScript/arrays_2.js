let nums = [5, 10, 15, 20, 25]
let people = ["Ali", "Ayse", "Fatma"]


// ARRAY ICINDEKI ARRAY'IN ELEMANLARINA ULASMAK
let arr = [nums, people]
console.log(arr[0][3])
// aynı şekilde array içinde array içinde array varsa [][][] yoluyla vs...


// ARRAY AYIRMAK
// splice kullanıldıktan sonra ana array kalıcı olarak değişir !!!
let newArr = nums.splice(1, 2) // 1. index'ten başla ve 2 adet öge al
console.log(newArr)


// SPESIFIK BIR OGENIN INDEX'INI BULMAK
console.log(nums.indexOf(25))


// ARRAY KOPYALAMAK
// array'i direkt let arr2 = arr1 ile kopyalamak TEHLIKELIDIR. örneğin arr2'den pop() yapılırsa arr1 de DEĞİŞİR
// slice -> eski yöntem 
let newPeople = people.slice()
newPeople.pop()
console.log(people)
console.log(newPeople)
// ES6 -> yeni yöntem  [...array_ismi]
let newPeople2 = [...people]
newPeople2.pop()
console.log(people)
console.log(newPeople2)
// Birden fazla array kopyalamak için: [...arr1, ...arr2, ...ne kadar isteniyorsa]