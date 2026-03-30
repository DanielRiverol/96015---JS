const search = document.querySelector("#searchBox"),
  btnBuscar = document.querySelector("#search"),
  contenedor = document.querySelector(".servicios"),
  nombreUser = document.querySelector("#nombreUser");
// USAR FETCH
const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "Mascarillas", precio: 1900, img: "mascarilla.jpeg" },
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
//Funciones

function filtrarServicios(filtro) {
  let filtrado = servicios.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}

//Crear HTML
function crearHTML(array) {
  let html;
  contenedor.innerHTML="";
  //Construir el html

  // usar destructuring const {claves}= obj
  for (const servicio of array) {

    html = 
  `<div class="">
    <div class="card">
      <div class="card-image">
        <img src="../img/services/${servicio.img}" />
        <span class="card-title">${servicio.nombre.toUpperCase()}</span>
      </div>
      <div class="card-content">
        <p>$${servicio.precio}</p>
      </div>
      <div class="card-action">
        <button class="btn" id="${servicio.id}">Comprar</button>
      </div>
    </div>
  </div>`;
    contenedor.innerHTML += html;
  }

}

// Ejecución de funciones

//Listeners búsqueda
search.addEventListener('input',()=>{
//   validar la longitud del input > 3 carateres
})
