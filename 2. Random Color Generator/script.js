"use strict";

const btn = document.getElementById("btn");

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 256);
};

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
});
