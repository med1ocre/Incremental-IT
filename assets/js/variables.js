//Values for currencies
let Tickets = {
  Total: 0,
  Queued: 0,
  SellCount: 1,
  Price: 0.25,
  PerSec: 0
}

let Worker = {

  Technician: {
    Amount: 0,
    Price: 5
  },
  Analyst: {
    Amount: 0,
    Price: 5
  }


}

let Player = {
  Funds: 0
}

let Element = {
   generateTicketBtn: document.getElementById("GenerateTicketButton"),
   landingTextDisp: document.getElementById("LandingTextid"),
   ticketTextDisp: document.getElementById("tix"),
   fundsTextDisp: document.getElementById("funds"),
   queuedticketsTextDisp: document.getElementById("queuedtickets"),
   techniciansTextDisp: document.getElementById("technicians"),
   techniciancostTextDisp: document.getElementById("techniciancost"),
   analystsTextDisp: document.getElementById("analysts"),
   analystcostTextDisp: document.getElementById("analystcost"),

   readout1TextDisp: document.getElementById("readout1"),
   readout2TextDisp: document.getElementById("readout2"),
   readout3TextDisp: document.getElementById("readout3"),
   readout4TextDisp: document.getElementById("readout4"),
   readout5TextDisp: document.getElementById("readout5"),

}
