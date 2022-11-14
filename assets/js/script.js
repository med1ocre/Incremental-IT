//**Landing page**
//Press spacebar to continue function
document.body.onkeyup = function(e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {

    //Hide the landing text and make the loading icon visible for 1.5 second
    Element.landingTextDisp.style.visibility = "hidden";
    document.getElementById("LandingLoader").style.visibility = "visible";

    //Get rid of the loading icon after 1.5 second
    const loadingInterval = setInterval(function() {
      window.location = "./assets/pages/main.html";
    }, 1500)
  }
}

formatWithCommas = function(num, decimal) {
    var hasDot = false;
    var base = num.toString();
    if (base.indexOf("e+") !== -1) {
    var splittedExponentNum = base.split("e+"),
        exponent = splittedExponentNum[1],
        str = '';
        if (base.indexOf(".") !== -1){
        base = splittedExponentNum[0].split(".");
        exponent -= base[1].length;
        base = base.join("");
        }
    while (exponent--) {
        str = str + '0';
        }
        base = base + str;
    }
    if (base.indexOf(".") !== -1)
    {
        hasDot = true;
    }
    if (decimal === 0)
    {
        if (base.length <= 3 && !hasDot) return base;
    }
    if (typeof (decimal) === "undefined")
    {
        decimal = 0;
    }
    var leftNum = hasDot ? base.substr(0, base.indexOf(".")) : base;
    if (decimal === 0) {
        if (num <= 999) return leftNum;
        else return leftNum.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }
    var dec = hasDot ? base.substr(base.indexOf("."), decimal + 1) : ".";
    while (dec.length < decimal+1)
        {
         dec += "0";
        }
        if (num <= 999) return leftNum + dec;
        else return leftNum.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + dec;
}

window.onload = function(){
  loadGame();
  UpdateText();
}

let saveInterval = window.setInterval(function(){

  saveGame();

}, 30000); //30sec


let sellInterval = window.setInterval(function(){

  Sellticket(Tickets.SellCount);

}, 2000); //2sec

let ticketInterval = window.setInterval(function(){

  if(Worker.Technician.Amount >= 1){
    Createticket();
  }

}, 1000); //1sec

function UpdateText(){

  Element.ticketTextDisp.innerHTML = formatWithCommas(Tickets.Total);
  Element.queuedticketsTextDisp.innerHTML = formatWithCommas(Tickets.Queued);
  Element.fundsTextDisp.innerHTML = formatWithCommas(Player.Funds, 2);
  Element.techniciansTextDisp.innerHTML = formatWithCommas(Worker.Technician.Amount) + " ";
  Element.techniciancostTextDisp.innerHTML = "($" + formatWithCommas(Worker.Technician.Price, 2) + ")";
  Element.analystsTextDisp.innerHTML = formatWithCommas(Worker.Analyst.Amount) + " ";
  Element.analystcostTextDisp.innerHTML = "($" + formatWithCommas(Worker.Analyst.Price, 2) + ")";

}


//Function for generating tickets via button
Element.generateTicketBtn.onclick = function(){

  Tickets.Total += 1;

  Tickets.Queued += 1;

  Element.ticketTextDisp.innerHTML = formatWithCommas(Tickets.Total);
  Element.queuedticketsTextDisp.innerHTML = formatWithCommas(Tickets.Queued);

}



function Createticket(){

  let amount = Worker.Technician.Amount;

  //Create tickets equal to the amount of technicians you have

  Tickets.Total += amount;
  Tickets.Queued += amount;

  Element.ticketTextDisp.innerHTML = formatWithCommas(Tickets.Total);
  Element.queuedticketsTextDisp.innerHTML = formatWithCommas(Tickets.Queued);

}

function Sellticket(ticketsDemanded){

  if(Tickets.Queued > 0){

    if(ticketsDemanded <= Tickets.Queued){

      Tickets.Queued -= ticketsDemanded + Worker.Analyst.Amount;

      Player.Funds += Tickets.Price * ticketsDemanded + Worker.Analyst.Amount;

    }else{

      if(ticketsDemanded > Tickets.Queued){

        transaction = Tickets.Queued;

        Player.Funds += Tickets.Price * transaction;

        Tickets.Queued = 0;

      }

    }

  }else{

    console.log("No tickets queued!")

  }

  Element.ticketTextDisp.innerHTML = formatWithCommas(Tickets.Total);
  Element.queuedticketsTextDisp.innerHTML = formatWithCommas(Tickets.Queued);
  Element.fundsTextDisp.innerHTML = formatWithCommas(Player.Funds, 2);

}

function BuyTechnician(){

  if(Player.Funds >= Worker.Technician.Price){

    Worker.Technician.Amount += 1;

    Player.Funds -= Worker.Technician.Price;



    //increase cost
    Worker.Technician.Price = (Math.pow(1.5,Worker.Technician.Amount)+5);

  }else{

    console.log("You don't have enough funds!");

  }

  Element.techniciansTextDisp.innerHTML = formatWithCommas(Worker.Technician.Amount) + " ";
  Element.techniciancostTextDisp.innerHTML = "($" + formatWithCommas(Worker.Technician.Price, 2) + ")";


}

function BuyAnalyst(){

  if(Player.Funds >= Worker.Analyst.Price){

    Worker.Analyst.Amount += 1;

    Player.Funds -= Worker.Analyst.Price;


    //increase cost
    Worker.Analyst.Price = (Math.pow(1.5,Worker.Analyst.Amount)+5);

  }else{

    console.log("You don't have enough funds!");

  }

  Element.analystsTextDisp.innerHTML = formatWithCommas(Worker.Analyst.Amount) + " ";
  Element.analystcostTextDisp.innerHTML = "($" + formatWithCommas(Worker.Analyst.Price, 2) + ")";

}

function DisplayMessage(msg){

  Element.readout5TextDisp.innerHTML = Element.readout4TextDisp.innerHTML;
  Element.readout4TextDisp.innerHTML = Element.readout3TextDisp.innerHTML;
  Element.readout3TextDisp.innerHTML = Element.readout2TextDisp.innerHTML;
  Element.readout2TextDisp.innerHTML = Element.readout1TextDisp.innerHTML;
  Element.readout1TextDisp.innerHTML = msg;


}


function loadGame(){
  //unparse the save
  var saveGame = JSON.parse(localStorage.getItem("gameSave"));
  //Make sure that the variable is actually defined, this is for updates so we dont throw any errors
  if(typeof saveGame.Player !== "undefined"){
    Player = saveGame.Player;
  }
  if(typeof saveGame.Tickets !== "undefined"){
    Tickets = saveGame.Tickets;
  }
  if(typeof saveGame.Worker !== "undefined"){
    Worker = saveGame.Worker;
  }
}

//function to save our game
function saveGame(){
  var gameSave = {
    //setting our obects/values
    Player: Player,
    Tickets: Tickets,
    Worker: Worker
  };
  //stringify it for readability
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function reset() {
    localStorage.removeItem("gameSave");
    location.reload();
}
