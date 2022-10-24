const read = require('readline-sync');
var score = 0;

const questions = [
  {
    question: 'Who vanished first, in infinity war ',
    options: 'A:BuckyBarnes     B:NickFury     C:StephenStrange     D:TonyStark ',
    answer: 'A',
  },
  {
    question: 'Who vanished last, in infinity war ',
    options: 'A:SamWilson     B:BruceBanner     C:SteeveRogers     D:NickFury ',
    answer: 'D',
  },
  {
    question: 'Who knows what exactly happens in infinity war among heroes ',
    options: 'A:TonyStark     B:NickFury     C:StephenStrange     D:BuckyBarnes ',
    answer: 'C',
  },
  {
    question: 'What is the first Infinity Stone thanos got ',
    options: 'A:PowerStone     B:MindStone     C:SpaceStone     D:SoulStone ',
    answer: 'A',
  },
  {
    question: 'What is the last Infinity Stone thanos got ',
    options: 'A:PowerStone     B:MindStone     C:SpaceStone     D:SoulStone ',
    answer: 'B',
  },
  {
    question: 'Who did first snap in end game ',
    options: 'A:TonyStark     B:NickFury     C:BuckyBarnes     D:BruceBanner ',
    answer: 'D',
  },
  {
    question: 'Who did last snap in end game ',
    options: 'A:BuckyBarnes    B:NickFury     C:TonyStark     D:StephenStrange ',
    answer: 'C',
  },
  {
    question: 'Who is the first one to came back after vanishing in infinity war ',
    options: 'A:SamWilson    B:BuckyBarnes     C:SteveRogers     D:StephenStrange ',
    answer: 'A',
  },
  {
    question: 'Who has the power to take Thors hammer other than Thor ',
    options: 'A:BruceBanner    B:BuckyBarnes     C:SteveRogers     D:StephenStrange ',
    answer: 'C',
  },
  {
    question: 'Whom do we love 3000 ',
    options: 'A:TonyStark    B:BuckyBarnes     C:SteveRogers     D:StephenStrange ',
    answer: 'A',
  },
];



function quiz(question, options, answer) {
  console.log(question);
  var userAnswer = read.question(options + ' \n');
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
    quiz(questions[i].question, questions[i].options, questions[i].answer);
  }
}

function play() {
  const userName = read.question('Whats your name ? ');
  console.log('Hello ' + userName + ' Welcome to Avengers Quiz' + ' \nAnswer these in  character names not super hero names ');
  call_quiz();
  console.log('Your total score is ' + score);
}

play();