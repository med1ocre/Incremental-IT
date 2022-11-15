var ideas = [];
var activeIdeas = [];

var idea1 = {

  id: "ideaButton1",
  title: "Improved Technicians",
  pricetag: " ($25.00)",
  description: "Increases technician performance 25%",
  uses: 1,
  trigger: function(){return Worker.Technician.Amount >= 5},
  cost: function(){return Player.Funds >= 25},
  flag: 0,
  element: null,
  effect: function(){

    idea1.flag = 1;
    DisplayMessage("Technicians will now be 25% more productive");
    Player.Funds -= 25;
    Worker.Technician.Boost = Worker.Technician.Boost + .25;
    idea1.element.parentNode.removeChild(idea1.element);
    var index = activeIdeas.indexOf(idea1);
    activeIdeas.splice(index,1);

  }


}

ideas.push(idea1);
