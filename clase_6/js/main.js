//Arrays
// const numeros = [1,2,3,4,5,6,7,8,9]
// console.log(numeros);
// // for (let i = 0; i < numeros.length; i++) {
//   //   if(numeros[i] == 3)continue
//   //   console.log(numeros[i]);
//   // }
//   for (const element of numeros) {
//     let resultado= element * 4
//     console.log(resultado);
//   }
//   numeros.push(2,4)
//   console.log(numeros);

// objetos literales
const contacto = {
  nombre: "juan",
  tel: "123456787654",
};
const contacto1 = {
  nombre: "mauricio",
  tel: "09876678",
};
const contacto2 = {
  nombre: "julia",
  tel: "09876678",
  tel_laboral: "45678935432",
};
// console.log(contacto1);
// console.log(contacto1);
// console.log(contacto1.nombre);
// console.log(contacto2.nombre);
// console.log(contacto2.tel);
// console.log(contacto2.tel_laboral);

// contacto1.tel ="4567895438"
// console.log(contacto1);
// contacto1.email="mauricio@mail.com"
// console.log(contacto1);

//  console.log("tel_laboral" in contacto2);

// forin

// for (const key in contacto2){
//   console.log(key);//nombre-tel-tel_laboral
//   console.log(contacto2[key]);//contacto2["nombre"]
// }

// fnuc ion constructora
// const libro={
//   titulo:"titulo",
// year:2026
// }
function Libro(titulo, autor, anio, isbn) {
  this.titulo = titulo; //Harry Potter 2
  this.autor = autor;
  this.anio = anio;
  this.isbn = isbn;
  this.disponible = true;

  // Metodos o acciones
  this.mostrarInfo = function () {
    return `Titulo: ${this.titulo}, Autor: ${this.autor}`;
  };

  this.prestar = function () {
    if (this.disponible) {
      this.disponible = false;
    }
  };

  this.devolver = function () {
    this.disponible = true;
  };
}

const libro1 = new Libro(
  "Harry Potter 1",
  "JK Rowling",
  1997,
  "098765456782-23654",
);
const libro2 = new Libro(
  "Harry Potter 2",
  "JK Rowling",
  1998,
  "0987661222-34556",
);
const biblioteca = [];
biblioteca.push(libro1);
// console.log(biblioteca);
// console.log(biblioteca[0].titulo);

// console.log(libro1);
// console.log(libro2);
// console.log(libro2.anio);
// console.log(libro1.mostrarInfo());
// console.log(libro2.mostrarInfo());
console.log(libro1.disponible);
libro1.prestar();
console.log(libro1.disponible);
libro1.devolver();
console.log(libro1.disponible);

// let mensaje = "Soy un mensaje";
// mensaje.toLowerCase();
// console.log(mensaje.toLowerCase());
// console.log(mensaje.toUpperCase());

// funcion constructora de un producto
function Producto(nombre, precio, stock) {
  this.nombre = nombre;
  this.precio = parseFloat(precio);
  this.stock = stock;

  // metodos
  this.hayStock = function () {
    return this.stock > 0;
  };
}
const producto1 = new Producto("Yerba", 4500, 1);

console.log(producto1);
console.log(producto1.hayStock());

// realizar un metodo que disminuya el stock

producto1.stock = 0;
producto1.stock = 100;
console.log(producto1.hayStock());

// clases
class Biblioteca {
  constructor(nombre) {
    this.nombre = nombre;
    this.catalogo = [];
  }
  getNombre() {
    return this.nombre;
  }

  agregarLibro(libro) {
    
    this.catalogo.push(libro);
    console.log(`Libro agregado: ${libro.titulo}`);
  }
}

const biblioteca1 = new Biblioteca("Lopifer");
console.log(biblioteca1.nombre);
console.log(biblioteca1.getNombre());


biblioteca1.agregarLibro(libro1)

console.log(biblioteca1.catalogo);
