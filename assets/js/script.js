//Landing page
//Press spacebar to continue function
document.body.onkeyup = function(e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {

    //Hide the landing text and make the loading icon visible for 1.5 second
    document.getElementById("LandingTextid").style.visibility = "hidden";
    document.getElementById("LandingLoader").style.visibility = "visible";

    //Get rid of the loading icon after 1.5 second
    const loadingInterval = setInterval(function() {
      window.location = "main.html";
    }, 1500)
  }
}


//Function for generating tickets via button
function GenerateTicket(){

  totalTickets += generateTicketPower;

  generatedTicketBar.setAttribute("value", totalTickets);
  generatedTicketBar.setAttribute("max", totalTicketCap);
  generatedTicketBar.setAttribute("data-label", totalTickets + " tickets");

}

//Every second the contents of this function will run
window.setInterval( function(){

  //Here we check for tickets above the threshold to push to workers
 if (totalTickets >= ticketThreshold) {
   //Subtract tickets equal to the ticketthreshold amount and also and them to the queue
   totalTickets -= ticketThreshold;
   ticketsInQueue += ticketThreshold;
   //Subtract a worker from the total workers to start working on tickets
   inactiveWorkers -= 1;

   document.getElementById("TotalWorkerText").innerHTML = inactiveWorkers + "/" + totalWorkers + " workers";

 }
},1000)
