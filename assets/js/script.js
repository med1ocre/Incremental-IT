//Landing page
//Press spacebar to continue function
if(inGame == 0){
  document.body.onkeyup = function(e) {
    if (e.key == " " ||  e.code == "Space" || e.keyCode == 32) {

      //Hide the landing text and make the loading icon visible for 1.5 second
      inGame = 1;
      document.getElementById("LandingTextid").style.visibility = "hidden";
      document.getElementById("LandingLoader").style.visibility = "visible";

      //Get rid of the loading icon after 1.5 second
      const loadingInterval = setInterval(function () {document.getElementById("LandingLoader").style.visibility = "hidden";}, 1500)

    }
  }

}
