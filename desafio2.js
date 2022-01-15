// compra de juegos y calculo de descuentos con iva incluido
let entrada = prompt(
  "Ingrese los juegos a comprar. Los juegos disponibles son God of War y Alone"
);

let juego1 = "God of War";
let juego2 = "Alone";
let precioJuego1 = 3800;
let precioJuego2 = 4200;
let iva = 1.21;
let resultado1 = precioJuego1 * iva;
let resultado2 = precioJuego2 * iva;
let descuento = 30;
let precioTotal1 = (resultado1 * descuento) / 100;
let precioTotal2 = (resultado2 * descuento) / 100;
let precioConDto1 = resultado1 - precioTotal1;
let precioConDto2 = resultado2 - precioTotal2;

function calculo(
  juego1,
  juego2,
  precioJuego1,
  precioJuego2,
  resultado1,
  resultado2,
  precioConDto1,
  precioConDto2
) {
  if (entrada == juego1) {
    alert("Usted eligio el juego " + juego1);
    alert("El precio sin IVA de este juego es " + precioJuego1);
    alert("El precio de este juego con IVA es " + resultado1);
    alert(
      "Este juego tiene un descuento del 30% y su precio final es " +
        precioConDto1
    );
  } else if (entrada == juego2) {
    alert("Usted eligio el juego " + juego2);
    alert("El precio sin IVA de este juego es " + precioJuego2);
    alert("El precio de este juego con IVA es " + resultado2);
    alert(
      "Este juego tiene un descuento del 30% y su precio final es " +
        precioConDto2
    );
  } else {
    alert("Este juego no existe");
  }
}
calculo(
  juego1,
  juego2,
  precioJuego1,
  precioJuego2,
  resultado1,
  resultado2,
  precioConDto1,
  precioConDto2
);
