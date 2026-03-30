const formIngresar = document.querySelector("#login"),
  userInput = document.querySelector("#user"),
  passInput = document.querySelector("#pass");
const usuarios = [];

/* Funciones */
function inicioSesion(usuarios) {
  const p = document.querySelector("#mensaje");
  if (!usuarios) {
    p.innerText = "Usuario no encontrado, por favor registrese";
    return;
  }
  // busqueda de usuarios
  const userFound = usuarios.find((usuario) => {
    return (
      usuario.nombre === userInput.value && usuario.pass === passInput.value
    );
  });

  // validar
  if (userFound) {
    window.location.href = "./services.html";
  } else {
    p.innerText = "Usuario no encontrado";
  }
}

function recuperarLS() {
  return JSON.parse(localStorage.getItem("usuarios"));
}

/* ejecucion de funciones */
const usuariosLs = recuperarLS() 
/* listeners */
formIngresar.addEventListener("submit", (e) => {
  e.preventDefault();
  inicioSesion(usuariosLs);
});
