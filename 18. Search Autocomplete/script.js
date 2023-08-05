"use strict";

const data = [
  {
    artist: "Drake",
    song: "In My Feelings",
  },
  {
    artist: "Ed Sheeran",
    song: "Shape of You",
  },
  {
    artist: "Billie Eilish",
    song: "Bad Guy",
  },
  {
    artist: "Post Malone",
    song: "Rockstar",
  },
  {
    artist: "Ariana Grande",
    song: "7 Rings",
  },
  {
    artist: "Lil Nas X",
    song: "Old Town Road",
  },
  {
    artist: "The Weeknd",
    song: "Blinding Lights",
  },
  {
    artist: "Camila Cabello",
    song: "Havana",
  },
  {
    artist: "Imagine Dragons",
    song: "Believer",
  },
  {
    artist: "Taylor Swift",
    song: "Shake It Off",
  },
  {
    artist: "Shawn Mendes",
    song: "Señorita",
  },
  {
    artist: "Bruno Mars",
    song: "Uptown Funk",
  },
  { artist: "Rihanna", song: "Work" },
  {
    artist: "Justin Bieber",
    song: "Sorry",
    image: "justin",
    streamed: 44332211,
  },
  { artist: "Katy Perry", song: "Roar" },
  {
    artist: "Cardi B",
    song: "Bodak Yellow",
  },
  { artist: "Maroon 5", song: "Sugar" },
  { artist: "Halsey", song: "Without Me" },
  { artist: "Dua Lipa", song: "New Rules" },
  {
    artist: "Imagine Dragons",
    song: "Radioactive",
  },
  {
    artist: "The Chainsmokers",
    song: "Closer",
  },
  {
    artist: "Sam Smith",
    song: "Stay with Me",
  },
  { artist: "Beyoncé", song: "Formation" },
  {
    artist: "Coldplay",
    song: "Viva La Vida",
  },
  { artist: "Sia", song: "Cheap Thrills" },
];

const availabeKeywords = data.flatMap((track) => [track.artist, track.song]);

const result__box = document.getElementById("result__box");
const input = document.getElementById("input");

let results = [];

input.addEventListener("input", (e) => {
  setTimeout(() => {
    const givenValue = e.target.value.trim().toLowerCase();

    if (!givenValue) {
      result__box.classList.add("hidden");
      return;
    }

    results = availabeKeywords.filter((keyword) =>
      keyword.toLowerCase().includes(givenValue)
    );

    const uniqueResults = [...new Set(results)];
    if (uniqueResults.length > 6) {
      displayResults(uniqueResults.slice(0, 6));
    } else {
      displayResults(uniqueResults);
    }
  }, 500);
});

const displayResults = (arr) => {
  result__box.innerHTML = "";
  arr.forEach((result) => {
    const li = document.createElement("li");
    li.className =
      "text-slate-700 rounded-md p-4 cursor-pointer hover:bg-slate-200 transition-all duration-200";
    li.innerText = result;
    li.addEventListener("click", (e) => {
      input.value = e.target.textContent;
      result__box.classList.add("hidden");
    });

    result__box.append(li);
    result__box.classList.remove("hidden");
  });
};
