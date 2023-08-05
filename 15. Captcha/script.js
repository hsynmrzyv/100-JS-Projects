"use strict";

// Data
const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

// DOM elements
const captchaText = document.getElementById("captcha__text");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

let chars = [];
let captcha = "";

const combinedChars = numbers.concat(upperCaseLetters, lowerCaseLetters);

const getRandom = () => {
  return combinedChars[Math.floor(Math.random() * combinedChars.length)];
};

const generateCaptcha = () => {
  for (let i = 0; i < 6; i++) {
    captcha += getRandom();
  }

  captchaText.innerText = captcha;
};

generateCaptcha();

input.addEventListener("input", function (e) {
  const givenValue = e.target.value;

  if (givenValue === captcha) {
    this.classList.add("ring-green-600");
    btn.classList.add("bg-green-600", "cursor-pointer");
  } else {
    btn.classList.remove("bg-green-600", "cursor-pointer");
    this.classList.remove("ring-green-600");
  }

  if (givenValue !== captcha && givenValue.length === 6) {
    this.classList.add("ring-red-600");
  } else {
    this.classList.remove("ring-red-600");
  }
});

input.addEventListener("keypress", (e) => {
  if (e.target.value.length === 6) {
    e.preventDefault();
  }
});
