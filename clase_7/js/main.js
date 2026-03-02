// contructor libro
function Libro(titulo, autor, precio) {
  this.titulo = titulo;
  this.autor = autor;
  this.precio = precio;
}

const libro1 = new Libro("cien años de soledad", "g marquez", 24000);
const libro2 = new Libro("belgrano", "daniel balmaceda", 37500);

const biblioteca = [];
biblioteca.push(new Libro("harry potter 1", "jk rowling", 20000));
biblioteca.push(libro1, libro2)
// console.log(biblioteca.length);

function pedirLibros(arr, cant) {
  // podre validar la longitud de array antes? 
   do {
    let titulo = prompt("Ingresa el titulo del libro");
    let autor = prompt("Ingresa el autor del libro");
    let precio = parseFloat(prompt("Ingresa el precio del libro"));
    const newLibro = new Libro(titulo, autor, precio);
    arr.push(newLibro);//listaDeseos.push
    // break
  } while (arr.length != cant);
}


const listaDeseos=[]

// pedirLibros(listaDeseos, 1)
// console.log(listaDeseos);
// let cantidad= parseInt(prompt("CUantos libros quieres agregar: "))
// pedirLibros(biblioteca, cantidad)
// console.log(biblioteca);
