const nums = [10, -2, 43, 4, 5, 6, 7, 8];
const [, a, b, , c] = nums;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(nums[1]);
// console.log(nums[5]);
// console.log(nums[4]);
// OP (...)
const perros = ["Pancho", "Canela", "Boby"];
const gatitos = ["Mandibula", "Fonzo", "Mishi"];

// const mascotas = perros.concat(gatitos)
const mascotas = [...perros, ...gatitos];
// console.log(mascotas);
const homero = {
  id: 1,
  nombre: "Homero",
  edad: 38,
  activo: false,
  familia: {
    nombre: "Marge",
  },
};
// console.log(homero);
const copiaHomero = {
  ...homero,
  activo: true,
  alias: "Cosme Fulanito",
};

// console.log(copiaHomero);
const { nombre, edad, id, hobby } = homero;

// console.log(nombre);
// console.log(edad);
// console.log(id);

// console.log(hobby);
const desestructurar = (obj) => {
  const { nombre, edad } = obj;
  console.log(
    `El nombre de personaje es: ${nombre.toUpperCase()}, su edad es: ${edad} años`,
  );
};
// desestructurar(homero);

const desestructurar_2 = ({ nombre, edad }) => {
  // const { nombre, edad } = obj;
  console.log(
    `El nombre de personaje es: ${nombre.toUpperCase()}, su edad es: ${edad} años`,
  );
};
// desestructurar_2(homero);
function add(n1, n2) {
  return n1 + n2;
}

// console.log(add(1, 3));

const nums2 = [10, -2, 43, 4, 100, 6, 7, -99];
// console.log(Math.max(1,400,3,6,-2,5));
// console.log(Math.min(1,400,3,6,-2,5));
// console.log(Math.min(...nums2));
// console.log(Math.max(...nums2));

function calcular(op,...params) {
  //rest params
  // console.log(params);
  if(op == "+")return params.reduce((acc, num) => acc + num, 0);
}

 console.log(calcular("+",1,34,4,0,8));
 console.log(calcular("+",1));
 console.log(calcular("+",...nums2));//[]
 
