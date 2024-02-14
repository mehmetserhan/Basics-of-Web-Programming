// javascript'te capitalize() fonksiyonu yoktur. onun yerine:
function capitalize(param){
    newItem = `${param[0].toUpperCase()}${param.slice(1).toLowerCase()}`
    return newItem
}
console.log( capitalize("serhan") )