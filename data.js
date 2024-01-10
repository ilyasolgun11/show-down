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
    image: "assets/images/randommode/heart.webp",
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
    image: "assets/images/randommode/ebay.webp",
    imageOwnerName: "ebayink",
    imageOwnerUrl: "https://www.flickr.com/photos/ebayink/3440028348",
  },
  {
    searchTerm: "Currency Converter",
    searchVolume: 6120000,
    image: "assets/images/randommode/currency-converter.webp",
    imageOwnerName: "Monito-MoneyTransferComparison",
    imageOwnerUrl: "https://www.flickr.com/photos/money-transfers/44783853370",
  },
  {
    searchTerm: "Protein Shakes",
    searchVolume: 201900,
    image: "assets/images/randommode/protein-shakes.webp",
    imageOwnerName: "Marco Verch",
    imageOwnerUrl: "https://www.flickr.com/photos/160866001@N07/48238304261",
  },
  {
    searchTerm: "Mona Lisa",
    searchVolume: 823000,
    image: "assets/images/randommode/mona-lisa.webp",
    imageOwnerName: "Richard Mortel",
    imageOwnerUrl: "https://www.flickr.com/photos/prof_richard/13897565876",
  },
  {
    searchTerm: "Ramadan",
    searchVolume: 673000,
    image: "assets/images/randommode/ramadan.webp",
    imageOwnerName: "Ministry of Information",
    imageOwnerUrl: "https://www.flickr.com/photos/ictqatar/7581694646",
  },
  {
    searchTerm: "The Rock",
    searchVolume: 1500000,
    image: "assets/images/randommode/the-rock.webp",
    imageOwnerName: "irfan.nasir05",
    imageOwnerUrl: "https://www.flickr.com/photos/irfanpuniali/8429441527",
  },
  {
    searchTerm: "Powerpuff Girls",
    searchVolume: 40500,
    image: "assets/images/randommode/powerpuff-girls.webp",
    imageOwnerName: "Coffgirl",
    imageOwnerUrl:
      "https://www.deviantart.com/coffgirl/art/The-Powerpuff-Girls-CF-2015-581401733",
  },
  {
    searchTerm: "Chevrolet",
    searchVolume: 3350000,
    image: "assets/images/randommode/chevrolet.webp",
    imageOwnerName: "GM Europe",
    imageOwnerUrl: "https://www.flickr.com/photos/gmeurope/2689590971",
  },
  {
    searchTerm: "Chevrolet",
    searchVolume: 3350000,
    image: "assets/images/randommode/chevrolet.webp",
    imageOwnerName: "GM Europe",
    imageOwnerUrl: "https://www.flickr.com/photos/gmeurope/2689590971",
  },
  {
    searchTerm: "Schizophrenia",
    searchVolume: 1000000,
    image: "assets/images/randommode/schizophrenia.webp",
    imageOwnerName: "johnbill552",
    imageOwnerUrl: "https://www.flickr.com/photos/141608731@N06/38843081961",
  },
  {
    searchTerm: "BMW",
    searchVolume: 6120000,
    image: "assets/images/randommode/BMW.webp",
    imageOwnerName: "Andrew Bone",
    imageOwnerUrl: "https://www.flickr.com/photos/andreboeni/50926337142",
  },
  {
    searchTerm: "Free Climbing",
    searchVolume: 12100,
    image: "assets/images/randommode/free-climbling.webp",
    imageOwnerName: "Ed Dunens",
    imageOwnerUrl: "https://www.flickr.com/photos/blachswan/50197487736",
  },
  {
    searchTerm: "Candy Crush Saga",
    searchVolume: 7480000,
    image: "assets/images/randommode/candy-crash-saga.webp",
    imageOwnerName: "Albert Hsieh",
    imageOwnerUrl: "https://www.flickr.com/photos/albert_hsieh/8538528791",
  },
  {
    searchTerm: "Halloween",
    searchVolume: 4090000,
    image: "assets/images/randommode/haloween.webp",
    imageOwnerName: "Artiom P",
    imageOwnerUrl: "https://www.flickr.com/photos/artiomp/4061353880",
  },
  {
    searchTerm: "Birthday Cake",
    searchVolume: 2240000,
    image: "assets/images/randommode/birthday-cake.webp",
    imageOwnerName: "Dark Dwarf",
    imageOwnerUrl: "https://www.flickr.com/photos/darkdwarf/34851504355",
  },
  {
    searchTerm: "Spotify",
    searchVolume: 24900000,
    image: "assets/images/randommode/spotify.webp",
    imageOwnerName: "andro mart",
    imageOwnerUrl: "https://www.flickr.com/photos/187600977@N05/49760009206",
  },
  {
    searchTerm: "Cricket",
    searchVolume: 7480000,
    image: "assets/images/randommode/cricket.webp",
    imageOwnerName: "Patrick Case",
    imageOwnerUrl: "https://www.pexels.com/photo/boys-playing-cricket-3718433/",
  },
  {
    searchTerm: "Gymnastics",
    searchVolume: 550000,
    image: "assets/images/randommode/gymnastics.webp",
    imageOwnerName: "Rick McCharles",
    imageOwnerUrl: "https://www.flickr.com/photos/rickmccharles/7758961764",
  },
  {
    searchTerm: "Prada",
    searchVolume: 823000,
    image: "assets/images/randommode/parada.webp",
    imageOwnerName: "SoQ錫濛譙",
    imageOwnerUrl: "https://www.flickr.com/photos/qiaomeng/4079489086",
  },
  {
    searchTerm: "Google",
    searchVolume: 89000000000,
    image: "assets/images/randommode/google.webp",
    imageOwnerName: "Global Panorama",
    imageOwnerUrl: "https://www.flickr.com/photos/121483302@N02/14253849274",
  },
  {
    searchTerm: "Selena Gomez",
    searchVolume: 7480000,
    image: "assets/images/randommode/selena-gomez.webp",
    imageOwnerName: "Joella Marano",
    imageOwnerUrl: "https://www.flickr.com/photos/ellasportfolio/8228618996",
  },
  {
    searchTerm: "Marks and Spencer",
    searchVolume: 4090000,
    image: "assets/images/randommode/marks-and-spencer.webp",
    imageOwnerName: "Elliott Brown",
    imageOwnerUrl: "https://www.flickr.com/photos/ell-r-brown/5461097775",
  },
  {
    searchTerm: "Tom Hardy",
    searchVolume: 4090000,
    image: "assets/images/randommode/tom-hardy.webp",
    imageOwnerName: "Gage Skidmore",
    imageOwnerUrl: "https://www.flickr.com/photos/gageskidmore/42774766265",
  },
];

let fansData = [
  {
    searchTerm: "Manchester United",
    searchVolume: 82000000,
    image: "assets/images/fansmode/manchester-united.webp",
    imageOwnerName: "sanden",
    imageOwnerUrl: "https://www.flickr.com/photos/daphid/11617989435",
  },
  {
    searchTerm: "Chelsea",
    searchVolume: 54000000,
    image: "assets/images/fansmode/chelsea.webp",
    imageOwnerName: "joshjdss",
    imageOwnerUrl: "https://www.flickr.com/photos/109430286@N06/20870291004",
  },
  {
    searchTerm: "Manchester City",
    searchVolume: 47000000,
    image: "assets/images/fansmode/manchester-city.webp",
    imageOwnerName: "Brad Tutterow",
    imageOwnerUrl: "https://www.flickr.com/photos/fivetilnoon/36243866360",
  },
  {
    searchTerm: "Liverpool",
    searchVolume: 45000000,
    image: "assets/images/fansmode/liverpool.webp",
    imageOwnerName: "Danny Molyneux",
    imageOwnerUrl: "https://www.flickr.com/photos/dannymol/6091890059",
  },
  {
    searchTerm: "Arsenal",
    searchVolume: 41000000,
    image: "assets/images/fansmode/arsenal.webp",
    imageOwnerName: "Crystian Cruz",
    imageOwnerUrl: "https://www.flickr.com/photos/crystiancruz/3137240338",
  },
  {
    searchTerm: "Tottenham",
    searchVolume: 32000000,
    image: "assets/images/fansmode/tottenham.webp",
    imageOwnerName: "Crippycooke",
    imageOwnerUrl:
      "https://sports-view.co.uk/2021/09/deadline-day-blunder-sees-tottenham-take-37-5m-hit-on-28-year-old-opinion",
  },
  {
    searchTerm: "Aston Villa",
    searchVolume: 5100000,
    image: "assets/images/fansmode/aston-villa.webp",
    imageOwnerName: "Dagur Brynjólfsson",
    imageOwnerUrl: "https://www.flickr.com/photos/dalli/3286992499",
  },
  {
    searchTerm: "Everton",
    searchVolume: 4500000,
    image: "assets/images/fansmode/everton.webp",
    imageOwnerName: "Aleksandr Osipov",
    imageOwnerUrl: "https://www.flickr.com/photos/da_belkin/16869430792",
  },
  {
    searchTerm: "Westham",
    searchVolume: 3600000,
    image: "assets/images/fansmode/westham.webp",
    imageOwnerName: "joshjdss",
    imageOwnerUrl: "https://www.flickr.com/photos/109430286@N06/19933880632",
  },
  {
    searchTerm: "Newcastle United",
    searchVolume: 3500000,
    image: "assets/images/fansmode/newcastle-united.webp",
    imageOwnerName: "Cartridge",
    imageOwnerUrl: "https://www.flickr.com/photos/147085048@N03/47425516012",
  },
  {
    searchTerm: "Crystal Palace",
    searchVolume: 1700000,
    image: "assets/images/fansmode/crystal-palace.webp",
    imageOwnerName: "James Boyes",
    imageOwnerUrl:
      "https://commons.wikimedia.org/wiki/File:Crystal_Palace_F.C._versus_Lewes.jpg",
  },
  {
    searchTerm: "Galatasaray",
    searchVolume: 15000000,
    image: "assets/images/fansmode/galatasaray.webp",
    imageOwnerName: "l3o_",
    imageOwnerUrl: "https://www.flickr.com/photos/134803508@N03/30262743530",
  },
  {
    searchTerm: "Fenerbahce",
    searchVolume: 14800000,
    image: "assets/images/fansmode/fenerbahce.webp",
    imageOwnerName: "TURKPIX",
    imageOwnerUrl: "https://www.flickr.com/photos/89628381@N03/14140712356",
  },
  {
    searchTerm: "Beşiktaş",
    searchVolume: 9200000,
    image: "assets/images/fansmode/besiktas.webp",
    imageOwnerName: "Biso",
    imageOwnerUrl:
      "https://commons.wikimedia.org/wiki/File:Be%C5%9Fikta%C5%9F_J.K.JPG",
  },
  {
    searchTerm: "Trabzonspor",
    searchVolume: 7300000,
    image: "assets/images/fansmode/trabzonspor.webp",
    imageOwnerName: "Богдан Заяц",
    imageOwnerUrl:
      "https://commons.wikimedia.org/wiki/File:Metallist-Trabzonspor_%288%29.jpg",
  },
  {
    searchTerm: "Başakşehir",
    searchVolume: 3000000,
    image: "assets/images/fansmode/basaksehir.webp",
    imageOwnerName: "l3o_",
    imageOwnerUrl: "https://www.flickr.com/photos/134803508@N03/40926067563/",
  },
  {
    searchTerm: "Alanyaspor",
    searchVolume: 900000,
    image: "assets/images/fansmode/alanyaspor.webp",
    imageOwnerName: "l3o_",
    imageOwnerUrl: "https://www.flickr.com/photos/134803508@N03/27807167848",
  },
  {
    searchTerm: "Kasımpaşa",
    searchVolume: 840000,
    image: "assets/images/fansmode/kasimpasa.webp",
    imageOwnerName: "l3o_",
    imageOwnerUrl: "https://www.flickr.com/photos/134803508@N03/48737381152",
  },
  {
    searchTerm: "Göztepe",
    searchVolume: 1950000,
    image: "assets/images/fansmode/goztepe.webp",
    imageOwnerName: "l3o_",
    imageOwnerUrl: "https://www.flickr.com/photos/134803508@N03/46885105441/",
  },
  {
    searchTerm: "Real Madrid",
    searchVolume: 252100000,
    image: "assets/images/fansmode/real-madrid.webp",
    imageOwnerName: "lvmiquilena",
    imageOwnerUrl: "https://www.flickr.com/photos/90734637@N07/8259908356",
  },
  {
    searchTerm: "Barcelona FC",
    searchVolume: 250300000,
    image: "assets/images/fansmode/barcelona.webp",
    imageOwnerName: "Juanedc",
    imageOwnerUrl: "https://www.flickr.com/photos/juanedc/8440189313",
  },
  {
    searchTerm: "Juventus",
    searchVolume: 104100000,
    image: "assets/images/fansmode/juventus.webp",
    imageOwnerName: "Leandro Ceruti",
    imageOwnerUrl: "https://www.flickr.com/photos/71082787@N02/15079355829",
  },
  {
    searchTerm: "PSG",
    searchVolume: 91000000,
    image: "assets/images/fansmode/PSG.webp",
    imageOwnerName: "Département des Yvelines",
    imageOwnerUrl: "https://www.flickr.com/photos/yvelines/51306123628",
  },
  {
    searchTerm: "Al Nassr",
    searchVolume: 14000000,
    image: "assets/images/fansmode/al-nassr.webp",
    imageOwnerName: "Aryo Atmaja",
    imageOwnerUrl:
      "https://www.bola.com/dunia/read/5223753/keran-gol-ronaldo-macet-saat-al-nassr-bekuk-al-baten-netizen-bang-dodo-tetap-berkontribusi-kok",
  },
  {
    searchTerm: "AC Milan",
    searchVolume: 72000000,
    image: "assets/images/fansmode/ac-milan.webp",
    imageOwnerName: "Maarten Van Damme",
    imageOwnerUrl: "https://www.flickr.com/photos/mavadam/3263541290",
  },
  {
    searchTerm: "Inter Milan",
    searchVolume: 60300000,
    image: "assets/images/fansmode/inter-milan.webp",
    imageOwnerName: "Sona Hovasapyan",
    imageOwnerUrl:
      "https://commons.wikimedia.org/wiki/File:Club_Am%C3%A9rica_v_Inter_Milan_-_2009_-_Javier_Zanetti_%28cropped%29.jpg",
  },
  {
    searchTerm: "Roma FC",
    searchVolume: 42000000,
    image: "assets/images/fansmode/roma.webp",
    imageOwnerName: "Massimo Mastropietro",
    imageOwnerUrl: "https://www.flickr.com/photos/8147424@N02/544390767",
  },
  {
    searchTerm: "Bayern Munich",
    searchVolume: 120000000,
    image: "assets/images/fansmode/bayern-munich.webp",
    imageOwnerName: "iPhone-SoccerWallpaper",
    imageOwnerUrl: "https://www.flickr.com/photos/40583088@N07/3735789756",
  },
  {
    searchTerm: "Borussia Dortmund",
    searchVolume: 45000000,
    image: "assets/images/fansmode/borussia-dortmund.webp",
    imageOwnerName: "Adam Howarth",
    imageOwnerUrl:
      "https://www.borussiadortmund.co.uk/preview/borussia-dortmund-vs-chelsea-champions-league-preview/",
  },
  {
    searchTerm: "FC Köln",
    searchVolume: 3550000,
    image: "assets/images/fansmode/fc-koln.webp",
    imageOwnerName: "dronepicr",
    imageOwnerUrl: "https://www.flickr.com/photos/132646954@N02/33947844388",
  },
];
