const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const mainQuestionContainer = document.getElementById("question-container");
const introHeader = document.getElementById("intro-header");


startBtn.addEventListener('click', startGame)


function startGame () {
    startBtn.classList.add('hide')
    mainQuestionContainer.classList.remove('hide')
    introHeader.classList.add("hide")
    setNextQuestion()
}

function nextQuestion () {

}

function selectAnswer () {

}