// Object'lere Fonksiyon Eklemek

let info = {
    firstName: "Ali", 
    lastName: "Yilmaz",
    fullName: function() { return `${this.firstName[0].toUpperCase()}. ${this.lastName}` },
}
console.log(info.fullName())


// OBJECT DESTRUCTING

let settings = {
    userName: "Admin",
    password: "admin123",
    isActive: true,
    ip: "127.0.0.1",
    serverName: "server123.com"
}

// Object içerisinden direkt olarak bilgi çekmek
/* let user = settings.userName
console.log(user) */
let { userName, password } = settings
console.log(userName, password)

// İçeriden çekilen bilgiye farklı değişken ismi vermek (orijinal object'te kalıcı değişim OLMAZ)
let { serverName, ip: serverIP } = settings
console.log(serverName, serverIP)

// İstenilen bilgileri çıkarmak
// userName ve password bilgisini aldı, kalanları da newSettings olarak çıkardı (orijinal object'te kalıcı değişim OLMAZ)
let { userName:un1, password:pw2, ...newSettings } = settings
console.log(newSettings)

// Object'in destructing ile kopyalanması
// Hatalı: let settings2 = settings; settings2.userName = "ABCDEF" -> userName bilgisi iorijinal settings'te de DEĞİŞİR.
let settings2 = {...settings}
settings2.userName = "Normal User"
settings2.password = "normaluser123"
console.log("settings -> ", settings)
console.log("settings2 -> ", settings2)