"use strict";

const addBtn = document.getElementById("add");
const taskListContainer = document.querySelector(".taskList");
const taskList = document.querySelector(".taskList ul");
const addInput = document.getElementById("input");
const greet = document.querySelector(".greet");
const message = document.querySelector(".message");

let currentUser = undefined;
let users = [];
