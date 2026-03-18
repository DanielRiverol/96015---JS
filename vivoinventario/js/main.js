const inputNombre = document.querySelector("#nombre"),
  inputDescripcion = document.querySelector("#descripcion"),
  inputPrecio = document.querySelector("#precio"),
  inputImg = document.querySelector("#img"),
  inputTalle = document.querySelector("#select-talle"),
  btnGuardar = document.querySelector("#btnGuardar"),
  contenedor = document.querySelector("#contenedor");

const productos = [];
const talles = ["xs", "s", "m", "xl", "xxl", "2xl"];

//cargar opciones en select


//constructor Producto
class Producto {
  constructor(nombre, descripcion, precio, talle, img) {
    this.id = productos.length + 1;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.talle = talle;
    this.img = img;
  }
}
//Guardar producto
function guardarProducto(producto) {
  return productos.push(producto);
}

//funcion crearHtml
function crearHtml() {
  contenedor.innerHTML = "";

  productos.forEach((prod) => {
    const col = document.createElement("div");
    col.className = "col s12 m6 l4";

    col.innerHTML = `
      <div class="card hoverable">
        <div class="card-image">
          <img src="${prod.img}" style="height: 200px; object-fit: cover;">
          <span class="card-title" style="background: rgba(0,0,0,0.5);">${prod.nombre}</span>
        </div>
        <div class="card-content">
          <p>${prod.descripcion}</p>
          <p><strong>Talle:</strong> ${prod.talle.toUpperCase()}</p>
          <p><strong>Precio:</strong> $${prod.precio}</p>
        </div>
        <div class="card-action">
          <a href="#">Ver detalles</a>
        </div>
      </div>
    `;

    contenedor.append(col);
  });
}

//Evento para guardar
btnGuardar.addEventListener("click", (e) => {
  e.preventDefault();
 
});
