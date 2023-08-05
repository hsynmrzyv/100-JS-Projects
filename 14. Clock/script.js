"use strict";

const analogSecond = document.getElementById("second");
const analogMinute = document.getElementById("minute");
const analogHour = document.getElementById("hour");

const digitalSecond = document.getElementById("d__second");
const digitalMinute = document.getElementById("d__minute");
const digitalHour = document.getElementById("d__hour");

const setTime = () => {
  const time = new Date();

  const second = time.getSeconds();
  const minute = time.getMinutes();
  const hour = time.getHours();

  const secondDegree = second * 6;
  const minuteDegree = minute * 6;
  const hourDegree = (hour % 12) * 30 + minute / 2;

  analogHour.style.rotate = `${hourDegree}deg`;
  analogSecond.style.rotate = `${secondDegree}deg`;
  analogMinute.style.rotate = `${minuteDegree}deg`;

  digitalSecond.innerText = String(second).padStart(2, "0");
  digitalMinute.innerText = String(minute).padStart(2, "0");
  digitalHour.innerText = String(hour).padStart(2, "0");
};

setTime();
setInterval(setTime, 1000);
