// Grab first half DOM elements
const firstHalfTitle = document.getElementById("first-half-title");
const firstHalfTitleVolume = document.getElementById("first-half-title-volume");
const firstHalf = document.getElementById("first-half");
// Grab second half DOM elements
const secondHalfTitle = document.getElementById("second-half-title");
const secondHalfTitleVolume = document.getElementById(
  "second-half-title-volume"
);
const secondHalf = document.getElementById("second-half");
// Grab correct and wrong answer boxes from DOM
const correctAnswerBox = document.getElementById("correct-answer");
const wrongAnswerBox = document.getElementById("wrong-answer");
// Grab search criteria from DOM
const firstHalfSearchCriteriaMode = document.getElementById(
  "first-half-search-criteria"
);
const secondHalfSearchCriteriaMode = document.getElementById(
  "second-half-search-criteria"
);
// Grab score count variable from DOM
const currentScore = document.getElementById("current-score");
// Grab buttons from DOM
const higherBtn = document.getElementById("higher-btn");
const lowerBtn = document.getElementById("lower-btn");
// Grab elements from DOM to credit image owner
const imageOwnerNameOne = document.getElementById("image-owner-name-1");
const imageOwnerLinkOne = document.getElementById("image-owner-link-1");
const imageOwnerNameTwo = document.getElementById("image-owner-name-2");
const imageOwnerLinkTwo = document.getElementById("image-owner-link-2");
// Grab overlays from DOM
const overlay = document.getElementsByClassName("overlay-green");
const overlayRed = document.getElementsByClassName("overlay-red");
// Grab fail screen elements from DOM
const failedScreen = document.getElementById("fail-screen");
const failedAtScore = document.getElementById("failed-at-score");
const congratsMessage = document.getElementById("congrats-message");
const failedPlayAgainBtn = document.getElementById("failed-screen-play-again");
const failedMainMenu = document.getElementById("failed-screen-main-menu");
const gifDisplay = document.getElementById("gif-display");
// Grab main menu from DOM
const mainMenu = document.getElementById("main-menu");
const randomMode = document.getElementById("random-mode");
const fansMode = document.getElementById("fans-mode");
const revenueMode = document.getElementById("market-cap-mode");
// Grab logo from game screen
const logo = document.getElementById("logo");
// Grab has/earned from DOM
const hasEarnedOne = document.getElementById("has-earned-first");
const hasEarnedTwo = document.getElementById("has-earned-second");

// Set global variables so they can be accessed from anywhere
let firstHalfTitleVolumeValue;
let secondHalfTitleVolumeValue;
let randomNumber1;
let randomNumber2;
let score = 0;
let currentArray;
let searchCriteria;

/**
 * Sets the first and second half search criteria and sets the hasEarned element either "has" or "has made", purpose of this is to eliminate DRY code
 */
function modeContentSelector(criteria, has) {
  searchCriteria = criteria;
  hasEarnedOne.textContent = has;
  hasEarnedTwo.textContent = has;
}

/**
 * Gives the player the option of choosing the game mode
 */
function gameMainMenu() {
  mainMenu.style.display = "flex";

  randomMode.addEventListener("click", function () {
    currentArray = searchData;
    mainMenu.style.display = "none";
    modeContentSelector("average monthly searches", "has");
    startGame();
  });

  fansMode.addEventListener("click", function () {
    currentArray = fansData;
    mainMenu.style.display = "none";
    modeContentSelector("football fans", "has");
    startGame();
  });

  revenueMode.addEventListener("click", function () {
    currentArray = revenueCap;
    mainMenu.style.display = "none";
    modeContentSelector("in revenue last year", "has made");
    startGame();
  });
}

/**
 * Start game when the window loads
 */
document.addEventListener("DOMContentLoaded", function () {
  gameMainMenu();
});

logo.addEventListener("click", function () {
  gameMainMenu();
  score = 0;
  currentScore.textContent = score;
});

/**
 *
 * Generate random number
 */
function generateRandomNumber() {
  return Math.floor(Math.random() * currentArray.length);
}

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
    gifDisplay.style.backgroundImage = `url(${"assets/images/gif/joe-biden-giphy.gif"})`;
    failedPlayAgainBtn.addEventListener("click", function () {
      startGame();
      failedScreen.style.visibility = "hidden";
      score = 0;
    });
    failedMainMenu.addEventListener("click", function () {
      gameMainMenu();
      failedScreen.style.visibility = "hidden";
      score = 0;
    });
    // If the score is less than 5 but more than 3 then display the following
  } else if (score < 5 && score > 3) {
    congratsMessage.textContent = "Almost a decent score...";
    gifDisplay.style.backgroundImage = `url(${"assets/images/gif/drunk-man-at-store.gif"})`;
    failedPlayAgainBtn.addEventListener("click", function () {
      startGame();
      failedScreen.style.visibility = "hidden";
      score = 0;
    });
    failedMainMenu.addEventListener("click", function () {
      gameMainMenu();
      failedScreen.style.visibility = "hidden";
      score = 0;
    });
  } else if (score > 5 && score < 10) {
    congratsMessage.textContent = "OMG, we got a genius!";
    gifDisplay.style.backgroundImage = `url(${"assets/images/gif/man-celebrating.gif"})`;
    failedPlayAgainBtn.addEventListener("click", function () {
      startGame();
      failedScreen.style.visibility = "hidden";
      score = 0;
    });
    failedMainMenu.addEventListener("click", function () {
      gameMainMenu();
      failedScreen.style.visibility = "hidden";
      score = 0;
    });
  } else if (score > 10 && score < 15) {
    congratsMessage.textContent = "OMG, what a pro!";
    gifDisplay.style.backgroundImage = `url(${"assets/images/gif/men-celebrating.gif"})`;
    failedPlayAgainBtn.addEventListener("click", function () {
      startGame();
      failedScreen.style.visibility = "hidden";
      score = 0;
    });
    failedMainMenu.addEventListener("click", function () {
      gameMainMenu();
      failedScreen.style.visibility = "hidden";
      score = 0;
    });
  } else if (score > 15) {
    congratsMessage.textContent = "Now you, are special.";
    gifDisplay.style.backgroundImage = `url(${"assets/images/gif/gg.gif"})`;
    failedPlayAgainBtn.addEventListener("click", function () {
      startGame();
      failedScreen.style.visibility = "hidden";
      score = 0;
    });
    failedMainMenu.addEventListener("click", function () {
      gameMainMenu();
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
  firstHalfTitle.textContent = currentArray[randomNumber1].title;
  // Setting global variable value to currentArray[randomNumber1].titleVolume
  firstHalfTitleVolumeValue = currentArray[randomNumber1].titleVolume;
  firstHalfTitleVolume.textContent = firstHalfTitleVolumeValue.toLocaleString();
  firstHalf.style.backgroundImage = `url(${currentArray[randomNumber1].image})`;
  // Add image owner name and image link
  imageOwnerNameOne.textContent = currentArray[randomNumber1].imageOwnerName;
  imageOwnerLinkOne.setAttribute(
    "href",
    currentArray[randomNumber1].imageOwnerUrl
  );
  secondHalfTitle.textContent = currentArray[randomNumber2].title;
  // Setting global variable value to currentArray[randomNumber2].titleVolume
  secondHalfTitleVolumeValue = currentArray[randomNumber2].titleVolume;
  secondHalfTitleVolume.textContent =
    secondHalfTitleVolumeValue.toLocaleString();
  secondHalf.style.backgroundImage = `url(${currentArray[randomNumber2].image})`;
  // Add search criteria mode
  firstHalfSearchCriteriaMode.textContent = searchCriteria;
  secondHalfSearchCriteriaMode.textContent = searchCriteria;
  hideSecondSearchVolume();
  // Add image owner name and image link
  imageOwnerNameTwo.textContent = currentArray[randomNumber2].imageOwnerName;
  imageOwnerLinkTwo.setAttribute(
    "href",
    currentArray[randomNumber2].imageOwnerUrl
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
  secondHalfTitleVolume.style.visibility = "hidden";
  secondHalfTitleVolume.style.fontSize = "0.1px";
}

/**
 * Hide second half search volume
 */
function showSecondSearchVolume() {
  secondHalfTitleVolume.style.visibility = "visible";
  secondHalfTitleVolume.style.fontSize = "";
}

// Gets the data-type of higher and lower buttons and depending on which one the user clicked, it triggers the corresponding function
let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.getAttribute("data-type") === "higher") {
      triggerHigher();
    } else if (button.getAttribute("data-type") === "lower") {
      triggerLower();
    }
  });
});

/**
 * Triggers sequence that will see if the guess is higher or lower
 */
function triggerHigher() {
  if (firstHalfTitleVolumeValue <= secondHalfTitleVolumeValue) {
    showSecondSearchVolume();
    let guess = secondHalfTitleVolumeValue - 70;
    hideButtons();
    // Add interval animation so that it counts up
    const interval = setInterval(() => {
      if (guess > secondHalfTitleVolumeValue - 1) {
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
        secondHalfTitleVolume.textContent = guess;
        guess += 1;
        secondHalfTitleVolume.textContent = guess.toLocaleString();
      }
    }, 10);
  } else {
    showSecondSearchVolume();
    let guess = secondHalfTitleVolumeValue - 70;
    hideButtons();
    // Add interval animation so that it counts up
    const interval = setInterval(() => {
      if (guess > secondHalfTitleVolumeValue - 1) {
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
        secondHalfTitleVolume.textContent = guess;
        guess += 1;
        secondHalfTitleVolume.textContent = guess.toLocaleString();
      }
    }, 10);
  }
}

/**
 * Triggers sequence that will see if the guess is higher or lower
 */
function triggerLower() {
  if (firstHalfTitleVolumeValue >= secondHalfTitleVolumeValue) {
    showSecondSearchVolume();
    let guess = secondHalfTitleVolumeValue - 70;
    hideButtons();
    // Add interval animation so that it counts up
    const interval = setInterval(() => {
      if (guess > secondHalfTitleVolumeValue - 1) {
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
        secondHalfTitleVolume.textContent = guess;
        guess += 1;
        secondHalfTitleVolume.textContent = guess.toLocaleString();
      }
    }, 10);
  } else {
    showSecondSearchVolume();
    let guess = secondHalfTitleVolumeValue - 70;
    hideButtons();
    // Add interval animation so that it counts up
    const interval = setInterval(() => {
      if (guess > secondHalfTitleVolumeValue - 1) {
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
        secondHalfTitleVolume.textContent = guess;
        guess += 1;
        secondHalfTitleVolume.textContent = guess.toLocaleString();
      }
    }, 10);
  }
}

/**
 * If the user guesses correctly we trigger this function that switches over the elements
 * that was in the secondHalf to the firstHalf and then creates a new random number for
 * the second half, this number is then used to set the secondHalf new DOM elements in which
 * the user can guess again.
 */
function guessedCorrect() {
  // Shifting the content that was on the secondHalf to the firstHalf
  firstHalfTitle.textContent = currentArray[randomNumber2].title;
  firstHalfTitleVolumeValue = currentArray[randomNumber2].titleVolume;
  firstHalfTitleVolume.textContent = firstHalfTitleVolumeValue.toLocaleString();
  firstHalf.style.backgroundImage = `url(${currentArray[randomNumber2].image})`;
  imageOwnerNameOne.textContent = currentArray[randomNumber2].imageOwnerName;
  imageOwnerLinkOne.setAttribute(
    "href",
    currentArray[randomNumber2].imageOwnerUrl
  );

  // Increment value for current score
  score += 1;
  currentScore.textContent = score;
  // Generate a new random number for the second half and make sure its not the same as the previous
  let previousRandomNumber2 = randomNumber2;
  do {
    randomNumber2 = generateRandomNumber();
  } while (randomNumber2 === previousRandomNumber2);
  // Set the secondHalf DOM elements with the new random number
  secondHalfTitle.textContent = currentArray[randomNumber2].title;
  secondHalfTitleVolumeValue = currentArray[randomNumber2].titleVolume;
  secondHalfTitleVolume.textContent =
    secondHalfTitleVolumeValue.toLocaleString();
  secondHalf.style.backgroundImage = `url(${currentArray[randomNumber2].image})`;
  imageOwnerNameTwo.textContent = currentArray[randomNumber2].imageOwnerName;
  imageOwnerLinkTwo.setAttribute(
    "href",
    currentArray[randomNumber2].imageOwnerUrl
  );
}
