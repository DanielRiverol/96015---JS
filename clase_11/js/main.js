const card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
  contenedor = document.querySelector(".contenedor");

const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
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

function square(num) {
  return num * num;
}

function logSquare(num) {
  console.log(square(num));
}

// logSquare(2);
// console.log('Primer plato');
// setTimeout(()=>{
//   console.log('Segundo plato muy sucio');
// },2000); //1s = 1000ms
// setTimeout(()=>{
//   console.log('TERCER plato muy sucio');
// },1000); //1s = 1000ms

// console.log('CUARTO plato');

btn.addEventListener("click", () => {
  card.classList.remove("hide");
});
