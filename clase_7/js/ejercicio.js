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

sistemaTickets.push(new Ticket("T01", "Chayane", 15000, "VIP"));
sistemaTickets.push(new Ticket("T02", "Ricky Martin", 25000, "General"));
sistemaTickets.push(new Ticket("T03", "AC/DC", 15000, "VIP"));

// console.log(sistemaTickects);
localStorage.setItem("mis_tickets", JSON.stringify(sistemaTickets));

function GestorReservas() {
  this.tickets = JSON.parse(localStorage.getItem("mis_tickets")) || [];

//   metodos de la gestion 
}



const miAppReservas= new GestorReservas()


console.log(miAppReservas.tickets);
