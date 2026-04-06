const btnToast = document.querySelector("#botonToast"),
  botonSwal = document.querySelector("#botonSwal");
const btnCalcular = document.getElementById("calcular"),
  dates = document.querySelectorAll('input[type="date"]');
btnToast.addEventListener("click", () => {
  Toastify({
    text: "Tu pedido esta siendo procesado",
    duration: 3000, //1000ms = 1s
    //   destination: "https://github.com/apvarun/toastify-js",
    //   newWindow: true,
    //   close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "green",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
});

const producto = {
  nombre: 'TV 85"',
};
botonSwal.addEventListener("click", () => {
  // Swal.fire({
  //   title: "Producto",
  //   text: `El producto ${producto.nombre} fue agreagdo con exito`,
  //   icon: "sucess",
  // });
  Swal.fire({
    title: "Estas seguro?",
    //   text: "You won't be able to revert this!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "SI, cancelar!",
    cancelButtonText: "no, por favor no!",
  }).then((result) => {
    if (result.isConfirmed)
      Swal.fire({
        title: "Compra cancelada!",
        //   text: "Your file has been deleted.",
        icon: "success",
      });
  });
});

// Date()
const DateTime = luxon.DateTime;
const ahora = DateTime.now();
// console.log(ahora.toLocaleString());
// console.log(ahora.setLocale("en").toLocaleString());
// console.log(ahora.year);
// console.log(ahora.month);
// console.log(ahora.day);
// console.log(ahora.weekday);

// RESERVAS

let inicio = DateTime.now().toFormat("yyyy-MM-dd");
let fin = DateTime.now().plus({ months: 4 }).toFormat("yyyy-MM-dd");
dates.forEach((element) => {
  element.setAttribute("min", inicio);
  element.setAttribute("max", fin);
});

function calcularEstadia(checkOut, checkIn) {
  let total = checkOut.diff(checkIn);
  return total.as("days");
}

btnCalcular.addEventListener("click", () => {
  let checkOut = DateTime.fromISO(dates[1].value);
  let checkIn = DateTime.fromISO(dates[0].value);

  let estadia = calcularEstadia(checkOut, checkIn);
  Swal.fire({
    title: `El precio de tu estadia por ${estadia} dias es : ${estadia * 8000}`,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonColor: "green",
    confirmButtonText: "Guardar",
    denyButtonText: `No quiero`,
  });
});
// CREDIT CARD
const creditCard = document.querySelector("#credit-card");
const icons = document.querySelectorAll(".icons i.fa-brands");

const cleave = new Cleave("#card-number", {
  creditCard: true,
  onCreditCardTypeChanged: function (type) {
    // update UI ...
    console.log(type);

    switch (type) {
      case "visa":
        icons[0].classList.add("active");
        break;
      case "mastercard":
        icons[3].classList.add("active");
        break;
      case "unknown":
        icons.forEach((icon) => icon.classList.remove("active"));
        break;
      default:
        // if(type == 'unknown')
        //   icons.forEach(icon=> icon.classList.remove('active'))
        break;
    }
  },
});

// CREAR UNA FUNCION CONSTRUCTORA DE LA TARJETA
