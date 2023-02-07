// const questions = [{
//   question: 'Which language runs in a web browser?',
//   a: 'Java',
//   b: 'C',
//   c: 'Python',
//   d: 'Javascript',
//   right: 'Javascript'
// }, {
//   question: 'What does CSS stand for?',
//   a: 'Central Style Sheets',
//   b: 'Cascading Style Sheets',
//   c: 'Cascading Simple Sheets',
//   d: 'Cars SUVs Sailboats',
//   right: 'Cascading Style Sheets'
// }, {
//   question: 'What does HTML stand for?',
//   a: 'Hypertext Markup Language',
//   b: 'Hypertext Markdown Language',
//   c: 'Hyperloop Machine Language',
//   d: 'Helicopters Terminals Motorboats Lamborginis',
//   right: 'Hypertext Markup Language'
// }, {
//   question: 'What year was Javascript launched?',
//   a: '1996',
//   b: '1995',
//   c: '1994',
//   d: 'none of the above',
//   right: '1995'
// }];

// const wrapper = document.querySelector('.wrapper');
// let quizContainer, counter = score = 0;

// const submit = () => {
//   const answer = checkAnswer();
//   if (answer == questions[counter].right) {
//     score++;
//   }

//   if (answer !== undefined) {
//     if (counter < questions.length - 1) {
//       counter++;
//       updateQuiz(counter);
//     } else {
//       quizContainer.classList.add('hide-content');
//       const reloadBtn = document.createElement('div');
//       reloadBtn.classList.add('score-text');
//       reloadBtn.innerHTML = `<h2>You answered ${score}/${questions.length} questions correctly</h2>
//       <button class="reload-btn" onclick="quizReload()">Reload</button>`;
//       wrapper.appendChild(reloadBtn);
//     }
//   }
// };

// const quizReload = () => {
//   scoreText = document.querySelector('.score-text');
//   scoreText.remove();
//   quizContainer.classList.remove('hide-content');
//   counter = score = 0;
//   updateQuiz(counter);
// };

// const updateQuiz = (counter) => {
//   let quizobj = questions[counter];
//   quizContainer.innerHTML = `<h1>${quizobj.question}</h1>
//   <ul class="answer-items">
//   <li><input type="radio" name="answer" id="${quizobj.a}" class="answer">
//   <label for="ans1" id="option1">${quizobj.a}</label></li>
//   <li><input type="radio" name="answer" id="${quizobj.b}" class="answer">
//   <label for="ans2" id="option2">${quizobj.b}</label></li>
//   <li><input type="radio" name="answer" id="${quizobj.c}" class="answer">
//   <label for="ans3" id="option3">${quizobj.c}</label></li>
//     <li><input type="radio" name="answer" id="${quizobj.d}" class="answer">
//     <label for="ans4" id="option4">${quizobj.d}</label></li>
//     </ul>
//     <div class="submit-btn" onclick="submit()"><input type="submit" value="submit"></div>`;
// };

// const checkAnswer = () => {
//   let ansStore;
//   const inputs = document.querySelectorAll('.answer');
//   inputs.forEach(ans => {
//     if (ans.checked) {
//       ansStore = ans.id;
//     }
//   });
//   return ansStore;
// };

// if (questions.length !== 0) {
//   quizContainer = document.createElement('div');
//   quizContainer.classList.add('quiz-container');
//   wrapper.appendChild(quizContainer);
//   updateQuiz(counter);
// };























