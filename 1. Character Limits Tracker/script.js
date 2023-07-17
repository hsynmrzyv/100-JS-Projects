"use strict";

const currentEl = document.getElementById("current");
const textEl = document.getElementById("text");
const charactersEl = document.getElementById("characters");

textEl.addEventListener("input", () => {
  const validLength = textEl.value.length;
  currentEl.textContent = validLength;

  validLength
    ? charactersEl.classList.add("active")
    : charactersEl.classList.remove("active");

  if (validLength > 100) {
    textEl.style.borderColor = "red";
    textEl.style.color = "red";
    charactersEl.style.color = "red";
  } else {
    textEl.style.borderColor = "#5f0a87";
    textEl.style.color = "#5f0a87";
    charactersEl.style.color = "#5f0a87";
  }
});
