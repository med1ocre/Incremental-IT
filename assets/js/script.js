//**Landing page**
//Press spacebar to continue function
document.body.onkeyup = function(e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {

    //Hide the landing text and make the loading icon visible for 1.5 second
    landingTextDisp.style.visibility = "hidden";
    document.getElementById("LandingLoader").style.visibility = "visible";

    //Get rid of the loading icon after 1.5 second
    const loadingInterval = setInterval(function() {
      window.location = "main.html";
    }, 1500)
  }
}

//This is to refresh/set the ticket bar to its value so that it displays correctly
function refreshticketbar(){
  generatedTicketBar.setAttribute("value", totalTickets);
  generatedTicketBar.setAttribute("max", totalTicketCap);
  generatedTicketBar.setAttribute("data-label", totalTickets + " tickets");

}

//**Main page**
//Loop to check the tickets and convert them to queued tickets
const queueTicketInterval = setInterval(function() {
  if(totalTickets > 0 && totalTickets < queueTicketThreshold){
    ticketsInQueue = ticketsInQueue + totalTickets;
    totalTickets = 0;
  }else if(totalTickets > 0 && totalTickets >= queueTicketThreshold){
    ticketsInQueue = ticketsInQueue + totalTickets;
    totalTickets = totalTickets - queueTicketThreshold;
  }

  refreshticketbar();
  ticketQueueDisp.innerHTML = ticketsInQueue + " tickets in queue";

}, 3500)

//Loop to check the tickets and convert them to queued tickets
const resolveTicketInterval = setInterval(function() {
  if(ticketsInQueue > 0  && ticketsInQueue < resolveTicketThreshold){
    totalSP = totalSP + Math.ceil(ticketsInQueue / 2);
    ticketsInQueue = ticketsInQueue - ticketsInQueue;
  }else if(ticketsInQueue > 0  && ticketsInQueue >= resolveTicketThreshold){
    totalSP = totalSP + Math.ceil(resolveTicketThreshold / 2);
    ticketsInQueue = ticketsInQueue - resolveTicketThreshold;
  }

  ticketQueueDisp.innerHTML = ticketsInQueue + " tickets in queue";
  spValueDisp.innerHTML = totalSP + " SP"

}, 5000)

//Function for generating tickets via button
generateTicketBtn.onclick = function(){

  totalTickets = totalTickets + generateTicketPower;

  refreshticketbar();

}
