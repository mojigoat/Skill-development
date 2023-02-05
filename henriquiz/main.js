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
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
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

const questions = [
  {
    question: 'Where in the human body would you find the medulla oblongata?',
    answers: [
      { text: 'Throat', correct: false },
      { text: 'Brain', correct: true },
      { text: 'Tongue', correct: false },
      { text: 'Ear', correct: false }
    ]
  },
  {
    question: 'What is the innermost layer around the seed of an avocado called?',
    answers: [
      { text: 'The endocarp', correct: true },
      { text: 'The mesocarp', correct: false },
      { text: 'The exocarp ', correct: false },
      { text: 'The magikarp', correct: false }
    ]
  },
  {
    question: 'What is the default starting pistol for Counter-Terrorists in CS:GO?',
    answers: [
      { text: 'P2000', correct: false },
      { text: 'Five-SeveN', correct: true },
      { text: 'Tec-9', correct: false },
      { text: 'Glock-18', correct: false }
    ]
  },
  {
    question: 'What year was the first Counter-Strike: Global Offensive Weapon Case released?',
    answers: [
        { text: '2011', correct: false },
        { text: '2014', correct: true },
        { text: '2012', correct: false },
        { text: '2013', correct: false }
    ]
  },
  {
    question: 'What is the name of the Coco Pops mascot?',
    answers: [
        { text: 'Albert', correct: false },
        { text: 'Coco', correct: true },
        { text: 'Roco', correct: false },
        { text: 'Flick', correct: false }
    ]
  },
  {
    question: 'What is the capital city of Tanzania?',
    answers: [
        { text: 'Mogadishu', correct: false },
        { text: 'Windhoek', correct: true },
        { text: 'Harare', correct: false },
        { text: 'Dodoma', correct: false }
    ]
  },
  {
    question: 'Which of the below is not a sickness in DayZ?',
    answers: [
        { text: 'Cholera', correct: false },
        { text: 'Salmonella', correct: true },
        { text: 'Flatulence', correct: false },
        { text: 'Influenza', correct: false }
    ]
  },
  {
    question: 'How many noses does a slug have?',
    answers: [
        { text: '1', correct: false },
        { text: '2', correct: true },
        { text: '3', correct: false },
        { text: '4', correct: false }
    ]
  },
  {
    question: 'What is Joe Biden\'s middle name?',
    answers: [
        { text: 'Robinette', correct: false },
        { text: 'Henry', correct: true },
        { text: 'Gregory', correct: false },
        { text: 'Samuel', correct: false }
    ]
  },
  {
    question: 'How many time zones are there in Russia?',
    answers: [
        { text: '7', correct: false },
        { text: '11', correct: true },
        { text: '15', correct: false },
        { text: '4', correct: false }
    ]
  },
  {
    question: 'How many genitalia does a female kangaroo have?',
    answers: [
        { text: '1', correct: false },
        { text: '2', correct: true },
        { text: '3', correct: false },
        { text: '4', correct: false }
    ]
  },
  {
    question: 'What is the collective noun for bears?',
    answers: [
        { text: 'Sloth', correct: false },
        { text: 'Whoop', correct: true },
        { text: 'Goldilocks', correct: false },
        { text: 'Squadron', correct: false }
    ]
  },
  {
    question: 'In CS:GO, what type of game mode is ‘Demolition’?',
    answers: [
        { text: 'Rescuing', correct: false },
        { text: 'Bomb defusal', correct: true },
        { text: 'Capturing hostages', correct: false },
        { text: 'Escaping', correct: false }
    ]
  },
  {
    question: 'Who were the winners of the 2014 ESL One: Katowice Counter Strike Championship?',
    answers: [
        { text: 'Natus Vincere', correct: false },
        { text: 'Fnatic', correct: true },
        { text: 'Ninjas in Pyjamas', correct: false },
        { text: 'Virtus.pro', correct: false }
    ]
  },
  {
    question: 'What was the first cover song you posted up on your YouTube channel?',
    answers: [
        { text: 'Where is the love', correct: false },
        { text: 'Missing you', correct: true },
        { text: 'Give Love a Try', correct: false },
        { text: 'Lazy Song', correct: false }
    ]
  },
  {
    question: 'Which Sea creature has three hearts?',
    answers: [
        { text: 'Starfish', correct: false },
        { text: 'Seahorse', correct: true },
        { text: 'Octopus', correct: false },
        { text: 'Eel', correct: false }
    ]
  },
  {
    question: 'Who was the lead singer of AC/DC in 1985?',
    answers: [
        { text: 'Phil Rudd', correct: false },
        { text: 'Angus Young', correct: true },
        { text: 'Bon Scott', correct: false },
        { text: 'Brian Johnson', correct: false }
    ]
  },
  {
    question: 'What year was Zassie announced, as part of a PUBG line up for Energy Esports?',
    answers: [
        { text: '2020', correct: false },
        { text: '2019', correct: true },
        { text: '2017', correct: false },
        { text: '2018', correct: false }
    ]
  },
  {
    question: 'As listed on YouTube, Who was the first guest that was invited on the HenricoM Podcast?',
    answers: [
        { text: 'Henry Kearney', correct: false },
        { text: 'NinjaClicks', correct: true },
        { text: 'Mrs Darkphoenixrising12', correct: false },
        { text: 'ATK ShazZ', correct: false }
    ]
  },
  {
    question: 'In League of Legends, which champion is known as "The Bounty Hunter”?',
    answers: [
        { text: 'Miss Fortune', correct: false },
        { text: 'Gangplank', correct: true },
        { text: 'Caitlyn', correct: false },
        { text: 'Tryndamere', correct: false }
    ]
  },
  {
    question: 'Which country do kiwifruit originate from?',
    answers: [
        { text: 'New Zealand', correct: false },
        { text: 'Japan', correct: true },
        { text: 'China', correct: false },
        { text: 'Argentina', correct: false }
    ]
  },
  {
    question: 'At which joint do flamingos bend their legs?',
    answers: [
        { text: 'Ankles', correct: false },
        { text: 'Knees', correct: true },
        { text: 'Elbows', correct: false },
        { text: 'Thighs', correct: false }
    ]
  },
  {
    question: 'What food is associated with the fear ‘Arachibutyrophobia’?',
    answers: [
        { text: 'Peanut butter ', correct: false },
        { text: 'Oranges', correct: true },
        { text: 'Tuna', correct: false },
        { text: 'Eggplant', correct: false }
    ]
  },
  {
    question: 'When was Nintendo Founded?',
    answers: [
        { text: 'MissFortune', correct: false },
        { text: 'Gangplank', correct: true },
        { text: 'Caitlyn', correct: false },
        { text: 'Tryndamere', correct: false }
    ]
  },
  {
    question: 'In League of Legends, which champion is known as "The Bounty Hunter”?',
    answers: [
        { text: '1889', correct: false },
        { text: '1705', correct: true },
        { text: '1906', correct: false },
        { text: '1966', correct: false }
    ]
  },
  {
    question: 'In the series ‘Yu-Gi-Oh’, Which Egyptian god card is considered the most powerful?',
    answers: [
        { text: 'Obelisk the Tormentor', correct: false },
        { text: 'Slifer the Sky Dragon', correct: true },
        { text: 'Skull Servant', correct: false },
        { text: 'The Winged Dragon of Ra', correct: false }
    ]
  },
  {
    question: 'Based on the ‘Yu-Gi-Oh’ card game, how many attack points did Dark Magician have?',
    answers: [
        { text: 'ATK/3000', correct: false },
        { text: 'ATK/2700', correct: true },
        { text: 'ATK/2500', correct: false },
        { text: 'ATK/2300', correct: false }
    ]
  },
  {
    question: 'What is Joshua ‘Nobodyyyyyyy’ Bott’s Middle name?',
    answers: [
        { text: 'Wade', correct: false },
        { text: 'William', correct: true },
        { text: 'Tyler', correct: false },
        { text: 'Steven', correct: false }
    ]
  },
  {
    question: 'How many muscles are in a cat\'s ear?',
    answers: [
        { text: '2', correct: false },
        { text: '14', correct: true },
        { text: '32', correct: false },
        { text: '7', correct: false }
    ]
  },
  {
    question: 'From the below words, which did Dr Suess invent?',
    answers: [
        { text: 'Nerd', correct: false },
        { text: 'Spam', correct: true },
        { text: 'Twinkle', correct: false },
        { text: 'Flop', correct: false }
    ]
  },
  {
    question: 'Which one below is a second generation Pokémon?',
    answers: [
        { text: 'Squirtle', correct: false },
        { text: 'Treecko', correct: true },
        { text: 'Scorbunny', correct: false },
        { text: 'Chikorita', correct: false }
    ]
  }

]