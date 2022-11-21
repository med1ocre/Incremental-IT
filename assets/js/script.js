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
  UpdateButtons();
  if(Marketing.Fliers.Amount >= 1){
    StartMarketing();
  }
}

window.setInterval(function(){

  ManageIdeas();
  UpdateButtons();

},10)

window.setInterval(function(){

  if(Flag.KnowledgeBar == 1){
    CalculateKnowledgePoints();
  }

  Element.knowledgeprogressbarDisp.value = Knowledge.Points;
  Element.knowledgeprogressbarDisp.max = Knowledge.MaxPoints;

},Knowledge.Speed)

window.setInterval(function(){

  if(Knowledge.Points == Knowledge.MaxPoints && Flag.Iq == 1){

    CalculateIQ();

  }

},4000)


let saveInterval = window.setInterval(function(){

  saveGame();

}, 30000); //30sec


let sellInterval = window.setInterval(function(){

  Sellticket(Tickets.SellCount);

}, Tickets.Speed);

let ticketInterval = window.setInterval(function(){

  if(Worker.User.Amount >= 1){
    Createticket();
  }

}, 2000); //2sec

function blink(element){

    {
        var handle = setInterval(function () { toggleVisibility(element)}, 30);
    }

    function toggleVisibility(element){
    Global.blinkCounter = Global.blinkCounter+1;

    if (Global.blinkCounter >= 12){
        clearInterval(handle);
        Global.blinkCounter = 0;
        element.style.visibility = "visible";
    } else {
        if (element.style.visibility != "hidden"){
        element.style.visibility = "hidden";
        } else {
        element.style.visibility = "visible";
        }
      }
    }

    }

function UpdateText(){

  Element.ticketTextDisp.innerHTML = formatWithCommas(Tickets.Total);
  Element.queuedticketsTextDisp.innerHTML = formatWithCommas(Tickets.Queued);
  Element.fundsTextDisp.innerHTML = formatWithCommas(Player.Funds, 2);
  Element.techniciansTextDisp.innerHTML = formatWithCommas(Worker.Technician.Amount) + " ";
  Element.techniciancostTextDisp.innerHTML = "($" + formatWithCommas(Worker.Technician.Price, 2) + ")";
  Element.analystsTextDisp.innerHTML = formatWithCommas(Worker.Analyst.Amount) + " ";
  Element.analystcostTextDisp.innerHTML = "($" + formatWithCommas(Worker.Analyst.Price, 2) + ")";
  Element.usersTextDisp.innerHTML = formatWithCommas(Worker.User.Amount) + " ";
  Element.fliersTextDisp.innerHTML = formatWithCommas(Marketing.Fliers.Amount) + " ";
  Element.flierscostTextDisp.innerHTML = "($" + formatWithCommas(Marketing.Fliers.Price, 2) + ")";
  Element.spTextDisp.innerHTML = formatWithCommas(Satisfaction.Points);
  Element.kpTextDisp.innerHTML = formatWithCommas(Knowledge.Points);
  Element.kpmaxTextDisp.innerHTML = formatWithCommas(Knowledge.MaxPoints);
  Element.nextspTextDisp.innerHTML = formatWithCommas(Satisfaction.NextPoint);
  Element.iqTextDisp.innerHTML = formatWithCommas(Knowledge.Iq);
  Element.knowledgeprogressbarDisp.value = Tickets.Total;
  Element.knowledgeprogressbarDisp.max = Satisfaction.NextPoint;

}

function UpdateButtons(){

  if(Satisfaction.Points<=Knowledge.Upgrade.Cap + Knowledge.Upgrade.Spd){

    Element.KPCapBtn.disabled = true;
    Element.KPSpdBtn.disabled = true;

  }else{

    Element.KPCapBtn.disabled = false;
    Element.KPSpdBtn.disabled = false;

  }

  if(Flag.Analyst == 0){

    Element.analystdivDisp.style.display = "none";

  }else{

    Element.analystdivDisp.style.display = "block";

  }

  if(Flag.Satisfaction == 0){

    Element.satisfactiondivDisp.style.display = "none";

    }else{

    Element.satisfactiondivDisp.style.display = "block";

    }


  if(Player.Funds >= 15){

    Flag.Knowledge = 1;

  }


  if(Flag.Knowledge == 0){

    Element.knowledgedivDisp.style.display = "none";

  }else{

    Element.knowledgedivDisp.style.display = "block";

  }




}


//Function for generating tickets via button
Element.generateTicketBtn.onclick = function(){

  Tickets.Total += 1;

  Tickets.Queued += 1;

  Element.ticketTextDisp.innerHTML = formatWithCommas(Tickets.Total);
  Element.queuedticketsTextDisp.innerHTML = formatWithCommas(Tickets.Queued);

  setSatisfaction();

}



function Createticket(){

  let amount = Worker.User.Amount;

  //Create tickets equal to the amount of technicians you have

  Tickets.Total += amount;
  Tickets.Queued += amount;

  Element.ticketTextDisp.innerHTML = formatWithCommas(Tickets.Total);
  Element.queuedticketsTextDisp.innerHTML = formatWithCommas(Tickets.Queued);

  setSatisfaction();

}

function Sellticket(ticketsDemanded){

  ticketsDemanded = ticketsDemanded + Worker.Technician.Amount + Worker.Technician.Boost;

  if(Tickets.Queued > 0){

    if(ticketsDemanded <= Tickets.Queued){

      Tickets.Queued -= ticketsDemanded;

      Player.Funds += Tickets.Price * ticketsDemanded;

    }else{

      if(ticketsDemanded > Tickets.Queued){

        transaction = Tickets.Queued;

        Player.Funds += Tickets.Price * transaction;

        Tickets.Queued = 0;

      }

    }

  }else{

    //console.log("No tickets queued!")

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

  Element.fundsTextDisp.innerHTML = formatWithCommas(Player.Funds, 2);
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

  Element.fundsTextDisp.innerHTML = formatWithCommas(Player.Funds, 2);
  Element.analystsTextDisp.innerHTML = formatWithCommas(Worker.Analyst.Amount) + " ";
  Element.analystcostTextDisp.innerHTML = "($" + formatWithCommas(Worker.Analyst.Price, 2) + ")";

}

function StartMarketing(){

  var a = 0;

  function update() {
    a = a == Element.fliersprogressbarDisp.max ? 0 : ++a;
    Element.fliersprogressbarDisp.value = a;

    if(Element.fliersprogressbarDisp.value == Element.fliersprogressbarDisp.max){

      Worker.User.Amount += Marketing.Fliers.Value;

      Element.usersTextDisp.innerHTML = formatWithCommas(Worker.User.Amount) + " ";

    }

  }

  setInterval(update, 100);


}

function BuyFlier(){

  if(Player.Funds >= Marketing.Fliers.Price){

    var progress = document.getElementById("fliersprogressbar");

    Player.Funds -= Marketing.Fliers.Price;

    Marketing.Fliers.Price = (Math.pow(1.5,Marketing.Fliers.Amount)+5);

    progress.max -= 10;

    if(Marketing.Fliers.Amount == 0){
      StartMarketing();
    }

    Marketing.Fliers.Amount += 1;

    Element.fundsTextDisp.innerHTML = formatWithCommas(Player.Funds, 2);
    Element.fliersTextDisp.innerHTML = formatWithCommas(Marketing.Fliers.Amount) + " ";
    Element.flierscostTextDisp.innerHTML = "($" + formatWithCommas(Marketing.Fliers.Price, 2) + ")";


  }else{

    console.log("You don't have enough funds!");

  }

}

function setSatisfaction(){

  if(Tickets.Total >= Satisfaction.NextPoint){

    Satisfaction.Points += 1;

    Satisfaction.NextPoint = Satisfaction.Points * 1000

    Element.spTextDisp.innerHTML = formatWithCommas(Satisfaction.Points);
    Element.nextspTextDisp.innerHTML = formatWithCommas(Satisfaction.NextPoint);

  }

}

function CalculateKnowledgePoints(){

  if(Knowledge.Points < Knowledge.MaxPoints){

    Knowledge.Points++

    Element.kpTextDisp.innerHTML = formatWithCommas(Knowledge.Points);
    Element.kpmaxTextDisp.innerHTML = formatWithCommas(Knowledge.MaxPoints);

  }else{
    //console.log("You hit the max");
  }

}

function CalculateIQ(){

  Knowledge.Iq++

  Element.iqTextDisp.innerHTML = formatWithCommas(Knowledge.Iq);

}



function BuyKPCap(){

  if(Satisfaction.Points>0){

    Knowledge.Upgrade.Cap += 1;
    Knowledge.MaxPoints += 1000;

    Element.KPCap.innerHTML = Knowledge.Upgrade.Cap;

  }

}

function BuyKPSpd(){

  if(Satisfaction.Points>0){

    Knowledge.Upgrade.Spd += 1;
    Knowledge.Speed -= 20;

    Element.KPSpd.innerHTML = Knowledge.Upgrade.Spd;
  }

}


function DisplayMessage(msg){

  Element.readout5TextDisp.innerHTML = Element.readout4TextDisp.innerHTML;
  Element.readout4TextDisp.innerHTML = Element.readout3TextDisp.innerHTML;
  Element.readout3TextDisp.innerHTML = Element.readout2TextDisp.innerHTML;
  Element.readout2TextDisp.innerHTML = Element.readout1TextDisp.innerHTML;
  Element.readout1TextDisp.innerHTML = msg;


}


function ManageIdeas(){
    for(var i = 0; i < ideas.length; i++){
        if (ideas[i].trigger() && (ideas[i].uses > 0)){
            DisplayIdea(ideas[i]);
            ideas[i].uses = ideas[i].uses - 1;
            activeIdeas.push(ideas[i]);

        }

    }


    for(var i = 0; i < activeIdeas.length; i++){
        if (activeIdeas[i].cost()){
            activeIdeas[i].element.disabled = false;
        } else {
            activeIdeas[i].element.disabled = true;
        }
    }
}

function DisplayIdea(idea){

  idea.element = document.createElement("button");
  idea.element.setAttribute("id", idea.id);

  idea.element.onclick = function(){idea.effect()};

  idea.element.setAttribute("class", "projectButton");
  ideaListTopElement.appendChild(idea.element, ideaListTopElement.firstChild);

  var span = document.createElement("span");
  span.style.fontWeight = "bold";
  idea.element.appendChild(span);

  var title = document.createTextNode(idea.title);
  span.appendChild(title);

  var cost = document.createTextNode(idea.pricetag);
  idea.element.appendChild(cost);

  var div = document.createElement("div");
  idea.element.appendChild(div);

  var description = document.createTextNode(idea.description);
  idea.element.appendChild(description);

  blink(idea.element);

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
  if(typeof saveGame.Marketing !== "undefined"){
    Marketing = saveGame.Marketing;
  }
  if(typeof saveGame.Satisfaction !== "undefined"){
    Satisfaction = saveGame.Satisfaction;
  }
  if(typeof saveGame.Knowledge !== "undefined"){
    Knowledge = saveGame.Knowledge;
  }
  if(typeof saveGame.Flag !== "undefined"){
    Flag = saveGame.Flag;
  }
}

//function to save our game
function saveGame(){
  var gameSave = {
    //setting our obects/values
    Player: Player,
    Tickets: Tickets,
    Worker: Worker,
    Marketing: Marketing,
    Satisfaction: Satisfaction,
    Knowledge: Knowledge,
    Flag: Flag,
  };
  //stringify it for readability
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function reset() {
    localStorage.removeItem("gameSave");
    location.reload();


}
