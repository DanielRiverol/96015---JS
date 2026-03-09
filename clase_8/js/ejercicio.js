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

function Servicio(nombre, precio, img) {
  this.id = servicios.length + 1;
  this.nombre = nombre;
  this.precio = parseFloat(precio);
  this.img = img;
}

const newService = new Servicio("depilacion", "4500", "depilacion.png");
// console.log(newService);
servicios.push(newService);
// console.log(servicios);

function filtrarMenorPrecio(arr, precio) {
  return arr.filter((el) => el.precio <= precio);
}

const serviciosBaratos = filtrarMenorPrecio(servicios, 2500);
// console.log(serviciosBaratos);

const servMasBaratos = filtrarMenorPrecio(serviciosBaratos, 1500);
// console.log(servMasBaratos);
// funciones de filtrado
function filtrarPorRango(arr, menor, mayor) {
  return arr.filter((servi) => servi.precio > menor && servi.precio < mayor);
}

const rangoPrecios = filtrarPorRango(servicios, 2500, 5000);
// console.log(rangoPrecios);

const actualizacionPrecios = servicios.map((el) => {
  return {
    id: el.id,
    nombre: el.nombre,
    precio: (el.precio * 1.1).toFixed(0),
    img: el.img,
  };
});
// console.log(servicios);

// console.log(actualizacionPrecios);

const soloNombres = servicios.map((el) => {
  return el.nombre;
});
// console.log(soloNombres);
const soloPrecios = servicios.map((el) => {
  return el.precio;
});

// console.log(soloPrecios)

const totalInventario = servicios.reduce((acc, el) => {
  return el.precio + acc;
}, 0); //let acc = 0

console.log(totalInventario);

const servicioContratados = [];
servicioContratados.push(servicios[1], servicios[4]);

console.log(servicioContratados);
let cargo =0;

console.log(
  servicioContratados.reduce((acc, el) => {
    return el.precio + acc;
  }, cargo),
);
