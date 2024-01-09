let searchData = [
  {
    searchTerm: "Grenfell Tower",
    searchVolume: 550000,
    image: "assets/images/randommode/grenfell-tower.webp",
    imageOwnerName: "ChiralJon",
    imageOwnerUrl: "https://www.flickr.com/photos/69057297@N04/",
  },
  {
    searchTerm: "Builder",
    searchVolume: 74000,
    image: "assets/images/randommode/builder.webp",
    imageOwnerName: "Garry Knight",
    imageOwnerUrl: "https://www.flickr.com/photos/garryknight/",
  },
  {
    searchTerm: "Water Polo",
    searchVolume: 60500,
    image: "assets/images/randommode/water-polo.webp",
    imageOwnerName: "Garry Knight",
    imageOwnerUrl: "https://www.flickr.com/photos/garryknight/",
  },
  {
    searchTerm: "Kuala Lumpur",
    searchVolume: 560000,
    image: "assets/images/randommode/kuala-lumpur.webp",
    imageOwnerName: "Jorge Láscar",
    imageOwnerUrl: "https://www.flickr.com/photos/jlascar/",
  },
  {
    searchTerm: "Breaking Bad",
    searchVolume: 2240000,
    image: "assets/images/randommode/breaking-bad.webp",
    imageOwnerName: "Kelso",
    imageOwnerUrl: "https://www.hdwallpapers.net/community/kelso",
  },
  {
    searchTerm: "Cancer",
    searchVolume: 824000,
    image: "assets/images/randommode/cancer.webp",
    imageOwnerName: "NIH Image Gallery",
    imageOwnerUrl: "https://www.flickr.com/photos/nihgov/",
  },
  {
    searchTerm: "Kobe Bryant",
    searchVolume: 823000,
    image: "assets/images/randommode/kobe-bryant.webp",
    imageOwnerName: "Joseph A. Lee",
    imageOwnerUrl: "https://commons.wikimedia.org/wiki/File:Kobe_B_Bryant.jpg",
  },
  {
    searchTerm: "Hillsborough Disaster",
    searchVolume: 33100,
    image: "assets/images/randommode/hillsborough-disaster.webp",
    imageOwnerName: "David Dixon",
    imageOwnerUrl: "https://www.geograph.org.uk/photo/4454163",
  },
  {
    searchTerm: "E-Cigarettes",
    searchVolume: 368000,
    image: "assets/images/randommode/e-cigarettes.webp",
    imageOwnerName: "Vaping360",
    imageOwnerUrl: "https://www.flickr.com/photos/vaping360/16161321808",
  },
  {
    searchTerm: "Pittsburgh Penguins",
    searchVolume: 1220000,
    image: "assets/images/randommode/pittsburgh-penguins.webp",
    imageOwnerName: "pointnshoot",
    imageOwnerUrl: "https://www.flickr.com/photos/pointnshoot/2182166668",
  },
  {
    searchTerm: "Jerusalem",
    searchVolume: 823000,
    image: "assets/images/randommode/jerusalem.webp",
    imageOwnerName: "Dan",
    imageOwnerUrl: "https://www.flickr.com/photos/twiga_swala/2263943148",
  },
  {
    searchTerm: "Doctor Strange",
    searchVolume: 1220000,
    image: "assets/images/randommode/doctor-strange.webp",
    imageOwnerName: "AntMan3001",
    imageOwnerUrl: "https://www.flickr.com/photos/antdude3001/24027393815",
  },
  {
    searchTerm: "Amazon",
    searchVolume: 277000000,
    image: "assets/images/randommode/amazon.webp",
    imageOwnerName: "Darkworld47",
    imageOwnerUrl: "https://commons.wikimedia.org/wiki/File:Amzlogo.png",
  },
  {
    searchTerm: "Borussia Dortmund",
    searchVolume: 1500000,
    image: "assets/images/randommode/borussia-dortmund.webp",
    imageOwnerName: "Adam Howarth",
    imageOwnerUrl:
      "https://www.borussiadortmund.co.uk/preview/borussia-dortmund-vs-chelsea-champions-league-preview/",
  },
  {
    searchTerm: "Pablo Picasso",
    searchVolume: 450000,
    image: "assets/images/randommode/pablo-picasso.webp",
    imageOwnerName: "Lindsey Mancini",
    imageOwnerUrl:
      "https://www.flickr.com/photos/thingsworthdescribing/7953235496",
  },
  {
    searchTerm: "Recipes",
    searchVolume: 1220000,
    image: "assets/images/randommode/recipes.webp",
    imageOwnerName: "Meg H",
    imageOwnerUrl: "https://www.flickr.com/photos/156883244@N04/35120274024",
  },
  {
    searchTerm: "Github",
    searchVolume: 32000000,
    image: "assets/images/randommode/github.webp",
    imageOwnerName: "Sourav Kumar",
    imageOwnerUrl:
      "https://codeburst.io/why-you-should-start-using-github-right-now-e817d213c6ff",
  },
  {
    searchTerm: "Pug",
    searchVolume: 1500000,
    image: "assets/images/randommode/pug.webp",
    imageOwnerName: "hannah k",
    imageOwnerUrl: "https://www.flickr.com/photos/90692443@N05/8239219385",
  },
  {
    searchTerm: "Pizza",
    searchVolume: 7480000,
    image: "assets/images/randommode/pizza.webp",
    imageOwnerName: "Ewan Munro",
    imageOwnerUrl: "https://www.flickr.com/photos/55935853@N00/3717162237",
  },
  {
    searchTerm: "Scented Candles",
    searchVolume: 40500,
    image: "assets/images/randommode/scented-candles.webp",
    imageOwnerName: "slgckgc",
    imageOwnerUrl: "https://www.flickr.com/photos/slgc/3998375778",
  },
  {
    searchTerm: "Lung Cancer",
    searchVolume: 201000,
    image: "assets/images/randommode/lung-cancer.webp",
    imageOwnerName: "Richard W",
    imageOwnerUrl:
      "https://en.wikipedia.org/wiki/Pleural_cavity#External_links",
  },
  {
    searchTerm: "Immigration",
    searchVolume: 823000,
    image: "assets/images/randommode/immigration.webp",
    imageOwnerName: "Nick Youngson",
    imageOwnerUrl:
      "https://thebluediamondgallery.com/highway-signs/i/immigration.html",
  },
  {
    searchTerm: "Germany",
    searchVolume: 1220000,
    image: "assets/images/randommode/germany.webp",
    imageOwnerName: "ISPI 90",
    imageOwnerUrl:
      "https://www.ispionline.it/en/publication/germany-energy-policy-turbulent-times-between-transition-chances-and-lock-risks-36778",
  },
  {
    searchTerm: "Pac-Man",
    searchVolume: 5000000,
    image: "assets/images/randommode/pacman.webp",
    imageOwnerName: "The Pug Father",
    imageOwnerUrl:
      "https://commons.wikimedia.org/wiki/File:Pacman_and_the_Lotus_Elise_-_Flickr_-_The_Pug_Father.jpg",
  },
  {
    searchTerm: "Heart Disease",
    searchVolume: 135000,
    image: "assets/images/heart.webp",
    imageOwnerName: "English Department",
    imageOwnerUrl:
      "https://blogs.glowscotland.org.uk/er/wwhdepartmentenglish/free-open-book-with-heart-shaped-pages-photo-public-domain-cc0-image/",
  },
  {
    searchTerm: "Ticketmaster",
    searchVolume: 9140000,
    image: "assets/images/randommode/ticketmaster.webp",
    imageOwnerName: "Sharib4rd",
    imageOwnerUrl: "https://www.flickr.com/photos/mattb4rd/3414550230",
  },
  {
    searchTerm: "The JRE",
    searchVolume: 190000000,
    image: "assets/images/randommode/thejre.webp",
    imageOwnerName: "Do512",
    imageOwnerUrl: "https://www.flickr.com/photos/58530249@N04/13168429145",
  },
  {
    searchTerm: "Rocky",
    searchVolume: 450000,
    image: "assets/images/randommode/rocky.webp",
    imageOwnerName: "Andrés Fevrier",
    imageOwnerUrl: "https://www.flickr.com/photos/10567940@N05/2272780440",
  },
  {
    searchTerm: "Vietnam",
    searchVolume: 1220000,
    image: "assets/images/randommode/vietnam.webp",
    imageOwnerName: "guido da rozze",
    imageOwnerUrl: "https://www.flickr.com/photos/gudi3101/6821789376",
  },
  {
    searchTerm: "Bitcoin",
    searchVolume: 11100000,
    image: "assets/images/randommode/bitcoin.webp",
    imageOwnerName: "CUTCHOGUE",
    imageOwnerUrl:
      "https://cutchogue.librarycalendar.com/event/new-money-bitcoin-and-altcoin-presentation-10844",
  },
  {
    searchTerm: "Teeth Whitening",
    searchVolume: 301000,
    image: "assets/images/randommode/teeth-whitening.webp",
    imageOwnerName: "Dr. F. Keshavarz",
    imageOwnerUrl:
      "https://www.keshavarzdentistry.com/icon-teeth-whitening-treatment-after-braces/",
  },
  {
    searchTerm: "Xi Jinping",
    searchVolume: 201000,
    image: "assets/images/randommode/xijinping.webp",
    imageOwnerName: "UN Geneva",
    imageOwnerUrl: "https://www.flickr.com/photos/unisgeneva/32270494731",
  },
  {
    searchTerm: "Deutsche Bank",
    searchVolume: 201000,
    image: "assets/images/randommode/deutsche-bank.webp",
    imageOwnerName: "Can Pac Swire",
    imageOwnerUrl: "https://www.flickr.com/photos/18378305@N00/48921239848",
  },
  {
    searchTerm: "Golden Retriever",
    searchVolume: 1830000,
    image: "assets/images/randommode/golden-retriever.webp",
    imageOwnerName: "Rob Kleine",
    imageOwnerUrl: "https://www.flickr.com/photos/rkleine/4228943963",
  },
  {
    searchTerm: "Red Nose Day",
    searchVolume: 201000,
    image: "assets/images/randommode/red-nose-day.webp",
    imageOwnerName: "Richard",
    imageOwnerUrl: "https://www.flickr.com/photos/redcow/3350050686",
  },
  {
    searchTerm: "Valorant",
    searchVolume: 9100000,
    image: "assets/images/randommode/valorant.webp",
    imageOwnerName: "Esports EMEA",
    imageOwnerUrl: "https://www.flickr.com/photos/valesports/50978367208",
  },
  {
    searchTerm: "Snapchat",
    searchVolume: 209700000,
    image: "assets/images/randommode/snapchat.webp",
    imageOwnerName: "Blogtrepreneur",
    imageOwnerUrl: "https://www.flickr.com/photos/143601516@N03/28500473612",
  },
  {
    searchTerm: "Wembley Stadium",
    searchVolume: 202000,
    image: "assets/images/randommode/wembley-stadium.webp",
    imageOwnerName: "Steve",
    imageOwnerUrl: "https://www.flickr.com/photos/24767349@N02/5799582012",
  },
  {
    searchTerm: "Ebay",
    searchVolume: 739200000,
    image: "assets/images/ebay.webp",
    imageOwnerName: "ebayink",
    imageOwnerUrl: "https://www.flickr.com/photos/ebayink/3440028348",
  },
];

let fansData = [
  {
    searchTerm: "Manchester United",
    searchVolume: 82000000,
    image: "assets/images/fansmode/manchester-united.webp",
  },
  {
    searchTerm: "Chelsea",
    searchVolume: 54000000,
  },
  {
    searchTerm: "Manchester City",
    searchVolume: 47000000,
  },
  {
    searchTerm: "Liverpool",
    searchVolume: 45000000,
  },
];
