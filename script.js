const searchData = [
  {
    searchTerm: "Grenfell Tower",
    searchVolume: 550000,
    image: "assets/images/grenfell-tower.webp",
    imageOwnerName: "ChiralJon",
    imageOwnerUrl: "https://www.flickr.com/photos/69057297@N04/",
  },
  {
    searchTerm: "Builder",
    searchVolume: 74000,
    image: "assets/images/builder.webp",
    imageOwnerName: "Garry Knight",
    imageOwnerUrl: "https://www.flickr.com/photos/garryknight/",
  },
  {
    searchTerm: "Water Polo",
    searchVolume: 60500,
    image: "assets/images/water-polo.webp",
    imageOwnerName: "Garry Knight",
    imageOwnerUrl: "https://www.flickr.com/photos/garryknight/",
  },
  {
    searchTerm: "Kuala Lumpur",
    searchVolume: 560000,
    image: "assets/images/kuala-lumpur.webp",
    imageOwnerName: "Jorge Láscar",
    imageOwnerUrl: "https://www.flickr.com/photos/jlascar/",
  },
  {
    searchTerm: "Breaking Bad",
    searchVolume: 2240000,
    image: "assets/images/breaking-bad.webp",
    imageOwnerName: "Kelso",
    imageOwnerUrl: "https://www.hdwallpapers.net/community/kelso",
  },
  {
    searchTerm: "Cancer",
    searchVolume: 824000,
    image: "assets/images/cancer.webp",
    imageOwnerName: "NIH Image Gallery",
    imageOwnerUrl: "https://www.flickr.com/photos/nihgov/",
  },
  {
    searchTerm: "Kobe Bryant",
    searchVolume: 823000,
    image: "assets/images/kobe-bryant.webp",
    imageOwnerName: "Joseph A. Lee",
    imageOwnerUrl: "https://commons.wikimedia.org/wiki/File:Kobe_B_Bryant.jpg",
  },
];

let firstHalfSearchVolumeValue;
let secondHalfSearchVolumeValue;

document.addEventListener("DOMContentLoaded", function () {
  startGame();
});

function generateRandomNumber() {
  return Math.floor(Math.random() * searchData.length);
}

// Declare 2 random numbers
let randomNumber1;
let randomNumber2;

// Grab first half DOM elements
let firstHalfSearchTerm = document.getElementById("first-half-search-term");
let firstHalfSearchVolume = document.getElementById("first-half-search-volume");
// Grab second half DOM elements
let secondHalfSearchTerm = document.getElementById("second-half-search-term");
let secondHalfSearchVolume = document.getElementById(
  "second-half-search-volume"
);

function startGame() {
  // Generate 2 random numbers
  randomNumber1 = generateRandomNumber();
  randomNumber2 = generateRandomNumber();
  // Ensure the random numbers are not the same
  while (randomNumber1 === randomNumber2) {
    randomNumber2 = generateRandomNumber();
  }
  // Assign values to the DOM elements using random number
  firstHalfSearchTerm.textContent = searchData[randomNumber1].searchTerm;
  // Setting global variable value to searchData[randomNumber1].searchVolume
  firstHalfSearchVolumeValue = searchData[randomNumber1].searchVolume;
  firstHalfSearchVolume.textContent = firstHalfSearchVolumeValue;
  secondHalfSearchTerm.textContent = searchData[randomNumber2].searchTerm;
  // Setting global variable value to searchData[randomNumber2].searchVolume
  secondHalfSearchVolumeValue = searchData[randomNumber2].searchVolume;
  secondHalfSearchVolume.textContent = secondHalfSearchVolumeValue;
  console.log(`First value is ${searchData[randomNumber1].searchVolume}`);
  console.log(`Second value is ${searchData[randomNumber2].searchVolume}`);
  console.log("Game started");
}

// Loop over buttons and see which one is clicked, based on higher or lower fire off choseHigher or choseLower functions
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.getAttribute("data-type") === "higher") {
      if (firstHalfSearchVolumeValue < secondHalfSearchVolumeValue) {
        guessedCorrect();
        console.log("Correct!");
      } else {
        console.log("Wrong");
      }
      console.log("You clicked Higher");
    } else if (button.getAttribute("data-type") === "lower") {
      console.log("You clicked Lower");
    }
  });
});

function guessedCorrect() {
  firstHalfSearchTerm.textContent = searchData[randomNumber2].searchTerm;
  firstHalfSearchVolumeValue = searchData[randomNumber2].searchVolume;
  firstHalfSearchVolume.textContent = firstHalfSearchVolumeValue;
  console.log(
    `first half search volume is now ${searchData[randomNumber2].searchVolume}`
  );
  randomNumber2 = generateRandomNumber();
  secondHalfSearchTerm.textContent = searchData[randomNumber2].searchTerm;
  secondHalfSearchVolumeValue = searchData[randomNumber2].searchVolume;
  secondHalfSearchVolume.textContent = secondHalfSearchVolumeValue;
  console.log(
    `The second half search volume is now ${searchData[randomNumber2].searchVolume}`
  );
}
