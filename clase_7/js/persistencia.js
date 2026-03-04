// local
// localStorage.setItem("saludo", "Hola tarola")

// let saludoAlmacenado= localStorage.getItem('saludo')
// console.log(saludoAlmacenado);

// localStorage.setItem('edad', 34)
// console.log(typeof localStorage.getItem('edad'));

// localStorage.setItem('is-active', true)
// console.log(localStorage.getItem('is-active') !== true);

// const nuemros = [1,2,3,4,5,6,7,8]
// localStorage.setItem('nums', nuemros)

// const numsLS= localStorage.getItem('nums')
// console.log(numsLS.split(','));

// const libro = {
//   titulo: "Cien años de soledad",
//   autor: "g g marquerz",
//   publicacion: 1980,
// };
// JSON {"clave":"valor"} JSON.stringify()
// localStorage.setItem("libro", JSON.stringify(libro));

const libroLS = JSON.parse(localStorage.getItem("libro"));
// console.log(libroLS);
// console.log(libroLS.titulo);
// console.log(libroLS.autor);
// console.log(libroLS.publicacion);

const user = { nickname: "dani", pass: 12345 };


localStorage.setItem("user", JSON.stringify(user));
console.log( JSON.parse(localStorage.getItem("user")));


