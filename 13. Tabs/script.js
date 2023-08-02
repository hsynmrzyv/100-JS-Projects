"use strict";

const tabsContainer = document.querySelector(".tabs-container");
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab__content");

tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target;
  const data = clicked.dataset.tab;

  if (!clicked.classList.contains("tab")) return;

  tabs.forEach((tab, index) => {
    tab.classList.remove("-translate-y-1/4");
    tabContents[index].classList.add("hidden");
  });

  clicked.classList.add("-translate-y-1/4");
  tabContents[data].classList.remove("hidden");
});
