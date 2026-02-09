let nombre = "Juan";
// console.log(nombre);
// nombre = 1;
// console.log(nombre);
const CLAVE = "oruga";

// CONDICIONALES
// if (condicion = V o F){ estructura}

// if(false){
//   // bloque de codigo
//   console.log("LA condicion es verdadera");

// }
// console.log(CLAVE);

// let temp = 21

// if(temp <= 20){
//   console.log("Esta agaradable");

// }

// let edad = parseInt(prompt("Ingresa tu edad:"));

// if (edad >= 18) {
//   alert("Podes entrar al casino");
// } else {
//   alert("No tienes edad para ingresar");
// }

// let nota = parseInt(prompt("Ingresa la nota que te sacaste:"));

// if (nota >= 7) {
//   console.log("TP Aprobado");
// } else {
//   console.log("Va a reentrega");
// }

// if else if

// let color = prompt(
//   "De que color esta el la luz del semaforo? (verde, amarillo, rojo)",
// );

// if (color == "verde") {
//   console.log("Podes avanzar");
// } else if (color == "amarillo") {
//   console.log("Atencion que ya cambia");
// } else if (color == "rojo") {
//   console.log("Alto!");
// }else{
//   console.log("OPCION NO VALIDA!");
// }

// let numeroOculto = 7;
// let ingreso = parseInt(prompt("Adivina el numero oculto ( 1 a 10 ): "));

// if (ingreso == numeroOculto) {
//   console.log("Adivinaste, sos groso/a");
// } else if (ingreso > numeroOculto) {
//   console.log("te pasaste, el numero es mas bajo");
// } else {
//   console.log("Te quedaste corto el nuemro es mas alto");
// }

// condicional anidado
let nombreUsuario = prompt("Ingresa tu nombre");
if (nombreUsuario == nombre) {
  console.log("Hola " + nombre);
  let claveIngresada = prompt("Ingresa tu clave");
  if (claveIngresada == CLAVE) {
    console.log("Ya podes ingresar al sistema");
  } else {
    console.log("Error de credencial");
  }
} else {
  console.log("NO estas registrado");
}
