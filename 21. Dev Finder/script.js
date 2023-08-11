"use strict";

const result = document.getElementById("result");

const input = document.getElementById("input");
const btn = document.getElementById("search__btn");

const user = document.getElementById("user");
const username = document.getElementById("username");
const joined = document.getElementById("date");
const repos = document.getElementById("repo");
const followers = document.getElementById("follower");
const followings = document.getElementById("following");
const bio = document.getElementById("bio");
const img = document.getElementById("img");

const repo__links = document.getElementById("repo__links");

const loading = document.getElementById("loading");

let dev;
let repositories = [];

const getData = (searchValue) => {
  fetch(`https://api.github.com/users/${searchValue}`)
    .then((res) => res.json())
    .then((data) => {
      dev = data;
      loading.classList.replace("hidden", "block");
      displayUser();
    });
};

const getRepos = (searchValue) => {
  fetch(`https://api.github.com/users/${searchValue}/repos`)
    .then((res) => res.json())
    .then((data) => {
      repositories = data.slice(0, 10);
      repositories.forEach((repo) => {
        displayRepos(repo);
      });
    });
};

const displayUser = () => {
  if (dev) {
    result.classList.replace("hidden", "flex");
    loading.classList.replace("block", "hidden");
  }

  user.textContent = dev.name ? dev.name : "No Name";
  username.textContent = dev.login;
  username.href = dev.html_url;
  joined.textContent = `Joined ${dev.created_at.slice(0, 10)}`;
  bio.textContent = dev.bio ? dev.bio : "No bio";
  followers.textContent = dev.followers;
  followings.textContent = dev.following;
  repos.textContent = dev.public_repos;
  img.src = dev.avatar_url;
};

const displayRepos = (repo) => {
  const link = document.createElement("a");
  link.textContent = repo.name;
  link.href = repo.html_url;
  link.target = "blank";
  link.className =
    "text-white text-sm bg-blue-600 rounded-md p-2 mr-2 mb-2 inline-block";

  repo__links.append(link);
};

btn.addEventListener("click", () => {
  const givenValue = input.value.trim().toLowerCase();

  if (!givenValue) return;

  result.classList.replace("flex", "hidden");
  // loading.classList.replace("hidden", "block");

  if (!dev) {
    loading.classList.replace("hidden", "block");
  }

  getData(givenValue);
  getRepos(givenValue);

  input.value = "";
});
