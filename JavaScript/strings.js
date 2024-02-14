let info = "AdfdsgffZhgFJgdjggkkAAAD"

// length
console.log(info.length)

// initials
console.log(info[0])

// toUpperCase - toLowerCase
console.log(info.toUpperCase(), info.toLowerCase())

// search
console.log("F: ", info.search("F"))                                // finds the first required element

// slice
console.log(info.slice(0, 3))                                       // in a..b range
console.log(info.slice(11))                                         // after the n. index
console.log(info.slice(0, info.search("F")))
console.log(info.slice(info.search("Z"), info.search("J")))

// replace
console.log(info.replace('A', 'B'))                                 // replaces the first required element with the other value

// includes
console.log(info.includes('Z'))
console.log(info.includes('X'))

// startsWith - endsWith
console.log(info.startsWith('A'))
console.log(info.startsWith('Adfds'))
console.log(info.endsWith('K'))
console.log(info.endsWith('AAD'))

// there is no such a method like capitalize() in JS. use something like this instead:
function capitalize(param){
    newItem = `${param[0].toUpperCase()}${param.slice(1).toLowerCase()}`
    return newItem
}
console.log( capitalize("serhan") )