"use strict";

// Data
const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const special = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";

// Modal and Backdrop
const backdropEl = document.querySelector(".backdrop");
const modalEl = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal h2");
const modalMessage = document.querySelector(".modal p");
const modalBtn = document.querySelector(".modal button");
// Password
const passwordEl = document.querySelector(".password");
// Input Elements
const upperInput = document.getElementById("uppercase");
const lowerInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

// Counter
const counterBtns = document.querySelectorAll(
  ".generator__length-counter button"
);
const counterEl = document.querySelector(".generator__length-counter span");
const [decreaseBtn, increaseBtn] = counterBtns;

// Generate and Copy
const generateBtn = document.querySelector(".generate-btn");
const copyBtn = document.querySelector(".copy-btn");

// Functionality
let counter = 6;
let myPassword = "";

counterEl.textContent = counter;

increaseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  counter < 20 && counter++;
  counterEl.textContent = counter;
});

decreaseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  counter > 6 && counter--;
  counterEl.textContent = counter;
});

const getRandom = () => {
  let chars = [];

  if (upperInput.checked) {
    chars.push(
      upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
    );
  }

  if (lowerInput.checked) {
    chars.push(
      lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
    );
  }

  if (numbersInput.checked) {
    chars.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }

  if (symbolsInput.checked) {
    chars.push(special[Math.floor(Math.random() * special.length)]);
  }

  if (chars.length === 0) {
    return "";
  }

  return chars[Math.floor(Math.random() * chars.length)];
};

const generatePassword = () => {
  for (let i = 0; i < counter; i++) {
    myPassword += getRandom();
  }

  passwordEl.textContent = myPassword ? myPassword : "Please check some input";
};

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();

  generatePassword();
});

copyBtn.addEventListener("click", (e) => {
  e.preventDefault();

  modalEl.classList.add("active");
  backdropEl.classList.add("active");

  if (myPassword) {
    modalTitle.textContent = "Success";
    modalMessage.textContent = `Password (${myPassword}) is successfully copied to clipboard`;
  } else {
    modalTitle.textContent = "Error";
    modalMessage.textContent = `There is nothing to copy`;
  }
});

const closeModal = () => {
  modalEl.classList.remove("active");
  backdropEl.classList.remove("active");
};

modalBtn.addEventListener("click", closeModal);
backdropEl.addEventListener("click", closeModal);
window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    closeModal();
  }
});
