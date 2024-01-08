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

document.addEventListener("DOMContentLoaded", function () {
  resetGame();
});

let comparedPairs = [];

/**
 * Generates a random number based on the length of the search data array
 */
function generateRandomNumber() {
  return Math.floor(Math.random() * searchData.length);
}

let randomNumber1;
let randomNumber2;

// Grabbing Elements necessary from the DOM
let firstHalf = document.getElementById("first-half");
let secondHalf = document.getElementById("second-half");
let firstHalfSearchTerm = document.getElementById("first-half-search-term");
let secondHalfSearchTerm = document.getElementById("second-half-search-term");
let firstHalfSearchVolume = document.getElementById("first-half-search-volume");
let secondHalfSearchVolume = document.getElementById(
  "second-half-search-volume"
);
let searchName = document.getElementById("search-name");
let searchNameContainer = document.getElementById("search-name-container");
let imageOwnerName1 = document.getElementById("image-owner-name-1");
let imageOwnerLink1 = document.getElementById("image-owner-link-1");
let imageOwnerName2 = document.getElementById("image-owner-name-2");
let imageOwnerLink2 = document.getElementById("image-owner-link-2");
let higherChoice = document.getElementById("higher-btn");
let lowerChoice = document.getElementById("lower-btn");
let correctAnswer = document.getElementById("correct-answer");
let wrongAnswer = document.getElementById("wrong-answer");

/**
 * Fully resets the game, the firstHalfSearchTerm, secondHalfSearchTerm, firstHalfSearchVolume..............
 */
function resetGame() {
  // Generate 2 random numbers
  randomNumber1 = generateRandomNumber();
  randomNumber2 = generateRandomNumber();
  // Make sure the random numbers are not the same
  while (randomNumber2 === randomNumber1) {
    randomNumber2 = generateRandomNumber();
  }

  // Set the game based on data from searchData[randomNumber1] and searchData[randomNumber2]
  firstHalfSearchTerm.textContent = searchData[randomNumber1].searchTerm;
  secondHalfSearchTerm.textContent = searchData[randomNumber2].searchTerm;
  firstHalfSearchVolume.textContent = searchData[randomNumber1].searchVolume;
  firstHalf.style.backgroundImage = `url(${searchData[randomNumber1].image})`;
  secondHalf.style.backgroundImage = `url(${searchData[randomNumber2].image})`;
  searchName.textContent = searchData[randomNumber1].searchTerm;
  imageOwnerName1.textContent = searchData[randomNumber1].imageOwnerName;
  imageOwnerLink1.setAttribute("href", searchData[randomNumber1].imageOwnerUrl);
  imageOwnerName2.textContent = searchData[randomNumber2].imageOwnerName;
  imageOwnerLink2.setAttribute("href", searchData[randomNumber2].imageOwnerUrl);
}

// Loop over buttons and see which one is clicked, based on higher or lower fire off choseHigher or choseLower functions
let buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (button.getAttribute("data-type") === "higher") {
      choseHigher();
    } else if (button.getAttribute("data-type") === "lower") {
      choseLower();
    } else {
      console.log("idk");
    }
  });
});

function choseHigher() {
  if (
    Number(searchData[randomNumber1].searchVolume) <
    Number(searchData[randomNumber2].searchVolume)
  ) {
    console.log(randomNumber1);
    higherChoice.style.display = "none";
    lowerChoice.style.display = "none";
    secondHalfSearchVolume.style.display = "block";
    let guess = Number(searchData[randomNumber2].searchVolume - 350);
    searchNameContainer.textContent = "average monthly searches";
    const interval = setInterval(() => {
      if (guess > Number(searchData[randomNumber2].searchVolume)) {
        correctAnswer.classList.add("show");
        correctAnswer.innerHTML = '<i class="fa-solid fa-check"></i>';
        setTimeout(() => {
          correctAnswer.classList.remove("show");
          firstHalfSearchTerm.textContent =
            searchData[randomNumber2].searchTerm;

          firstHalfSearchVolume.textContent = Number(
            searchData[randomNumber2].searchVolume
          );
          firstHalf.style.backgroundImage = `url(${searchData[randomNumber2].image})`;
          randomNumber2 = generateRandomNumber();
          randomNumber1 = generateRandomNumber();
          while (randomNumber2 === randomNumber1) {
            randomNumber2 = generateRandomNumber();
          }
          secondHalfSearchTerm.textContent =
            searchData[randomNumber2].searchTerm;

          secondHalfSearchVolume.textContent = Number(
            searchData[randomNumber2].searchVolume
          );
          secondHalf.style.backgroundImage = `url(${searchData[randomNumber2].image})`;
          higherChoice.style.display = "block";
          lowerChoice.style.display = "block";
          secondHalfSearchVolume.style.display = "none";
          searchNameContainer.textContent = "searches than ";
          searchName.textContent = searchData[randomNumber1].searchTerm;
        }, 1000);
        console.log("ITERATION DONE");
        clearInterval(interval);
      } else {
        console.log("ITERATING...");
        secondHalfSearchVolume.textContent = guess;
        guess += 5;
      }
    }, 0.1);
    console.log("Correct!");
  } else {
    higherChoice.style.display = "none";
    lowerChoice.style.display = "none";
    let guess = searchData[randomNumber2].searchVolume - 350;
    const interval = setInterval(() => {
      if (guess > searchData[randomNumber2].searchVolume) {
        wrongAnswer.classList.add("show");
        wrongAnswer.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        console.log("Game over");
        clearInterval(interval);
      } else {
        secondHalfSearchVolume.textContent = guess;
        guess += 5;
      }
    }, 0.1);
    console.log("Wrong...");
  }
}

function choseLower() {
  if (
    Number(searchData[randomNumber1].searchVolume) >
    Number(searchData[randomNumber2].searchVolume)
  ) {
    console.log(randomNumber1);
    higherChoice.style.display = "none";
    lowerChoice.style.display = "none";
    secondHalfSearchVolume.style.display = "block";
    let guess = Number(searchData[randomNumber2].searchVolume - 350);
    searchNameContainer.textContent = "average monthly searches";
    const interval = setInterval(() => {
      if (guess > Number(searchData[randomNumber2].searchVolume)) {
        correctAnswer.classList.add("show");
        correctAnswer.innerHTML = '<i class="fa-solid fa-check"></i>';
        setTimeout(() => {
          correctAnswer.classList.remove("show");
          firstHalfSearchTerm.textContent =
            searchData[randomNumber2].searchTerm;

          firstHalfSearchVolume.textContent = Number(
            searchData[randomNumber2].searchVolume
          );
          firstHalf.style.backgroundImage = `url(${searchData[randomNumber2].image})`;
          randomNumber2 = generateRandomNumber();
          randomNumber1 = generateRandomNumber();
          while (randomNumber2 === randomNumber1) {
            randomNumber2 = generateRandomNumber();
          }
          secondHalfSearchTerm.textContent =
            searchData[randomNumber2].searchTerm;

          secondHalfSearchVolume.textContent = Number(
            searchData[randomNumber2].searchVolume
          );
          secondHalf.style.backgroundImage = `url(${searchData[randomNumber2].image})`;
          higherChoice.style.display = "block";
          lowerChoice.style.display = "block";
          secondHalfSearchVolume.style.display = "none";
          searchNameContainer.textContent = "searches than ";
          searchName.textContent = searchData[randomNumber1].searchTerm;
        }, 1000);
        console.log("ITERATION DONE");
        clearInterval(interval);
      } else {
        console.log("ITERATING...");
        secondHalfSearchVolume.textContent = guess;
        guess += 5;
      }
    }, 0.1);
    console.log("Correct!");
  } else {
    higherChoice.style.display = "none";
    lowerChoice.style.display = "none";
    let guess = searchData[randomNumber2].searchVolume - 350;
    const interval = setInterval(() => {
      if (guess > searchData[randomNumber2].searchVolume) {
        wrongAnswer.classList.add("show");
        wrongAnswer.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        console.log("Game over");
        clearInterval(interval);
      } else {
        secondHalfSearchVolume.textContent = guess;
        guess += 5;
      }
    }, 0.1);
    console.log("Wrong...");
  }
}
