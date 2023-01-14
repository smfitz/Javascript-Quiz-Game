const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const mainQuestionContainer = document.getElementById("question-container");
const introHeader = document.getElementById("intro-header");
const questionElement = document.getElementById("main-question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', startGame)


function startGame () {
    startBtn.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    mainQuestionContainer.classList.remove('hide')
    introHeader.classList.add("hide")
    showQuestion()
}

function nextQuestion () {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question) {
    questionElement.innerText = question.questions
}

function selectAnswer () {

}

// QUESTIONS FOR QUIZ 

const questions = [
    {
        question: 'What is my name?',
        answers: [
            {text: "Sean", correct: true},
            {text: "Saul", correct: false}
        ]
    },
    {
        question: "What was the answer to the last Question?",
        answers: [
            {text: "Sean", correct: true},
            {text: "Saul", correct: false}
        ]
    }
];