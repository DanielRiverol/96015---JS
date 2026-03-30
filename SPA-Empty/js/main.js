const imgbg = document.querySelector(".bg-box img");

const backgrounds = ["bg1.jpg", "bg2.jpeg", "bg3.jpg", "bg4.jpg", "bg5.jpg","bg6.jpeg"];

function cambiarImagen(fondos) {
    let random = Math.floor(Math.random() * fondos.length)
    imgbg.setAttribute("src", `../img/bg/${backgrounds[random]}`)
    console.log(random);
}
window.onload = cambiarImagen(backgrounds)

