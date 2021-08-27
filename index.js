var readlineSync = require("readline-sync");

var score = 0;


var userName = readlineSync.question("What is your Name? ");

console.log("Welcome " + userName + ", to Do you know Sumit? ");


var questions = [{
  question: "What is my nickname? ",
  answer: "Sam"
},
{
  question: "Who is my close friend? ",
  answer: "Yash"
},
{
  question: "In which college did I completed Engineering? ",
  answer: "YCCE"
},
{
  question: "Which food i like most spicy or sweet?  ",
  answer: "spicy"
},
{
  question: "Where do I live? ",
  answer: "Pusad"
}]



function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
  }
  else {
    console.log("Wrong!");
  }
  console.log("Current score is: ", score);
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log(userName + " your final score is: ", score);
}

game();
showScores();
