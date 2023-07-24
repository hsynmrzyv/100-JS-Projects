"use strict";

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const signupBtn = document.querySelector(".signup-button");

signupBtn.addEventListener("click", (e) => {
  // Checking if the given values are valid, if not, stop processing
  // Checking if the password and confirm password are same, if not, stop processing

  if (
    !firstName.value ||
    !lastName.value ||
    !username.value ||
    !password.value ||
    !confirmPassword.value ||
    password.value !== confirmPassword.value
  ) {
    e.preventDefault();
    return;
  }

  // Create a new user object with the given values
  const newUser = {
    firstName: firstName.value.trim(),
    lastName: lastName.value.trim(),
    password: password.value.trim(),
    username: username.value.trim(),
    todos: [],
  };

  // Empty the values of the inputs
  firstName.value = "";
  lastName.value = "";
  password.value = "";
  username.value = "";
  confirmPassword.value = "";

  // Get users from local storage
  let storedUser = JSON.parse(localStorage.getItem("users"));
  // Check if there is a users array

  // if there is a users array, add newUser to the array
  if (storedUser) {
    storedUser.push(newUser);
  }

  // if there is not a users array, create a new one with the newUser object in it
  if (!storedUser) {
    storedUser = [newUser];
  }

  console.log(newUser.username);
  // Add username cookie
  document.cookie = `username=${newUser.username}; path=/`;

  // Add new users array to the localStorage

  localStorage.setItem("users", JSON.stringify(storedUser));
});
