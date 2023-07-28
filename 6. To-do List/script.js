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
  updateTaskList();

  sessionStorage.setItem("todos", JSON.stringify(todos));

  addInput.focus();
});

// Updating UI
const updateTaskList = () => {
  taskList.innerHTML = "";

  taskListContainer.style.display = todos.length ? "block" : "none";

  todos.forEach((todo, index) => {
    const liEl = document.createElement("li");
    const spanEl = document.createElement("span");
    const buttonEl = document.createElement("button");

    spanEl.textContent = todo;
    buttonEl.textContent = "Delete Task";
    buttonEl.className = "btn";
    buttonEl.addEventListener("click", () => {
      removeTodo(index);
    });

    liEl.insertAdjacentElement("afterbegin", spanEl);
    liEl.insertAdjacentElement("beforeend", buttonEl);

    taskList.insertAdjacentElement("afterbegin", liEl);
  });
};

// // Updating UI
// const updateTaskList = () => {
//   taskList.innerHTML = "";

//   taskListContainer.style.display = todos.length ? "block" : "none";

//   todos.forEach((todo) => {
//     const html = `<li>
//                   <span>${todo}</span>
//                   <button class="btn delete">Delete Task</button>
//                 </li>`;

//     taskList.innerHTML += html;
//   });

//   const deleteBtns = document.querySelectorAll(".delete");
//   deleteBtns.forEach((deleteBtn, index) => {
//     deleteBtn.addEventListener("click", () => {
//       removeTodo(index);
//     });
//   });
// };

// Remove todo functionalityxw
const removeTodo = (index) => {
  todos.splice(index, 1);

  sessionStorage.setItem("todos", JSON.stringify(todos));

  updateTaskList();
};

// Load from local storage

const load = () => {
  const storedTodos = JSON.parse(sessionStorage.getItem("todos"));
  console.log(storedTodos);

  if (storedTodos) {
    todos = storedTodos;
  }

  updateTaskList();
};

load();
