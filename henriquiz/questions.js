const questions = [
    {
        //1
        question: 'What is Joe Exotic a.k.a the Tiger King\'s real name?',
        answers: [
          { text: 'Joey William Sasha McDonald-Beau', correct: false },
          { text: 'Joaquin Oliver Elijah King', correct: false },
          { text: 'Joseph Allen Maldonado-Passage', correct: true },
          { text: 'Jodin Noah Williams', correct: false },
          { text: 'Joel Alex Atticus-Sterling', correct: false },
          { text: 'Abraham Joffrey MacMilan', correct: false }
      ]
    },
    {
      //2
      question: 'Which actor voiced both Darth Vader and The Lion King\'s Mufasa?',
      answers: [
        { text: 'Morgan Freeman', correct: false },
        { text: 'Rowan Atkinson', correct: false },
        { text: 'Dave Batista', correct: false },
        { text: 'Robert Guillaume', correct: false },
        { text: 'Donald Glover', correct: false },
        { text: 'James Earl Jones', correct: true }
      ]
    },
    {
      //3
      question: 'What does the acronym "SMH" stand for?',
      answers: [
        { text: 'Shave my head', correct: false },
        { text: 'Shaking my head', correct: true },
        { text: 'Show my head', correct: false },
        { text: 'Shook my head', correct: false },
        { text: 'Shake my head', correct: false },
        { text: 'Shakes my head', correct: false }
      ]
    },
    {
      //4
      question: 'What year did the "Friends" TV sitcom premier on NBC?',
      answers: [
        { text: '1993', correct: false },
        { text: '1994', correct: true },
        { text: '1995', correct: false },
        { text: '1996', correct: false },
        { text: '1997', correct: false },
        { text: '1998', correct: false }
      ]
    },
    {
      //5
      question: 'Based on your 2021 Q&A stream, What was your answer to "If you could change your name, what would it be?',
      answers: [
        { text: 'Josh', correct: false },
        { text: 'Henry', correct: false },
        { text: 'Marlin', correct: false },
        { text: 'Billy', correct: false },
        { text: 'Chad', correct: true },
        { text: 'Kyle', correct: false }
      ]
    },
    {
      //6
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //7
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //8
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //9
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //10
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //11
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //12
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //13
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //14
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //15
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //16
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //17
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //18
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //19
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //20
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //21
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //22
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //23
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //24
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //25
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //26
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //27
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //28
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //29
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //30
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //31
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //32
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //33
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //34
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //35
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //36
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //37
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //38
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //39
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //40
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //41
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //42
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //43
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //44
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //45
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //46
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //47
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //48
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //49
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    },
    {
      //50
      question: '',
      answers: [
        { text: '', correct: true },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false }
      ]
    }
  ]