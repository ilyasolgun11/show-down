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
    image: "assets/images/builder.webp",
    imageOwnerName: "Garry Knight",
    imageOwnerUrl: "https://www.flickr.com/photos/garryknight/",
  },
  {
    searchTerm: "Mad Men",
    searchVolume: 550000,
    image: "assets/images/builder.webp",
    imageOwnerName: "Garry Knight",
    imageOwnerUrl: "https://www.flickr.com/photos/garryknight/",
  },
  {
    searchTerm: "Cancer",
    searchVolume: 823000,
    image: "assets/images/builder.webp",
    imageOwnerName: "Garry Knight",
    imageOwnerUrl: "https://www.flickr.com/photos/garryknight/",
  },
  {
    searchTerm: "Kobe Bryant",
    searchVolume: 823000,
    image: "assets/images/builder.webp",
    imageOwnerName: "Garry Knight",
    imageOwnerUrl: "https://www.flickr.com/photos/garryknight/",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  resetGame();
});

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
  let randomNumber1 = Math.floor(Math.random() * searchData.length);
  let randomNumber2 = Math.floor(Math.random() * searchData.length);
  // Make sure the random numbers are not the same
  if (randomNumber2 === randomNumber1) {
    randomNumber2 + 2;
    return randomNumber2;
  }

  firstHalfSearchTerm.textContent = searchData[randomNumber1].searchTerm;
  secondHalfSearchTerm.textContent = searchData[randomNumber2].searchTerm;
  firstHalfSearchVolume.textContent = searchData[randomNumber1].searchVolume;
  firstHalf.style.backgroundImage = `url(${searchData[randomNumber1].image})`;
  secondHalf.style.backgroundImage = `url(${searchData[randomNumber2].image})`;
  searchName.textContent = searchData[randomNumber1].searchTerm;
}
