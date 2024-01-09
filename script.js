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
  {
    searchTerm: "Hillsborough Disaster",
    searchVolume: 33100,
    image: "assets/images/hillsborough-disaster.webp",
    imageOwnerName: "David Dixon",
    imageOwnerUrl: "https://www.geograph.org.uk/photo/4454163",
  },
  {
    searchTerm: "E-Cigarettes",
    searchVolume: 368000,
    image: "assets/images/e-cigarettes.webp",
    imageOwnerName: "Vaping360",
    imageOwnerUrl: "https://www.flickr.com/photos/vaping360/16161321808",
  },
  {
    searchTerm: "Pittsburgh Penguins",
    searchVolume: 1220000,
    image: "assets/images/pittsburgh-penguins.webp",
    imageOwnerName: "pointnshoot",
    imageOwnerUrl: "https://www.flickr.com/photos/pointnshoot/2182166668",
  },
  {
    searchTerm: "Jerusalem",
    searchVolume: 823000,
    image: "assets/images/jerusalem.webp",
    imageOwnerName: "Dan",
    imageOwnerUrl: "https://www.flickr.com/photos/twiga_swala/2263943148",
  },
  {
    searchTerm: "Doctor Strange",
    searchVolume: 1220000,
    image: "assets/images/doctor-strange.webp",
    imageOwnerName: "AntMan3001",
    imageOwnerUrl: "https://www.flickr.com/photos/antdude3001/24027393815",
  },
  {
    searchTerm: "Amazon",
    searchVolume: 277000000,
    image: "assets/images/amazon.webp",
    imageOwnerName: "Darkworld47",
    imageOwnerUrl: "https://commons.wikimedia.org/wiki/File:Amzlogo.png",
  },
  {
    searchTerm: "Borussia Dortmund",
    searchVolume: 1500000,
    image: "assets/images/borussia-dortmund.webp",
    imageOwnerName: "Adam Howarth",
    imageOwnerUrl:
      "https://www.borussiadortmund.co.uk/preview/borussia-dortmund-vs-chelsea-champions-league-preview/",
  },
  {
    searchTerm: "Pablo Picasso",
    searchVolume: 450000,
    image: "assets/images/pablo-picasso.webp",
    imageOwnerName: "Lindsey Mancini",
    imageOwnerUrl:
      "https://www.flickr.com/photos/thingsworthdescribing/7953235496",
  },
  {
    searchTerm: "Recipes",
    searchVolume: 1220000,
    image: "assets/images/recipes.webp",
    imageOwnerName: "Meg H",
    imageOwnerUrl: "https://www.flickr.com/photos/156883244@N04/35120274024",
  },
  {
    searchTerm: "Github",
    searchVolume: 32000000,
    image: "assets/images/github.webp",
    imageOwnerName: "Sourav Kumar",
    imageOwnerUrl:
      "https://codeburst.io/why-you-should-start-using-github-right-now-e817d213c6ff",
  },
  {
    searchTerm: "Pug",
    searchVolume: 1500000,
    image: "assets/images/pug.webp",
    imageOwnerName: "hannah k",
    imageOwnerUrl: "https://www.flickr.com/photos/90692443@N05/8239219385",
  },
  {
    searchTerm: "Pizza",
    searchVolume: 7480000,
    image: "assets/images/pizza.webp",
    imageOwnerName: "Ewan Munro",
    imageOwnerUrl: "https://www.flickr.com/photos/55935853@N00/3717162237",
  },
  {
    searchTerm: "Scented Candles",
    searchVolume: 40500,
    image: "assets/images/scented-candles.webp",
    imageOwnerName: "slgckgc",
    imageOwnerUrl: "https://www.flickr.com/photos/slgc/3998375778",
  },
  {
    searchTerm: "Lung Cancer",
    searchVolume: 201000,
    image: "assets/images/lung-cancer.webp",
    imageOwnerName: "Richard W",
    imageOwnerUrl:
      "https://en.wikipedia.org/wiki/Pleural_cavity#External_links",
  },
  {
    searchTerm: "Immigration",
    searchVolume: 823000,
    image: "assets/images/immigration.webp",
    imageOwnerName: "Nick Youngson",
    imageOwnerUrl:
      "https://thebluediamondgallery.com/highway-signs/i/immigration.html",
  },
  {
    searchTerm: "Germany",
    searchVolume: 1220000,
    image: "assets/images/germany.webp",
    imageOwnerName: "ISPI 90",
    imageOwnerUrl:
      "https://www.ispionline.it/en/publication/germany-energy-policy-turbulent-times-between-transition-chances-and-lock-risks-36778",
  },
  {
    searchTerm: "Pac-Man",
    searchVolume: 5000000,
    image: "assets/images/pacman.webp",
    imageOwnerName: "The Pug Father",
    imageOwnerUrl:
      "https://commons.wikimedia.org/wiki/File:Pacman_and_the_Lotus_Elise_-_Flickr_-_The_Pug_Father.jpg",
  },
  {
    searchTerm: "Pac-Man",
    searchVolume: 5000000,
    image: "assets/images/pacman.webp",
    imageOwnerName: "The Pug Father",
    imageOwnerUrl:
      "https://commons.wikimedia.org/wiki/File:Pacman_and_the_Lotus_Elise_-_Flickr_-_The_Pug_Father.jpg",
  },
  {
    searchTerm: "Heart",
    searchVolume: 135000,
    image: "assets/images/heart.webp",
    imageOwnerName: "Heart Disease",
    imageOwnerUrl:
      "https://blogs.glowscotland.org.uk/er/wwhdepartmentenglish/free-open-book-with-heart-shaped-pages-photo-public-domain-cc0-image/",
  },
];

// Set global variables so they can be accessed from anywhere
let firstHalfSearchVolumeValue;
let secondHalfSearchVolumeValue;
let randomNumber1;
let randomNumber2;
let score = 0;

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
// Grab correct and wrong answer boxes from DOM
let correctAnswerBox = document.getElementById("correct-answer");
let wrongAnswerBox = document.getElementById("wrong-answer");
// Grab score count variable from DOM
let currentScore = document.getElementById("current-score");
// Grab buttons from DOM
let higherBtn = document.getElementById("higher-btn");
let lowerBtn = document.getElementById("lower-btn");
// Grab elements from DOM to credit image owner
let imageOwnerNameOne = document.getElementById("image-owner-name-1");
let imageOwnerLinkOne = document.getElementById("image-owner-link-1");
let imageOwnerNameTwo = document.getElementById("image-owner-name-2");
let imageOwnerLinkTwo = document.getElementById("image-owner-link-2");
// Grab overlays from DOM
let overlay = document.getElementsByClassName("overlay-green");
let overlayRed = document.getElementsByClassName("overlay-red");
// Grab fail screen elements from DOM
let failedScreen = document.getElementById("fail-screen");
let failedAtScore = document.getElementById("failed-at-score");
let congratsMessage = document.getElementById("congrats-message");
let failedPlayAgainBtn = document.getElementById("failed-screen-play-again");

/**
 * Displays fail screen and gives user the option to play again
 * Also displays a GIF
 */
function failScreenShow() {
  failedScreen.style.visibility = "visible";
  failedAtScore.textContent = score;
  for (let i = 0; i < overlayRed.length; i++) {
    overlayRed[i].classList.remove("visible");
  }
  // If the score is less than 3 then display the following
  if (score < 3) {
    congratsMessage.textContent = "Oof, better luck next time";
    failedScreen.style.backgroundImage = `url(${"assets/images/gif/joe-biden-giphy.gif"})`;
    failedPlayAgainBtn.addEventListener("click", function () {
      startGame();
      failedScreen.style.visibility = "hidden";
      score = 0;
    });
    // If the score is less than 5 but more than 3 then display the following
  } else if (score < 5 && score > 3) {
    congratsMessage.textContent = "Almost a decent score...";
    failedScreen.style.backgroundImage = `url(${"assets/images/gif/drunk-man-at-store.gif"})`;
    failedPlayAgainBtn.addEventListener("click", function () {
      startGame();
      failedScreen.style.visibility = "hidden";
      score = 0;
    });
  } else if (score > 5) {
    congratsMessage.textContent = "OMG, we got a genius!";
    failedScreen.style.backgroundImage = `url(${"assets/images/gif/man-celebrating.gif"})`;
    failedPlayAgainBtn.addEventListener("click", function () {
      startGame();
      failedScreen.style.visibility = "hidden";
      score = 0;
    });
  }
}

/**
 * Starts game, resets all elements
 */
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
  firstHalfSearchVolume.textContent =
    firstHalfSearchVolumeValue.toLocaleString();
  firstHalf.style.backgroundImage = `url(${searchData[randomNumber1].image})`;
  // Add image owner name and image link
  imageOwnerNameOne.textContent = searchData[randomNumber1].imageOwnerName;
  imageOwnerLinkOne.setAttribute(
    "href",
    searchData[randomNumber1].imageOwnerUrl
  );
  secondHalfSearchTerm.textContent = searchData[randomNumber2].searchTerm;
  // Setting global variable value to searchData[randomNumber2].searchVolume
  secondHalfSearchVolumeValue = searchData[randomNumber2].searchVolume;
  secondHalfSearchVolume.textContent =
    secondHalfSearchVolumeValue.toLocaleString();
  secondHalf.style.backgroundImage = `url(${searchData[randomNumber2].image})`;
  hideSecondSearchVolume();
  // Add image owner name and image link
  imageOwnerNameTwo.textContent = searchData[randomNumber2].imageOwnerName;
  imageOwnerLinkTwo.setAttribute(
    "href",
    searchData[randomNumber2].imageOwnerUrl
  );
  // Remove right and wrong box from DOM
  correctAnswerBox.classList.remove("show");
  wrongAnswerBox.classList.remove("show");
  // Add buttons to game
  showButtons();
}

/**
 * Hide Buttons
 */
function hideButtons() {
  higherBtn.classList.add("hide-btn");
  higherBtn.style.margin = "0px";
  higherBtn.style.fontSize = "0.1px";
  higherBtn.style.padding = "0px";
  lowerBtn.classList.add("hide-btn");
  lowerBtn.style.margin = "0px";
  lowerBtn.style.fontSize = "0.1px";
  lowerBtn.style.padding = "0px";
}

/**
 * Show Buttons
 */
function showButtons() {
  higherBtn.classList.remove("hide-btn");
  higherBtn.style.margin = "";
  higherBtn.style.fontSize = "";
  higherBtn.style.padding = "";
  lowerBtn.classList.remove("hide-btn");
  lowerBtn.style.margin = "";
  lowerBtn.style.fontSize = "";
  lowerBtn.style.padding = "";
}

/**
 * Hide second half search volume
 */
function hideSecondSearchVolume() {
  secondHalfSearchVolume.style.visibility = "hidden";
  secondHalfSearchVolume.style.fontSize = "0.1px";
}

/**
 * Hide second half search volume
 */
function showSecondSearchVolume() {
  secondHalfSearchVolume.style.visibility = "visible";
  secondHalfSearchVolume.style.fontSize = "";
}

// Loop over buttons and see which one is clicked, based on higher or lower fire off choseHigher or choseLower functions
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.getAttribute("data-type") === "higher") {
      if (firstHalfSearchVolumeValue <= secondHalfSearchVolumeValue) {
        showSecondSearchVolume();
        let guess = secondHalfSearchVolumeValue - 70;
        hideButtons();
        // Add interval animation so that it counts up
        const interval = setInterval(() => {
          if (guess > secondHalfSearchVolumeValue - 1) {
            // Set time between the correctAnswerBox is showing and disappearing
            // When it disappears trigger the guessed correct function
            setTimeout(() => {
              guessedCorrect();
              showButtons();
              hideSecondSearchVolume();
              correctAnswerBox.classList.remove("show");
              for (let i = 0; i < overlay.length; i++) {
                overlay[i].classList.remove("visible");
              }
            }, 1000);
            correctAnswerBox.classList.add("show");
            for (let i = 0; i < overlay.length; i++) {
              overlay[i].classList.add("visible");
            }
            clearInterval(interval);
          } else {
            secondHalfSearchVolume.textContent = guess;
            guess += 1;
            secondHalfSearchVolume.textContent = guess.toLocaleString();
          }
        });
      } else {
        showSecondSearchVolume();
        let guess = secondHalfSearchVolumeValue - 70;
        hideButtons();
        // Add interval animation so that it counts up
        const interval = setInterval(() => {
          if (guess > secondHalfSearchVolumeValue - 1) {
            setTimeout(() => {
              startGame();
              failScreenShow();
              currentScore.textContent = 0;
              for (let i = 0; i < overlayRed.length; i++) {
                overlayRed[i].classList.remove("visible");
              }
            }, 1000);
            wrongAnswerBox.classList.add("show");
            for (let i = 0; i < overlayRed.length; i++) {
              overlayRed[i].classList.add("visible");
            }
            clearInterval(interval);
          } else {
            secondHalfSearchVolume.textContent = guess;
            guess += 1;
            secondHalfSearchVolume.textContent = guess.toLocaleString();
          }
        });
      }
    } else if (button.getAttribute("data-type") === "lower") {
      if (firstHalfSearchVolumeValue >= secondHalfSearchVolumeValue) {
        showSecondSearchVolume();
        let guess = secondHalfSearchVolumeValue - 70;
        hideButtons();
        // Add interval animation so that it counts up
        const interval = setInterval(() => {
          if (guess > secondHalfSearchVolumeValue - 1) {
            // Set time between the correctAnswerBox is showing and disappearing
            // When it disappears trigger the guessed correct function
            setTimeout(() => {
              guessedCorrect();
              showButtons();
              hideSecondSearchVolume();
              correctAnswerBox.classList.remove("show");
              for (let i = 0; i < overlay.length; i++) {
                overlay[i].classList.remove("visible");
              }
            }, 1000);
            correctAnswerBox.classList.add("show");
            for (let i = 0; i < overlay.length; i++) {
              overlay[i].classList.add("visible");
            }
            clearInterval(interval);
          } else {
            secondHalfSearchVolume.textContent = guess;
            guess += 1;
            secondHalfSearchVolume.textContent = guess.toLocaleString();
          }
        });
      } else {
        showSecondSearchVolume();
        let guess = secondHalfSearchVolumeValue - 70;
        hideButtons();
        // Add interval animation so that it counts up
        const interval = setInterval(() => {
          if (guess > secondHalfSearchVolumeValue - 1) {
            setTimeout(() => {
              startGame();
              failScreenShow();
              currentScore.textContent = 0;
              for (let i = 0; i < overlayRed.length; i++) {
                overlayRed[i].classList.add("hidden");
              }
            }, 1000);
            wrongAnswerBox.classList.add("show");
            for (let i = 0; i < overlayRed.length; i++) {
              overlayRed[i].classList.add("visible");
            }
            clearInterval(interval);
          } else {
            secondHalfSearchVolume.textContent = guess;
            guess += 1;
            secondHalfSearchVolume.textContent = guess.toLocaleString();
          }
        });
      }
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
  firstHalfSearchVolume.textContent =
    firstHalfSearchVolumeValue.toLocaleString();
  firstHalf.style.backgroundImage = `url(${searchData[randomNumber2].image})`;
  imageOwnerNameOne.textContent = searchData[randomNumber2].imageOwnerName;
  imageOwnerLinkOne.setAttribute(
    "href",
    searchData[randomNumber2].imageOwnerUrl
  );
  console.log(randomNumber1, randomNumber2);

  // Increment value for current score
  score += 1;
  currentScore.textContent = score;

  // Generate a new random number for the second half
  randomNumber2 = generateRandomNumber();
  // Set the secondHalf DOM elements with the new random number
  secondHalfSearchTerm.textContent = searchData[randomNumber2].searchTerm;
  secondHalfSearchVolumeValue = searchData[randomNumber2].searchVolume;
  secondHalfSearchVolume.textContent =
    secondHalfSearchVolumeValue.toLocaleString();
  secondHalf.style.backgroundImage = `url(${searchData[randomNumber2].image})`;
  imageOwnerNameTwo.textContent = searchData[randomNumber2].imageOwnerName;
  imageOwnerLinkTwo.setAttribute(
    "href",
    searchData[randomNumber2].imageOwnerUrl
  );
}
