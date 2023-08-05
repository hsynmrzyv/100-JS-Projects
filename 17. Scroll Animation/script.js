"use strict";

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.style.transform =
    index % 2 === 0 ? `translateX(50%)` : `translateX(-50%)`;
  card.style.opacity = "0";
});

const scrollAnimation = () => {
  let triggerPoint = window.innerHeight * 0.8;
  cards.forEach((card, index) => {
    const cardTopDistance = card.getBoundingClientRect().top;

    if (cardTopDistance < triggerPoint) {
      card.style.transform = `translateY(0%)`;
      card.style.opacity = "1";
    } else {
      card.style.transform =
        index % 2 === 0 ? `translateX(50%)` : `translateX(-50%)`;
      card.style.opacity = "0";
    }
  });
};

scrollAnimation();
window.addEventListener("scroll", scrollAnimation);
