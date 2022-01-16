//Ejercicio para calcular el IVA de un precio

let resultadoFinal;

function entradaDeDatos() {
  let entradaCosto = Number(
    prompt("Ingrese costo de entrada para calcular el IVA")
  );
  return entradaCosto;
}

function calculoIva(resultado) {
  let iva = 1.21;
  let resultadoIva = resultado * iva;
  return resultadoIva;
}

function valorTotal(resultado) {
  alert("El precio final es $" + resultado);
}

resultadoFinal = entradaDeDatos();

resultadoFinal = calculoIva(resultadoFinal);

valorTotal(resultadoFinal);
