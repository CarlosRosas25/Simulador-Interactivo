/* Calcular la ganancia neta de la venta de un inmueble (casa/departamento), 
tomando en cuenta los siguientes datos:
- El agente inmobiliario cobra 3% del valor total de la venta.
- Si dicho inmueble no es tu única propiedad o lo tienes hace menos de dos años, 
deberás considerar el pago de impuestos (5% de la ganancia bruta). */

function calcularGananciaNeta (precioCompra, precioVenta, tiempo, inmuebles) {
  
  let gananciaBruta = precioVenta - precioCompra
  let gananciaAgente = (3 * precioVenta) / 100
  let gananciaNeta

  if (tiempo >= 2 && inmuebles == 1) {
    gananciaNeta = gananciaBruta - gananciaAgente
  } else {
    gananciaNeta = gananciaBruta - gananciaAgente - ((5 * gananciaBruta) / 100)
  }
  return gananciaNeta
}

let precioDeCompra = Number(prompt("¿A qué precio usted adquirió el inmueble?"))
let precioDeVenta = Number(prompt("¿A cuánto quisiera vender el inmueble?"))

while (precioDeVenta < precioDeCompra) {
  precioDeVenta = Number(prompt("Recuerda que tu precio de venta debe ser mayor al precio de compra para obtener una ganancia. ¿A cuánto quisiera vender el inmueble?"))
}

let tiempoEnElInmueble = Number(prompt("¿Hace cuántos años dicho inmueble está a su nombre?"))
let numeroDeInmuebles = parseInt(prompt("¿Cuántas propiedades tiene a su nombre?"))

alert("Tu ganancia neta es: " + calcularGananciaNeta(precioDeCompra, precioDeVenta, tiempoEnElInmueble, numeroDeInmuebles))
