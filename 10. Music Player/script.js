"use strict";

const prevBtn = document.getElementById("prev__btn");
const playBtn = document.getElementById("play__btn");
const nextBtn = document.getElementById("next__btn");

const songEl = document.getElementById("song");

const imageEl = document.getElementById("song__image");
const titleEl = document.getElementById("title");
const artistEl = document.getElementById("artist");

const progressContainerEl = document.getElementById("progress-container");
const progressEl = document.getElementById("progress");

const currentTimeEl = document.getElementById("current__time");
const durationEl = document.getElementById("duration");

const playlist = document.getElementById("playlist");

// Data
const songs = [
  {
    name: "glimpse-of-us",
    artist: "Joji",
    title: "Glimpse of Us",
    duration: "3:53",
  },
  {
    name: "fourth-of-july",
    artist: "Sufjan Stevens",
    title: "Fourth of July",
    duration: "4:38",
  },
  {
    name: "indigo-night",
    artist: "Tamino",
    title: "Indigo Night",
    duration: "4:14",
  },
  {
    name: "remembrance",
    artist: "Balmorhea",
    title: "Remembrance",
    duration: "5:59",
  },
  {
    name: "summertime-sadness",
    artist: "Lana del Rey",
    title: "Summertime Sadness",
    duration: "3:25",
  },
  {
    name: "i-know-i-am-not-the-only-one",
    artist: "Sam Smith",
    title: "I Know I'm Not The Only One",
    duration: "3:57",
  },
];

let isPlaying = false;
let songIndex = 0;
