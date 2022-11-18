var ideas = [];
var activeIdeas = [];

var idea1 = {

  id: "ideaButton1",
  title: "Improved Technicians",
  pricetag: " ($20.00)",
  description: "Increases technician performance 25%",
  uses: 1,
  trigger: function(){return Worker.Technician.Amount >= 5},
  cost: function(){return Player.Funds >= 20},
  flag: 0,
  element: null,
  effect: function(){

    idea1.flag = 1;
    DisplayMessage("Technicians will now be 25% more productive");
    Player.Funds -= 20;
    Worker.Technician.Boost = Worker.Technician.Boost + .25;
    idea1.element.parentNode.removeChild(idea1.element);
    var index = activeIdeas.indexOf(idea1);
    activeIdeas.splice(index,1);

  }


}

ideas.push(idea1);

var idea2 = {

  id: "ideaButton2",
  title: "Study",
  pricetag: " (1,000 KP)",
  description: "Gain IQ when you are capped on Knowledge",
  uses: 1,
  trigger: function(){return Knowledge.Points >= 2000},
  cost: function(){return Knowledge.Points >= 2000},
  flag: 0,
  element: null,
  effect: function(){

    idea2.flag = 1;
    DisplayMessage("You will now gain IQ points when your Knowledge bar is capped out!");
    Knowledge.Points -= 2000;
    Flag.Iq = 1
    idea2.element.parentNode.removeChild(idea2.element);
    var index = activeIdeas.indexOf(idea2);
    activeIdeas.splice(index,1);

  }


}

ideas.push(idea2);

var idea3 = {

  id: "ideaButton3",
  title: "Not Enough",
  pricetag: " (1,000 KP)",
  description: "Unlock Analysts and complete tickets faster!",
  uses: 1,
  trigger: function(){return Knowledge.Points >= 1000},
  cost: function(){return Knowledge.Points >= 1000},
  flag: 0,
  element: null,
  effect: function(){

    idea3.flag = 1;
    DisplayMessage("You have unlocked analysts! You will now complete tickets faster! ");
    Knowledge.Points -= 1000;
    Flag.Analyst = 1
    idea3.element.parentNode.removeChild(idea3.element);
    var index = activeIdeas.indexOf(idea3);
    activeIdeas.splice(index,1);

  }


}

ideas.push(idea3);

var idea4 = {

  id: "ideaButton4",
  title: "Satisfactory",
  pricetag: " ($500.00)",
  description: "Unlock the Satisfaction menu to start gaining SP!",
  uses: 1,
  trigger: function(){return Tickets.Total >= 2000},
  cost: function(){return Player.Funds >= 500},
  flag: 0,
  element: null,
  effect: function(){

    idea4.flag = 1;
    DisplayMessage("You have unlocked the Satisfaction manu! ");
    Player.Funds -= 500;
    Flag.Satisfaction = 1
    idea4.element.parentNode.removeChild(idea4.element);
    var index = activeIdeas.indexOf(idea4);
    activeIdeas.splice(index,1);

  }


}

ideas.push(idea4);

var idea5 = {

  id: "ideaButton5",
  title: "Power of Knowledge",
  pricetag: " (2SP)",
  description: "Start gaining knowledge to spend on upgrades!",
  uses: 1,
  trigger: function(){return Satisfaction.Points >= 5 && Flag.Satisfaction == 1},
  cost: function(){return Satisfaction.Points >= 2},
  flag: 0,
  element: null,
  effect: function(){

    idea5.flag = 1;
    DisplayMessage("You have unlocked the power of Knowledge");
    Satisfaction.Points -= 2;
    Flag.KnowledgeBar = 1
    idea5.element.parentNode.removeChild(idea5.element);
    var index = activeIdeas.indexOf(idea5);
    activeIdeas.splice(index,1);

  }


}

ideas.push(idea5);

var idea6 = {

  id: "ideaButton6",
  title: "Higher Value",
  pricetag: " ($50.00)",
  description: "Tickets will now sell for double the price! (50c)",
  uses: 1,
  trigger: function(){return Tickets.Total >= 500},
  cost: function(){return Player.Funds >= 50},
  flag: 0,
  element: null,
  effect: function(){

    idea6.flag = 1;
    DisplayMessage("Tickets now sell for 50c!");
    Player.Funds -= 50;
    Tickets.Price = 0.50;
    idea6.element.parentNode.removeChild(idea6.element);
    var index = activeIdeas.indexOf(idea6);
    activeIdeas.splice(index,1);

  }


}

ideas.push(idea6);
