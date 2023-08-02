"use strict";

const username = document.getElementById("username");
const password = document.getElementById("password");
const signinBtn = document.querySelector(".signin-button");

let users = [];
let currentAccount = undefined;

// Load users from localStorage
const loadUsers = () => {
  // If users are exist, store it in users varibale
  const storedUsers = JSON.parse(localStorage.getItem("users"));

  if (storedUsers) {
    users = storedUsers;
  }
};

loadUsers();

signinBtn.addEventListener("click", (e) => {
  // Find current account in users
  currentAccount = users.find((user) => user.username === username.value);

  // Check if current account's password is equal to password value

  console.log(currentAccount);

  if (currentAccount.password !== password.value) {
    // if not, prevent navigation
    e.preventDefault();
  }

  console.log(currentAccount.username);
  // Create username cookie
  document.cookie = `username=${currentAccount.username}; path=/`;

  // Empty input values
  username.value = "";
  password.value = "";
});
