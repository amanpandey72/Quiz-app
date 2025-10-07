const quizData = [
  {
    question: "Which keyword is used to declare a constant variable in JavaScript?",
    a: "let",
    b: "var",
    c: "const",
    d: "define",
    correct: "c",
  },
  {
    question: "What does DOM stand for?",
    a: "Document Object Model",
    b: "Data Object Management",
    c: "Digital Ordinance Model",
    d: "Desktop Object Management",
    correct: "a",
  },
  {
    question: "Which method is used to select an element by its ID?",
    a: "getElementsByClassName()",
    b: "querySelectorAll()",
    c: "getElementById()",
    d: "getElementsByTagName()",
    correct: "c",
  },
  {
    question: "Which event occurs when a user clicks an HTML element?",
    a: "onmouseclick",
    b: "onchange",
    c: "onclick",
    d: "onhover",
    correct: "c",
  },
];

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  optionButtons.forEach((btn) => {
    const option = btn.id;
    btn.textContent = currentQuiz[option];
    btn.disabled = false;
    btn.style.background = "#e3e3e3";
  });
}

optionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selected = btn.id;
    const correct = quizData[currentQuestion].correct;
    if (selected === correct) {
      btn.style.background = "#90ee90"; // green
      score++;
    } else {
      btn.style.background = "#ff7f7f"; // red
    }
    optionButtons.forEach((b) => (b.disabled = true));
  });
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz").classList.add("hide");
  nextBtn.classList.add("hide");
  resultEl.classList.remove("hide");
  resultEl.textContent = `🎯 You scored ${score} out of ${quizData.length}!`;
}

// Load first question
loadQuestion();
