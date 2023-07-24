"use strict";

const addBtn = document.getElementById("add");
const taskListContainer = document.querySelector(".taskList");
const taskList = document.querySelector(".taskList ul");
const addInput = document.getElementById("input");
const greet = document.querySelector(".greet");
const message = document.querySelector(".message");

let currentUser = undefined;
let users = [];

const displayTodos = () => {
  taskList.innerHTML = "";

  message.style.display = currentUser.todos.length ? "none" : "block";

  currentUser.todos.forEach((todo) => {
    const html = `<li>
                    <span>${todo}</span>
                    <button class="btn delete">Delete Task</button>
                  </li>`;

    taskList.innerHTML += html;

    const deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach((deleteBtn, index) => {
      deleteBtn.addEventListener("click", () => {
        removeTodo(index);
      });
    });
  });
};

const removeTodo = (index) => {
  currentUser.todos.splice(index, 1);

  console.log(users);
  localStorage.setItem("users", JSON.stringify(users));

  displayTodos();
};

const loadUsers = () => {
  const storedCookie = decodeURI(document.cookie);
  const userName = storedCookie
    .split("; ")
    .find((cookie) => cookie.startsWith("username"))
    .split("=")[1];

  const storedUsers = JSON.parse(localStorage.getItem("users"));

  if (storedUsers) {
    users = storedUsers;
  }

  currentUser = users.find((user) => user.username === userName);

  displayTodos();
};

loadUsers();

addBtn.addEventListener("click", () => {
  const taskText = addInput.value.trim();

  if (taskText) {
    currentUser.todos.push(taskText);
  }

  console.log(currentUser);

  displayTodos();
  localStorage.setItem("users", JSON.stringify(users));

  addInput.value = "";
});

greet.textContent = `Welcome, ${currentUser.firstName} ${currentUser.lastName}`;
