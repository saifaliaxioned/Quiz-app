const questions = [{
  question: 'Which language runs in a web browser?',
  a: 'Java',
  b: 'C',
  c: 'Python',
  d: 'Javascript',
  answer: 'd'
}, {
  question: 'What does CSS stand for?',
  a: 'Central Style Sheets',
  b: 'Cascading Style Sheets',
  c: 'Cascading Simple Sheets',
  d: 'Cars SUVs Sailboats',
  answer: 'b'
}, {
  question: 'What does HTML stand for?',
  a: 'Hypertext Markup Language',
  b: 'Hypertext Markdown Language',
  c: 'Hyperloop Machine Language',
  d: 'Helicopters Terminals Motorboats Lamborginis',
  answer: 'a'
}, {
  question: 'What year was Javascript launched?',
  a: '1996',
  b: '1995',
  c: '1994',
  d: 'none of the above',
  answer: 'b'
}];

const wrapper = document.querySelector('.quiz-section .wrapper'),
  question = document.querySelector('.question'),
  option1 = document.querySelector('#option1'),
  option2 = document.querySelector('#option2'),
  option3 = document.querySelector('#option3'),
  option4 = document.querySelector('#option4'),
  inputs = document.querySelectorAll('.answer'),
  quizContainer = document.querySelector('.quiz-container');
let counter = score = 0;

const submit = () => {
  const quizAnswer = checkAnswer();
  if (quizAnswer == questions[counter].answer) {
    score++;
  }

  if (quizAnswer !== undefined) {
    if (counter < questions.length - 1) {
      counter++;
      updateQuiz(counter);
    } else {
      quizContainer.classList.add('hide-content');
      const reloadBtn = document.createElement('div');
      reloadBtn.classList.add('score-text');
      reloadBtn.innerHTML = `<h2>You answered ${score}/${questions.length} questions correctly</h2>
      <button class="reload-btn" onclick="quizReload()">Reload</button>`;
      wrapper.appendChild(reloadBtn);
    }
  }
};

const quizReload = () => location.href = 'index.html';
const inputUnchecked = () => inputs.forEach(input => input.checked = false); 

const updateQuiz = counter => {
  inputUnchecked();
  let quizobj = questions[counter];
  question.innerText = quizobj.question;
  option1.innerText = quizobj.a;
  option2.innerText = quizobj.b;
  option3.innerText = quizobj.c;
  option4.innerText = quizobj.d;
};

const checkAnswer = () => {
  let ansStore;
  inputs.forEach(ans => {
    if (ans.checked) {
      ansStore = ans.id;
    }
  });
  return ansStore;
};

if (questions.length !== 0) {
  updateQuiz(counter);
};























