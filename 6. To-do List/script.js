"use strict";

const addBtn = document.getElementById("add");

const taskListContainer = document.querySelector(".taskList");
const taskList = document.querySelector(".taskList ul");
const addInput = document.getElementById("input");

let todos = [];

// Adding todo functionality

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const taskText = addInput.value.trim();

  if (!taskText) return;

  todos.push(taskText);
  console.log(todos);
  addInput.value = "";
});
