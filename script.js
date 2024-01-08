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
    searchVolume: 550000,
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
    searchTerm: "Mad Men",
    searchVolume: 550000,
    image: "assets/images/mad-men.webp",
    imageOwnerName: "mezclaconfusa",
    imageOwnerUrl: "https://www.flickr.com/photos/59087292@N07/",
  },
  {
    searchTerm: "Cancer",
    searchVolume: 823000,
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

function generateRandomNumber() {
  return Math.floor(Math.random() * searchData.length);
}

/**
 * Fully reset the game, the firstHalfSearchTerm, secondHalfSearchTerm, firstHalfSearchVolume..............
 */
function resetGame() {
  // Grabbing Elements necessary from the DOM
  let firstHalf = document.getElementById("first-half");
  let secondHalf = document.getElementById("second-half");
  let firstHalfSearchTerm = document.getElementById("first-half-search-term");
  let secondHalfSearchTerm = document.getElementById("second-half-search-term");
  let firstHalfSearchVolume = document.getElementById(
    "first-half-search-volume"
  );
  //   let secondHalfSearchVolume = document.getElementById(
  //     "second-half-search-volume"
  //   );
  //   let higherBtn = document.getElementById("higher-btn");
  //   let lowerBtn = document.getElementById("lower-btn");
  let searchName = document.getElementById("search-name");

  // Generate 2 random numbers
  let randomNumber1 = generateRandomNumber();
  let randomNumber2 = generateRandomNumber();
  // Make sure the random numbers are not the same
  while (randomNumber2 === randomNumber1) {
    randomNumber2 = generateRandomNumber();
  }

  firstHalfSearchTerm.textContent = searchData[randomNumber1].searchTerm;
  secondHalfSearchTerm.textContent = searchData[randomNumber2].searchTerm;
  firstHalfSearchVolume.textContent = searchData[randomNumber1].searchVolume;
  firstHalf.style.backgroundImage = `url(${searchData[randomNumber1].image})`;
  secondHalf.style.backgroundImage = `url(${searchData[randomNumber2].image})`;
  searchName.textContent = searchData[randomNumber1].searchTerm;
}
