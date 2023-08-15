"use strict";

import {
  generateRandomInteger,
  generateRandomInteger as getRandom,
} from "./functions.js";
import colors from "./colors.js";

// Dom Elements
const quoteContainer = document.getElementById("quote__container");
const quoteEl = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("generate");
const title = document.getElementById("title");
const titleBg = document.getElementById("title__bg");

// Initial
let quotes = [];
let randomQuote = 0;
let randomColor = 0;

// Get Data
const getData = async () => {
  const repsponse = await fetch("https://type.fit/api/quotes");
  const data = await repsponse.json();
  quotes = data;

  randomColor = generateRandomInteger(0, colors.length);
  randomQuote = generateRandomInteger(0, quotes.length);

  displayQuote(quotes[randomQuote]);
  displayColor(colors[randomColor]);
};

getData();

const displayQuote = (quote) => {
  quoteEl.textContent = quote.text;
  author.textContent = quote.author.split(",")[0];
};

const displayColor = (color) => {
  quoteEl.style.color = color.primary;
  author.style.color = color.primary;
  titleBg.style.backgroundColor = color.primary;
  btn.style.backgroundColor = color.primary;

  quoteContainer.style.backgroundColor = color.secondary;
  title.style.color = color.secondary;
  btn.style.color = color.secondary;
};

btn.addEventListener("click", getData);
