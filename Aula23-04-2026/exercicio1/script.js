let altura = document.getElementById("altura")
let peso = document.getElementById("peso")
let resultado = document.getElementById("imc")
let imc

function IMC(){
   valorAltura = Number(altura.value)
   valorPeso = Number(peso.value)

   imc = valorPeso/valorAltura**2

   resultado.innerHTML = "IMC = " + imc.toFixed(2)
}
