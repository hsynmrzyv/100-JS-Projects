"use strict";

const player = document.querySelector(".player");
const video = document.querySelector(".video");
const progressRange = document.querySelector(".progress-range");
const progressBar = document.querySelector(".progress-bar");
const playBtn = document.getElementById("play-btn");
const volumeIcon = document.getElementById("volume-icon");
const volumeRange = document.querySelector(".volume-range");
const volumeBar = document.querySelector(".volume-bar");
const speed = document.querySelector(".player-speed");
const currentTime = document.querySelector(".time-elapsed");
const duration = document.querySelector(".time-duration");
const fullscreenBtn = document.querySelector(".fullscreen");

// Initial
let currentVolume = 1;
let fullScreen = false;

// Toggle play
const togglePlay = () => {
  playBtn.className = "fas";
  if (video.paused) {
    video.play();
    playBtn.classList.add("fa-pause");
  } else {
    video.pause();
    playBtn.classList.add("fa-play");
  }
};

// Display Time
const displayTime = () => {
  const durationMinute = String(Math.floor(video.duration / 60)).padStart(2, 0);
  const durationSeconds = String(Math.floor(video.duration % 60)).padStart(
    2,
    0
  );

  const currentMinute = String(Math.floor(video.currentTime / 60)).padStart(
    2,
    0
  );
  const currentSeconds = String(Math.floor(video.currentTime % 60)).padStart(
    2,
    0
  );

  progressBar.style.width = (video.currentTime / video.duration) * 100 + "%";
  currentTime.innerText = `${currentMinute}:${currentSeconds} /`;
  duration.innerText = `${durationMinute}:${durationSeconds}`;
};

// Set Play Speed
const setSpeed = () => {
  video.playbackRate = speed.value;
};

// Move forward and backward
const progressFunc = function (e) {
  const width = this.clientWidth;
  const clicked = e.offsetX;
  const progress = clicked / width;

  progressBar.style.width = `${progress * 100}%`;
  video.currentTime = progress * video.duration;
};

// Volume
const setVolume = function (e) {
  const width = this.clientWidth;
  const clicked = e.offsetX;
  let progress = clicked / width;
  currentVolume = progress;

  if (progress >= 0.9) {
    progress = 1;
  }

  if (progress <= 0.1) {
    progress = 0;
  }

  volumeBar.style.width = `${progress * 100}%`;
  video.volume = progress;

  volumeIcon.className = "fas";

  if (progress >= 0.5) {
    volumeIcon.classList.add("fa-volume-up");
  }

  if (progress <= 0.5 && progress > 0) {
    volumeIcon.classList.add("fa-volume-down");
  }

  if (progress === 0) {
    volumeIcon.classList.add("fa-volume-mute");
  }
};

// Toggle Volume
const toggleVolume = () => {
  volumeIcon.className = "fas";

  if (video.volume) {
    volumeBar.style.width = 0;
    video.volume = 0;
    volumeIcon.classList.add("fa-volume-mute");
  } else {
    volumeBar.style.width = `${currentVolume * 100}%`;
    video.volume = currentVolume;
    volumeIcon.classList.add(
      `${currentVolume >= 0.5 ? "fa-volume-up" : "fa-volume-down"}`
    );
  }
};

// Event Listeners
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", displayTime);
playBtn.addEventListener("click", togglePlay);
speed.addEventListener("change", setSpeed);
progressRange.addEventListener("click", progressFunc);
volumeRange.addEventListener("click", setVolume);
volumeIcon.addEventListener("click", toggleVolume);

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    togglePlay();
  }

  if (e.code === "KeyM") {
    toggleVolume();
  }
});
