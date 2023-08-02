"use strict";

const btns = document.getElementsByClassName("show-modal");
const modalEl = document.querySelector(".modal");
const overlayEl = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    modalEl.classList.remove("hidden");
    overlayEl.classList.remove("hidden");
  });
}

const closeModal = () => {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
};

closeBtn.addEventListener("click", closeModal);

overlayEl.addEventListener("click", closeModal);

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    closeModal();
  }
});
