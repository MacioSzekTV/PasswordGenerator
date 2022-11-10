const promptSync = require("prompt-sync")
const prompt = promptSync();

var chars = "0123456789abcdefghijklmnopqrstuvwxtzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><{}[]"
var password = ""

var passwordLength = prompt("Jaka chcesz dlugosc hasla:")

for(var i=0; i<passwordLength; i++){
    var numer = Math.floor(Math.random() * chars.length)
    password += chars.substring(numer,numer+1)
}

console.log(password)