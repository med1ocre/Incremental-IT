//Values for currencies
let Tickets = {
  Total: 0,
  Queued: 0,
  SellCount: 1,
  Price: 0.25,
  PerSec: 0,
  Speed: 2000
}

let Worker = {

  User: {
    Amount: 0,
    Price: 5
  },
  Technician: {
    Amount: 0,
    Price: 5,
    Boost: 0
  },
  Analyst: {
    Amount: 0,
    Price: 50
  }

}

let Marketing = {

  Fliers: {
    Amount: 0,
    Price: 5,
    Value: 1
  }

}

let Satisfaction = {

  Points: 0,
  NextPoint: 3000

}

let Knowledge = {

  Points: 0,
  MaxPoints: 1000,
  Speed: 100,
  Iq: 0,

  Upgrade: {

    Cap: 0,
    Spd: 0

  }

}

let Flag = {

  Iq: 0,
  Analyst: 0,
  Satisfaction: 0,
  Knowledge: 0,
  KnowledgeBar: 0

}

let Player = {
  Funds: 0
}

let Global = {

  blinkCounter: 0

}

let Element = {
   generateTicketBtn: document.getElementById("GenerateTicketButton"),
   KPCapBtn: document.getElementById("KPCapButton"),
   KPSpdBtn: document.getElementById("KPSpdButton"),
   KPCap: document.getElementById("kpcap"),
   KPSpd: document.getElementById("kpspd"),
   landingTextDisp: document.getElementById("LandingTextid"),
   ticketTextDisp: document.getElementById("tix"),
   fundsTextDisp: document.getElementById("funds"),
   spTextDisp: document.getElementById("sp"),
   kpTextDisp: document.getElementById("kp"),
   iqTextDisp: document.getElementById("iq"),
   kpmaxTextDisp: document.getElementById("kpmax"),
   nextspTextDisp: document.getElementById("nextsp"),
   queuedticketsTextDisp: document.getElementById("queuedtickets"),
   techniciansTextDisp: document.getElementById("technicians"),
   techniciancostTextDisp: document.getElementById("techniciancost"),
   analystsTextDisp: document.getElementById("analysts"),
   analystcostTextDisp: document.getElementById("analystcost"),
   usersTextDisp: document.getElementById("users"),
   fliersTextDisp: document.getElementById("fliers"),
   flierscostTextDisp: document.getElementById("flierscost"),
   analystdivDisp: document.getElementById("analystdiv"),
   satisfactiondivDisp: document.getElementById("satisfactionDiv"),
   knowledgedivDisp: document.getElementById("knowledgeDiv"),

   fliersprogressbarDisp: document.getElementById("fliersprogressbar"),
   knowledgeprogressbarDisp: document.getElementById("knowledgeprogressbar"),

   readout1TextDisp: document.getElementById("readout1"),
   readout2TextDisp: document.getElementById("readout2"),
   readout3TextDisp: document.getElementById("readout3"),
   readout4TextDisp: document.getElementById("readout4"),
   readout5TextDisp: document.getElementById("readout5"),

}
