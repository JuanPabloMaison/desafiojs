//Ejercicio para calcular el IVA de un precio
let entrada = Number(prompt("Ingrese costo de entrada"));
let iva = 1.21;
let resultado;

function calculoIva(entrada, iva) {
  resultado = entrada * iva;
  resultado = parseFloat(resultado);
  return resultado;
}
calculoIva(entrada, iva);
alert("El costo de entrada con IVA es de $" + resultado);
