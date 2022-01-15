// Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

let numero = Number(prompt("Ingrese la cantidad de veces"));
let saludo = "Hola";

for (let i = 1; i <= numero; i++) {
  document.write(saludo + "<br>");
}

// Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado

let numero = Number(prompt("Ingrese su numero"));
let entrada = Number(prompt("Ingrese otro numero"));

for (let i = 0; i <= numero; i++) {
  alert("El resultado de la operación es " + numero * entrada);
  break;
}
