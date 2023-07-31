"use strict";

const btns = document.querySelectorAll("#calculator__buttons button");
const calculatorDisplay = document.querySelector("#calculator__display h1");
const clearBtn = document.getElementById("clear__btn");

// Initial values
let firstValue = 0;
let operatorValue = "";
let waitingNextValue = false;

btns.forEach((btn) => {
  const data = btn.dataset.value;

  if (data === "c") return;

  btn.addEventListener("click", () => {
    if (Number(data) || data === "0") {
      sendNumberValue(data);
    }

    if (data === ".") {
      addDecimal();
    }

    if (!Number(data) && data !== "." && data !== "0") {
      useOperator(data);
    }
  });
});

const sendNumberValue = (number) => {
  const displayValue = calculatorDisplay.textContent;

  if (waitingNextValue) {
    calculatorDisplay.textContent = number;
    waitingNextValue = false;
  } else {
    calculatorDisplay.textContent =
      displayValue === "0" ? number : displayValue + number;
  }
};

const addDecimal = () => {
  if (waitingNextValue) return;

  if (!calculatorDisplay.textContent.includes(".")) {
    calculatorDisplay.textContent += ".";
  }
};

const resetAll = () => {
  calculatorDisplay.textContent = "0";
  waitingNextValue = false;
  operatorValue = "";
  firstValue = 0;
};

const calculate = {
  "+": (firstValue, secondValue) => firstValue + secondValue,
  "-": (firstValue, secondValue) => firstValue - secondValue,
  "*": (firstValue, secondValue) => firstValue * secondValue,
  "/": (firstValue, secondValue) => firstValue / secondValue,
  "=": (firstValue, secondValue) => secondValue,
};

clearBtn.addEventListener("click", resetAll);

const useOperator = (operator) => {
  const currentValue = Number(calculatorDisplay.textContent);

  if (waitingNextValue && operatorValue) {
    operatorValue = operator;
    return;
  }

  if (!firstValue) {
    firstValue = currentValue;
  } else {
    const calculation = calculate[operatorValue](firstValue, currentValue);
    firstValue = calculation;
    calculatorDisplay.textContent = calculation;
  }

  operatorValue = operator;
  waitingNextValue = true;
};
