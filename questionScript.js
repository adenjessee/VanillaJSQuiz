//Let the game begin

var questionText = document.getElementById("questionText");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var currentQuestionIndex = 0;
var timerEl = document.getElementById('countdown');
var timeLeft = 30;

var questions = [
  {
    question: "What is Brazil's top commodity?",
    answers: ['soybeans', 'tea', 'juice', 'coffee'],
    answer: "coffee"
  },
  {
    question: "What does Starbucks sell the most of?",
    answers: ['Soda','Tea','Juice','coffee'],
    answer: "coffee"
  },
  {
    question: "What drink do US citizens prefer?",
    answers: ["bottled water", "coffee", "fruit beverage", "milk"],
    answer:"coffee"
  },
  {
    question: "What is the focus of this quiz?",
    answers: ["soda", "coffee", "water", "cream"],
    answer:"coffee"
  }
]

function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
    }
  }, 1000);
}

function initializeGame() {
  countdown();
  questionText.textContent = questions[0].question;
  setQuestionData(currentQuestionIndex);
}

function setQuestionData(index){
  answer1.textContent = questions[index].answers[0];
  answer2.textContent = questions[index].answers[1];
  answer3.textContent = questions[index].answers[2];
  answer4.textContent = questions[index].answers[3];
}

function checkAnswer(element) {
  if(element.textContent == questions[0].answer){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
      setQuestionData(currentQuestionIndex);
    }
    else{
      if(localStorage.getItem('highScore') < timeLeft){
        localStorage.setItem('highScore', timeLeft);
      }
      location.href="highscore.html"
    }
  }
  else{
    timeLeft -= 5;
  }
}


initializeGame();


