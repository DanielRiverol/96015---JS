const inputNombre = document.querySelector("#nombre"),
  inputDescripcion = document.querySelector("#descripcion"),
  inputPrecio = document.querySelector("#precio"),
  inputImg = document.querySelector("#img"),
  inputTalle = document.querySelector("#select-talle"),
  btnGuardar = document.querySelector("#btnGuardar"),
  contenedor = document.querySelector("#contenedor");

const productos = [];
const talles = ["xs", "s", "m", "l", "xl", "xxl"];

// seteamos los talles
talles.forEach((talle) => {
  const option = document.createElement("option");
  option.value = talle;
  option.textContent = talle;
  inputTalle.appendChild(option);
});
// constructor
function Producto(nombre, descripcion, precio, talle, img) {
  this.id = productos.length + 1;
  this.nombre = nombre;
  this.descripcion = descripcion;
  this.precio = precio;
  this.talle = talle;
  this.img = img;
}
//  Funciones
function guardarProducto(producto) {
  // validar

  return productos.push(producto);
}

// crearHTML
function crearHtml() {
  contenedor.innerHTML = "";
  productos.forEach((prod) => {
    const { id, nombre, img, descripcion, precio, talle } = prod;
    const col = document.createElement("div");
    col.className = "col s12 m4 l3";

    col.innerHTML = `<div class="card hoverable">
        <div class="card-image" id="${id}">
          <img src="${img}">
          <span class="card-title grey darken-4" style="opacity: 0.8;">${nombre}</span>
        </div>
        <div class="card-content" style="padding: 15px;">
          <p style="font-size: 0.9rem; color: #666;">${descripcion}</p>
          <p><strong>Talle:</strong> ${talle.toUpperCase()}</p>
          <p class="cyan-text text-darken-4"><strong>$${precio}</strong></p>
        </div>
      </div>`;

    contenedor.appendChild(col);
  });
}

btnGuardar.addEventListener("click", (e) => {
  e.preventDefault();

  const archivo = inputImg.files[0];

  if (!archivo) {
    // agregar un mensaje en el DOM
    alert("Selecciona un archivo");
    return;
  }
  // crear una url
  const urlTemp = URL.createObjectURL(archivo);
  console.log(urlTemp);

  // instanciar Producto
  const producto = new Producto(
    inputNombre.value,
    inputDescripcion.value,
    inputPrecio.value,
    inputTalle.value,
    urlTemp,
  );

  console.log(producto);
  
  guardarProducto(producto);
  crearHtml();
  // limpio el form
  document.querySelector("#form-ingreso").reset();
});
