const read = require('readline-sync');
var score = 0;

const questions = [
  {
    question: "Who vanished first, in infinity war ",
    answer: "Bucky Barnes",
  },
  {
    question: "Who vanished last, in infinity war ",
    answer: "Nick Fury",
  },
  {
    question: "Who knows what exactly happens in infinity war among heroes ",
    answer: "Stephen Strange",
  },
  {
    question: "What is the first Infinity Stone thanos got ",
    answer: "Power stone",
  },
  {
    question: "What is the last Infinity Stone thanos got ",
    answer: "Mind stone",
  },
  {
    question: "Who did first snap in end game ",
    answer: "Bruce Banner",
  },
  {
    question: "Who did last snap in end game ",
    answer: "Tony Stark",
  },
  {
    question: "Who is the first one to came back after vanishing in infinity war ",
    answer: "Sam Wilson",
  },
  {
    question: "Who has the power to take Thor's hammer other than Thor ",
    answer: "Steve Rogers",
  },
  {
    question: "Whom do we love 3000 ",
    answer: "Tony Stark",
  },
];

function quiz(question, answer) {
  var userAnswer = read.question(question);
  if (userAnswer === answer) {
    score = score + 1;
    console.log('right ');
  } else {
    console.log('wrong ');
  }
}

function call_quiz() {
  for (var i = 0; i < questions.length; i++) {
    console.log('--------------');
    quiz(questions[i].question, questions[i].answer);
  }
}

function play() {
  const userName = read.question('Whats your name ? ');
  console.log('Hello ' + userName + ' Welcome to Avengers Quiz' + ' \nAnswer these in  character names not super hero names ');
  call_quiz();
  console.log('Your total score is '+ score);
}

play();