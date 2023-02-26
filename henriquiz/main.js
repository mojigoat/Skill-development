
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()

  var image_x = document.getElementById('giphy');
  image_x.parentNode.removeChild(image_x);

 
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort()
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function increaseDollar(){
  var dollarCounter = document.getElementById('donations-text');
  const text = dollarCounter.innerHTML; 
  const textArr = text.split(' ');
  const dollarAmmounttoInt = parseInt(textArr[1])
  const finalAmount = dollarAmmounttoInt + 2; 

  dollarCounter.innerHTML = "$ " + finalAmount;
}

function increaseQCounter(){
  var QCounter = document.getElementById('question-counter');
  const countertext = QCounter.innerHTML; 
  const textArr = countertext.split('/');
  const countertoInt = parseInt(textArr[0])
  const Qnumber = countertoInt + 1; 

  QCounter.innerHTML = Qnumber + "/100";
}


function resetCounter() {
  var QCounter = document.getElementById('question-counter');
  QCounter.innerHTML = "0/100";
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  increaseQCounter();
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function  selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct

  if(selectedButton.dataset.correct){
    increaseDollar();
    createGifImage()
    getRandomCheerGif()

    getSFX(12, "correct");

  }else{
    createGifImage()
    getRandomWrongGif()

    getSFX(18, "wrong");
  }

  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
   
  })
  

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    resetCounter();
    startButton.classList.remove('hide')
  }
}

function getSFX(totalfileCount, result) {
  const randomIndex = Math.floor(Math.random() * totalfileCount)
  console.log(randomIndex);
  var audio = new Audio('sfx/' + result + '/' + randomIndex + '.wav')
  audio.play()
}

function createGifImage() {
  var img = document.createElement("img")
  img.id = "giphy"
  img.classList.add("giphy");
  var src = document.getElementById("gif-container")
  src.appendChild(img)
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}



// var Donation = document.getElementsById('donations-text');

