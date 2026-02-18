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
let saldo = 200000;
let ingresar = false;
let ingreso;
// inicio
for (let i = 2; i >= 0; i--) {
  ingreso = prompt("Ingresa tu clave");
  if (pinGuardado == ingreso) {
    alert("Bienvenido ya podes operar");
    ingresar = true;
    break;
  } else {
    alert("Error");
  }
}

if (ingresar) {
  let opcion = prompt(
    "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar.",
  );
  while (opcion != "x") {
    // switch o un if
    if (opcion == "1") {
      alert("Tu saldo es: $" + saldo);
    }
    // completar el resto de las opciones
    // Validen todo lo que puedan
    // condicion de salida
    opcion = prompt(
      "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar.",
    );
  }
} else {
  alert("Retuvimos tu tarjeta. Anda reclamar a montoto");
}
