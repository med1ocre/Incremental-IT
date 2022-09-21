//Values for currencies
let totalTickets = 0;
let totalTicketCap = 100;
//Value for the tickets that are waiting to be processed
let ticketsInQueue = 0;
//This value determines when the tickets get passed along to the workers
let ticketThreshold = 10;
//Values for the workers
let totalWorkers = 5;
let inactiveWorkers = 5;
//Values for clicking powers
let generateTicketPower = 1;
//Value to set the ticket progress bar to its HTML element
let generatedTicketBar = document.getElementById("GeneratedTicketBar");
