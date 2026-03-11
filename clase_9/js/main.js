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
  "Matias",
  "Pablo",
  "Maria",
  "Tobias",
  "Marcia",
  "Kevin",
  "Karen",
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

tituloSecundario.innerHTML = `
Hola tarola
`;
// tituloSecundario.className = "card";

// tituloSecundario.style.background ="green"
tituloSecundario.classList.add("card")
tituloSecundario.classList.remove("card")
let temperatura = 0;


