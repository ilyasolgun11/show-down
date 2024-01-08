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

// Set global variables so they can be accessed from anywhere
let firstHalfSearchVolumeValue;
let secondHalfSearchVolumeValue;
let randomNumber1;
let randomNumber2;

/**
 * Start game when the window loads
 */
document.addEventListener("DOMContentLoaded", function () {
  startGame();
});

/**
 *
 * Generate random number
 */
function generateRandomNumber() {
  return Math.floor(Math.random() * searchData.length);
}

// Grab first half DOM elements
let firstHalfSearchTerm = document.getElementById("first-half-search-term");
let firstHalfSearchVolume = document.getElementById("first-half-search-volume");
let firstHalf = document.getElementById("first-half");
// Grab second half DOM elements
let secondHalfSearchTerm = document.getElementById("second-half-search-term");
let secondHalfSearchVolume = document.getElementById(
  "second-half-search-volume"
);
let secondHalf = document.getElementById("second-half");

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
  firstHalf.style.backgroundImage = `url(${searchData[randomNumber1].image})`;
  secondHalfSearchTerm.textContent = searchData[randomNumber2].searchTerm;
  // Setting global variable value to searchData[randomNumber2].searchVolume
  secondHalfSearchVolumeValue = searchData[randomNumber2].searchVolume;
  secondHalfSearchVolume.textContent = secondHalfSearchVolumeValue;
  secondHalf.style.backgroundImage = `url(${searchData[randomNumber2].image})`;
}

// Loop over buttons and see which one is clicked, based on higher or lower fire off choseHigher or choseLower functions
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.getAttribute("data-type") === "higher") {
      if (firstHalfSearchVolumeValue < secondHalfSearchVolumeValue) {
        // Trigger the guessedCorrect function
        guessedCorrect();
        console.log("Correct!");
      } else {
        console.log("Wrong");
      }
      console.log("You clicked Higher");
    } else if (button.getAttribute("data-type") === "lower") {
      if (firstHalfSearchVolumeValue > secondHalfSearchVolumeValue) {
        // Trigger the guessedCorrect function
        guessedCorrect();
        console.log("Correct!");
      } else {
        console.log("Wrong!");
      }
      console.log("You clicked Lower");
    }
  });
});

/**
 * If the user guesses correctly we trigger this function that switches over the elements
 * that was in the secondHalf to the firstHalf and then creates a new random number for
 * the second half, this number is then used to set the secondHalf new DOM elements in which
 * the user can guess again.
 */
function guessedCorrect() {
  // Shifting the content that was on the secondHalf to the firstHalf
  firstHalfSearchTerm.textContent = searchData[randomNumber2].searchTerm;
  firstHalfSearchVolumeValue = searchData[randomNumber2].searchVolume;
  firstHalfSearchVolume.textContent = firstHalfSearchVolumeValue;
  firstHalf.style.backgroundImage = `url(${searchData[randomNumber2].image})`;
  console.log(randomNumber1, randomNumber2);

  // Generate a new random number for the second half
  randomNumber2 = generateRandomNumber();
  // Set the secondHalf DOM elements with the new random number
  secondHalfSearchTerm.textContent = searchData[randomNumber2].searchTerm;
  secondHalfSearchVolumeValue = searchData[randomNumber2].searchVolume;
  secondHalfSearchVolume.textContent = secondHalfSearchVolumeValue;
  secondHalf.style.backgroundImage = `url(${searchData[randomNumber2].image})`;
}
