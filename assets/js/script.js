// Grab first half DOM elements
const firstHalfTitle = document.getElementById("first-half-title");
const firstHalfTitleVolume = document.getElementById("first-half-title-volume");
const firstHalf = document.getElementById("first-half");
// Grab second half DOM elements
const secondHalfTitle = document.getElementById("second-half-title");
const secondHalfTitleVolume = document.getElementById(
  "second-half-title-volume"
);
const gameHighScore = document.getElementById("game-high-score");
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
const menuHighScore = document.getElementById("menu-high-score");
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
let highScore = parseInt(localStorage.getItem("highScore")) || 0;

// Once a mode is hovered, blur the other modes (only on large screen sizes)
const modesHoverEffect = document.querySelectorAll(".hover-effect");
modesHoverEffect.forEach((mode) => {
  mode.addEventListener("mouseover", function () {
    if (window.innerWidth > 1138) {
      if (mode.classList.contains("random-mode")) {
        fansMode.style.filter = "blur(5px)";
        revenueMode.style.filter = "blur(5px)";
      } else if (mode.classList.contains("fans-mode")) {
        randomMode.style.filter = "blur(5px)";
        revenueMode.style.filter = "blur(5px)";
      } else if (mode.classList.contains("market-cap-mode")) {
        randomMode.style.filter = "blur(5px)";
        fansMode.style.filter = "blur(5px)";
      }
    }
  });

  mode.addEventListener("mouseleave", function () {
    randomMode.style.filter = "blur(0px)";
    fansMode.style.filter = "blur(0px)";
    revenueMode.style.filter = "blur(0px)";
  });
});

/**
 * Sets the first and second half search criteria and sets the hasEarned element either "has" or "has made", purpose of this is to eliminate DRY code
 */
function modeContentSelector(criteria, has, type) {
  searchCriteria = criteria;
  currentArray = type;
  mainMenu.style.display = "none";
  hasEarnedOne.textContent = has;
  hasEarnedTwo.textContent = has;
  startGame();
}

/**
 * Gives the player the option of choosing the game mode
 */
function gameMainMenu() {
  mainMenu.style.display = "flex";
  randomMode.addEventListener("click", function () {
    modeContentSelector("average monthly searches", "has", searchData);
  });

  fansMode.addEventListener("click", function () {
    modeContentSelector("football fans", "has", fansData);
  });

  revenueMode.addEventListener("click", function () {
    modeContentSelector("in revenue last year", "has made", revenueCap);
  });
}

/**
 * Start game when the window loads
 */
document.addEventListener("DOMContentLoaded", function () {
  gameMainMenu();
  menuHighScore.textContent = highScore;
});

function setHighScore() {
  menuHighScore.textContent = highScore;
  gameHighScore.textContent = highScore;
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    menuHighScore.textContent = highScore;
    gameHighScore.textContent = highScore;
  }
}

// When user clicks on logo while in-game, it takes them to the game menu screen and sets the score to 0, also sets a new high score
logo.addEventListener("click", function () {
  gameMainMenu();
  setHighScore();
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
 * Function parameters take message and gif which will display in the fail screen
 */
function failScreenDisplayFailType(message, gif) {
  congratsMessage.textContent = message;
  gifDisplay.style.backgroundImage = `url("assets/images/gif/${gif}")`;
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

/**
 * Displays fail screen and gives user the option to play again
 * Also displays a GIF
 */
function failScreenShow() {
  failedScreen.style.visibility = "visible";
  failedAtScore.textContent = score;
  overlayGreenRed(overlayRed, "hide");
  // If the score is less than 3 then display the following
  if (score < 3) {
    failScreenDisplayFailType(
      "Oof, better luck next time",
      "joe-biden-giphy.gif"
    );
    // If the score is less than 5 but more than 3 then display the following
  } else if (score <= 5 && score > 3) {
    failScreenDisplayFailType(
      "Almost a decent score...",
      "drunk-man-at-store.gif"
    );
  } else if (score > 5 && score < 10) {
    failScreenDisplayFailType("OMG, we got a genius!", "man-celebrating.gif");
  } else if (score > 10 && score < 15) {
    failScreenDisplayFailType("OMG, what a pro!", "men-celebrating.gif");
  } else if (score > 15) {
    failScreenDisplayFailType("Now you, are special.", "gg.gif");
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
  visibilitySecondSearchVolume("hidden", "0.1px");
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
  showHideButtons("show", "", "");
  setHighScore();
}

/**
 * Based on passed parameters, either show or hide buttons and edit the padding, margin and font size
 */
function showHideButtons(type, spaceControl, font) {
  if (type === "show") {
    higherBtn.classList.remove("hide-btn");
    lowerBtn.classList.remove("hide-btn");
  } else if (type === "hide") {
    higherBtn.classList.add("hide-btn");
    lowerBtn.classList.add("hide-btn");
  }
  higherBtn.style.margin = spaceControl;
  higherBtn.style.fontSize = font;
  higherBtn.style.padding = spaceControl;
  lowerBtn.style.margin = spaceControl;
  lowerBtn.style.fontSize = font;
  lowerBtn.style.padding = spaceControl;
}

/**
 * Bases on passed parameters change the visibility and font size of the secondHalfTitleVolume
 */
function visibilitySecondSearchVolume(visible, font) {
  secondHalfTitleVolume.style.visibility = visible;
  secondHalfTitleVolume.style.fontSize = font;
}

/**
 * Based on passed parameters, hide or show a given overlay
 */
function overlayGreenRed(overlayType, addRemove) {
  if (addRemove === "hide") {
    for (let i = 0; i < overlayType.length; i++) {
      overlayType[i].classList.remove("visible");
    }
  } else if (addRemove === "show") {
    for (let i = 0; i < overlayType.length; i++) {
      overlayType[i].classList.add("visible");
    }
  }
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
    visibilitySecondSearchVolume("visible", "");
    let guess = secondHalfTitleVolumeValue - 70;
    showHideButtons("hide", "0px", "0.1px");
    // Add interval animation so that it counts up
    const interval = setInterval(() => {
      if (guess > secondHalfTitleVolumeValue - 1) {
        // Set time between the correctAnswerBox is showing and disappearing
        // When it disappears trigger the guessed correct function
        setTimeout(() => {
          guessedCorrect();
          showHideButtons("show", "", "");
          visibilitySecondSearchVolume("hidden", "0.1px");
          correctAnswerBox.classList.remove("show");
          overlayGreenRed(overlay, "hide");
        }, 1000);
        correctAnswerBox.classList.add("show");
        overlayGreenRed(overlay, "show");
        clearInterval(interval);
      } else {
        secondHalfTitleVolume.textContent = guess;
        guess += 1;
        secondHalfTitleVolume.textContent = guess.toLocaleString();
      }
    }, 10);
  } else {
    visibilitySecondSearchVolume("visible", "");
    let guess = secondHalfTitleVolumeValue - 70;
    showHideButtons("hide", "0px", "0.1px");
    // Add interval animation so that it counts up
    const interval = setInterval(() => {
      if (guess > secondHalfTitleVolumeValue - 1) {
        setTimeout(() => {
          startGame();
          failScreenShow();
          setHighScore();
          currentScore.textContent = 0;
          overlayGreenRed(overlayRed, "hide");
        }, 1000);
        wrongAnswerBox.classList.add("show");
        overlayGreenRed(overlayRed, "show");
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
    visibilitySecondSearchVolume("visible", "");
    let guess = secondHalfTitleVolumeValue - 70;
    showHideButtons("hide", "0px", "0.1px");
    // Add interval animation so that it counts up
    const interval = setInterval(() => {
      if (guess > secondHalfTitleVolumeValue - 1) {
        // Set time between the correctAnswerBox is showing and disappearing
        // When it disappears trigger the guessed correct function
        setTimeout(() => {
          guessedCorrect();
          showHideButtons("show", "", "");
          visibilitySecondSearchVolume("hidden", "0.1px");
          correctAnswerBox.classList.remove("show");
          overlayGreenRed(overlay, "hide");
        }, 1000);
        correctAnswerBox.classList.add("show");
        overlayGreenRed(overlay, "show");
        clearInterval(interval);
      } else {
        secondHalfTitleVolume.textContent = guess;
        guess += 1;
        secondHalfTitleVolume.textContent = guess.toLocaleString();
      }
    }, 10);
  } else {
    visibilitySecondSearchVolume("visible", "");
    let guess = secondHalfTitleVolumeValue - 70;
    showHideButtons("hide", "0px", "0.1px");
    // Add interval animation so that it counts up
    const interval = setInterval(() => {
      if (guess > secondHalfTitleVolumeValue - 1) {
        setTimeout(() => {
          startGame();
          failScreenShow();
          setHighScore();
          currentScore.textContent = 0;
          overlayGreenRed(overlayRed, "hide");
        }, 1000);
        wrongAnswerBox.classList.add("show");
        overlayGreenRed(overlayRed, "show");
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
