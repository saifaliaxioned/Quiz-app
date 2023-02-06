const questions = [{
  question: 'Which language runs in a web browser?',
  a: 'java',
  b: 'c',
  c: 'python',
  d: 'javascript',
  right: 'javascript'
}, {
  question: 'What does CSS stand for?',
  a: 'Central Style Sheets',
  b: 'Cascading Style Sheets',
  c: 'Cascading Simple Sheets',
  d: 'Cars SUVs Sailboats',
  right: 'Cascading Style Sheets'
}, {
  question: 'What does HTML stand for?',
  a: 'Hypertext Markup Language',
  b: 'Hypertext Markdown Language',
  c: 'Hyperloop Machine Language',
  d: 'Helicopters Terminals Motorboats Lamborginis',
  right: 'Hypertext Markup Language'
}, {
  question: 'What year was Javascript launched?',
  a: '1996',
  b: '1995',
  c: '1994',
  d: 'none of the above',
  right: '1995'
}];

const wrapper = document.querySelector('.wrapper');
let quizContainer;

let counter = 0;

const submit = () => {
  if (counter < questions.length-1) {
    counter++;
    console.log(counter);
    updateQuiz(counter);
  } else {
    alert('submitted');
    counter = 0;
    updateQuiz(counter);
  }
  // createQuiz(counter);
};

const updateQuiz = (counter) => {
  let quizobj = questions[counter];
  quizContainer.innerHTML = `<h1>${quizobj.question}</h1>
  <ul class="answer-items">
  <li><input type="radio" name="answer" id="ans1" class="answer">
  <label for="ans1" id="option1">${quizobj.a}</label></li>
  <li><input type="radio" name="answer" id="ans2" class="answer">
  <label for="ans2" id="option2">${quizobj.b}</label></li>
  <li><input type="radio" name="answer" id="ans3" class="answer">
  <label for="ans3" id="option3">${quizobj.c}</label></li>
    <li><input type="radio" name="answer" id="ans4" class="answer">
    <label for="ans4" id="option4">${quizobj.d}</label></li>
    </ul>
    <div class="submit-btn" onclick="submit()"><input type="submit" value="submit"></div>`;
}


if (questions.length !== 0) {
  quizContainer = document.createElement('div');
  quizContainer.classList.add('quiz-container');
  wrapper.appendChild(quizContainer);
  updateQuiz(counter);
}























