"use strict";

// DOM Elements
const submitBtn = document.getElementById("submit");
const question = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer__btn");
const [a, b, c, d] = answerBtns;

// Data
const quizData = [
  {
    question: "What is the chemical symbol for the element Gold?",
    a: "Go",
    b: "Au",
    c: "Gd",
    d: "Ag",
    correct: "b",
  },
  {
    question: "Who was the first President of the United States? ",
    a: "Thomas Jefferson",
    b: "John Adams",
    c: "George Washington",
    d: "Benjamin Franklin",
    correct: "c",
  },
  {
    question: "Which planet in our solar system has the most moons?",
    a: "Jupiter",
    b: "Saturn",
    c: "Mars",
    d: "Neptune",
    correct: "a",
  },
  {
    question:
      "Which famous artist is known for cutting off a part of his own ear?",
    a: "Pablo Picasso",
    b: "Vincent van Gogh",
    c: "Leonardo da Vinci",
    d: "Michelangelo",
    correct: "b",
  },
  {
    question: "In the 'Harry Potter' series, what is the name of Harry's owl?",
    a: "Gandalf",
    b: "Merlin",
    c: "Nimbus",
    d: "Hedwig",
    correct: "d",
  },
  {
    question:
      "Which South American country is the largest in terms of land area?",
    a: "Argentina",
    b: "Peru",
    c: "Brazil",
    d: "Chile",
    correct: "c",
  },
  {
    question: "Which author created the detective character Sherlock Holmes??",
    a: "Agatha Christie",
    b: "Arthur Conan Doyle",
    c: "Dashiell Hammett",
    d: "Raymond Chandler",
    correct: "b",
  },
];

// Initial
let index = 0;
let score = 0;
let answer;

class Quiz {
  constructor() {
    this.displayQuestion();
    answerBtns.forEach((btn) => {
      btn.addEventListener("click", this.selected.bind(this, btn));
    });
    submitBtn.addEventListener("click", this.check.bind(this));
  }

  displayQuestion() {
    question.innerText = quizData[index].question;
    a.innerText = quizData[index].a;
    b.innerText = quizData[index].b;
    c.innerText = quizData[index].c;
    d.innerText = quizData[index].d;
  }

  selected(btn) {
    answerBtns.forEach((ansBtn) => {
      ansBtn.className =
        "answer__btn w-full border-2 border-white p-2 cursor-pointer rounded transition-all duration-200 shadow-md active:scale-95 hover:bg-white hover:text-blue-600";
    });
    answer = btn.dataset.answer;
    console.log(answer, quizData[index].correct);
    btn.classList.add("scale-95", "bg-white", "text-blue-600");
  }

  check() {
    if (!answer) return;

    const clickedOption = Array.from(answerBtns).find(
      (btn) => btn.dataset.answer == answer
    );

    if (answer === quizData[index].correct) {
      clickedOption.classList.add("text-white", "bg-green-600");
      score++;
    } else {
      clickedOption.classList.add("text-white", "bg-red-600");
    }

    setTimeout(() => {
      answer = undefined;
      this.deSelect();
      index++;
      if (index < quizData.length) {
        this.displayQuestion();
      } else {
        alert(`Game over. Your score is ${score}/${quizData.length}`);
        return;
      }
    }, 1000);
  }

  deSelect() {
    answerBtns.forEach((btn) => {
      btn.className =
        "answer__btn w-full border-2 border-white p-2 cursor-pointer rounded transition-all duration-200 shadow-md active:scale-95 hover:bg-white hover:text-blue-600";
    });
  }
}

const myQuiz = new Quiz();
