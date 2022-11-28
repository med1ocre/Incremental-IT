//Values for currencies
let Tickets = {
  Total: 0,
  Queued: 0,
  SellCount: 1,
  Price: 0.25,
  PerSec: 0,
  Speed: 2000,
  Boost: 0
}

let Worker = {

  User: {
    Amount: 0,
    Speed: 5000,
    Max: 10
  },
  Technician: {
    Amount: 0,
    Price: 5,
    SellCount: 0
  },
  Analyst: {
    Amount: 0,
    Price: 10,
    SellCount: 0
  },
  Support: {
    Amount: 0,
    Price: 500,
  },
  NetAdmin: {
    Amount: 0,
    Price: 3000,
  },
  SysAdmin: {
    Amount: 0,
    Price: 10000,
  },
  JrDev: {
    Amount: 0,
    Price: 40000,
  },
  SrDev: {
    Amount: 0,
    Price: 200000,
  },
  DatabaseAdmin: {
    Amount: 0,
    Price: 1666666,
  },

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
  Support:0,
  NetAdmin:0,
  SysAdmin:0,
  JrDev:0,
  SrDev:0,
  DatabaseAdmin:0,
  Satisfaction: 0,
  Knowledge: 0,
  KnowledgeBar: 0,
  Os: 0,
  Programming: 0,
  SkillTree: 0,
  Fps: 0,
  FundsPerSec: 0

}

let Player = {
  Funds: 0
}

let Global = {

  blinkCounter: 0

}

let Os = {

  WindowsXP:{

  },

  WindowsVista:{

  },

  Windows7:{

  },

  Windows8:{

  },

  Windows10:{

  },

  ActiveOs: "none"

}

let Tree = {

  Perk1: {

    Cost: 0,
    Flag: 0

  },
  Perk2: {

    Cost: 1,
    Flag: 0

  },
  Perk3: {

    Cost: 1,
    Flag: 0

  },
  Perk4: {

    Cost: 1,
    Flag: 0

  },
  Perk5: {

    Cost: 1,
    Flag: 0

  },
  Perk6: {

    Cost: 1,
    Flag: 0

  },
  Perk7: {

    Cost: 1,
    Flag: 0

  },
  Perk8: {

    Cost: 1,
    Flag: 0

  },
  Perk9: {

    Cost: 1,
    Flag: 0

  },
  Perk10: {

    Cost: 1,
    Flag: 0

  },
  Perk11: {

    Cost: 1,
    Flag: 0

  },

}

let Element = {
   generateTicketBtn: document.getElementById("GenerateTicketButton"),
   KPCapBtn: document.getElementById("KPCapButton"),
   KPSpdBtn: document.getElementById("KPSpdButton"),
   buildosBtn: document.getElementById("buildosBtn"),
   KPCap: document.getElementById("kpcap"),
   KPSpd: document.getElementById("kpspd"),
   maxusersTextDisp: document.getElementById("maxusers"),
   landingTextDisp: document.getElementById("LandingTextid"),
   ticketTextDisp: document.getElementById("tix"),
   fundsTextDisp: document.getElementById("funds"),
   spTextDisp: document.getElementById("sp"),
   kpTextDisp: document.getElementById("kp"),
   iqTextDisp: document.getElementById("iq"),
   osTextDisp: document.getElementById("os"),
   kpmaxTextDisp: document.getElementById("kpmax"),
   nextspTextDisp: document.getElementById("nextsp"),
   fundspersecTextDisp: document.getElementById("fundspersec"),
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
   programmingDivDisp: document.getElementById("programmingDiv"),
   satisfactiontreeDiv: document.getElementById("satisfactiontreeDiv"),

   fliersprogressbarDisp: document.getElementById("fliersprogressbar"),
   knowledgeprogressbarDisp: document.getElementById("knowledgeprogressbar"),

   readout1TextDisp: document.getElementById("readout1"),
   readout2TextDisp: document.getElementById("readout2"),
   readout3TextDisp: document.getElementById("readout3"),
   readout4TextDisp: document.getElementById("readout4"),
   readout5TextDisp: document.getElementById("readout5"),

   perk1Btn: document.getElementById("perk1Btn"),
   perk2Btn: document.getElementById("perk2Btn"),
   perk3Btn: document.getElementById("perk3Btn"),
   perk4Btn: document.getElementById("perk4Btn"),
   perk5Btn: document.getElementById("perk5Btn"),
   perk6Btn: document.getElementById("perk6Btn"),
   perk7Btn: document.getElementById("perk7Btn"),
   perk8Btn: document.getElementById("perk8Btn"),
   perk9Btn: document.getElementById("perk9Btn"),
   perk10Btn: document.getElementById("perk10Btn"),
   perk11Btn: document.getElementById("perk11Btn")

}
