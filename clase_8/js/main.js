const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1100, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];

// funciones de orden superior
// let total = 0;
// for (let i = 1; i <=10; i++) {
//   total= total + i
//   console.log(total);
// }
// console.log(total);

function sumarRango(inicio, fin) {
  let total = 0;
  for (let i = inicio; i <= fin; i++) {
    total = total + i;
  }
  return total;
}

// console.log(sumarRango(1,10));
// console.log(sumarRango(0,30));
// console.log(2+4);

function mayorQue(n) {
  return (m) => m > n; // 51 > 50
}

// console.log(mayorQue(50));
// let mayorQue50 = mayorQue(50)

// let result1=mayorQue50(51)
// console.log(result1);
// let result2=mayorQue50(50)
// console.log(result2);

function asignarOperacion(op) {
  switch (op) {
    case "suma":
      return (n1, n2) => n1 + n2;
    case "resta":
      return (n1, n2) => n1 - n2;

    default:
      return "Error operacion no valida";
  }
}

// let sumar = asignarOperacion("suma");
// console.log(sumar(2, 67));
// console.log(sumar(12, 33));
//  console.log(sumar(12, 33));

// let restar = asignarOperacion("resta");
// console.log(restar(2, 67));
// console.log(restar(12, 33));
// console.log(restar(-2, 33));

// let opNoValida = asignarOperacion("division");
// console.log(opNoValida);

// funcion que reciben una funcion
const numeros = [1, 2, 3, 4, 6, -44];

//  for (const element of numeros) {
//    console.log(element);

//  }

function porCadaUno(arr, fn) {
  for (const element of arr) {
    //numeros
    fn(element); //console.log(element)
  }
}

// porCadaUno(numeros,console.log)
// porCadaUno(servicios,console.log)

// metodos de los arrays

function cuadruplicar(n) {
  return n * 4;
}
// numeros.forEach((num) => console.log(num));
// servicios.forEach((serv) => console.log(serv));
  numeros.forEach((num) => {
   console.log(cuadruplicar(num));
});

