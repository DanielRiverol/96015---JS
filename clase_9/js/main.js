const productos = [
  { id: 1, nombre: "arroz integral", precio: 89 },
  { id: 2, nombre: "papa", precio: 90 },
  { id: 3, nombre: "tomate", precio: 204 },
  { id: 4, nombre: "morrón", precio: 870 },
  { id: 5, nombre: "pan", precio: 240 },
  { id: 6, nombre: "fideo", precio: 124 },
  { id: 7, nombre: "fideo", precio: 160 },
  { id: 8, nombre: "arroz", precio: 500 },
  { id: 8, nombre: "arroz", precio: 500 },
];
const personas = [
  // "Matias",
  // "Pablo",
  // "Maria",
  // "Tobias",
  // "Marcia",
  // "Kevin",
  // "Karen",
  "Federico",
  "Carolina",
  "Facundo",
  "Camila",
  "Stefi",
  "Augusto",
  "Jessica",
  "Carla",
  "Bautista",
  "Rodri",
  "German",
];
// aaceso al arbol de DOM
// console.dir(document)
// acceder a los elementos del DOM
// console.log(document.getElementById("top"));

// acceso a traves del id
const contenedorPrincipal = document.getElementById("top");
// console.log(contenedorPrincipal);
// acceso a traves de class
const listas = document.getElementsByClassName("lista");
// console.log(listas[0].innerText);
// console.log(listas[1].innerText);
// console.log(listas[2].innerText);

const paises = document.getElementsByClassName("pais");
// console.log(paises);
for (const pais of paises) {
  // console.log(pais.textContent);
  // console.log(pais.innerText);
  // console.log(pais.innerHTML);
}

// acceso a traves de la etiqueta
const divs = document.getElementsByTagName("div");

// console.log(divs);

const tituloSecundario = document.getElementById("secundario");
console.log(tituloSecundario);
// let nombre = prompt("Ingresa tu nombre");
// console.log(nombre);
const inputNombre = document.querySelector('input[type="text"]');

tituloSecundario.innerHTML = `
Hola ${inputNombre.value}
`;


// tituloSecundario.className = "card";

// tituloSecundario.style.background ="green"
tituloSecundario.classList.add("card");
tituloSecundario.classList.remove("card");
let temperatura = 21;

const nodoTemperatura = document.getElementById("temperatura");
nodoTemperatura.style.padding= "10px"

let color = "";
if (temperatura > 30) {
  color = "#ff0000";
  nodoTemperatura.innerHTML = "Hace mucho calor";
  nodoTemperatura.style.color= "white"
} else if (temperatura >= 20) {
  color = "orange";
  nodoTemperatura.innerHTML = "Hace  calor";
} else if (temperatura >= 10) {
  color = "cyan";
  nodoTemperatura.innerHTML = "Esta agradable";
}else{
  color = "blue";
  nodoTemperatura.innerHTML = "Hace frio";
  nodoTemperatura.style.color= "white"
  
}
nodoTemperatura.style.background = color;
// crear elementos
const divContent= document.createElement("div")
const parrafo= document.createElement("p")
parrafo.className= 'box'
parrafo.innerHTML= "soy un parrafo creado desde JS"
divContent.className= "card"
divContent.append(parrafo)
const contenedor= document.getElementById('contenedor')

contenedor.append(divContent)
// document.body.append(parrafo)
//  agregar contenido dinamico...
const listNombres= document.getElementById('nombres')

personas.push("Oclivar","Andrea", "Mauricio")
personas.push(inputNombre.value);
for (const nombre of personas) {
  // console.log(nombre);
  const li = document.createElement('li')
  li.innerText= nombre
  listNombres.append(li)
}

// acceso a los inputs
// const inputNombre = document.querySelector('input[type="text"]')


// const inputs = document.querySelectorAll('input')
// console.log(inputs[1]);


const listaProductos= document.querySelector('ul#productos')
for (const producto of productos) {
  // console.log(nombre);
  const li = document.createElement("li");
  li.innerHTML = `<div class="box" id=${producto.id}>
      <h2>${producto.nombre.toUpperCase()}</h2>
      <p>Precio: $${producto.precio}</p>
    </div>`;
  listaProductos.append(li);
}
// fragment