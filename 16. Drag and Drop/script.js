"use strict";

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

const dragEnter = function () {
  this.classList.add("hovered");
};

const dragOver = (e) => {
  e.preventDefault();
};

const drop = function () {
  this.append(fill);
};

const dragLeave = function () {
  this.classList.remove("hovered");
};

fill.addEventListener("dragstart", function () {
  this.classList.add("hold");
  setTimeout(() => {
    this.classList.add("invisible");
  }, 0);
});

fill.addEventListener("dragend", function () {
  this.className = "fill";
});

empties.forEach((el) => {
  el.addEventListener("dragenter", dragEnter);
  el.addEventListener("dragleave", dragLeave);
  el.addEventListener("dragover", dragOver);
  el.addEventListener("drop", drop);
});
