const card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
  contenedor = document.querySelector(".contenedor");
const form = document.querySelector("#form-login");
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

const renderServicios = (arr) => {
  contenedor.innerHTML = "";
  let html;
  for (const item of arr) {
    const { id, nombre, img, precio } = item;
    html = `
        <div class="card">
      		<div class="card-image">
        	<img src="../img/${img}">
        	<span class="card-title">${nombre.toUpperCase()}</span>
       </div>
     	 <div class="card-content"> 
     		<p>$${precio}</p>
      </div>
      <div class="card-action">
        <button class="btn btn-normal" id="${id}">Comprar</button>
      </div>
     </div>
     `;
    contenedor.innerHTML = contenedor.innerHTML + html;
    // contenedor.innerHTML += html;
  }
};

// renderServicios(servicios);

// promesas

// console.log('Hola');
// console.log(new Promise((resolve,reject)=>{
//   // cuerpo de la promesa
// }))
// console.log('Chau');

const eventoFuturo = (response) => {
  return new Promise((resolve, reject) => {
    // cuerpo de la promesa
    setTimeout(() => {
      if (response === true) {
        resolve("Promesa resuelta");
      } else {
        reject("Promesa rechazada");
      }
    }, 2000);
  });
};

// eventoFuturo(true)
//   .then((res) => console.log(res))
//   .catch((error) => console.error(error))
//   .finally(() => {
//     console.log("Fin");
//   });

const devolverCD = (respuesta) => {
  return new Promise((resolve, reject) => {
    // cuerpo de la promesa
    setTimeout(() => {
      if (respuesta === "si") {
        resolve("Si ya te lo devuelvo");
      } else {
        reject("NO, la verdad que no lo tengo");
      }
    }, 3000);
  });
};

// console.log("Te acordas el cd que te presté?");

// devolverCD("si")
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log("Dale, gracias");
//   });

//   console.log("Sigo haciendo cosas");

const pedirServicios = (arr) => {
  return new Promise((resolve, reject) => {
    // cuerpo de la promesa
    setTimeout(() => {
      if (arr) {
        resolve(arr);
      } else {
        reject("Error al cargar los datos");
      }
    }, 3000);
  });
};

pedirServicios(servicios)
  .then((response) => {
    // console.log(response);
    // renderServicios(response)
  })
  .catch((error) => {
    console.log(error);
    contenedor.innerHTML=`<h2>${error}</h2>` 
  });
