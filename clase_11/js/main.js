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

//  logSquare(5);
// console.log('Primer plato');
// setTimeout(()=>{
//   console.log('Segundo plato muy sucio');
// },2000); //1s = 1000ms
// setTimeout(()=>{
//   console.log('TERCER plato muy sucio');
// },1000); //1s = 1000ms

// console.log('CUARTO plato');

btn.addEventListener("click", () => {
  setTimeout(() => {
    card.classList.add("hide");
  }, 1500);
  card.classList.remove("hide");
});

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
// renderServicios(servicios)
// fetch
// fetch("./data/data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     setTimeout(() => {
//       renderServicios(data);
//     }, 2000);
//   });
// fetch("https://api.npoint.io/bc82c86e3770cce33eea")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     setTimeout(() => {
//       renderServicios(data);
//     }, 2000);
//   })
//   .catch(() => {
//     console.log("Hubio un error");
//     contenedor.innerHTML = "Error al cargar los servicios";
//   })
//   .finally(() => {
//     console.log("Me ejecuto siempre");
//   });

// async await
async function pedirServicios() {
  try {
    const response = await fetch("https://api.npoint.io/bc82c86e3770cce33eea");

    const data = await response.json();

    console.log(data);
    setTimeout(() => {
      renderServicios(data);
    }, 2000);
  } catch (error) {
    console.log("Ha ocurrido un error" + error);
    contenedor.innerHTML = "Error al cargar los datos";
  } finally {
    console.log("Operacion finalizada");
  }
}

pedirServicios();

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
