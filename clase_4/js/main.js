//  funciones = declartacion function nombre_de_la_funcion(){}

// function saludar() {
//   // cuerpo de la funcion
//   console.log("Hola como estas?");
// }
//  invocar o llamar
// saludar()
// saludar()

function solicitarNombre() {
  let nombre = prompt("Ingresa tu nombre: ");
  console.log("Hola, tu nombre es: " + nombre);
}
// solicitarNombre()
// solicitarNombre()
// solicitarNombre()

function saludarPersonalemente(nombre = "Desconocido") {
  // nombre = 1/Lucas
  //   if (nombre === undefined) nombre = "Desconocido";
  console.log("Hola " + nombre + " como va?");
}

// saludarPersonalemente(1)
// saludarPersonalemente("Lucas")

function saludoConClima(nombre, clima) {
  console.log("Hola " + nombre + ", hoy el dia esta: " + clima);
}

// let nombreIngresado = prompt("Ingresa tu nombre");
// saludoConClima(nombreIngresado, "soleado");
// saludoConClima("nublado", "pedro")
//  return

//  funciones que devuelven valores
// function sumar(n1, n2) {
//   let resultado = n1 + n2;
//   //   return n1 + n2
//   return resultado;
// //   alert('NO me vas a ver')
// }
// sumar(2, 5);

// console.log(sumar(2, 5));
// console.log(sumar(3, -5));
// console.log(sumar(9, 12));
// console.log(sumar(142, 67));
//SCOPE o AMBITO de las variables
let resultado = 0; //global

// function sumar(n1, n2) {
//   let resultado = n1 + n2;//local
//   //   return n1 + n2
// //   console.log(resultado);
//   return resultado
//   //   alert('NO me vas a ver')
// }

// console.log(sumar(2, 5));

// console.log(resultado);

// funcion asignar operacion

// crear una funcion que pida un nuemro y valide que sea un nuemro y lo retorne
const calcular = function (n1, n2, op) {
  // validar que sean numeros
  switch (op) {
    case "+":
      return n1 + n2;
    //   break;
    case "-":
      return n1 - n2;
    //   break;
    case "*":
      return n1 * n2;
    //   break;
    case "/":
      return n1 / n2;
    //   validar que n2 no sea 0
    //   break;

    default:
      return "operación no válida";
    //   break;
  }
};

// invocar al funcion
// let resSuma= calcular(3,6, "+")
// console.log(resSuma);

// console.log(calcular(resSuma,5, "-"));
// // No lo intenten en casa hasta no practicar lo anterior
// console.log(calcular(resSuma, calcular(3,5 ,'*'),"+"));

// let resResta= calcular(3,6, "-")
// console.log(resResta);
// let resMulti= calcular(3,6, "*")
// console.log(resMulti);
// let resDivi= calcular(3,6, "/")
// console.log(resDivi);
// let opNoValida= calcular(3,6, "p")
// console.log(opNoValida);

// saludarPersonalemente();
// saludarPersonalemente("Maria");

// function configurarAlarma(hora = "6:00", mensaje = "Nueva jornada!") {
//   console.log("Alarma seteada a las: " + hora + ". Mensaje: " + mensaje);
// }

// configurarAlarma("8:00", "A lavenatarse!");
// configurarAlarma();
// configurarAlarma(undefined, "Buenas tardes");
// tradicional
// function saludar() {
//   // cuerpo de la funcion
//   console.log("Hola como estas?");
// }

//  funcion anonima

// const saludar = function () {
//   console.log("Hola como va?");
// };
// saludar()

// saludar="Hola"
// saludar = "Comestas?"

// calcular = true
// console.log(calcular);

// console.log(saludar());
// fnuction flecha
// const saludar = () => {
//   console.log("Hola como va?");
// };

// saludar()
//  ()=> return implicito

const conversor = (pesos, d_oficial = 1430) => {
  // validaciones
  return pesos / d_oficial;
};

// console.log(conversor(1200));

function mostrarConversion(monto) {
  let resultado = conversor(monto);

  if (monto > 0) {
    //  interpolacion de variables
    console.log(`Con $${monto} puedo comprar U$D ${resultado.toFixed(2)}`);
    // concatenacion
    // console.log("Con $  " + monto + "puedo comprar U$D" + resultado.toFixed(2));
  }
}
mostrarConversion(10000)