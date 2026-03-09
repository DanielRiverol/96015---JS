function Ticket(id, evento, precio, zona) {
  this.id = id;
  this.evento = evento;
  this.precio = precio;
  this.zona = zona;
  this.vendido = false;

  this.marcarComoVendido = function () {
    this.vendido = true;
  };
}

const sistemaTickets = [];

sistemaTickets.push(new Ticket("T01", "chayane", 15000, "vip"));
sistemaTickets.push(new Ticket("T02", "ricky martin", 25000, "general"));
sistemaTickets.push(new Ticket("T03", "ac/dc", 15000, "vip"));
sistemaTickets.push(new Ticket("T04", "bts", 20000, "platea"));
sistemaTickets.push(new Ticket("T05", "dua lipa", 25000, "platea"));
sistemaTickets.push(new Ticket("T06", "bad bunny", 35000, "general"));
sistemaTickets.push(new Ticket("T07", "arcangel", 25000, "general"));

// recorremos
for (const element of sistemaTickets) {
  // console.log(element);
}
// metodos del array (bucles)
// find devuelve un elemento el primero que encuentra
// const encontrado = sistemaTickets.find((ticket)=> ticket.precio ==16000)

// console.log(encontrado);

//  funciones de busqueda
function encontrarMasBarato(arr, precio) {
  const encontrado = arr.find((ticket) => ticket.precio <= precio);
  return encontrado;
  console.log(encontrado);
}

function encontrarPorEvento(arr, evento) {
  // return sistemaTickets.find((ticket)=>ticket.evento == evento.toLowerCase())
  // evento tenga al menos 3 caracteres
  return arr.find((ticket) => ticket.evento.includes(evento.toLowerCase()));
}

// console.log(encontrarMasBarato(sistemaTickets,35000));
// // console.log(encontrarMasBarato(5000));
// let evento = prompt("Ingresa el nombre del evento al que quieres asistir");
// console.log(encontrarPorEvento(sistemaTickets,evento));

// filter devuelve un array

function masBaratos(arr, precio) {
  return arr.filter((t) => t.precio < precio);
}

const eventosBaratos = masBaratos(sistemaTickets, 25000);

console.log(eventosBaratos);

console.log(encontrarPorEvento(eventosBaratos, "bts"));

function GestorReservas() {
  this.tickets = JSON.parse(localStorage.getItem("mis_tickets")) || [];

  //   metodos de la gestion
  this.nuevaReserva = function (id, evento, precio, zona) {
    const newTicket = new Ticket(id, evento, precio, zona);
    // const newTicket = {id, evento, precio, zona};
    this.tickets.push(newTicket);
    this.sincronizarStorage()
    console.log(this.tickets);
  };

  // agregar al storage
  this.sincronizarStorage = function (){
    localStorage.setItem("mis_tickets", JSON.stringify(this.tickets));
  }
// limpiar el storage
  //  busquedas
  this.buscarEvento = function (evento) {
    return this.tickets.filter((t) => t.evento.includes(evento.toLowerCase()));
  };
}

const miAppReservas = new GestorReservas();

console.log(miAppReservas.tickets);
miAppReservas.nuevaReserva('t08', "lukra", 25000, "general")

// localStorage.clear()