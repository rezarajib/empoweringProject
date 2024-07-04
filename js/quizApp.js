document.getElementById('quizItem').addEventListener('click',function(){
    window.location.href = "quiz.html"
})
// const quizData = [
//     {
//         question: "Who is the Prime Minister of Bangladesh?",
//         options: ["Sheikh Hasina", "Khaleda Zia", "Sajeeb Wazed", "Sheikh Kamal"],
//         correct: "Sheikh Hasina"
//     },
//     {
//         question: "What is the capital of France?",
//         options: ["Berlin", "Madrid", "Paris", "Lisbon"],
//         correct: "Paris"
//     },
//     {
//         question: "Which is the largest ocean on Earth?",
//         options: ["Atlantic", "Indian", "Arctic", "Pacific"],
//         correct: "Pacific"
//     }
// ];

// let currentQuestionIndex = 0;
// let score = 0;

// function loadQuestion(index) {
//     const quizContainer = document.getElementById('quiz-container');
//     quizContainer.innerHTML = `
//         <h3 class="text-xl mb-4">${quizData[index].question}</h3>
//         <div>
//             ${quizData[index].options.map((option, i) => `
//                 <label class="block mb-2">
//                     <input type="radio" name="option" value="${option}" class="mr-2">
//                     ${option}
//                 </label>
//             `).join('')}
//         </div>
//     `;
//     document.getElementById('prev').style.display = index === 0 ? 'none' : 'inline-block';
//     document.getElementById('next').style.display = index === quizData.length - 1 ? 'none' : 'inline-block';
//     document.getElementById('submit').style.display = index === quizData.length - 1 ? 'inline-block' : 'none';
// }

// function nextQuestion() {
//     const selectedOption = document.querySelector('input[name="option"]:checked');
//     if (!selectedOption) {
//         alert('Please select an answer.');
//         return;
//     }
//     const answer = selectedOption.value;
//     if (answer === quizData[currentQuestionIndex].correct) {
//         score++;
//     }
//     currentQuestionIndex++;
//     loadQuestion(currentQuestionIndex);
// }

// function prevQuestion() {
//     currentQuestionIndex--;
//     loadQuestion(currentQuestionIndex);
// }

// function submitQuiz() {
//     alert(`Quiz completed! Your score is ${score} out of ${quizData.length}.`);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     loadQuestion(currentQuestionIndex);
// });
