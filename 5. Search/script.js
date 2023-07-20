"use strict";

const data = [
  {
    artist: "Drake",
    song: "In My Feelings",
    image: "drake",
    streamed: 123123123,
  },
  {
    artist: "Ed Sheeran",
    song: "Shape of You",
    image: "ed",
    streamed: 987654321,
  },
  {
    artist: "Billie Eilish",
    song: "Bad Guy",
    image: "billie",
    streamed: 654321987,
  },
  {
    artist: "Post Malone",
    song: "Rockstar",
    image: "post",
    streamed: 456789123,
  },
  {
    artist: "Ariana Grande",
    song: "7 Rings",
    image: "ariana",
    streamed: 345678912,
  },
  {
    artist: "Lil Nas X",
    song: "Old Town Road",
    image: "lilnas",
    streamed: 234567891,
  },
  {
    artist: "The Weeknd",
    song: "Blinding Lights",
    image: "weeknd",
    streamed: 123456789,
  },
  {
    artist: "Camila Cabello",
    song: "Havana",
    image: "camila",
    streamed: 112233445,
  },
  {
    artist: "Imagine Dragons",
    song: "Believer",
    image: "imagine",
    streamed: 99887766,
  },
  {
    artist: "Taylor Swift",
    song: "Shake It Off",
    image: "taylor",
    streamed: 88776655,
  },
  {
    artist: "Shawn Mendes",
    song: "Señorita",
    image: "shawn",
    streamed: 77665544,
  },
  {
    artist: "Bruno Mars",
    song: "Uptown Funk",
    image: "bruno",
    streamed: 66554433,
  },
  { artist: "Rihanna", song: "Work", image: "rihanna", streamed: 55443322 },
  {
    artist: "Justin Bieber",
    song: "Sorry",
    image: "justin",
    streamed: 44332211,
  },
  { artist: "Katy Perry", song: "Roar", image: "katy", streamed: 33221100 },
  {
    artist: "Cardi B",
    song: "Bodak Yellow",
    image: "cardib",
    streamed: 22110099,
  },
  { artist: "Maroon 5", song: "Sugar", image: "maroon", streamed: 11009988 },
  { artist: "Halsey", song: "Without Me", image: "halsey", streamed: 9900887 },
  { artist: "Dua Lipa", song: "New Rules", image: "dua", streamed: 8800776 },
  {
    artist: "Imagine Dragons",
    song: "Radioactive",
    image: "imagine-2",
    streamed: 7700665,
  },
  {
    artist: "The Chainsmokers",
    song: "Closer",
    image: "chainsmokers",
    streamed: 6600554,
  },
  {
    artist: "Sam Smith",
    song: "Stay with Me",
    image: "sam",
    streamed: 5500443,
  },
  { artist: "Beyoncé", song: "Formation", image: "beyonce", streamed: 4400332 },
  {
    artist: "Coldplay",
    song: "Viva La Vida",
    image: "coldplay",
    streamed: 3300221,
  },
  { artist: "Sia", song: "Cheap Thrills", image: "sia", streamed: 2200110 },
];

const trackList = document.querySelector(".track-list");
const showBtn = document.querySelector("#show");
const streamBtn = document.querySelector("#sortByStream");
const songBtn = document.querySelector("#sortBySong");
const artistBtn = document.querySelector("#sortByArtist");
const searchInput = document.querySelector("#search-input");

const displayTracks = (tracks) => {
  trackList.innerHTML = "";

  tracks.forEach((track, index) => {
    trackList.innerHTML += `<li class="track">
    <span class="rating">${index + 1}</span>
    <div class="track-img">
      <img src="Images/${track.image}.jpeg" alt="" />
    </div>
    <div class="track-desc">
      <h3 class="name">${track.song}</h3>
      <p class="artist">${track.artist}</p>
    </div>
    <span class="streams">${track.streamed}</span>
  </li>`;
  });
};

displayTracks(data.slice(0, 5));

showBtn.addEventListener("click", () => {
  if (showBtn.textContent.includes("More")) {
    displayTracks(data);
    showBtn.innerHTML = "Show Less";
  } else {
    displayTracks(data.slice(0, 5));
    showBtn.innerHTML = "Show More";
  }
});

searchInput.addEventListener("input", (e) => {
  const searchedData = data.filter((track) => {
    return (
      track.artist.toLowerCase().includes(e.target.value.toLowerCase()) ||
      track.song.toLowerCase().includes(e.target.value.toLowerCase())
    );
  });

  if (e.target.value) {
    showBtn.style.display = "none";
  } else {
    showBtn.style.display = "block";
  }

  displayTracks(searchedData);
});

streamBtn.addEventListener("click", () => {
  displayTracks(data.sort((a, b) => b.streamed - a.streamed));
});

songBtn.addEventListener("click", () => {
  const songsArray = data.map((track) => track.song).sort();
  const sortedArray = [];

  songsArray.forEach((song) => {
    sortedArray.push(data.find((track) => track.song === song));
  });

  displayTracks(sortedArray);
});

artistBtn.addEventListener("click", () => {
  const artistsArray = data.map((track) => track.artist).sort();
  const sortedArray = [];

  artistsArray.forEach((artist) => {
    sortedArray.push(data.find((track) => track.artist === artist));
  });

  displayTracks(sortedArray);
});
