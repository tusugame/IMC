function enviarFormulario() {
    // Obtener los valores del formulario
    var nombre = document.getElementById("Nombre").value;
    var peso = document.getElementById("Peso").value;
    var Altura = document.getElementById("Altura").value;

    var Pesoint = parseFloat(peso);
    var Alturaint = parseFloat(Altura);

    var final = Alturaint * Alturaint;
var operacion = Pesoint/final;
var imc = parseFloat(operacion);

var Resultado = "";

if (imc <= 18.5) {
    Resultado = "BajoPeso";
 }
 else if(imc <= 24.9) {
     Resultado = "Normal";
 }
 else if(imc <= 29.9) {
     Resultado ="Sobrepeso";
 }
 else if(imc <= 30) {
     Resultado = "Obesidad";
 }



    document.getElementById("Resultado").value = nombre + "\n"+"IMC: "+ imc +"\nNivel de peso: "+ Resultado ;


}