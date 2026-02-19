


//💰El cajero automático
//Debemos generar un script para la operación de un cajero automático
/* El mismo tiene que: 
1- Mostrar un mensaje de bienvenida
2- Permitir hasta 3 intentos de ingreso con el PIN del cliente
  2a- Si ingresa correctamente dar mensaje de Bienvenida
  2b- Terminados los intentos informar al cliente que se comunique con el banco
3- Una vez ingresado mostrar las siguientes opciones en pantalla: 
  a- Saldo 💵
  b- Retiro 💸
  c- Depósito 💰
  d- Salir ❌
4- Al finalizar mostrar mensaje
*/
let pinGuardado = "5701";
let saldo = 20000;
// let ingresar = false;

// --- Validación de PIN ---
// for (let i = 2; i >= 0; i--) {
//   let ingreso = prompt("Ingresa tu clave");
//   if (pinGuardado === ingreso) {
//     alert("Bienvenido");
//     ingresar = true;
//     break;
//   } else {
//     alert("Error");
//   }
// }

//  convertir en una funcion

function validarPin(pinCorrecto){
  for (let i = 2; i >= 0; i--) {
    let ingreso = prompt("Ingresa tu clave");
    if (pinCorrecto === ingreso) {
      return true
    } 
  }
  return false
}

// console.log(validarPin(pinGuardado));

//  crear funciones con consultarSaldo, reitar, despositar
// --- Menú con WHILE ---
if (validarPin(pinGuardado)) {
  let opcion = prompt(
    "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar.",
  );

  while (opcion !== null && opcion.toLowerCase() !== "x") {
    if (opcion == "1") {
      alert("Tu saldo es " + saldo);
    } else if (opcion == "2") {
      let retiro = parseFloat(prompt("Ingresa el monto a retirar"));
      if (retiro > saldo) {
        alert("Fondos insuficientes. Solo tienes $" + saldo);
      } else {
        saldo = saldo - retiro;
        alert("Retiraste : $" + retiro + " Tu saldo es :$" + saldo);
      }
    } else if (opcion == "3") {
      let deposito = parseFloat(prompt("Ingresa el monto a depositar"));
      saldo = saldo + deposito;
      alert("Depositaste : $" + deposito + " Tu saldo es :$" + saldo);
    }

    // Se vuelve a pedir para evaluar la condición del while
    opcion = prompt(
      "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar.",
    );
  }
  alert("Gracias por operar.");
} else {
  alert("Retendremos la tarjeta");
}