// FILTER
// verilen array'de istenilen koşulları sağlayan tüm elemanları bulur
let customers = [
    {fullName: "Ali Veli", isActive: true}, 
    {fullName: "Ayse Yildiz", isActive: true},
    {fullName: "Can Kurt", isActive: false}, 
    {fullName: "Fatma Kaya", isActive: true},  
    {fullName: "Zafer Caliskan", isActive: false}, 
]
let activeUsers = customers.filter( person => person.isActive==false )
console.log(activeUsers)
activeUsers.forEach( item => console.log(item.fullName) )


// MAP
// The forEach() method does not return a new array, whereas the map() method returns a new array.
let users = ["Ali", "Ayse", "Can", "Fatma", "Zafer"]
let newUsers = users.map( item => 
    {   
        return {userName: item, privateName: `${item[0]}..`, newName: `${item} ${item[0]}.`}
    }
)
console.log(newUsers)
/*  az önceki örnekteki gibi obje döndürürken
    let newUsers = users.map( item => ( {userName: item, privateName: `${item[0]}..`, newName: `${item} ${item[0]}.`}) )

    şekilde de kullanılabilir
*/