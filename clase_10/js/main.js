const paises = [
  "Argentina",
  "Colombia",
  "Brasil",
  "México",
  "Uruguay",
  "Venezuela",
  "Perú",
  "Chile",
  "Polonia",
  "Canada",
];
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

//Funciones de búsqueda
function buscarServicio(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}
function filtrarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}
// Acceder a los elementos del DOM
// getElementBy...('') <=> querySelector\All('')

const caja = document.querySelector("#caja");
const tituloSec = document.querySelector("#secundario");
const pais = document.querySelector("#pais");
console.log(tituloSec);
// prefijo onNOMBRE-ENVENTO
// tituloSec.onclick = ()=>{
//   alert('Hiciste clic en el titulo secundario')
// }
//addEventListener()
tituloSec.addEventListener("click", () => {
  tituloSec.innerHTML = "MODIFICADO POR EL EVENTO CLIC";
});

tituloSec.textContent = "HOLA MUNDO";

// caja.addEventListener('mouseup', ()=>{
//   console.log("Soltaste el boton");
// })
// caja.addEventListener('mousedown', ()=>{
//   console.log("Presionaste el boton");
// })
// caja.addEventListener("mouseenter", () => {
//   // console.log("Esta dentro de la caja");
//   caja.style.backgroundImage = "url(./img/estados.jpg)";
//   pais.innerHTML = "ESTADOS";
// });
// caja.addEventListener("mouseleave", () => {
//   // console.log("Esta fuera de la caja");
//   caja.style.backgroundImage = "url(./img/australia.jpg)";
//   pais.innerHTML = "<h2> AUSTRALIA </h2>";
// });
// caja.addEventListener("click", () => {
//   // console.log("Esta fuera de la caja");
//   caja.style.backgroundImage = "url(./img/pum.png)";
//   pais.innerHTML = "PUM";
// });

// eventos de teclado
const inputs = document.querySelectorAll("input");
const inputBusqueda = inputs[0];
const btnBuscar = document.querySelector("#btnSearch");
const contenedor = document.getElementById("contenedor");
// console.log(inputs);
// inputBusqueda.addEventListener('keydown',()=>{
//   // console.log('presionaste una tecla');
//   console.log(inputs[0].value);
//   pais.innerHTML = inputs[0].value

// })
// inputBusqueda.addEventListener('keyup',()=>{
//   // console.log('presionaste una tecla');
//   console.log(inputs[0].value);
//   pais.innerHTML = inputs[0].value

// })
// inputBusqueda.addEventListener("input", () => {
//   // console.log('presionaste una tecla');
//   console.log(inputs[0].value);
//   pais.innerHTML = inputs[0].value;
// });

// funcion crearHtml
function crearHtml(el) {
  // limpiamos el contenedor
  contenedor.innerHTML = "";
  if (!el) {
    contenedor.innerHTML = "SERVICIO NO ENCONTRADO";
    return;
  }

  const html = `<div class="card">
  <img src="./img/${el.img}" alt="${el.nombre}">
  <hr>
  <h3>${el.nombre}</h3>
  <p>$${el.precio}</p>
  <div class="card-action">
    <button class="btn" id="${el.id}">Comprar</button>
  </div>
</div>`;

  contenedor.innerHTML = html;
}

btnBuscar.addEventListener("click", () => {
  // console.log(inputBusqueda.value);
  const encontrado = buscarServicio(servicios, inputBusqueda.value);
  // console.log(encontrado);
  crearHtml(encontrado);
});

// SELECT
const select = document.querySelector("#paises");
paises.forEach((pais) => {
  let option = document.createElement("option");
  option.value = pais;
  option.innerText = pais;
  select.append(option);
});

select.addEventListener("change", () => {
  let option = select.options[select.selectedIndex].value;
  const parrafo = document.querySelector("#info");
  parrafo.innerHTML = `Pais seleccionado: <em>${option}</em>`;
});
// Formularios... submit
const formContacto = document.querySelector("form");
formContacto.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  // console.log(e.target[0]);
  // console.log(e.target[1]);
  const usuario = {
    nombre: e.target[0].value,
    password: e.target[1].value,
  };
  console.log(usuario);
});
