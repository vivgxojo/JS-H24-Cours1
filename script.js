//alert("Bonjour la classe!"); // ; optionnel

console.log("Ça sert juste à déboguer");

// Variable
let variable1 = 1
let variable2 = "Allo"
var variable3 = true
const variable4 = 2.4
variable5 = 'a'   // Guillemets doubles ou simples pour les strings

console.log(variable1 + variable2 + variable3 + variable4 + variable5) //concaténation
console.log(variable1 + variable4)  //adition

// Écrire sur la page
//document.write("Écrire sur la page web avec javascript")
document.getElementById("paragraphe1").innerText = "Texte du paragraphe " + variable1
document.getElementById("paragraphe2").innerHTML = "<strong>Texte</strong> du paragraphe 2"

// Fonction
function Popup(){
    alert("Bonjour la classe!")
}

// Appeler la fonction
// Popup()