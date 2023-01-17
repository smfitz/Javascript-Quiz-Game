const questions = [
  {
    title: "What is my name?",
    choices: [ "Steve", "Sam", "Sean", "Saul" ],
    answer: "Sean"
  },
  {
    title: "Is JavaScript Hard?",
    choices: [ "No!", "A little", "Yes", "It's Easy" ],
    answer: "Yes"
  },
  {
    title: "What color is the sky?",
    choices: [ "Red", "Blue", "Orange", "Green" ],
    answer: "Blue"
  },
  {
    title: "Is this quiz Fun?",
    choices: [ "No", "Yes!!!" ],
    answer: "No"
  },
  {
    title: "How many questions was this quiz?",
    choices: [ "2", "3", "4", "5" ],
    answer: "5"
  },
];

// Global Scope Selectors

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const mainQuestionContainer = document.getElementById("question-container");
const introHeader = document.getElementById("intro-header");
const questionElement = document.getElementById("main-question");
const answerButtons = document.getElementById("answer-buttons");
const timer = document.getElementById("timer");
const response = document.getElementById("response");
const main = document.getElementById("main-body");

let questionIndex = 0;

// Start Quiz Function

let score = 0;
let timeInterval = 0;
let countdown = 75;
let penalty = 5;

startBtn.addEventListener("click", function () {
  if (timeInterval === 0) {
    timeInterval = setInterval(function () {
      countdown--;
      timer.textContent = "Time Remaining: " + countdown;
      if (countdown <= 0) {
        clearInterval(timeInterval);
        theEnd();
      }
    }, 1000);
  }
  startGame()
});

function startGame() {
  startBtn.classList.add("hide");
  mainQuestionContainer.classList.remove("hide");
  introHeader.classList.add("hide");
  showQuestion(questionIndex);
}

function showQuestion(questionIndex) { 
  mainQuestionContainer.innerHTML = ""
  answerButtons.innerHTML = ""
  let questionUl = document.createElement('ul');
  questionUl.setAttribute("id", "answer-buttons")

  for (let i = 0; i < questions.length; i++) {
    questionElement.innerText = questions[questionIndex].title;
    var displayChoices = questions[questionIndex].choices;
    mainQuestionContainer.appendChild(questionElement);
  }

  displayChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.innerHTML += "<button>" + newItem + "</button>";
    mainQuestionContainer.appendChild(questionUl);
    questionUl.appendChild(listItem);
    listItem.addEventListener("click", (answerCheck));
  })
}

function answerCheck (event) {
  let choice = event.target;
  nextBtn.classList.remove("hide");

  if (choice.textContent === questions[questionIndex].answer) {
    score++;
    main.classList.add("correct");
    questionElement.innerText = "Correct!";
  } else {
    countdown = countdown - penalty;
    main.classList.add("wrong");
    questionElement.innerText = "Wrong :(";
  }
}

const nextQuestion = () => {
  questionIndex++;
  if (questionIndex >= questions.length) {
    quizEnd();
  } else {
    showQuestion(questionIndex);
  }
}

nextBtn.addEventListener("click", nextQuestion)

function quizEnd() {
  clearInterval(timeInterval);
  mainQuestionContainer.innerText = "Thanks for playing! You did well :)"
}
