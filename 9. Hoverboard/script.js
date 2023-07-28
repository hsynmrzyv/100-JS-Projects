"use strict";

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const container = document.getElementById("container");

const getRandomColor = () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};

for (let i = 0; i < 500; i++) {
  const square = document.createElement("div");
  square.className = "square";

  container.append(square);
}

const addColor = (element) => {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 20px ${color}`;
};

const removeColor = (element) => {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
};

container.addEventListener("mouseover", (e) => {
  console.log("mouseover");
  const element = e.target;
  if (element.classList.contains("square")) {
    addColor(element);
  }
});

container.addEventListener("mouseout", (e) => {
  console.log("mouseleave");
  const element = e.target;
  if (element.classList.contains("square")) {
    removeColor(element);
  }
});
