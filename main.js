const quizDB = [
  {
    question: "Q1. HTML stands for -",
    a:"HighText Machine Language",
    b:"HyperText and links Markup Language",
    c:"HyperText Markup Language",
    d:"None of these",
    ans: "ans3"
  },
  {
    question: "Q2. The correct sequence of HTML tags for starting a webpage is -",
    a:"Head, Title, HTML, body",
    b:"HTML, Body, Title, Head",
    c:"HTML, Head, Title, Body",
    d:"HTML, Head, Title, Body",
    ans:"ans4"

  },
  {
    question: "Q3. input  is -",
    a:"a format tag.",
    b:"an empty tag.",
    c:"All of the above",
    d:"None of the above",
    ans:"ans2"
  },
  {
    question: "Q4.The hr tag in HTML is used for -",
    a:"new line",
    b:"vertical ruler",
    c:"new paragraph",
    d:"horizontal ruler",
    ans:"ans4"
  },
  {
    question: "Q5.Which of the following tag is used to insert a line-break in HTML?",
    a:"class",
    b:"id",
    c:"type",
    d:"None of the above",
    ans:"ans2"
  },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore')

//QuestionCount
let questionCount = 0;
let score = 0;


// load Question
const loadQuestion = () => {

  const questionlist = quizDB[questionCount];

  question.innerHTML = (questionlist.question);

  option1.innerHTML = questionlist.a;
  option2.innerHTML = questionlist.b;
  option3.innerHTML = questionlist.c;
  option4.innerHTML = questionlist.d;

}

loadQuestion();


//load Data ans user select

const getcheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
         if (curAnsElem.checked){
           answer = curAnsElem.id;
         }
    });
    return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => curAnsElem.checked =false);
}

submit.addEventListener('click', () => {
  const checkedAnswer = getcheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer == quizDB[questionCount].ans) {
      score++;
  };

  questionCount++;

  deselectAll();

  
  if(questionCount <quizDB.length){
    loadQuestion();
  }else{

  showScore.innerHTML = ` 
  <h3> YOU SCORED ${score}/${quizDB.length} </h3>
  <button class='btn' onclick="location.reload()">Play Again </button>
  `;
  showScore.classList.remove('scoreArea');
  }

});
