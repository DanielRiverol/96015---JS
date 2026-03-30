const formRegister = document.querySelector("#formReg"),
  email = document.querySelector("#email"),
  nombre = document.querySelector("#nombre"),
  userReg = document.querySelector("#userReg"),
  passReg = document.querySelector("#passReg"),
  btnRegistrar = document.querySelector("#registrar");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//Constructor de usuario
class Usuario {
  constructor(nombre, usuario, email, password) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.email = email;
    this.pass = password;
  }
}

//Guardar en LS
function guardarEnLS(arr) {
  return localStorage.setItem("usuarios", JSON.stringify(arr));
}
//Evento
formRegister.addEventListener("submit", (e) => {
  e.preventDefault();
  //  construir un usuario
  const newUser = new Usuario(
    nombre.value,
    userReg.value,
    email.value,
    passReg.value,
  );
  usuarios.push(newUser);
  guardarEnLS(usuarios);
  formRegister.reset();
});
