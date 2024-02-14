let array1 = [1, 2, 3, 4, 5]
console.log(array1)
let array2 = [true, array1, "Josh"]
console.log(array2)

// Finding a wanted item
// finding the first and last ones
let city = ["İstanbul", "İzmir", "Ankara", "Antalya"]
console.log(city)
console.log(`First: ${city[0]} - last: ${city[city.length-1]}` )
// finding the middle one
if(city.length % 2 == 1){
    console.log(`Middle: ${city[(city.length-1)/2]}`)                                   // when array length is odd
}
else{
    console.log(`Middle: ${city[city.length/2 - 1]} and ${city[city.length/2]}`)        // when array length is even
}

// Adding an item
city = city.toSpliced(3, 0, "Aydin");                           // somehwere -> toSpliced(index, 0, element) -> 0 means don't delete any items
city.unshift("Mugla")                                           // to its head
city.push("Yalova")                                             // to its rear
console.log(city)

// Removing an item
city.shift()         // from its head 
city.pop()           // from its rear
console.log(city)

/***************************************************************************************************/

let nums = [5, 10, 15, 20, 25]
let people = ["Ali", "Ayse", "Fatma"]

// matrix
let arr = [nums, people]
console.log(arr[0][3])

// splice method changes the array PERMANENTLY !!!
let newArr = nums.splice(1, 2) // from the 1. index, take 2 items
console.log(newArr)

// finding the index of a specific item
console.log(nums.indexOf(25))

// copying arrays
// DO NOT use something like let arr2 = arr1. it is dangerous because changing a copied array affects the original one
// slice -> "oldfashioned"
let newPeople = people.slice()
newPeople.pop()
console.log(people)
console.log(newPeople)

// ES6 -> preffered way  [...array_name]
let newPeople2 = [...people]
newPeople2.pop()
console.log(people)
console.log(newPeople2)