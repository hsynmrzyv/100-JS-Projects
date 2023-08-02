"use strict";

const minutesEl = document.getElementById("minutes");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const secondsEl = document.getElementById("seconds");

const timer = () => {
  const today = new Date();
  const worldCupDate = new Date(2026, 5, 11);

  const secDiff = (worldCupDate - today) / 1000;
  const days = Math.floor(secDiff / 60 / 60 / 24);
  const hours = Math.floor(secDiff / 3600) % 24;
  const minutes = Math.floor(secDiff / 60) % 60;
  const seconds = Math.floor(secDiff % 60);

  daysEl.innerText = days;
  hoursEl.innerText = String(hours).padStart(2, 0);
  minutesEl.innerText = String(minutes).padStart(2, 0);
  secondsEl.innerText = String(seconds).padStart(2, 0);
};

timer();

setInterval(timer, 1000);
