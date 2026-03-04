// Variables
// var nombre;//declarando una variable ($ _ )
// nombre = "Juan"; //asigando un valor

// Inicializacion
let nombre = "Pedro"; //Cadena de caracteres
let nombre1;
// console.log(nombre1);

nombre1 = "Pepe";
// console.log(nombre1);
// reasigna el valor a una variable
nombre1 = "Manuel";

let temperatura = 35.4;
// console.log(temperatura);

temperatura = 27; //number
// console.log(temperatura);

temperatura = "16.8"; //string
// console.log(temperatura);
temperatura = 27;
// console.log(temperatura);
// console.log(typeof temperatura);

// constantes se inicializan
const GRAVEDAD = 9.8;
// console.log(GRAVEDAD);
// console.log(typeof GRAVEDAD);

let isActive = false;
// console.log(isActive);
isActive = true;
// console.log(isActive);
// console.log(typeof isActive);

let nombreCompleto = "Juanito Arcoiris";
// console.log(nombreCompleto);
// console.log(typeof nombreCompleto);

// metodos de salida alert/console.log
// console.log("Pepe");
// console.log(nombre1);
// alert(nombreCompleto)

// console.log(4 + 5);
// console.log(4 - 5);
// console.log(4 * 5);
// console.log(4 / 5);
// console.log(GRAVEDAD + temperatura);

// console.log(nombre1 + "Perez");//Concatenacion
// console.log(GRAVEDAD + "5");
// console.log("La temperatura de hoy en Buenos Aires es de: " + temperatura + "Grados centrigrados" );

//  metodo de entrada

// prompt()
// let nombreUsuario = prompt("Ingresa tu nommbre"); //los prompt siemnpre guardan datos de tipo string
// console.log("Hola:" + nombreUsuario);

// let numero1 = prompt("Ingresa un numero");
// let numero2 = prompt("Ingresa otro numero");
// // convertir a numero
// numero1 = parseFloat(numero1)
// numero2 = parseFloat(numero2)

// let resultado = numero1 + numero2;
// console.log(
//   "El resultado de la suma entre " +
//     numero1 +
//     " y " +
//     numero2 +
//     " es igual a  " +
//     resultado,
// );
// alert(
//   "El resultado de la suma entre " +
//     numero1 +
//     " y " +
//     numero2 +
//     " es igual a  " +
//     resultado,
// );
// let decision = confirm("Estas seguro que desea salir?");
// console.log(decision);
let num1 = parseFloat(prompt("Ingresa un numero"));
let num2 = parseFloat(prompt("Ingresa otro numero"));

let resultadoSuma = num1 + num2;
let resultadoResta = num1 - num2;
let resultadoMulti = num1 * num2;
let resultadoDivi = num1 / num2;

alert(
  "El resulta de operaciones son: \n" +
    resultadoSuma +
    "\n " +
    resultadoResta +
    " \n" +
    resultadoMulti +
    " \n" +
    resultadoDivi +
    " \n",
);
