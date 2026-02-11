// let userGuardado = "pedro";
// let passGuardado = "1234";

// let check = "4";
// let ingresoUser = prompt("Ingresa tu usuario");
// let ingresoPass = prompt("Ingresa tu passoword");
// let ingresoCheck = prompt("Cuanto es 2 + 2?");
// let credenciales = ingresoUser == userGuardado && ingresoPass == passGuardado;
// if (credenciales && ingresoCheck == check) {
//   alert("Bienvenido");
// } else {
//   alert("Credenciales incorrectas");
// }
// for = por conteo
// for (let i = 1; i <= 10; i++) {
//   //i = i + 1
//   //1 2 3 10
//   console.log(i);
// }

// for (let conteo = 10; conteo >= 0; conteo = conteo - 1) {
//   console.log("Despegue en..." + conteo);
// }
// let limite = parseInt(prompt("Ingresa el valor limite (mayor a 1): "));
// for (let i = 0; i <= limite; i++) {
//   let resultado = i * 2;
//   console.log(
//     "El resultado de el producto entre " + i + " y 2 es igual a " + resultado,
//   );
// }

// alert("El jefe: Acercaos hijos. podeís hacerme tres preguntas");
// alert("Apu: Qué bueno  porque solo necesito una.");

// for (let i = 1; i <= 3; i++) {
//   if (i == 1) {
//     alert("Homero: ¿Usted es el jefe de los minisupers?");
//     alert("El jefe: Sí.");
//   } else if (i == 2) {
//     alert("Homero: ¿Usted?");
//     alert("El jefe: Sí.");
//   } else if (i == 3) {
//     alert("Homero: ¿En serio?");
//     alert("El jefe: Así es... Espero que os haya iluminado.");
//   }
// }

// alert("Gracias, vuelva pronto.");
// break interrumpe el bucle
// let palabraSecreta = "oruga";

// for (let i = 1; i <= 3; i++) {
//   let ingreso = prompt("Adivina la palabra clave. Tienes tres intentos");
//   if (ingreso == palabraSecreta) {
//     alert("Adivinaste");
//     break;
//   } else {
//     if (i != 3) {
//       alert("Volve a intentar");
//     } else {
//       alert("Mala suerte");
//     }
//   }
// }
//  continue saltear la iteracion
// for (let i = 0; i <= 10; i++) {
//   if (i == 5 || i == 7) {
//     continue;
//   }
//   console.log(i);
// }

let pisoDeseado = parseInt(prompt("A que piso desas ir? 1 a 5"));

for (let piso = 1; piso <= 5; piso++) {
  if (piso == 3) {
    console.log("Piso en mantenimiento. NO nos deteremos aqui");
    continue;
  }
  console.log("Subiendo.... Piso:" + piso);

  if (piso == pisoDeseado) {
    console.log("Lllegaste al piso:" + piso);
    break;
  }
}
console.log("Puertas abriendo.... cudado al bajar");
