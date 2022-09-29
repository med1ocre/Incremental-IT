//Values for currencies
let totalTickets = 0;
let totalTicketCap = 100;
let totalSP = 0;
//Value for the tickets that are waiting to be processed
let ticketsInQueue = 0;
//This value determines when the tickets get passed along to the workers
let queueTicketThreshold = 10;
let resolveTicketThreshold = 10;
//Values for the workers
let totalWorkers = 1;
let inactiveWorkers = 1;
//Values for clicking powers
let generateTicketPower = 1;
//HTML element values
//Value to set the ticket progress bar to its HTML element
let generatedTicketBar = document.getElementById("GeneratedTicketBar");
let generateTicketBtn = document.getElementById("GenerateTicketButton");
//Text
let spValueDisp = document.getElementById("SPValueText");
let ticketQueueDisp = document.getElementById("TicketsInQueueText");
let totalWorkerDisp = document.getElementById("TotalWorkerText");
let landingTextDisp = document.getElementById("LandingTextid");
