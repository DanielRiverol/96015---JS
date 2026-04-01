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
console.log(homero);
const copiaHomero = {
  ...homero,
  activo: true,
  alias: "Cosme Fulanito",
};

console.log(copiaHomero);
