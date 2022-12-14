var ideas = [];
var activeIdeas = [];

var idea1 = {

  id: "ideaButton1",
  title: "Improved Tickets",
  pricetag: " ($10.00)",
  description: "Tickets will now sell for 25% higher than the current price!",
  uses: 1,
  trigger: function(){return Worker.Technician.Amount >= 1},
  cost: function(){return Player.Funds >= 10},
  flag: 0,
  element: null,
  effect: function(){

    idea1.flag = 1;
    DisplayMessage("Tickets will now sell for 25% more!");
    Player.Funds -= 10;
    Tickets.Boost = Tickets.Boost + .25;
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
  pricetag: " ($20.00)",
  description: "Unlock Analysts and complete tickets faster!",
  uses: 1,
  trigger: function(){return Player.Funds >= 10},
  cost: function(){return Player.Funds >= 20},
  flag: 0,
  element: null,
  effect: function(){

    idea3.flag = 1;
    DisplayMessage("You have unlocked analysts!");
    Player.Funds -= 20
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
  trigger: function(){return Satisfaction.Points >= 3 && Flag.Satisfaction == 1},
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
  pricetag: " ($100.00)",
  description: "Tickets will now sell for double the price! (50c)",
  uses: 1,
  trigger: function(){return Tickets.Total >= 500},
  cost: function(){return Player.Funds >= 100},
  flag: 0,
  element: null,
  effect: function(){

    idea6.flag = 1;
    DisplayMessage("Tickets now sell for 50c!");
    Player.Funds -= 100;
    Tickets.Price = 0.50;
    idea6.element.parentNode.removeChild(idea6.element);
    var index = activeIdeas.indexOf(idea6);
    activeIdeas.splice(index,1);

  }


}

ideas.push(idea6);

var idea7 = {

  id: "ideaButton7",
  title: "Calculator",
  pricetag: " ($25.00)",
  description: "Unlock the ability to see your funds per second!",
  uses: 1,
  trigger: function(){return Tickets.Total >= 300},
  cost: function(){return Player.Funds >= 25},
  flag: 0,
  element: null,
  effect: function(){

    idea7.flag = 1;
    DisplayMessage("You are now able to see your funds per second!");
    Flag.FundsPerSec = 1;
    Player.Funds -= 25;
    idea7.element.parentNode.removeChild(idea7.element);
    var index = activeIdeas.indexOf(idea7);
    activeIdeas.splice(index,1);

  }


}

ideas.push(idea7);

var idea8 = {

  id: "ideaButton8",
  title: "The Tree",
  pricetag: " ($500.00)",
  description: "Unlock the tree of satisfaction and start unlocking perks",
  uses: 1,
  trigger: function(){return Satisfaction.Points >= 1},
  cost: function(){return Player.Funds >= 500},
  flag: 0,
  element: null,
  effect: function(){

    idea8.flag = 1;
    DisplayMessage("You unlocked the tree of satisfaction. Nice");
    Player.Funds -= 500;
    Flag.SkillTree = 1;
    idea8.element.parentNode.removeChild(idea8.element);
    var index = activeIdeas.indexOf(idea8);
    activeIdeas.splice(index,1);

  }


}

ideas.push(idea8);
