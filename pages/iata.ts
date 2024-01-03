import fetch from 'node-fetch'

export const IATA_CODES = [
  {
    iata: "0B",
    name: "Blue Air",
  },
  {
    name: "Ghadames Air",
    iata: null,
  },
  {
    iata: "0J",
    name: "Premium Jet",
  },
  {
    name: "Hydro - Quebec",
    iata: null,
  },
  {
    iata: "0V",
    name: "VASCO",
  },
  {
    name: "Forward Air",
    iata: null,
  },
  {
    iata: "1I",
    name: "NetJets Aviation",
  },
  {
    iata: "1X",
    name: "Branson Air Express",
  },
  {
    iata: "2A",
    name: "Deutsche Bahn",
  },
  {
    iata: "2B",
    name: "Albawings",
  },
  {
    iata: "2D",
    name: "Eastern Airlines",
  },
  {
    iata: "2E",
    name: "Smokey Bay Air",
  },
  {
    name: "Frontier Flying Service",
    iata: null,
  },
  {
    iata: "2H",
    name: "Thalys International",
  },
  {
    iata: "2I",
    name: "Star Peru",
  },
  {
    iata: "2J",
    name: "Air Burkina",
  },
  {
    iata: "2K",
    name: "Avianca Ecuador",
  },
  {
    iata: "2L",
    name: "Helvetic Airways",
  },
  {
    iata: "2L",
    name: "TAB",
  },
  {
    iata: "2O",
    name: "Island Air Service",
  },
  {
    iata: "2P",
    name: "PAL Express and Airphil Express",
  },
  {
    name: "VIA Rail Canada",
    iata: null,
  },
  {
    iata: "2U",
    name: "Sun d'Or",
  },
  {
    iata: "2V",
    name: "Amtrak",
  },
  {
    name: "Welcome Air",
    iata: null,
  },
  {
    iata: "2W",
    name: "Multiple Solutions Limited",
  },
  {
    iata: "2Y",
    name: "My Indo Airlines",
  },
  {
    iata: "3A",
    name: "Alliance Airlines",
  },
  {
    iata: "3A",
    name: "Chu Kong Passenger Transport",
  },
  {
    iata: "3B",
    name: "Central Connect Airlines",
  },
  {
    name: "Denim Air",
    iata: null,
  },
  {
    iata: "3E",
    name: "Air Choice One",
  },
  {
    iata: "3F",
    name: "Pacific Airways",
  },
  {
    iata: "3G",
    name: "Asia Cargo Express",
  },
  {
    iata: "3H",
    name: "Air Inuit",
  },
  {
    iata: "3K",
    name: "Jetstar Asia",
  },
  {
    iata: "3L",
    name: "InterSky",
  },
  {
    iata: "3M",
    name: "Silver Airways",
  },
  {
    iata: "3N",
    name: "Air Urga",
  },
  {
    iata: "3O",
    name: "Air Arabia Maroc",
  },
  {
    iata: "3P",
    name: "Air Philip",
  },
  {
    name: "KC International Airlines",
    iata: null,
  },
  {
    name: "Moskovia Airlines",
    iata: null,
  },
  {
    iata: "3S",
    name: "Air Antilles Express",
  },
  {
    iata: "3U",
    name: "Sichuan Airlines",
  },
  {
    iata: "3V",
    name: "ASL Airlines Belgium",
  },
  {
    iata: "3W",
    name: "Malawian Airlines",
  },
  {
    iata: "JC",
    name: "Japan Air Commuter",
  },
  {
    iata: "3X",
    name: "Premier Trans Aire",
  },
  {
    iata: "3Y",
    name: "Baseops International",
  },
  {
    iata: "5V",
    name: "Everts Air Cargo",
  },
  {
    iata: "4J",
    name: "Jetair Caribbean",
  },
  {
    iata: "4P",
    name: "Regional Sky",
  },
  {
    iata: "Z4",
    name: "ATSA",
  },
  {
    iata: "IK",
    name: "Air Kiribati",
  },
  {
    iata: "4B",
    name: "Aviastar-TU",
  },
  {
    iata: "4C",
    name: "LATAM Airlines Colombia",
  },
  {
    iata: "C4",
    name: "Click Airways",
  },
  {
    iata: "4D",
    name: "Air Sinai",
  },
  {
    iata: "Z3",
    name: "Tanana Air Service",
  },
  {
    iata: "4E",
    name: "Stabo Air",
  },
  {
    iata: "4G",
    name: "Gazpromavia",
  },
  {
    iata: "4H",
    name: "United Airways (BD)",
  },
  {
    iata: "4I",
    name: "IZAir",
  },
  {
    name: "Flydamas",
    iata: null,
  },
  {
    iata: "4K",
    name: "Kenn Borek Air",
  },
  {
    iata: "4L",
    name: "Georgian International Airlines",
  },
  {
    iata: "4M",
    name: "LATAM Airlines Argentina",
  },
  {
    iata: "4N",
    name: "Air North",
  },
  {
    iata: "4O",
    name: "Interjet",
  },
  {
    iata: "4P",
    name: "Travel Air",
  },
  {
    name: "Safi Airways",
    iata: null,
  },
  {
    iata: "RL",
    name: "Royal Flight Airlines",
  },
  {
    iata: "4S",
    name: "Solar Cargo",
  },
  {
    name: "Belair Airlines",
    iata: null,
  },
  {
    iata: "4U",
    name: "Germanwings",
  },
  {
    name: "Lignes Aeriennes Congolaises",
    iata: null,
  },
  {
    iata: "4W",
    name: "Warbelow's Air Ventures",
  },
  {
    iata: "4X",
    name: "Mercury World Cargo",
  },
  {
    iata: "4Y",
    name: "Yute Air Alaska",
  },
  {
    iata: "4Z",
    name: "South African Airlink",
  },
  {
    iata: "5A",
    name: "Alpine Air Express",
  },
  {
    iata: "5C",
    name: "C.A.L. Cargo Airlines",
  },
  {
    name: "Nature Air",
    iata: null,
  },
  {
    iata: "5D",
    name: "AeroMexico Connect",
  },
  {
    name: "Pan African Airways",
    iata: null,
  },
  {
    iata: "5H",
    name: "Fly540",
  },
  {
    iata: "5J",
    name: "Cebu Pacific Air",
  },
  {
    iata: "5L",
    name: "Fly Salone",
  },
  {
    iata: "5M",
    name: "FlyMontserrat",
  },
  {
    iata: "5N",
    name: "Smartavia",
  },
  {
    iata: "5O",
    name: "ASL Airlines France",
  },
  {
    name: "ACM Air Charter",
    iata: null,
  },
  {
    iata: "5S",
    name: "Global Aviation Services",
  },
  {
    iata: "5S",
    name: "S.A.P.",
  },
  {
    iata: "5T",
    name: "Canadian North",
  },
  {
    iata: "5U",
    name: "LADE",
  },
  {
    iata: "5X",
    name: "UPS",
  },
  {
    iata: "5Y",
    name: "Atlas Air",
  },
  {
    name: "Isles Of Scilly Skybus",
    iata: null,
  },
  {
    iata: "BH",
    name: "Bismillah Airlines",
  },
  {
    iata: "6A",
    name: "Armenia Airways",
  },
  {
    iata: "6B",
    name: "TUIfly Nordic",
  },
  {
    name: "Air Timor",
    iata: null,
  },
  {
    iata: "6D",
    name: "PT. Pelita Air",
  },
  {
    iata: "6E",
    name: "IndiGo",
  },
  {
    iata: "9X",
    name: "Southern Airways Express",
  },
  {
    iata: "6G",
    name: "Go2Sky",
  },
  {
    iata: "6H",
    name: "Israir Airlines",
  },
  {
    iata: "6I",
    name: "Aviast Air",
  },
  {
    iata: "6I",
    name: "Air Alsie",
  },
  {
    iata: "JZ",
    name: "Jubba Airways",
  },
  {
    iata: "6L",
    name: "Aklak Air",
  },
  {
    iata: "NR",
    name: "Al-Naser Airlines",
  },
  {
    iata: "6O",
    name: "Exact Air",
  },
  {
    name: "Gryphon Airlines",
    iata: null,
  },
  {
    iata: "6Q",
    name: "Cham Wings Airlines",
  },
  {
    iata: "6R",
    name: "AeroUnion",
  },
  {
    iata: "6R",
    name: "Mirny Air Enterprise",
  },
  {
    iata: "6S",
    name: "Saudi Gulf",
  },
  {
    iata: "6U",
    name: "ACG",
  },
  {
    iata: "6U",
    name: "Unique Air",
  },
  {
    iata: "6W",
    name: "Saratov Airlines",
  },
  {
    iata: "6Y",
    name: "SmartLynx Airlines",
  },
  {
    iata: "MY",
    name: "MASwings",
  },
  {
    iata: "7C",
    name: "Coyne Airways",
  },
  {
    iata: "7C",
    name: "Jeju Air",
  },
  {
    name: "Maluti Sky",
    iata: null,
  },
  {
    iata: "7E",
    name: "Sylt Air",
  },
  {
    iata: "7F",
    name: "First Air",
  },
  {
    iata: "7G",
    name: "StarFlyer",
  },
  {
    iata: "7H",
    name: "Ravn Alaska",
  },
  {
    iata: "7J",
    name: "Tajik Air",
  },
  {
    iata: "7L",
    name: "Aerocaribbean",
  },
  {
    iata: "7L",
    name: "Silk Way West",
  },
  {
    name: "MAYAir",
    iata: null,
  },
  {
    iata: "7O",
    name: "Smartwings Hungary Kft",
  },
  {
    iata: "7N",
    name: "PAWA Dominicana",
  },
  {
    iata: "7Q",
    name: "Elite Airways",
  },
  {
    iata: "7R",
    name: "RusLine",
  },
  {
    iata: "7S",
    name: "Ryan Air",
  },
  {
    name: "Trans North Aviation",
    iata: null,
  },
  {
    name: "Air Glaciers",
    iata: null,
  },
  {
    iata: "7U",
    name: "Commercial Aviation Services",
  },
  {
    iata: "7V",
    name: "Federal Air",
  },
  {
    iata: "7W",
    name: "Wind Rose Aviation Company",
  },
  {
    name: "Mid Airlines",
    iata: null,
  },
  {
    iata: "7Y",
    name: "Mann Yadanarpon Airlines",
  },
  {
    iata: "7Z",
    name: "Halcyonair",
  },
  {
    iata: "8A",
    name: "Panama Airways",
  },
  {
    iata: "8C",
    name: "Cotai Ferry Company",
  },
  {
    iata: "8D",
    name: "FitsAir",
  },
  {
    iata: "8D",
    name: "Servant Air",
  },
  {
    iata: "8E",
    name: "Bering Air",
  },
  {
    iata: "8E",
    name: "Easy Fly Express",
  },
  {
    iata: "8F",
    name: "STP Airways",
  },
  {
    iata: "8K",
    name: "EVAS Air Charters",
  },
  {
    iata: "8K",
    name: "K-Mile Air",
  },
  {
    iata: "8L",
    name: "Lucky Air",
  },
  {
    iata: "8L",
    name: "Redhill Aviation",
  },
  {
    iata: "8M",
    name: "Myanmar Airways International",
  },
  {
    name: "Barents AirLink",
    iata: null,
  },
  {
    iata: "4A",
    name: "California Pacific Airlines",
  },
  {
    iata: "8O",
    name: "West Coast Air",
  },
  {
    iata: "8P",
    name: "Pacific Coastal Airlines",
  },
  {
    iata: "8Q",
    name: "Baker Aviation",
  },
  {
    iata: "8S",
    name: "Turbojet",
  },
  {
    iata: "8T",
    name: "Air Tindi",
  },
  {
    iata: "8U",
    name: "Afriqiyah Airways",
  },
  {
    iata: "8V",
    name: "Wright Air",
  },
  {
    iata: "8W",
    name: "Private Wings",
  },
  {
    iata: "8Y",
    name: "Air Burundi",
  },
  {
    iata: "CF",
    name: "China Postal Airlines",
  },
  {
    iata: "8Z",
    name: "Congo Airways",
  },
  {
    iata: "9A",
    name: "Gran Colombia De Aviacion",
  },
  {
    name: "Eaglexpress Air",
    iata: null,
  },
  {
    iata: "9B",
    name: "AccesRail",
  },
  {
    iata: "9C",
    name: "Spring Airlines",
  },
  {
    iata: "9D",
    name: "Genghis Khan Airlines",
  },
  {
    iata: "9E",
    name: "Endeavor Air",
  },
  {
    iata: "9F",
    name: "Eurostar",
  },
  {
    iata: "9G",
    name: "9G Rail",
  },
  {
    iata: "9H",
    name: "Air Changan",
  },
  {
    name: "Helitrans AS",
    iata: null,
  },
  {
    iata: "9J",
    name: "Dana Airlines",
  },
  {
    iata: "9K",
    name: "Cape Air",
  },
  {
    iata: "9K",
    name: "Amiyi Airlines",
  },
  {
    iata: "9L",
    name: "West Link Airlines",
  },
  {
    iata: "9M",
    name: "Central Mountain Air",
  },
  {
    iata: "9M",
    name: "Massy Airlines",
  },
  {
    iata: "9Q",
    name: "Caicos Express Airways",
  },
  {
    iata: "9R",
    name: "SATENA",
  },
  {
    iata: "9U",
    name: "Air Moldova",
  },
  {
    iata: "9V",
    name: "Avior",
  },
  {
    name: "Jet Airways (India)",
    iata: null,
  },
  {
    iata: "9Y",
    name: "National Airways",
  },
  {
    iata: "ZQ",
    name: "Azman Air",
  },
  {
    iata: "AO",
    name: "Air Juan",
  },
  {
    iata: "A3",
    name: "Aegean Airlines",
  },
  {
    iata: "A4",
    name: "Aerocon",
  },
  {
    iata: "A4",
    name: "Azimuth Airlines",
  },
  {
    iata: "A6",
    name: "Air Alps Aviation",
  },
  {
    iata: "A6",
    name: "Air Travel",
  },
  {
    iata: "A9",
    name: "Georgian Airways",
  },
  {
    iata: "AA",
    name: "American Airlines",
  },
  {
    name: "Abelag Aviation",
    iata: null,
  },
  {
    name: "Air Atlantique",
    iata: null,
  },
  {
    name: "Air Aurora",
    iata: null,
  },
  {
    iata: "Q3",
    name: "Anguilla Air Services",
  },
  {
    iata: "8Y",
    name: "Pan Pacific Airlines",
  },
  {
    name: "Aeolus Air",
    iata: null,
  },
  {
    iata: "AB",
    name: "Air Berlin",
  },
  {
    iata: "KF",
    name: "Air Belgium",
  },
  {
    iata: "PA",
    name: "Airblue",
  },
  {
    name: "Air Taxi Benin",
    iata: null,
  },
  {
    iata: "AC",
    name: "Air Canada",
  },
  {
    name: "Aero Comondu",
    iata: null,
  },
  {
    iata: "8V",
    name: "Astral Aviation Limited",
  },
  {
    name: "ASSL",
    iata: null,
  },
  {
    name: "Flight Line",
    iata: null,
  },
  {
    iata: "AD",
    name: "Azul",
  },
  {
    name: "Antonov Airlines",
    iata: null,
  },
  {
    name: "Audeli Air Express",
    iata: null,
  },
  {
    name: "Aero Dienst",
    iata: null,
  },
  {
    iata: "AE",
    name: "Mandarin Airlines",
  },
  {
    name: "Airest",
    iata: null,
  },
  {
    iata: "NL",
    name: "Aero4M",
  },
  {
    name: "AEROTEC",
    iata: null,
  },
  {
    iata: "I9",
    name: "Air Italy S.p.A.",
  },
  {
    iata: "AF",
    name: "Air France",
  },
  {
    iata: "AW",
    name: "Africa World Airlines",
  },
  {
    name: "ASL Airlines Ireland",
    iata: null,
  },
  {
    iata: "AG",
    name: "Aruba Airlines",
  },
  {
    name: "Angola Air Charter",
    iata: null,
  },
  {
    iata: "EO",
    name: "Air Go Egypt",
  },
  {
    iata: "AH",
    name: "Air Algerie",
  },
  {
    name: "AZAL Avia Cargo",
    iata: null,
  },
  {
    name: "Air Hamburg",
    iata: null,
  },
  {
    name: "AHS Air International",
    iata: null,
  },
  {
    iata: "S8",
    name: "SkyAir",
  },
  {
    iata: "MZ",
    name: "Amakusa Air",
  },
  {
    iata: "AI",
    name: "Air India",
  },
  {
    name: "Airbus Industrie",
    iata: null,
  },
  {
    name: "Aero Contractors",
    iata: null,
  },
  {
    iata: "AJ",
    name: "Aztec Airways",
  },
  {
    iata: "7Z",
    name: "Ameristar Jet Charter",
  },
  {
    iata: "4W",
    name: "Allied Air",
  },
  {
    iata: "AK",
    name: "AirAsia",
  },
  {
    name: "Sundt Air Management",
    iata: null,
  },
  {
    name: "Air Leisure",
    iata: null,
  },
  {
    name: "American Linehaul Corporation",
    iata: null,
  },
  {
    name: "Alanna Limited",
    iata: null,
  },
  {
    iata: "K4",
    name: "ALS",
  },
  {
    iata: "AM",
    name: "Aeromexico",
  },
  {
    iata: "IM",
    name: "Jupiter Jet",
  },
  {
    iata: "1I",
    name: "Deutsche Rettungsflugwacht",
  },
  {
    iata: "A8",
    name: "Ameriflight",
  },
  {
    name: "ASTA",
    iata: null,
  },
  {
    iata: "MZ",
    name: "AMC Airlines",
  },
  {
    iata: "AN",
    name: "Advanced Air",
  },
  {
    iata: "YE",
    name: "YanAir",
  },
  {
    iata: "AO",
    name: "Air One Aviation",
  },
  {
    name: "Aeros Flight Training",
    iata: null,
  },
  {
    name: "Airpac Airlines",
    iata: null,
  },
  {
    iata: "HP",
    name: "Amapola",
  },
  {
    iata: "MM",
    name: "Peach Aviation",
  },
  {
    iata: "P4",
    name: "Air Peace",
  },
  {
    iata: "AQ",
    name: "9 Air Co",
  },
  {
    iata: "AR",
    name: "Aerolineas Argentinas",
  },
  {
    iata: "ZJ",
    name: "Air Routing International",
  },
  {
    name: "Aeronexus",
    iata: null,
  },
  {
    iata: "AS",
    name: "Alaska Airlines",
  },
  {
    name: "Awesome Aviation",
    iata: null,
  },
  {
    name: "AirSprint",
    iata: null,
  },
  {
    name: "Royal Australian Air Force",
    iata: null,
  },
  {
    iata: "AT",
    name: "Royal Air Maroc",
  },
  {
    iata: "F5",
    name: "Aerotranscargo",
  },
  {
    name: "Par Avion Airlines",
    iata: null,
  },
  {
    iata: "8C",
    name: "ATI",
  },
  {
    name: "Avanti Air",
    iata: null,
  },
  {
    iata: "WP",
    name: "Air Antwerp",
  },
  {
    iata: "AU",
    name: "Austral",
  },
  {
    iata: "AV",
    name: "SA AVIANCA",
  },
  {
    name: "Gama Aviation",
    iata: null,
  },
  {
    iata: "ZT",
    name: "Titan Airways",
  },
  {
    name: "Airwork",
    iata: null,
  },
  {
    name: "Air Niamey",
    iata: null,
  },
  {
    name: "Arab Wings",
    iata: null,
  },
  {
    iata: "AX",
    name: "Trans States Airlines",
  },
  {
    name: "AIR X Charter",
    iata: null,
  },
  {
    iata: "AY",
    name: "Finnair",
  },
  {
    iata: "Y6",
    name: "AB Aviation",
  },
  {
    iata: "7D",
    name: "Madagasikara Airways",
  },
  {
    iata: "AZ",
    name: "Alitalia",
  },
  {
    iata: "A2",
    name: "Astra Airlines",
  },
  {
    name: "Azee Air",
    iata: null,
  },
  {
    iata: "ZP",
    name: "Paranair",
  },
  {
    iata: "B2",
    name: "Belavia",
  },
  {
    iata: "BF",
    name: "French Bee",
  },
  {
    iata: "B3",
    name: "Bhutan Airlines",
  },
  {
    iata: "B4",
    name: "Bankair",
  },
  {
    iata: "B5",
    name: "Fly SAX",
  },
  {
    iata: "B6",
    name: "JetBlue Airways",
  },
  {
    iata: "B7",
    name: "UNI Air",
  },
  {
    iata: "B8",
    name: "Eritrean Airlines",
  },
  {
    iata: "B9",
    name: "Iran Airtour",
  },
  {
    iata: "BA",
    name: "British Airways",
  },
  {
    name: "Belgian Air Component",
    iata: null,
  },
  {
    iata: "4B",
    name: "Boutique Air",
  },
  {
    name: "Bravo Airways",
    iata: null,
  },
  {
    iata: "BB",
    name: "Seaborne Airlines",
  },
  {
    iata: "BZ",
    name: "Blue Bird Airways",
  },
  {
    iata: "BC",
    name: "Skymark Airlines",
  },
  {
    name: "BenAir",
    iata: null,
  },
  {
    iata: "BE",
    name: "Flybe",
  },
  {
    iata: "Z9",
    name: "Bek Air",
  },
  {
    name: "Kingfisher Air Service",
    iata: null,
  },
  {
    iata: "BO",
    name: "Bluebird Nordic",
  },
  {
    name: "Aero-Service",
    iata: null,
  },
  {
    name: "Air Nunavut",
    iata: null,
  },
  {
    iata: "BG",
    name: "Biman Bangladesh Airlines",
  },
  {
    iata: "4Y",
    name: "Airbus Transport International",
  },
  {
    iata: "8H",
    name: "BH Air",
  },
  {
    name: "Ak Bars Aero",
    iata: null,
  },
  {
    iata: "BN",
    name: "Air Inter Transport",
  },
  {
    name: "Bergen Air Transport",
    iata: null,
  },
  {
    iata: "BH",
    name: "Hawkair Aviation",
  },
  {
    iata: "U4",
    name: "Buddha Air",
  },
  {
    name: "Bristow Helicopters",
    iata: null,
  },
  {
    iata: "BI",
    name: "Royal Brunei Airlines",
  },
  {
    iata: "C9",
    name: "Alphaland Aviation",
  },
  {
    name: "BinAir",
    iata: null,
  },
  {
    iata: "ML",
    name: "Air Mediterranee",
  },
  {
    iata: "BJ",
    name: "Nouvelair Tunisie",
  },
  {
    name: "Beijing Airlines",
    iata: null,
  },
  {
    iata: "BK",
    name: "Okay Airways",
  },
  {
    iata: "BL",
    name: "Jetstar Pacific",
  },
  {
    name: "Sundance Air",
    iata: null,
  },
  {
    name: "powdair",
    iata: null,
  },
  {
    iata: "3S",
    name: "AeroLogic",
  },
  {
    iata: "BP",
    name: "Air Botswana",
  },
  {
    iata: "RP",
    name: "Base Kft",
  },
  {
    iata: "BQ",
    name: "Bukovyna Airlines",
  },
  {
    name: "Amaszonas del Uruguay",
    iata: null,
  },
  {
    iata: "BR",
    name: "EVA Air",
  },
  {
    name: "Star Air",
    iata: null,
  },
  {
    name: "TopBrass Aviation",
    iata: null,
  },
  {
    name: "AeroBratsk",
    iata: null,
  },
  {
    name: "Bravo Air",
    iata: null,
  },
  {
    name: "British International",
    iata: null,
  },
  {
    iata: "BS",
    name: "US-Bangla Airlines",
  },
  {
    iata: "LL",
    name: "Miami Air International",
  },
  {
    iata: "5B",
    name: "Bassaka Air",
  },
  {
    iata: "BT",
    name: "Air Baltic",
  },
  {
    iata: "BU",
    name: "CAA",
  },
  {
    iata: "H6",
    name: "Bulgarian Air Charter",
  },
  {
    iata: "BV",
    name: "Blue Panorama Airlines",
  },
  {
    name: "BVI Airways",
    iata: null,
  },
  {
    iata: "LB",
    name: "Bul Air",
  },
  {
    name: "Baron Aviation Services",
    iata: null,
  },
  {
    iata: "BW",
    name: "Caribbean Airlines",
  },
  {
    iata: "BX",
    name: "Air Busan",
  },
  {
    name: "Redding Aero Enterprises",
    iata: null,
  },
  {
    name: "Keystone Air",
    iata: null,
  },
  {
    iata: "BZ",
    name: "Blue Dart Aviation",
  },
  {
    iata: "C2",
    name: "CEIBA Intercontinental",
  },
  {
    iata: "CQ",
    name: "Charterlines",
  },
  {
    iata: "C4",
    name: "Conquest Air",
  },
  {
    iata: "C5",
    name: "CommutAir",
  },
  {
    iata: "C6",
    name: "CanJet Airlines",
  },
  {
    iata: "C7",
    name: "Cinnamon Air",
  },
  {
    iata: "C8",
    name: "Cargolux Italia",
  },
  {
    iata: "CA",
    name: "Air China LTD",
  },
  {
    iata: "QC",
    name: "Camair-Co",
  },
  {
    name: "Cardig Air",
    iata: null,
  },
  {
    iata: "XC",
    name: "Corendon Air",
  },
  {
    name: "Air China Cargo",
    iata: null,
  },
  {
    iata: "CB",
    name: "Trans Caribbean Air",
  },
  {
    name: "Cobrex Trans",
    iata: null,
  },
  {
    iata: "CC",
    name: "Air Atlanta Icelandic",
  },
  {
    name: "Dalian Airlines",
    iata: null,
  },
  {
    name: "Mustang Aviation",
    iata: null,
  },
  {
    iata: "9I",
    name: "Alliance Air",
  },
  {
    iata: "OT",
    name: "Tchadia Airlines",
  },
  {
    name: "Cedar Executive",
    iata: null,
  },
  {
    iata: "CE",
    name: "Chalair",
  },
  {
    iata: "Y2",
    name: "Air Century",
  },
  {
    name: "China Flying Dragon Aviation",
    iata: null,
  },
  {
    iata: "A7",
    name: "Calafia Airlines",
  },
  {
    iata: "CG",
    name: "PNG Air",
  },
  {
    name: "Charlotte, NC Air National Guard",
    iata: null,
  },
  {
    name: "Cargo Air",
    iata: null,
  },
  {
    iata: "GT",
    name: "Air Guilin",
  },
  {
    iata: "GY",
    name: "Colorful Guizhou Airlines",
  },
  {
    iata: "CH",
    name: "Bemidji Aviation",
  },
  {
    name: "Cougar Helicopters",
    iata: null,
  },
  {
    iata: "CI",
    name: "China Airlines",
  },
  {
    name: "Sirius Aero",
    iata: null,
  },
  {
    iata: "CJ",
    name: "BA Cityflyer",
  },
  {
    iata: "CK",
    name: "China Cargo",
  },
  {
    name: "Aviation Charter Services",
    iata: null,
  },
  {
    iata: "CL",
    name: "Lufthansa CityLine",
  },
  {
    name: "Cello Aviation",
    iata: null,
  },
  {
    name: "Challenge Air",
    iata: null,
  },
  {
    name: "Clay Lacy Aviation",
    iata: null,
  },
  {
    iata: "CM",
    name: "Copa Airlines",
  },
  {
    name: "Calstar",
    iata: null,
  },
  {
    iata: "CN",
    name: "Grand China Air",
  },
  {
    iata: "CD",
    name: "Corendon Dutch Airlines",
  },
  {
    name: "Sunwest Aviation",
    iata: null,
  },
  {
    name: "Air China Inner Mongolia",
    iata: null,
  },
  {
    name: "PlaneSense",
    iata: null,
  },
  {
    iata: "6C",
    name: "Connect Linhas Aereas",
  },
  {
    name: "ConocoPhillips",
    iata: null,
  },
  {
    iata: "CP",
    name: "Compass Airlines",
  },
  {
    iata: "EF",
    name: "AerCaribe Peru",
  },
  {
    name: "Corporate Air",
    iata: null,
  },
  {
    iata: "CQ",
    name: "Coastal Aviation",
  },
  {
    iata: "OQ",
    name: "Chongqing Airlines",
  },
  {
    iata: "C8",
    name: "Cronos Airlines",
  },
  {
    iata: "2I",
    name: "21 Air",
  },
  {
    name: "Castle Aviation",
    iata: null,
  },
  {
    iata: "CT",
    name: "Alitalia CityLiner",
  },
  {
    name: "AeroLynx",
    iata: null,
  },
  {
    iata: "H5",
    name: "Thomas Cook Airlines Balearics",
  },
  {
    name: "Central Air Southwest",
    iata: null,
  },
  {
    iata: "QG",
    name: "Citilink",
  },
  {
    name: "PanAir Cargo",
    iata: null,
  },
  {
    iata: "CU",
    name: "Cubana de Aviacion",
  },
  {
    iata: "5G",
    name: "Aerocuahonte",
  },
  {
    name: "Court Helicopters",
    iata: null,
  },
  {
    iata: "CV",
    name: "Cargolux",
  },
  {
    iata: "3C",
    name: "Air Chathams",
  },
  {
    iata: "CW",
    name: "Air Marshall Islands",
  },
  {
    iata: "CW",
    name: "Air Cargo Global",
  },
  {
    name: "CanWest Air",
    iata: null,
  },
  {
    iata: "CX",
    name: "Cathay Pacific",
  },
  {
    iata: "CS",
    name: "Comlux Aruba",
  },
  {
    iata: "XR",
    name: "Corendon Airlines Europe",
  },
  {
    iata: "CY",
    name: "Cyprus Airways",
  },
  {
    iata: "U8",
    name: "Tus Airways",
  },
  {
    iata: "ZO",
    name: "Colorful Yunnan Airlines",
  },
  {
    name: "ATI Jet",
    iata: null,
  },
  {
    iata: "CZ",
    name: "China Southern Airlines",
  },
  {
    iata: "D0",
    name: "DHL Air",
  },
  {
    iata: "D2",
    name: "Severstal Aircompany",
  },
  {
    iata: "D3",
    name: "Daallo Airlines",
  },
  {
    iata: "D4",
    name: "Alidaunia",
  },
  {
    iata: "D4",
    name: "Geo Sky",
  },
  {
    iata: "D5",
    name: "DHL Aero Expreso",
  },
  {
    iata: "D6",
    name: "Interair South Africa",
  },
  {
    iata: "D7",
    name: "AirAsia X",
  },
  {
    iata: "D8",
    name: "Norwegian Air International",
  },
  {
    iata: "D9",
    name: "Dena Airways",
  },
  {
    name: "Daily Air",
    iata: null,
  },
  {
    iata: "V5",
    name: "Aerovias DAP",
  },
  {
    name: "Dornier Aviation Nigeria",
    iata: null,
  },
  {
    iata: "DB",
    name: "HOP!-BRIT AIR",
  },
  {
    name: "Gemini Air Group",
    iata: null,
  },
  {
    iata: "DC",
    name: "Braathens Regional",
  },
  {
    name: "DC Aviation",
    iata: null,
  },
  {
    name: "Pentastar Aviation",
    iata: null,
  },
  {
    iata: "DD",
    name: "Nok Air",
  },
  {
    iata: "DE",
    name: "Condor",
  },
  {
    iata: "DF",
    name: "Condor Berlin",
  },
  {
    name: "Directflight Limited",
    iata: null,
  },
  {
    iata: "DG",
    name: "Cebgo",
  },
  {
    name: "Dasnair",
    iata: null,
  },
  {
    iata: "DH",
    name: "Norwegian Air Norway",
  },
  {
    iata: "DI",
    name: "Norwegian Air UK",
  },
  {
    iata: "DJ",
    name: "AirAsia Japan",
  },
  {
    iata: "B0",
    name: "La Compagnie",
  },
  {
    iata: "DK",
    name: "Sunclass Airlines",
  },
  {
    name: "Encore Air Cargo",
    iata: null,
  },
  {
    iata: "DL",
    name: "Delta Air Lines",
  },
  {
    iata: "DM",
    name: "Asian Air",
  },
  {
    iata: "DN",
    name: "Norwegian Air Argentina",
  },
  {
    iata: "DP",
    name: "Pobeda",
  },
  {
    name: "Delta Private Jets",
    iata: null,
  },
  {
    name: "Coastal Air",
    iata: null,
  },
  {
    name: "Air Direct Connect",
    iata: null,
  },
  {
    iata: "DR",
    name: "Ruili Airlines",
  },
  {
    name: "Omni Air Transport",
    iata: null,
  },
  {
    name: "Dream Wind Airlines",
    iata: null,
  },
  {
    iata: "DS",
    name: "Easyjet Switzerland",
  },
  {
    iata: "DT",
    name: "TAAG",
  },
  {
    iata: "DH",
    name: "Douniah Airlines",
  },
  {
    iata: "DU",
    name: "Norwegian Long Haul",
  },
  {
    name: "Dubai Air Wing",
    iata: null,
  },
  {
    iata: "DV",
    name: "SCAT Airlines",
  },
  {
    iata: "3R",
    name: "Divi Divi Air",
  },
  {
    name: "Aero-Charter",
    iata: null,
  },
  {
    iata: "DW",
    name: "Dominican Wings",
  },
  {
    name: "Adria Airways Switzerland",
    iata: null,
  },
  {
    iata: "DX",
    name: "Danish Air",
  },
  {
    iata: "DY",
    name: "Norwegian Air Shuttle",
  },
  {
    name: "Electra Airways",
    iata: null,
  },
  {
    iata: "EX",
    name: "Regional Express Americas",
  },
  {
    iata: "E6",
    name: "Bringer Air Cargo Taxi",
  },
  {
    iata: "E7",
    name: "Estafeta",
  },
  {
    iata: "EA",
    name: "East Horizon Airlines",
  },
  {
    iata: "KR",
    name: "Air Bishkek",
  },
  {
    name: "Euro-Asia Air",
    iata: null,
  },
  {
    name: "Walya Airways",
    iata: null,
  },
  {
    iata: "EB",
    name: "Wamos Air",
  },
  {
    iata: "LV",
    name: "LEVEL",
  },
  {
    name: "East Coast Jets",
    iata: null,
  },
  {
    iata: "8J",
    name: "EcoJet",
  },
  {
    iata: "ED",
    name: "Air Explore",
  },
  {
    iata: "8W",
    name: "Fly All Ways",
  },
  {
    iata: "WK",
    name: "Edelweiss Air",
  },
  {
    iata: "EE",
    name: "Regional Jet",
  },
  {
    iata: "FE",
    name: "Far Eastern Air Transport",
  },
  {
    iata: "EF",
    name: "Fly CamInter",
  },
  {
    iata: "VE",
    name: "EasyFly",
  },
  {
    iata: "EG",
    name: "Enerjet",
  },
  {
    name: "First Wing Aircraft Charter And Maintenance",
    iata: null,
  },
  {
    iata: "EH",
    name: "ANA Wings",
  },
  {
    iata: "EI",
    name: "Aer Lingus",
  },
  {
    iata: "EJ",
    name: "New England Airlines",
  },
  {
    name: "Executive Jet Management",
    iata: null,
  },
  {
    name: "ExecuJet Middle East",
    iata: null,
  },
  {
    iata: "EC",
    name: "EasyJet Europe",
  },
  {
    iata: "EK",
    name: "Emirates",
  },
  {
    iata: "E7",
    name: "Equaflight Service",
  },
  {
    iata: "L8",
    name: "Afric Aviation",
  },
  {
    iata: "EL",
    name: "Ellinair",
  },
  {
    name: "Babcock MCS Italia",
    iata: null,
  },
  {
    name: "Elite Jet",
    iata: null,
  },
  {
    name: "Elliott Aviation",
    iata: null,
  },
  {
    iata: "EM",
    name: "Empire Airlines",
  },
  {
    name: "EagleMed",
    iata: null,
  },
  {
    iata: "EN",
    name: "Air Dolomiti",
  },
  {
    iata: "E4",
    name: "Enter Air",
  },
  {
    name: "Jota Aviation",
    iata: null,
  },
  {
    iata: "EP",
    name: "Iran Aseman Airlines",
  },
  {
    iata: "DZ",
    name: "Donghai Airlines",
  },
  {
    name: "Express Airways",
    iata: null,
  },
  {
    name: "Epps Air Service",
    iata: null,
  },
  {
    iata: "EQ",
    name: "TAME",
  },
  {
    iata: "ER",
    name: "Astar Air Cargo",
  },
  {
    name: "Aerotaxis Tucan",
    iata: null,
  },
  {
    name: "Express Rail LInk",
    iata: null,
  },
  {
    iata: "EG",
    name: "Ernest Airlines",
  },
  {
    name: "Sky Quest",
    iata: null,
  },
  {
    iata: "ES",
    name: "DHL Aviation EEMEA",
  },
  {
    name: "Eastern Skyjets",
    iata: null,
  },
  {
    iata: "ET",
    name: "Ethiopian Airlines",
  },
  {
    iata: "ET",
    name: "Emetebe S.A.",
  },
  {
    iata: "ES",
    name: "Estelar",
  },
  {
    iata: "EU",
    name: "Chengdu Airlines",
  },
  {
    name: "EFS European Flight Service",
    iata: null,
  },
  {
    iata: "EV",
    name: "ExpressJet",
  },
  {
    iata: "E9",
    name: "Evelop Airlines",
  },
  {
    name: "Everjets",
    iata: null,
  },
  {
    iata: "EW",
    name: "Eurowings",
  },
  {
    iata: "E2",
    name: "Eurowings Europe",
  },
  {
    iata: "ZD",
    name: "EWA Air",
  },
  {
    iata: "EX",
    name: "Air Santo Domingo",
  },
  {
    name: "Atlantic Airlines",
    iata: null,
  },
  {
    iata: "MB",
    name: "Execaire",
  },
  {
    name: "Executive Airlines",
    iata: null,
  },
  {
    iata: "EY",
    name: "Etihad Airways",
  },
  {
    iata: "EZ",
    name: "Sun-Air",
  },
  {
    iata: "F0",
    name: "Fly Jordan",
  },
  {
    iata: "F2",
    name: "Safarilink",
  },
  {
    iata: "FC",
    name: "Fly Corporate",
  },
  {
    iata: "FQ",
    name: "Fenix Airways",
  },
  {
    iata: "FS",
    name: "flyglobal charter",
  },
  {
    iata: "6K",
    name: "Songbird Airways",
  },
  {
    iata: "F8",
    name: "Flair Airlines",
  },
  {
    iata: "F9",
    name: "Frontier Airlines",
  },
  {
    iata: "FA",
    name: "Private Sky",
  },
  {
    iata: "FA",
    name: "Safair",
  },
  {
    iata: "F3",
    name: "flyadeal",
  },
  {
    name: "ASL Airlines Hungary",
    iata: null,
  },
  {
    name: "Fair Aviation",
    iata: null,
  },
  {
    iata: "FB",
    name: "Bulgaria Air",
  },
  {
    iata: "7B",
    name: "Fly Blue Crane",
  },
  {
    iata: "6W",
    name: "FlyBosnia",
  },
  {
    iata: "N7",
    name: "Nordic Regional Airlines",
  },
  {
    iata: "FC",
    name: "Falcon Express Cargo",
  },
  {
    name: "Nav Air Charter",
    iata: null,
  },
  {
    iata: "FD",
    name: "Thai AirAsia",
  },
  {
    iata: "JH",
    name: "Fuji Dream Airlines",
  },
  {
    iata: "4F",
    name: "Freedom Airline Express",
  },
  {
    name: "Eagle Air Iceland",
    iata: null,
  },
  {
    iata: "FG",
    name: "Ariana Afghan Airlines",
  },
  {
    name: "Freebird Airlines Europe",
    iata: null,
  },
  {
    iata: "FH",
    name: "Freebird Airlines",
  },
  {
    iata: "FI",
    name: "Icelandair",
  },
  {
    iata: "5F",
    name: "Fly One",
  },
  {
    name: "CitationAir",
    iata: null,
  },
  {
    iata: "FJ",
    name: "Fiji Airways",
  },
  {
    name: "Fiji Link",
    iata: null,
  },
  {
    iata: "FN",
    name: "Fastjet Zimbabwe",
  },
  {
    name: "Kivalliq Air",
    iata: null,
  },
  {
    name: "AirTran",
    iata: null,
  },
  {
    name: "Flight Express",
    iata: null,
  },
  {
    iata: "FM",
    name: "Shanghai Airlines",
  },
  {
    name: "Norlandair",
    iata: null,
  },
  {
    name: "Fanair",
    iata: null,
  },
  {
    iata: "FO",
    name: "Felix Airways",
  },
  {
    iata: "FO",
    name: "Flybondi",
  },
  {
    name: "S.A.C.",
    iata: null,
  },
  {
    name: "Thomas Cook Belgium",
    iata: null,
  },
  {
    iata: "QO",
    name: "Quikjet",
  },
  {
    iata: "FR",
    name: "Ryanair",
  },
  {
    name: "Freight Runners Express",
    iata: null,
  },
  {
    iata: "X7",
    name: "ACE Belgium Freighters",
  },
  {
    name: "FirstNation Airways",
    iata: null,
  },
  {
    name: "Fort Aero",
    iata: null,
  },
  {
    name: "Africa Charter Airline",
    iata: null,
  },
  {
    name: "Private Air",
    iata: null,
  },
  {
    iata: "FT",
    name: "FlyEgypt",
  },
  {
    name: "Mountain Aviation",
    iata: null,
  },
  {
    name: "Fastjet",
    iata: null,
  },
  {
    iata: "FU",
    name: "Fuzhou Airlines",
  },
  {
    iata: "FU",
    name: "BudgetAir",
  },
  {
    iata: "FV",
    name: "Rossiya Airlines",
  },
  {
    name: "FlyViking",
    iata: null,
  },
  {
    name: "Falcon Aviation",
    iata: null,
  },
  {
    iata: "FW",
    name: "IBEX Airlines",
  },
  {
    iata: "FW",
    name: "Solenta Aviation Mozambique",
  },
  {
    name: "Fair Wind Air Charter",
    iata: null,
  },
  {
    name: "FlightWorks",
    iata: null,
  },
  {
    iata: "FX",
    name: "FedEx",
  },
  {
    iata: "F6",
    name: "FlyValan",
  },
  {
    name: "Foxair",
    iata: null,
  },
  {
    iata: "FY",
    name: "Firefly",
  },
  {
    name: "Flying Service",
    iata: null,
  },
  {
    name: "Comfort Air",
    iata: null,
  },
  {
    name: "Flyways Linhas Aereas",
    iata: null,
  },
  {
    iata: "FZ",
    name: "flydubai",
  },
  {
    iata: "G2",
    name: "Galeyr Airline",
  },
  {
    iata: "GW",
    name: "GetJet Airlines",
  },
  {
    iata: "GW",
    name: "Go Fly",
  },
  {
    iata: "G3",
    name: "Gol",
  },
  {
    iata: "G4",
    name: "Allegiant Air",
  },
  {
    iata: "G5",
    name: "China Express Air",
  },
  {
    iata: "G7",
    name: "GoJet Airlines",
  },
  {
    iata: "G8",
    name: "GoAir",
  },
  {
    iata: "G9",
    name: "Air Arabia",
  },
  {
    iata: "GA",
    name: "Garuda Indonesia",
  },
  {
    name: "Luftwaffe",
    iata: null,
  },
  {
    name: "Gama Aviation Signature",
    iata: null,
  },
  {
    iata: "G0",
    name: "Albatros Airlines",
  },
  {
    iata: "GB",
    name: "ABX Air",
  },
  {
    iata: "7G",
    name: "Global Jet",
  },
  {
    iata: "3G",
    name: "Gambia Bird",
  },
  {
    iata: "GC",
    name: "Global Feeder Services",
  },
  {
    name: "Grand Cru Airlines",
    iata: null,
  },
  {
    iata: "LC",
    name: "Skyway",
  },
  {
    iata: "GD",
    name: "Aviar PTY LTD",
  },
  {
    iata: "DW",
    name: "Great Dane Airlines",
  },
  {
    name: "Steelman Aviation",
    iata: null,
  },
  {
    name: "Lufthansa Cargo",
    iata: null,
  },
  {
    name: "Aero Expedition",
    iata: null,
  },
  {
    iata: "GF",
    name: "Gulf Air",
  },
  {
    iata: "GG",
    name: "Sky Lease Cargo",
  },
  {
    iata: "GH",
    name: "Globus",
  },
  {
    iata: "AG",
    name: "Air Ghana",
  },
  {
    name: "German Sky Airlines",
    iata: null,
  },
  {
    iata: "GI",
    name: "Germania Express",
  },
  {
    iata: "GJ",
    name: "Loong Air",
  },
  {
    name: "NorthStar Air Tours",
    iata: null,
  },
  {
    iata: "GK",
    name: "Jetstar Japan",
  },
  {
    iata: "GL",
    name: "Air Greenland",
  },
  {
    iata: "GL",
    name: "AirGlow Aviation Services",
  },
  {
    iata: "GM",
    name: "Chair Airlines",
  },
  {
    name: "Gama Aviation",
    iata: null,
  },
  {
    name: "Magnicharters",
    iata: null,
  },
  {
    name: "Genex",
    iata: null,
  },
  {
    iata: "GO",
    name: "ULS Airlines Cargo",
  },
  {
    name: "Waltair Europe",
    iata: null,
  },
  {
    name: "Groznyy Avia",
    iata: null,
  },
  {
    iata: "GP",
    name: "Pantanal Linhas Aereas",
  },
  {
    iata: "G5",
    name: "Gestair",
  },
  {
    iata: "GQ",
    name: "Sky Express",
  },
  {
    iata: "GR",
    name: "Aurigny Air Services",
  },
  {
    name: "Grande Aviation",
    iata: null,
  },
  {
    iata: "GS",
    name: "Tianjin Airlines",
  },
  {
    iata: "GT",
    name: "Vista Georgia",
  },
  {
    iata: "E8",
    name: "City Airways",
  },
  {
    name: "Meridian Air Charter",
    iata: null,
  },
  {
    iata: "R2",
    name: "Groupe Transair",
  },
  {
    name: "American Air Charter",
    iata: null,
  },
  {
    iata: "GU",
    name: "Aviateca Guatemala",
  },
  {
    name: "Gum Air",
    iata: null,
  },
  {
    iata: "GV",
    name: "Grant Aviation",
  },
  {
    iata: "G6",
    name: "Gowair",
  },
  {
    iata: "GX",
    name: "Guangxi Beibu Gulf Airlines",
  },
  {
    iata: "GZ",
    name: "Air Rarotonga",
  },
  {
    name: "ZagrosJet",
    iata: null,
  },
  {
    iata: "H2",
    name: "Sky Airline",
  },
  {
    iata: "HT",
    name: "Tianjin Air Cargo",
  },
  {
    name: "Harbour Air",
    iata: null,
  },
  {
    iata: "H3",
    name: "Air Berlin Aviation",
  },
  {
    iata: "HT",
    name: "Air Horizont",
  },
  {
    iata: "HS",
    name: "Heli Securite",
  },
  {
    name: "Island Hoppers",
    iata: null,
  },
  {
    iata: "H6",
    name: "Ravn Connect",
  },
  {
    iata: "H7",
    name: "Eagle Air",
  },
  {
    iata: "H7",
    name: "Taron Avia",
  },
  {
    name: "Chilejet",
    iata: null,
  },
  {
    iata: "H8",
    name: "Sky Airlines Peru",
  },
  {
    iata: "H9",
    name: "Himalaya Airlines",
  },
  {
    iata: "HA",
    name: "Hawaiian Airlines",
  },
  {
    iata: "HB",
    name: "Homer Air",
  },
  {
    name: "Asia Atlantic Airlines",
    iata: null,
  },
  {
    name: "Hebridean Air Services",
    iata: null,
  },
  {
    iata: "HC",
    name: "Holidays Czech Airlines",
  },
  {
    iata: "HD",
    name: "Air Do",
  },
  {
    iata: "HE",
    name: "LGW",
  },
  {
    iata: "5Q",
    name: "Holiday Europe",
  },
  {
    name: "Hi Fly Malta",
    iata: null,
  },
  {
    iata: "5K",
    name: "Hi Fly",
  },
  {
    iata: "HG",
    name: "Hibernian Airlines",
  },
  {
    name: "Hi Air",
    iata: null,
  },
  {
    iata: "HH",
    name: "Taban Airlines",
  },
  {
    iata: "HI",
    name: "Papillon Airways",
  },
  {
    iata: "HJ",
    name: "Tasman Cargo Airlines",
  },
  {
    name: "Hawkaire",
    iata: null,
  },
  {
    name: "CHC Helikopter Service",
    iata: null,
  },
  {
    name: "Air Hollandia",
    iata: null,
  },
  {
    iata: "HM",
    name: "Air Seychelles",
  },
  {
    name: "Afghan Jet International",
    iata: null,
  },
  {
    name: "Heavylift Cargo",
    iata: null,
  },
  {
    iata: "HO",
    name: "Juneyao Airlines",
  },
  {
    iata: "A5",
    name: "HOP!",
  },
  {
    name: "Hop-A-Jet Worldwide Jet Charter",
    iata: null,
  },
  {
    iata: "HR",
    name: "Hahn Air",
  },
  {
    name: "Chartright Air",
    iata: null,
  },
  {
    name: "Direktflyg",
    iata: null,
  },
  {
    name: "Ningxia Cargo Airlines",
    iata: null,
  },
  {
    name: "Grossman Air Service",
    iata: null,
  },
  {
    iata: "HU",
    name: "Hainan Airlines",
  },
  {
    iata: "HV",
    name: "Transavia",
  },
  {
    iata: "HW",
    name: "North-Wright Airways",
  },
  {
    iata: "HX",
    name: "Hong Kong Airlines",
  },
  {
    iata: "HY",
    name: "Uzbekistan Airways",
  },
  {
    iata: "HZ",
    name: "Aurora",
  },
  {
    iata: "I2",
    name: "Iberia Express",
  },
  {
    iata: "I3",
    name: "Ivoirienne de Transport Aerien",
  },
  {
    iata: "I4",
    name: "Island Air Express",
  },
  {
    iata: "J0",
    name: "Jam Air Link Express Limited",
  },
  {
    iata: "I5",
    name: "AirAsia India",
  },
  {
    iata: "I8",
    name: "Izhavia",
  },
  {
    iata: "IA",
    name: "Iraqi Airways",
  },
  {
    iata: "IO",
    name: "IrAero",
  },
  {
    name: "Ibom Air",
    iata: null,
  },
  {
    iata: "IB",
    name: "Iberia",
  },
  {
    name: "Ibertrans Aerea",
    iata: null,
  },
  {
    name: "Reignwood Asia Aviation",
    iata: null,
  },
  {
    iata: "ID",
    name: "Batik Air",
  },
  {
    iata: "IE",
    name: "Solomon Airlines",
  },
  {
    iata: "IF",
    name: "Fly Baghdad",
  },
  {
    iata: "F3",
    name: "FAI rent-a-jet",
  },
  {
    name: "IFL Group",
    iata: null,
  },
  {
    name: "Voluxis",
    iata: null,
  },
  {
    iata: "IG",
    name: "Air Italy",
  },
  {
    iata: "II",
    name: "IBC Airways",
  },
  {
    iata: "I7",
    name: "Inter Iles Air",
  },
  {
    iata: "K8",
    name: "InterJet West",
  },
  {
    iata: "2G",
    name: "Angara Airlines",
  },
  {
    iata: "EO",
    name: "Pegas Fly",
  },
  {
    iata: "IL",
    name: "LankAir",
  },
  {
    iata: "IM",
    name: "Michelin Air",
  },
  {
    iata: "XM",
    name: "Zimex Aviation",
  },
  {
    iata: "IN",
    name: "Nam Air",
  },
  {
    name: "InterJet Hellenic",
    iata: null,
  },
  {
    iata: "IQ",
    name: "Augsburg Airways",
  },
  {
    iata: "IQ",
    name: "Qazaq Air",
  },
  {
    iata: "IR",
    name: "Iran Air",
  },
  {
    iata: "NV",
    name: "Karun Airlines",
  },
  {
    name: "CSA Air",
    iata: null,
  },
  {
    iata: "QB",
    name: "Qeshm Air",
  },
  {
    name: "Sahand Airlines",
    iata: null,
  },
  {
    iata: "HN",
    name: "Saffat Airlines",
  },
  {
    name: "Eram Air",
    iata: null,
  },
  {
    name: "AIS Airlines",
    iata: null,
  },
  {
    iata: "T6",
    name: "AirSWIFT",
  },
  {
    iata: "IU",
    name: "Hevi Lift (PNG)",
  },
  {
    iata: "IU",
    name: "SW Italia",
  },
  {
    iata: "IW",
    name: "Wings Air (Indonesia)",
  },
  {
    iata: "IX",
    name: "Air India Express",
  },
  {
    iata: "IY",
    name: "Yemenia",
  },
  {
    iata: "IZ",
    name: "Arkia Israeli Airlines",
  },
  {
    name: "Zagros Airlines",
    iata: null,
  },
  {
    iata: "J0",
    name: "Jet Link Express",
  },
  {
    name: "One Jet",
    iata: null,
  },
  {
    iata: "J2",
    name: "AZAL Azerbaijan Airlines",
  },
  {
    iata: "JN",
    name: "Joon",
  },
  {
    iata: "J3",
    name: "Northwestern Air",
  },
  {
    name: "Buffalo Airways",
    iata: null,
  },
  {
    iata: "J4",
    name: "Badr Airlines",
  },
  {
    iata: "J5",
    name: "Alaska Seaplanes",
  },
  {
    iata: "J6",
    name: "Larry's Flying Service",
  },
  {
    iata: "J6",
    name: "Jet Ops",
  },
  {
    iata: "J7",
    name: "Afrijet",
  },
  {
    iata: "J8",
    name: "Berjaya Air",
  },
  {
    iata: "J9",
    name: "Jazeera Airways",
  },
  {
    iata: "TB",
    name: "TUI fly",
  },
  {
    name: "Jetalliance Flugbetriebs",
    iata: null,
  },
  {
    name: "Jet Aviation",
    iata: null,
  },
  {
    iata: "JA",
    name: "JetSMART",
  },
  {
    iata: "R5",
    name: "Jordan Aviation Airlines",
  },
  {
    iata: "JB",
    name: "Helijet International",
  },
  {
    name: "JetBee",
    iata: null,
  },
  {
    name: "Sino Jet (Beijing)",
    iata: null,
  },
  {
    iata: "3J",
    name: "Jubba Airways (Kenya)",
  },
  {
    name: "JAL Express",
    iata: null,
  },
  {
    iata: "QD",
    name: "JC International Airlines",
  },
  {
    iata: "N2",
    name: "Jet Charter",
  },
  {
    iata: "JD",
    name: "Beijing Capital Airlines",
  },
  {
    iata: "JE",
    name: "Mango",
  },
  {
    name: "Jetflite",
    iata: null,
  },
  {
    iata: "JF",
    name: "Jet Asia Airways",
  },
  {
    iata: "JO",
    name: "Jet Time",
  },
  {
    iata: "JG",
    name: "JetGo Australia",
  },
  {
    iata: "JI",
    name: "Meraj Air",
  },
  {
    iata: "OH",
    name: "PSA Airlines",
  },
  {
    iata: "JJ",
    name: "LATAM Airlines Brasil",
  },
  {
    iata: "JK",
    name: "Aercaribe",
  },
  {
    iata: "JL",
    name: "JAL",
  },
  {
    iata: "JM",
    name: "Air Jamaica",
  },
  {
    iata: "JM",
    name: "Jambojet Limited",
  },
  {
    name: "Jonika",
    iata: null,
  },
  {
    name: "Just Us Air",
    iata: null,
  },
  {
    name: "Jonair",
    iata: null,
  },
  {
    iata: "JP",
    name: "Adria Airways",
  },
  {
    name: "JetsPlus",
    iata: null,
  },
  {
    iata: "JQ",
    name: "Jetstar",
  },
  {
    iata: "JR",
    name: "Joy Air",
  },
  {
    iata: "JS",
    name: "Air Koryo",
  },
  {
    name: "SunLink",
    iata: null,
  },
  {
    name: "Ava Air",
    iata: null,
  },
  {
    iata: "JT",
    name: "Lion Air",
  },
  {
    name: "Jet Time Finland",
    iata: null,
  },
  {
    name: "Jet Linx Aviation",
    iata: null,
  },
  {
    iata: "5E",
    name: "East Coast Flight Services",
  },
  {
    iata: "JU",
    name: "Air Serbia",
  },
  {
    iata: "UJ",
    name: "USA Jet Airlines",
  },
  {
    iata: "JV",
    name: "Bearskin Airlines",
  },
  {
    iata: "JW",
    name: "Vanilla Air",
  },
  {
    iata: "HK",
    name: "Skippers Aviation",
  },
  {
    iata: "WU",
    name: "Jetways Airlines Limited",
  },
  {
    iata: "JX",
    name: "Jambojet",
  },
  {
    iata: "JY",
    name: "interCaribbean Airways",
  },
  {
    iata: "K2",
    name: "Paklook Air",
  },
  {
    iata: "K3",
    name: "Taquan Air",
  },
  {
    iata: "K3",
    name: "Safe Air Company",
  },
  {
    iata: "K4",
    name: "Kalitta Air",
  },
  {
    iata: "K5",
    name: "Silverstone Air Services",
  },
  {
    iata: "K6",
    name: "Cambodia Angkor Air",
  },
  {
    iata: "KI",
    name: "KrasAvia",
  },
  {
    iata: "KA",
    name: "Cathay Dragon",
  },
  {
    name: "Air Pohang",
    iata: null,
  },
  {
    iata: "KI",
    name: "Kaiser Air",
  },
  {
    iata: "S3",
    name: "Sunkar Air",
  },
  {
    name: "Comlux KZ",
    iata: null,
  },
  {
    iata: "KB",
    name: "Drukair",
  },
  {
    iata: "K7",
    name: "Air KBZ",
  },
  {
    iata: "KC",
    name: "Air Astana",
  },
  {
    name: "Kolob Canyons Air Services",
    iata: null,
  },
  {
    iata: "KD",
    name: "Western Global",
  },
  {
    name: "Makani Kai Air",
    iata: null,
  },
  {
    iata: "KE",
    name: "Korean Air",
  },
  {
    name: "Kaz Air Jet",
    iata: null,
  },
  {
    iata: "5Z",
    name: "CemAir",
  },
  {
    iata: "FK",
    name: "KF Cargo",
  },
  {
    iata: "K9",
    name: "Kalitta Charters",
  },
  {
    iata: "KG",
    name: "Aerogaviota",
  },
  {
    iata: "LK",
    name: "Kyrgyz Airlines",
  },
  {
    iata: "KH",
    name: "Aloha Air Cargo",
  },
  {
    iata: "KW",
    name: "Kharkiv Airlines",
  },
  {
    name: "Aircompany KHORS",
    iata: null,
  },
  {
    iata: "KJ",
    name: "Air Incheon",
  },
  {
    name: "Kapajet",
    iata: null,
  },
  {
    iata: "KK",
    name: "Atlasglobal",
  },
  {
    iata: "KL",
    name: "KLM",
  },
  {
    name: "Klasjet",
    iata: null,
  },
  {
    iata: "KD",
    name: "Kal Star Aviation",
  },
  {
    iata: "KM",
    name: "Air Malta",
  },
  {
    iata: "KO",
    name: "Komiaviatrans",
  },
  {
    iata: "KR",
    name: "Cambodia Airways",
  },
  {
    iata: "KN",
    name: "China United Airlines",
  },
  {
    name: "Kan Air",
    iata: null,
  },
  {
    iata: "KO",
    name: "ACE Air Cargo",
  },
  {
    name: "Baker Aviation",
    iata: null,
  },
  {
    iata: "KP",
    name: "ASKY",
  },
  {
    iata: "KP",
    name: "Asialink Cargo Express",
  },
  {
    iata: "KQ",
    name: "Kenya Airways",
  },
  {
    name: "Kiwi Regional Airlines",
    iata: null,
  },
  {
    iata: "U5",
    name: "Karinou Airlines",
  },
  {
    iata: "KS",
    name: "PenAir",
  },
  {
    name: "Kosmos Airlines",
    iata: null,
  },
  {
    name: "Katmai Air",
    iata: null,
  },
  {
    iata: "KT",
    name: "Mahogany Air",
  },
  {
    name: "Transaviabaltika",
    iata: null,
  },
  {
    iata: "ZF",
    name: "AZUR Air",
  },
  {
    name: "Kotlas Air",
    iata: null,
  },
  {
    iata: "KU",
    name: "Kuwait Airways",
  },
  {
    name: "Wataniya Airways",
    iata: null,
  },
  {
    iata: "KX",
    name: "Cayman Airways",
  },
  {
    iata: "KY",
    name: "Kunming Airlines",
  },
  {
    iata: "KZ",
    name: "NCA - Nippon Cargo Airlines",
  },
  {
    name: "ZhezAir",
    iata: null,
  },
  {
    iata: "LE",
    name: "Norwegian Air Sweden",
  },
  {
    iata: "L2",
    name: "Lynden Air Cargo",
  },
  {
    iata: "LT",
    name: "LongJiang Airlines",
  },
  {
    iata: "L3",
    name: "DHL de Guatemala",
  },
  {
    name: "Legacy Air",
    iata: null,
  },
  {
    name: "LASA Argentina",
    iata: null,
  },
  {
    iata: "L5",
    name: "Lufttransport",
  },
  {
    iata: "L9",
    name: "Belle Air Europe",
  },
  {
    iata: "L9",
    name: "Bristow",
  },
  {
    iata: "LA",
    name: "LATAM Airlines",
  },
  {
    iata: "L7",
    name: "LATAM Cargo Colombia",
  },
  {
    name: "Red Wing Aeroplane Company",
    iata: null,
  },
  {
    iata: "4L",
    name: "LAS SA",
  },
  {
    iata: "AP",
    name: "AlbaStar",
  },
  {
    iata: "LB",
    name: "Air Costa",
  },
  {
    name: "Quest Diagnostics",
    iata: null,
  },
  {
    iata: "LF",
    name: "Lao Central Airlines",
  },
  {
    iata: "YQ",
    name: "TAR Aerolineas",
  },
  {
    iata: "LD",
    name: "AHK",
  },
  {
    iata: "OE",
    name: "Lauda",
  },
  {
    iata: "LE",
    name: "Laparkan Airways",
  },
  {
    iata: "LE",
    name: "Lion Air Cargo",
  },
  {
    name: "Aerolineas Ejecutivas",
    iata: null,
  },
  {
    iata: "LG",
    name: "Luxair",
  },
  {
    iata: "LH",
    name: "Lufthansa",
  },
  {
    iata: "GI",
    name: "Guangdong Longhao",
  },
  {
    iata: "LI",
    name: "LIAT",
  },
  {
    name: "Limitless Airways",
    iata: null,
  },
  {
    name: "Lipican Aer",
    iata: null,
  },
  {
    iata: "DU",
    name: "Air Liaison",
  },
  {
    iata: "LJ",
    name: "Jin Air",
  },
  {
    iata: "LK",
    name: "Lao Skyway",
  },
  {
    name: "Aviation Advisor",
    iata: null,
  },
  {
    iata: "LL",
    name: "China General Aviation",
  },
  {
    name: "Small Planet Airlines",
    iata: null,
  },
  {
    name: "Small Planet Airlines Polska",
    iata: null,
  },
  {
    name: "Small Planet Airlines Germany",
    iata: null,
  },
  {
    name: "Let's Fly",
    iata: null,
  },
  {
    iata: "LN",
    name: "Libyan Airlines",
  },
  {
    name: "Links Air",
    iata: null,
  },
  {
    name: "London Executive Aviation",
    iata: null,
  },
  {
    iata: "LO",
    name: "LOT - Polish Airlines",
  },
  {
    iata: "LM",
    name: "Loganair",
  },
  {
    iata: "LP",
    name: "LATAM Airlines Peru",
  },
  {
    name: "Air Leap",
    iata: null,
  },
  {
    iata: "LQ",
    name: "Lanmei Airlines",
  },
  {
    iata: "LR",
    name: "Avianca Costa Rica",
  },
  {
    iata: "LS",
    name: "Jet2",
  },
  {
    iata: "6G",
    name: "Executive Express Aviation",
  },
  {
    iata: "LU",
    name: "LATAM Airlines Chile",
  },
  {
    name: "Pacific Wings",
    iata: null,
  },
  {
    name: "Lumiwings",
    iata: null,
  },
  {
    iata: "LX",
    name: "SWISS",
  },
  {
    name: "Luxaviation",
    iata: null,
  },
  {
    name: "Flexjet",
    iata: null,
  },
  {
    iata: "LY",
    name: "El Al",
  },
  {
    name: "LyddAir",
    iata: null,
  },
  {
    iata: "KG",
    name: "Denver Air Connection",
  },
  {
    name: "SmartLynx Malta",
    iata: null,
  },
  {
    name: "Belle Air",
    iata: null,
  },
  {
    iata: "LZ",
    name: "Air Link",
  },
  {
    name: "Lease Fly",
    iata: null,
  },
  {
    name: "Mahfooz Aviation",
    iata: null,
  },
  {
    iata: "M2",
    name: "Millon Express",
  },
  {
    iata: "M3",
    name: "LATAM Cargo Brasil",
  },
  {
    iata: "M3",
    name: "Air Norway",
  },
  {
    name: "Smart Aviation",
    iata: null,
  },
  {
    iata: "M5",
    name: "Kenmore Air",
  },
  {
    iata: "M5",
    name: "Air Cargo Mongolia",
  },
  {
    iata: "M6",
    name: "Amerijet International",
  },
  {
    iata: "M8",
    name: "Skyjet",
  },
  {
    iata: "M9",
    name: "Motor Sich Airlines",
  },
  {
    iata: "NR",
    name: "Manta Aviation",
  },
  {
    name: "Max Aviation",
    iata: null,
  },
  {
    name: "Morningstar Air Express",
    iata: null,
  },
  {
    iata: "MV",
    name: "Air Mediterranean",
  },
  {
    iata: "L6",
    name: "Mauritania Airlines International",
  },
  {
    iata: "AL",
    name: "Malta Air",
  },
  {
    iata: "MB",
    name: "MNG Airlines",
  },
  {
    iata: "ZM",
    name: "Air Manas",
  },
  {
    iata: "MC",
    name: "Air Mobility Command",
  },
  {
    name: "MCS Aerocarga de Mexico",
    iata: null,
  },
  {
    iata: "MD",
    name: "Air Madagascar",
  },
  {
    iata: "3Y",
    name: "Madina Air",
  },
  {
    iata: "5M",
    name: "Medavia",
  },
  {
    iata: "ME",
    name: "Middle East Airlines",
  },
  {
    name: "Mega Maldives Airlines",
    iata: null,
  },
  {
    name: "Merlin Airways",
    iata: null,
  },
  {
    name: "ICAR",
    iata: null,
  },
  {
    iata: "MF",
    name: "Xiamen Airlines",
  },
  {
    iata: "8G",
    name: "Fly Mid Africa",
  },
  {
    iata: "MG",
    name: "Midex Airlines",
  },
  {
    iata: "MG",
    name: "Miami Air Lease",
  },
  {
    iata: "XF",
    name: "Mongolian Airways",
  },
  {
    iata: "MH",
    name: "Malaysia Airlines",
  },
  {
    iata: "E9",
    name: "Air Memphis",
  },
  {
    iata: "M2",
    name: "MHS Aviation",
  },
  {
    iata: "MI",
    name: "SilkAir",
  },
  {
    iata: "MJ",
    name: "Myway Airlines",
  },
  {
    name: "Empire Aviation Group",
    iata: null,
  },
  {
    iata: "MK",
    name: "Air Mauritius",
  },
  {
    name: "Comlux Malta",
    iata: null,
  },
  {
    iata: "DB",
    name: "Maleth-Aero",
  },
  {
    iata: "MR",
    name: "Hunnu Air",
  },
  {
    iata: "MM",
    name: "Malta Medair",
  },
  {
    iata: "X8",
    name: "Airmax",
  },
  {
    iata: "YU",
    name: "EuroAtlantic Airways",
  },
  {
    iata: "MN",
    name: "Comair",
  },
  {
    iata: "M0",
    name: "Aero Mongolia",
  },
  {
    name: "MiniLiner",
    iata: null,
  },
  {
    iata: "MO",
    name: "Calm Air International",
  },
  {
    iata: "MP",
    name: "Martinair",
  },
  {
    iata: "I6",
    name: "Air Indus",
  },
  {
    iata: "MQ",
    name: "Envoy Air",
  },
  {
    name: "Martinaire",
    iata: null,
  },
  {
    name: "San Juan Airlines",
    iata: null,
  },
  {
    name: "Mars Avia",
    iata: null,
  },
  {
    iata: "MS",
    name: "EgyptAir",
  },
  {
    iata: "M4",
    name: "Mistral Air",
  },
  {
    iata: "2S",
    name: "Air Stork",
  },
  {
    iata: "SM",
    name: "Air Cairo",
  },
  {
    name: "EgyptAir Express",
    iata: null,
  },
  {
    name: "Minsheng International Jet",
    iata: null,
  },
  {
    name: "Aeromas",
    iata: null,
  },
  {
    iata: "7N",
    name: "MetroJets",
  },
  {
    name: "RAF-Avia",
    iata: null,
  },
  {
    iata: "C2",
    name: "Mountain Air Cargo",
  },
  {
    iata: "MU",
    name: "China Eastern Airlines",
  },
  {
    name: "Harrods Aviation",
    iata: null,
  },
  {
    iata: "MW",
    name: "Mokulele Airlines",
  },
  {
    name: "Midwest Airlines",
    iata: null,
  },
  {
    iata: "WD",
    name: "Modern Logistics",
  },
  {
    name: "Midwest Aviation Division",
    iata: null,
  },
  {
    iata: "OD",
    name: "Malindo Air",
  },
  {
    name: "Mocambique EXpresso",
    iata: null,
  },
  {
    iata: "6M",
    name: "Maximus Air",
  },
  {
    iata: "M7",
    name: "Masair",
  },
  {
    iata: "2M",
    name: "Maya Island Air",
  },
  {
    name: "Smartlynx Estonia",
    iata: null,
  },
  {
    name: "Sapsan Air",
    iata: null,
  },
  {
    name: "Aerolineas MAS",
    iata: null,
  },
  {
    iata: "N4",
    name: "Nordwind Airlines",
  },
  {
    iata: "N5",
    name: "Nolinor",
  },
  {
    iata: "N6",
    name: "Alpine Air",
  },
  {
    iata: "N6",
    name: "Bay Air Aviation",
  },
  {
    iata: "N8",
    name: "National Airlines",
  },
  {
    iata: "N9",
    name: "Kabo Air",
  },
  {
    iata: "NA",
    name: "North American Airlines",
  },
  {
    iata: "NA",
    name: "Nesma Airlines",
  },
  {
    iata: "NO",
    name: "Niger Air Cargo",
  },
  {
    name: "Al-Naser Wings",
    iata: null,
  },
  {
    name: "NASA",
    iata: null,
  },
  {
    iata: "NB",
    name: "Skypower Express Airways",
  },
  {
    iata: "NC",
    name: "Northern Air Cargo",
  },
  {
    name: "North Cariboo Air",
    iata: null,
  },
  {
    name: "FMI Air",
    iata: null,
  },
  {
    name: "Chrono Aviation",
    iata: null,
  },
  {
    iata: "NE",
    name: "Nesma Airlines",
  },
  {
    iata: "N7",
    name: "My Jet Xpress Airlines",
  },
  {
    iata: "NF",
    name: "Air Vanuatu",
  },
  {
    name: "Angel Flight America",
    iata: null,
  },
  {
    iata: "RM",
    name: "Aircompany Armenia",
  },
  {
    iata: "NH",
    name: "ANA",
  },
  {
    name: "Brava Linhas Aereas",
    iata: null,
  },
  {
    iata: "NI",
    name: "Portugalia Airlines",
  },
  {
    iata: "6N",
    name: "Niger Airlines",
  },
  {
    name: "La Costena",
    iata: null,
  },
  {
    name: "Niger Airways",
    iata: null,
  },
  {
    name: "NetJets Europe",
    iata: null,
  },
  {
    iata: "NC",
    name: "Cobham Airline Services",
  },
  {
    iata: "NK",
    name: "Spirit Airlines",
  },
  {
    name: "Shaheen Air International",
    iata: null,
  },
  {
    iata: "NN",
    name: "VIM Airlines",
  },
  {
    iata: "NO",
    name: "Neos",
  },
  {
    iata: "NP",
    name: "Nile Air",
  },
  {
    name: "West Atlantic UK",
    iata: null,
  },
  {
    iata: "NQ",
    name: "Air Japan",
  },
  {
    name: "North Sea Airways",
    iata: null,
  },
  {
    iata: "NS",
    name: "Hebei Airlines",
  },
  {
    name: "NS Hispeed",
    iata: null,
  },
  {
    name: "Nanshan Jet",
    iata: null,
  },
  {
    iata: "NT",
    name: "Binter Canarias",
  },
  {
    name: "Northern Thunderbird Air",
    iata: null,
  },
  {
    iata: "3B",
    name: "Binter Cabo Verde",
  },
  {
    name: "Hokkaido Air System",
    iata: null,
  },
  {
    iata: "NU",
    name: "Japan Transocean Air",
  },
  {
    iata: "N9",
    name: "Novair",
  },
  {
    name: "AirWing",
    iata: null,
  },
  {
    name: "Network Aviation",
    iata: null,
  },
  {
    iata: "NX",
    name: "Air Macau",
  },
  {
    iata: "NY",
    name: "Air Iceland Connect",
  },
  {
    name: "NyxAir",
    iata: null,
  },
  {
    iata: "NZ",
    name: "Air New Zealand",
  },
  {
    iata: "NM",
    name: "Mount Cook",
  },
  {
    iata: "O2",
    name: "Linear Air",
  },
  {
    iata: "OG",
    name: "Ghodawat Enterprises",
  },
  {
    iata: "OP",
    name: "Dac International Airlines",
  },
  {
    iata: "O3",
    name: "SF Airlines",
  },
  {
    iata: "O3",
    name: "Orange Air",
  },
  {
    iata: "O4",
    name: "Antrak Air",
  },
  {
    name: "Orenburzhye",
    iata: null,
  },
  {
    name: "Siam Air",
    iata: null,
  },
  {
    iata: "O9",
    name: "NOVA Airways",
  },
  {
    iata: "OA",
    name: "Olympic Air",
  },
  {
    iata: "OY",
    name: "Omni Air International",
  },
  {
    iata: "OB",
    name: "BoA",
  },
  {
    iata: "6O",
    name: "Orbest S.A.",
  },
  {
    iata: "OC",
    name: "Oriental Air Bridge",
  },
  {
    iata: "OE",
    name: "Cairo Aviation",
  },
  {
    iata: "OE",
    name: "Asia Overnight Express",
  },
  {
    name: "Air Onix",
    iata: null,
  },
  {
    name: "Originair",
    iata: null,
  },
  {
    iata: "8Q",
    name: "Onur Air",
  },
  {
    iata: "OI",
    name: "Hinterland Aviation",
  },
  {
    iata: "OF",
    name: "Overland Airways",
  },
  {
    iata: "OJ",
    name: "Fly Jamaica Airways",
  },
  {
    iata: "OK",
    name: "CSA",
  },
  {
    iata: "FQ",
    name: "Flyest Lineas Aereas",
  },
  {
    name: "Olympus Airways",
    iata: null,
  },
  {
    iata: "OM",
    name: "Miat - Mongolian Airlines",
  },
  {
    iata: "OV",
    name: "SalamAir",
  },
  {
    iata: "CC",
    name: "CM Airlines",
  },
  {
    iata: "ON",
    name: "Nauru Airlines",
  },
  {
    iata: "IP",
    name: "ONE Airlines",
  },
  {
    iata: "OO",
    name: "SkyWest Airlines",
  },
  {
    name: "Flight Options",
    iata: null,
  },
  {
    iata: "OR",
    name: "TUIfly Netherlands",
  },
  {
    name: "Orca Airways",
    iata: null,
  },
  {
    iata: "OS",
    name: "Austrian",
  },
  {
    name: "Oscar Jet",
    iata: null,
  },
  {
    iata: "FP",
    name: "FlyPelican",
  },
  {
    iata: "O4",
    name: "orange2fly",
  },
  {
    iata: "OU",
    name: "Croatia Airlines",
  },
  {
    iata: "X5",
    name: "Air Europa Express",
  },
  {
    iata: "OW",
    name: "Skyward Express",
  },
  {
    name: "Owen Air",
    iata: null,
  },
  {
    iata: "2F",
    name: "Two Taxi Aereo",
  },
  {
    name: "Orient Thai Airlines",
    iata: null,
  },
  {
    iata: "OY",
    name: "Andes Lineas Aereas",
  },
  {
    name: "Oya International Airlines",
    iata: null,
  },
  {
    iata: "OZ",
    name: "Asiana Airlines",
  },
  {
    iata: "P0",
    name: "Proflight Zambia",
  },
  {
    iata: "P1",
    name: "Public Charters",
  },
  {
    iata: "P2",
    name: "Airkenya",
  },
  {
    iata: "PH",
    name: "Pionair Australia",
  },
  {
    iata: "2Z",
    name: "VoePass",
  },
  {
    iata: "P3",
    name: "Cargologicair",
  },
  {
    iata: "S0",
    name: "Aerolineas Sosa",
  },
  {
    iata: "P5",
    name: "Copa Airlines Colombia",
  },
  {
    iata: "P6",
    name: "Pascan Aviation",
  },
  {
    iata: "P6",
    name: "Privilege Style",
  },
  {
    name: "Russian Sky Airlines",
    iata: null,
  },
  {
    iata: "P9",
    name: "Peruvian Airlines",
  },
  {
    iata: "P9",
    name: "Asia Pacific Airlines",
  },
  {
    iata: "YP",
    name: "Perimeter Aviation",
  },
  {
    iata: "7M",
    name: "MAP Linhas Aereas",
  },
  {
    iata: "OL",
    name: "Samoa Airways",
  },
  {
    iata: "PB",
    name: "PAL Airlines",
  },
  {
    name: "Virgin Samoa",
    iata: null,
  },
  {
    iata: "PC",
    name: "Pegasus",
  },
  {
    name: "West Air (USA)",
    iata: null,
  },
  {
    iata: "PD",
    name: "Porter Airlines",
  },
  {
    iata: "PT",
    name: "Piedmont Airlines",
  },
  {
    iata: "PE",
    name: "Phoebus Apollo Aviation",
  },
  {
    iata: "PE",
    name: "Pacific Air Express",
  },
  {
    name: "Pan Europeenne Air Service",
    iata: null,
  },
  {
    iata: "UF",
    name: "Petroleum Air Services",
  },
  {
    iata: "PE",
    name: "Peoples",
  },
  {
    iata: "PF",
    name: "Primera Air Scandinavia",
  },
  {
    name: "Pel-Air Aviation",
    iata: null,
  },
  {
    iata: "PG",
    name: "Bangkok Airways",
  },
  {
    iata: "PH",
    name: "Phoenix Air Group",
  },
  {
    iata: "PI",
    name: "Fiji Link",
  },
  {
    iata: "PJ",
    name: "Air Saint Pierre",
  },
  {
    iata: "PK",
    name: "Pakistan International Airlines",
  },
  {
    iata: "PL",
    name: "Southern Air Charter",
  },
  {
    iata: "PM",
    name: "Canaryfly",
  },
  {
    name: "Planemasters",
    iata: null,
  },
  {
    iata: "PN",
    name: "West Air (China)",
  },
  {
    name: "Pineapple Air",
    iata: null,
  },
  {
    iata: "PO",
    name: "Polar Air Cargo",
  },
  {
    name: "Rikspolisstyrelsen",
    iata: null,
  },
  {
    iata: "PP",
    name: "Jet Aviation",
  },
  {
    iata: "PR",
    name: "Philippine Airlines",
  },
  {
    name: "Presidential Aviation",
    iata: null,
  },
  {
    iata: "US",
    name: "Prinair",
  },
  {
    iata: "6F",
    name: "Primera Air Nordic",
  },
  {
    name: "Priority Air Charter",
    iata: null,
  },
  {
    iata: "PS",
    name: "UIA",
  },
  {
    iata: "PM",
    name: "Prescott Support Company",
  },
  {
    iata: "7P",
    name: "Air Panama",
  },
  {
    name: "Pskovavia",
    iata: null,
  },
  {
    iata: "PT",
    name: "West Air",
  },
  {
    name: "PrivatAir Germany",
    iata: null,
  },
  {
    iata: "PV",
    name: "PrivatAir Switzerland",
  },
  {
    name: "Air Arabia Jordan",
    iata: null,
  },
  {
    iata: "PU",
    name: "Plus Ultra",
  },
  {
    name: "Ornge Air",
    iata: null,
  },
  {
    iata: "PV",
    name: "Saint Barth Commuter",
  },
  {
    name: "Privaira",
    iata: null,
  },
  {
    iata: "FP",
    name: "Fly Pro",
  },
  {
    iata: "PW",
    name: "Precision Air",
  },
  {
    name: "Priester Aviation",
    iata: null,
  },
  {
    name: "yourways",
    iata: null,
  },
  {
    iata: "PX",
    name: "Air Niugini",
  },
  {
    iata: "PY",
    name: "Surinam Airways",
  },
  {
    iata: "PZ",
    name: "LATAM Airlines Paraguay",
  },
  {
    iata: "Q2",
    name: "Maldivian",
  },
  {
    name: "Starlink Aviation",
    iata: null,
  },
  {
    iata: "Q4",
    name: "Euroairlines",
  },
  {
    iata: "Q5",
    name: "40-Mile Air",
  },
  {
    iata: "QN",
    name: "Skytrans",
  },
  {
    iata: "Q7",
    name: "SkyBahamas",
  },
  {
    iata: "Q8",
    name: "Trans Air Congo",
  },
  {
    iata: "Q9",
    name: "Green Africa Airways",
  },
  {
    name: "Cimber",
    iata: null,
  },
  {
    name: "Qatar Amiri Flight",
    iata: null,
  },
  {
    iata: "QB",
    name: "Sky Georgia",
  },
  {
    iata: "VZ",
    name: "AeroVIP (Uruguay)",
  },
  {
    iata: "QE",
    name: "Express Freighters Australia",
  },
  {
    iata: "QF",
    name: "Qantas",
  },
  {
    name: "Eastern Australia",
    iata: null,
  },
  {
    iata: "GE",
    name: "Global Aviation",
  },
  {
    name: "Windrose Air",
    iata: null,
  },
  {
    name: "Altyn Air",
    iata: null,
  },
  {
    iata: "QH",
    name: "Bamboo Airways",
  },
  {
    iata: "QJ",
    name: "Jet Airways",
  },
  {
    iata: "QK",
    name: "Jazz",
  },
  {
    iata: "QL",
    name: "LASER Airlines",
  },
  {
    name: "QantasLink",
    iata: null,
  },
  {
    iata: "QM",
    name: "Air Malawi",
  },
  {
    iata: "QM",
    name: "Monacair",
  },
  {
    name: "Jetconnect",
    iata: null,
  },
  {
    iata: "QP",
    name: "Starlight Airline",
  },
  {
    iata: "QQ",
    name: "Alliance Airlines",
  },
  {
    iata: "QR",
    name: "Qatar Airways",
  },
  {
    iata: "QS",
    name: "SmartWings",
  },
  {
    iata: "QT",
    name: "Avianca Cargo",
  },
  {
    iata: "QU",
    name: "Azur Air Ukraine",
  },
  {
    name: "Gouvernement Du Quebec",
    iata: null,
  },
  {
    iata: "QV",
    name: "Lao Airlines",
  },
  {
    iata: "QW",
    name: "Qingdao Airlines",
  },
  {
    iata: "QX",
    name: "Horizon Air",
  },
  {
    iata: "QY",
    name: "EAT Leipzig",
  },
  {
    iata: "QZ",
    name: "Indonesia AirAsia",
  },
  {
    iata: "R0",
    name: "Royal Airlines",
  },
  {
    iata: "R0",
    name: "Tantalus Air",
  },
  {
    iata: "R3",
    name: "Yakutia",
  },
  {
    name: "RUS Aviation",
    iata: null,
  },
  {
    iata: "R6",
    name: "DOT LT",
  },
  {
    iata: "R7",
    name: "Aserca Airlines",
  },
  {
    name: "Sundance Air (Venezuela)",
    iata: null,
  },
  {
    iata: "R9",
    name: "Trans Executive Airlines of Hawaii",
  },
  {
    iata: "RA",
    name: "Nepal Airlines",
  },
  {
    name: "Ryukyu Air Commuter",
    iata: null,
  },
  {
    name: "Air Center Helicopters",
    iata: null,
  },
  {
    iata: "RT",
    name: "Rainbow Airlines",
  },
  {
    name: "Royal Air Charter",
    iata: null,
  },
  {
    iata: "RB",
    name: "Syrian Air",
  },
  {
    iata: "E5",
    name: "Air Arabia Egypt",
  },
  {
    iata: "RC",
    name: "Atlantic Airways",
  },
  {
    name: "Richland Aviation",
    iata: null,
  },
  {
    iata: "RK",
    name: "R Airlines",
  },
  {
    name: "Package Express, Inc.",
    iata: null,
  },
  {
    iata: "RE",
    name: "Stobart Air",
  },
  {
    iata: "8N",
    name: "Regional Air",
  },
  {
    name: "REACH Air Medical Services",
    iata: null,
  },
  {
    iata: "RF",
    name: "Erofey",
  },
  {
    name: "Royal Falcon",
    iata: null,
  },
  {
    name: "Avior Regional",
    iata: null,
  },
  {
    iata: "RH",
    name: "Hong Kong Air Cargo Carrier",
  },
  {
    name: "Ariella Airlines",
    iata: null,
  },
  {
    name: "Riga Airlines",
    iata: null,
  },
  {
    iata: "RI",
    name: "Rahila Air",
  },
  {
    name: "Rio Linhas Aereas",
    iata: null,
  },
  {
    iata: "GP",
    name: "APG Airlines",
  },
  {
    name: "Rectrix",
    iata: null,
  },
  {
    iata: "RJ",
    name: "Royal Jordanian",
  },
  {
    name: "Richmor Aviation",
    iata: null,
  },
  {
    iata: "RG",
    name: "Rotana Jet",
  },
  {
    iata: "RK",
    name: "Ryanair UK",
  },
  {
    iata: "PI",
    name: "Polar Airlines",
  },
  {
    name: "Phenix Jet",
    iata: null,
  },
  {
    iata: "RN",
    name: "Rayani Air",
  },
  {
    iata: "L0",
    name: "Reliant Air",
  },
  {
    name: "Air Nelson",
    iata: null,
  },
  {
    name: "AirNow",
    iata: null,
  },
  {
    iata: "R4",
    name: "Real Tonga",
  },
  {
    name: "Air Loyaute",
    iata: null,
  },
  {
    name: "Simrik Airlines",
    iata: null,
  },
  {
    iata: "RO",
    name: "TAROM",
  },
  {
    name: "Royal Jet",
    iata: null,
  },
  {
    name: "Encompass Aviation",
    iata: null,
  },
  {
    iata: "RP",
    name: "Chautauqua Airlines",
  },
  {
    iata: "RQ",
    name: "Kam Air",
  },
  {
    iata: "RR",
    name: "Royal Air Force",
  },
  {
    iata: "RR",
    name: "Ryanair Sun",
  },
  {
    name: "Mombasa Air Safari",
    iata: null,
  },
  {
    iata: "KV",
    name: "Sky Regional",
  },
  {
    iata: "RS",
    name: "Air Seoul",
  },
  {
    name: "Canarias Airlines",
    iata: null,
  },
  {
    name: "SNAS Aviation",
    iata: null,
  },
  {
    name: "RusJet",
    iata: null,
  },
  {
    name: "Royal Star Aviation",
    iata: null,
  },
  {
    name: "JetSuite",
    iata: null,
  },
  {
    iata: "F7",
    name: "LTD I Fly",
  },
  {
    iata: "7T",
    name: "Trans AM",
  },
  {
    iata: "RU",
    name: "AirBridgeCargo",
  },
  {
    iata: "5R",
    name: "Rutaca Airlines",
  },
  {
    iata: "9T",
    name: "myCargo Airlines",
  },
  {
    name: "Caspian Airlines",
    iata: null,
  },
  {
    iata: "RV",
    name: "Air Canada Rouge",
  },
  {
    name: "Sevenair",
    iata: null,
  },
  {
    iata: "RW",
    name: "Royal Air Charter",
  },
  {
    iata: "RX",
    name: "Regent Airways",
  },
  {
    name: "RAM Express",
    iata: null,
  },
  {
    iata: "RY",
    name: "Jiangxi Airlines",
  },
  {
    name: "Royal Wings",
    iata: null,
  },
  {
    iata: "RZ",
    name: "SANSA Regional",
  },
  {
    name: "Royal Zimbabwe Airlines",
    iata: null,
  },
  {
    name: "JetLite",
    iata: null,
  },
  {
    name: "Shree Airlines",
    iata: null,
  },
  {
    iata: "S3",
    name: "Santa Barbara Airlines",
  },
  {
    iata: "S4",
    name: "Azores Airlines",
  },
  {
    iata: "S5",
    name: "Shuttle America",
  },
  {
    name: "Salmon Air",
    iata: null,
  },
  {
    iata: "S6",
    name: "Sunrise Airways",
  },
  {
    iata: "S7",
    name: "S7 Airlines",
  },
  {
    iata: "S9",
    name: "Starbow",
  },
  {
    iata: "SA",
    name: "South African Airways",
  },
  {
    iata: "SB",
    name: "Aircalin",
  },
  {
    name: "Snowbird Airlines",
    iata: null,
  },
  {
    iata: "SC",
    name: "Shandong Airlines",
  },
  {
    name: "American Jet International",
    iata: null,
  },
  {
    name: "Silver Cloud Air",
    iata: null,
  },
  {
    iata: "SD",
    name: "Sudan Airways",
  },
  {
    iata: "S8",
    name: "Sounds Air",
  },
  {
    iata: "SR",
    name: "SundAir",
  },
  {
    iata: "SE",
    name: "XL Airways France",
  },
  {
    iata: "4R",
    name: "Star East Airline",
  },
  {
    iata: "ER",
    name: "Serene Air",
  },
  {
    name: "Solenta Aviation",
    iata: null,
  },
  {
    iata: "SF",
    name: "Tassili Airlines",
  },
  {
    name: "Swiss Federal Railways",
    iata: null,
  },
  {
    iata: "SG",
    name: "SpiceJet",
  },
  {
    iata: "DN",
    name: "Senegal Airlines",
  },
  {
    name: "Cardiff Aviation Malta",
    iata: null,
  },
  {
    name: "Saga Airlines",
    iata: null,
  },
  {
    iata: "SH",
    name: "Sharp Airlines",
  },
  {
    name: "Shell Aircraft",
    iata: null,
  },
  {
    iata: "DO",
    name: "Sky High Aviation",
  },
  {
    iata: "IS",
    name: "Sepehran Airlines",
  },
  {
    name: "British Airways Shuttle",
    iata: null,
  },
  {
    iata: "ZY",
    name: "Sky Airlines",
  },
  {
    iata: "SI",
    name: "Blue Islands",
  },
  {
    name: "Sideral Linhas Aereas",
    iata: null,
  },
  {
    name: "Sirio",
    iata: null,
  },
  {
    name: "Salair",
    iata: null,
  },
  {
    name: "Silver Air",
    iata: null,
  },
  {
    iata: "SJ",
    name: "Sriwijaya Air",
  },
  {
    name: "SpiritJets",
    iata: null,
  },
  {
    name: "Sino Jet",
    iata: null,
  },
  {
    iata: "IJ",
    name: "Spring Airlines Japan",
  },
  {
    iata: "SK",
    name: "SAS",
  },
  {
    name: "Sky Gabon",
    iata: null,
  },
  {
    name: "Skylink Aviation",
    iata: null,
  },
  {
    name: "Skycharter",
    iata: null,
  },
  {
    name: "LabCorp",
    iata: null,
  },
  {
    name: "SkyWay Enterprises",
    iata: null,
  },
  {
    iata: "SL",
    name: "Thai Lion Air",
  },
  {
    name: "SALSA d Haiti",
    iata: null,
  },
  {
    name: "Silver Air",
    iata: null,
  },
  {
    name: "Silverhawk Aviation",
    iata: null,
  },
  {
    name: "SETE Linhas Aereas",
    iata: null,
  },
  {
    name: "Smart Cargo",
    iata: null,
  },
  {
    iata: "SZ",
    name: "Somon Air",
  },
  {
    iata: "SN",
    name: "Brussels Airlines",
  },
  {
    name: "Senator Aviation Charter",
    iata: null,
  },
  {
    iata: "2Q",
    name: "Air Cargo Carriers",
  },
  {
    iata: "6J",
    name: "Solaseed Air",
  },
  {
    name: "Servizi Aerei",
    iata: null,
  },
  {
    name: "Superior Aviation",
    iata: null,
  },
  {
    iata: "9S",
    name: "Southern Air",
  },
  {
    name: "Solinair",
    iata: null,
  },
  {
    name: "White Sparrow",
    iata: null,
  },
  {
    iata: "SP",
    name: "SATA Air Acores",
  },
  {
    iata: "SI",
    name: "Sierra Pacific Airlines",
  },
  {
    name: "Sepahan Airlines",
    iata: null,
  },
  {
    name: "Speedwings",
    iata: null,
  },
  {
    iata: "SQ",
    name: "Singapore Airlines",
  },
  {
    name: "Singapore Airlines Cargo",
    iata: null,
  },
  {
    iata: "PQ",
    name: "SkyUP Airlines",
  },
  {
    name: "Susi Air",
    iata: null,
  },
  {
    iata: "P8",
    name: "Sprint Air",
  },
  {
    iata: "DJ",
    name: "Star Air A/S",
  },
  {
    iata: "IH",
    name: "Southern Sky",
  },
  {
    iata: "VC",
    name: "ViaAir",
  },
  {
    iata: "SS",
    name: "Corsair",
  },
  {
    iata: "R9",
    name: "Suasa Airlines",
  },
  {
    name: "Slovak Government Flying Service",
    iata: null,
  },
  {
    name: "Sunstate Airlines",
    iata: null,
  },
  {
    iata: "DM",
    name: "Anda Air",
  },
  {
    name: "Germania",
    iata: null,
  },
  {
    name: "Saturn Aviation",
    iata: null,
  },
  {
    iata: "SU",
    name: "Aeroflot",
  },
  {
    name: "Silesia Air",
    iata: null,
  },
  {
    name: "Suburban Air Freight",
    iata: null,
  },
  {
    iata: "0A",
    name: "Asta Linhas",
  },
  {
    iata: "SV",
    name: "Saudia",
  },
  {
    name: "SiAvia",
    iata: null,
  },
  {
    name: "Swedish Air Force",
    iata: null,
  },
  {
    name: "Global Jet Luxembourg",
    iata: null,
  },
  {
    iata: "SW",
    name: "Air Namibia",
  },
  {
    iata: "WG",
    name: "Sunwing",
  },
  {
    iata: "WQ",
    name: "Swift Air",
  },
  {
    iata: "WT",
    name: "Swiftair",
  },
  {
    name: "Swiss Global",
    iata: null,
  },
  {
    iata: "SX",
    name: "SkyWork Airlines",
  },
  {
    iata: "SX",
    name: "Skywagon",
  },
  {
    iata: "ZF",
    name: "Safari Express Cargo",
  },
  {
    iata: "SY",
    name: "Sun Country Airlines",
  },
  {
    iata: "SO",
    name: "Syphax Airlines",
  },
  {
    name: "Syncrude Canada",
    iata: null,
  },
  {
    iata: "HC",
    name: "Air Senegal",
  },
  {
    name: "SAS Ireland",
    iata: null,
  },
  {
    iata: "T0",
    name: "Avianca Peru",
  },
  {
    iata: "T2",
    name: "Nakina Air Service",
  },
  {
    iata: "T2",
    name: "Fly Art",
  },
  {
    name: "Tara Air",
    iata: null,
  },
  {
    name: "Tyrolean Jet Services Malta",
    iata: null,
  },
  {
    iata: "T3",
    name: "Eastern Airways",
  },
  {
    iata: "T4",
    name: "Rhoades Aviation",
  },
  {
    iata: "T5",
    name: "Turkmenistan Airlines",
  },
  {
    iata: "T7",
    name: "Twin Jet",
  },
  {
    name: "Aviator",
    iata: null,
  },
  {
    iata: "TA",
    name: "TACA",
  },
  {
    name: "TAG Aviation USA",
    iata: null,
  },
  {
    name: "Air Moorea",
    iata: null,
  },
  {
    iata: "B4",
    name: "ZanAir",
  },
  {
    iata: "2T",
    name: "Timbis Air Services",
  },
  {
    iata: "I3",
    name: "ATA Airlines",
  },
  {
    iata: "TC",
    name: "Air Tanzania",
  },
  {
    iata: "MT",
    name: "Thomas Cook Airlines",
  },
  {
    iata: "2R",
    name: "Atlantis European Airways",
  },
  {
    iata: "TD",
    name: "Atlantis Armenian Airlines",
  },
  {
    iata: "C3",
    name: "Trade Air",
  },
  {
    iata: "TE",
    name: "Sky Taxi",
  },
  {
    name: "Aero-Tech Services",
    iata: null,
  },
  {
    name: "Telford Aviation",
    iata: null,
  },
  {
    name: "Tez Jet",
    iata: null,
  },
  {
    iata: "TF",
    name: "Braathens Regional Airlines",
  },
  {
    name: "Talon Air",
    iata: null,
  },
  {
    name: "Thai Flying Service",
    iata: null,
  },
  {
    iata: "TG",
    name: "Thai Airways International",
  },
  {
    iata: "IL",
    name: "Trigana Air",
  },
  {
    name: "Transport Canada",
    iata: null,
  },
  {
    iata: "5U",
    name: "TAG",
  },
  {
    iata: "TH",
    name: "Raya Airways",
  },
  {
    name: "Thunder Airlines",
    iata: null,
  },
  {
    iata: "TI",
    name: "Tropic Ocean Airways",
  },
  {
    iata: "5L",
    name: "TAC",
  },
  {
    iata: "T7",
    name: "Transcarga",
  },
  {
    iata: "TJ",
    name: "Tradewind Aviation",
  },
  {
    name: "Tayaran Jet",
    iata: null,
  },
  {
    iata: "TK",
    name: "Turkish Airlines",
  },
  {
    name: "flyADVANCED",
    iata: null,
  },
  {
    iata: "N2",
    name: "TMA Cargo",
  },
  {
    iata: "TL",
    name: "Airnorth",
  },
  {
    iata: "L5",
    name: "Atlantique Air",
  },
  {
    iata: "TM",
    name: "LAM",
  },
  {
    name: "Travel Management",
    iata: null,
  },
  {
    iata: "GM",
    name: "Tri-MG Intra Asia Airlines",
  },
  {
    iata: "TN",
    name: "Air Tahiti Nui",
  },
  {
    iata: "8B",
    name: "TransNusa",
  },
  {
    iata: "TO",
    name: "Transavia France",
  },
  {
    iata: "BY",
    name: "TUI Airways",
  },
  {
    iata: "9N",
    name: "Tropic Air",
  },
  {
    iata: "9L",
    name: "AirTanker Services",
  },
  {
    iata: "TP",
    name: "TAP Air Portugal",
  },
  {
    name: "TAPSA Aviacion",
    iata: null,
  },
  {
    iata: "TQ",
    name: "Tandem Aero",
  },
  {
    iata: "TR",
    name: "Scoot",
  },
  {
    iata: "6T",
    name: "Turks Air",
  },
  {
    name: "Turuhan Airlines",
    iata: null,
  },
  {
    iata: "2T",
    name: "TruJet",
  },
  {
    iata: "3T",
    name: "Tarco Aviation",
  },
  {
    iata: "TS",
    name: "Air Transat",
  },
  {
    name: "R1 Airlines",
    iata: null,
  },
  {
    name: "Trast",
    iata: null,
  },
  {
    iata: "IF",
    name: "Gulf and Caribbean Cargo",
  },
  {
    iata: "TT",
    name: "Tigerair Australia",
  },
  {
    name: "Total Linhas Aereas",
    iata: null,
  },
  {
    iata: "IT",
    name: "Tigerair Taiwan",
  },
  {
    iata: "TU",
    name: "Tunisair",
  },
  {
    iata: "7B",
    name: "True Aviation",
  },
  {
    name: "LTA",
    iata: null,
  },
  {
    iata: "TV",
    name: "Tibet Airlines",
  },
  {
    iata: "VZ",
    name: "Thai Vietjet Air",
  },
  {
    iata: "3Z",
    name: "Smartwings Poland",
  },
  {
    iata: "6D",
    name: "Travel Service Slovensko",
  },
  {
    iata: "TW",
    name: "T'Way Air",
  },
  {
    name: "Air-Taxi Europe",
    iata: null,
  },
  {
    iata: "TI",
    name: "Tailwind",
  },
  {
    name: "Twinjet Aviation",
    iata: null,
  },
  {
    iata: "V2",
    name: "Avialeasing",
  },
  {
    iata: "TX",
    name: "Air Caraibes",
  },
  {
    name: "TransAVIAexport Airlines",
    iata: null,
  },
  {
    name: "Thai Express",
    iata: null,
  },
  {
    iata: "TY",
    name: "Air Caledonie",
  },
  {
    iata: "Y7",
    name: "NordStar Airlines",
  },
  {
    name: "Tyrolean Jet Service",
    iata: null,
  },
  {
    name: "Tyrol Air Ambulance",
    iata: null,
  },
  {
    name: "Scoot Tigerair",
    iata: null,
  },
  {
    iata: "TZ",
    name: "Tsaradia",
  },
  {
    iata: "U2",
    name: "easyJet",
  },
  {
    iata: "UY",
    name: "Sky Prime Charter",
  },
  {
    iata: "U3",
    name: "Avies",
  },
  {
    iata: "U3",
    name: "Sky Gates Airlines",
  },
  {
    iata: "U6",
    name: "Ural Airlines",
  },
  {
    iata: "U7",
    name: "Uniworld Air Cargo",
  },
  {
    iata: "U8",
    name: "Armavia",
  },
  {
    iata: "U9",
    name: "Tatarstan Aircompany",
  },
  {
    iata: "UA",
    name: "United Airlines",
  },
  {
    iata: "UB",
    name: "Myanmar National Airlines",
  },
  {
    iata: "UD",
    name: "UR Airlines",
  },
  {
    iata: "UC",
    name: "LATAM Cargo Chile",
  },
  {
    name: "Hex'Air",
    iata: null,
  },
  {
    iata: "UE",
    name: "NasAir (Eritrea)",
  },
  {
    name: "UM Air",
    iata: null,
  },
  {
    iata: "UG",
    name: "Tunisair Express",
  },
  {
    name: "SKA Air and Logistics",
    iata: null,
  },
  {
    iata: "UI",
    name: "Auric Air",
  },
  {
    iata: "UJ",
    name: "AlMasria",
  },
  {
    iata: "UE",
    name: "Ultimate Air Shuttle",
  },
  {
    name: "Journey Aviation",
    iata: null,
  },
  {
    iata: "UH",
    name: "AtlasGlobal UA",
  },
  {
    iata: "UK",
    name: "Vistara",
  },
  {
    name: "Ukraine Air Alliance",
    iata: null,
  },
  {
    iata: "UL",
    name: "SriLankan Airlines",
  },
  {
    iata: "UM",
    name: "Air Zimbabwe",
  },
  {
    name: "Yuzmashavia",
    iata: null,
  },
  {
    iata: "UN",
    name: "Business Aviation Asia",
  },
  {
    name: "Union Flights",
    iata: null,
  },
  {
    iata: "UO",
    name: "Hong Kong Express",
  },
  {
    iata: "UP",
    name: "Bahamasair",
  },
  {
    iata: "UQ",
    name: "Urumqi Airlines",
  },
  {
    iata: "UR",
    name: "Uganda Airlines",
  },
  {
    name: "Silk Road Cargo Business",
    iata: null,
  },
  {
    name: "AirNet",
    iata: null,
  },
  {
    iata: "UT",
    name: "UTair Aviation",
  },
  {
    iata: "UU",
    name: "Air Austral",
  },
  {
    iata: "UV",
    name: "Babcock MCS Espana",
  },
  {
    iata: "UV",
    name: "Universal Airways",
  },
  {
    iata: "RT",
    name: "UVT Aero",
  },
  {
    iata: "UW",
    name: "Uni-Top Airlines",
  },
  {
    name: "Ukrainian Wings",
    iata: null,
  },
  {
    iata: "UX",
    name: "Air Europa",
  },
  {
    iata: "UZ",
    name: "Buraq Air",
  },
  {
    iata: "V0",
    name: "Conviasa",
  },
  {
    iata: "V2",
    name: "Vision Airlines",
  },
  {
    iata: "VK",
    name: "Anisec",
  },
  {
    iata: "V3",
    name: "Carpatair",
  },
  {
    iata: "V4",
    name: "Vensecar International",
  },
  {
    iata: "V5",
    name: "DanubeWings",
  },
  {
    iata: "V8",
    name: "Atran",
  },
  {
    iata: "V8",
    name: "Iliamna Air Taxi",
  },
  {
    iata: "V9",
    name: "Citywing",
  },
  {
    iata: "VA",
    name: "Virgin Australia",
  },
  {
    name: "Phuket Air",
    iata: null,
  },
  {
    name: "Fly2Sky",
    iata: null,
  },
  {
    iata: "VB",
    name: "VivaAerobus",
  },
  {
    name: "ALK Airlines",
    iata: null,
  },
  {
    iata: "VC",
    name: "Voyageur Airways",
  },
  {
    iata: "C0",
    name: "One Caribbean",
  },
  {
    iata: "VD",
    name: "Henan Airlines",
  },
  {
    iata: "V4",
    name: "Vieques Air Link",
  },
  {
    iata: "VF",
    name: "Valuair",
  },
  {
    name: "Virgin Atlantic International",
    iata: null,
  },
  {
    iata: "E3",
    name: "NewGen Airways",
  },
  {
    name: "Vologda Air Company",
    iata: null,
  },
  {
    iata: "VI",
    name: "Volga-Dnepr",
  },
  {
    name: "Vibro Air Flugservice",
    iata: null,
  },
  {
    iata: "V6",
    name: "VI Airlink",
  },
  {
    iata: "VL",
    name: "Air Via",
  },
  {
    iata: "MV",
    name: "Aviastar",
  },
  {
    iata: "VJ",
    name: "VietJet Air",
  },
  {
    name: "VistaJet",
    iata: null,
  },
  {
    iata: "VL",
    name: "Med-View Airline",
  },
  {
    iata: "A0",
    name: "Avianca Argentina",
  },
  {
    iata: "VM",
    name: "Max Air",
  },
  {
    name: "Royal Thai Aircraft",
    iata: null,
  },
  {
    iata: "VN",
    name: "Vietnam Airlines",
  },
  {
    iata: "AW",
    name: "Venezolana",
  },
  {
    iata: "Q6",
    name: "Volaris Costa Rica",
  },
  {
    iata: "V7",
    name: "Volotea",
  },
  {
    iata: "N3",
    name: "Vuela El Salvador",
  },
  {
    iata: "VP",
    name: "Flyme",
  },
  {
    name: "Veteran Air",
    iata: null,
  },
  {
    name: "Panaviatic",
    iata: null,
  },
  {
    iata: "VV",
    name: "Viva Airlines Peru",
  },
  {
    iata: "VQ",
    name: "Novoair",
  },
  {
    iata: "VR",
    name: "TACV",
  },
  {
    iata: "HF",
    name: "Air Cote D'Ivoire",
  },
  {
    name: "Voyage Air",
    iata: null,
  },
  {
    name: "Varesh Airlines",
    iata: null,
  },
  {
    iata: "VS",
    name: "Virgin Atlantic",
  },
  {
    name: "Aviostart",
    iata: null,
  },
  {
    iata: "VT",
    name: "Air Tahiti",
  },
  {
    iata: "LF",
    name: "Contour Aviation",
  },
  {
    name: "Vostok Airlines",
    iata: null,
  },
  {
    name: "Aeronaves TSM",
    iata: null,
  },
  {
    iata: "T9",
    name: "Turpial Airlines",
  },
  {
    iata: "VU",
    name: "VECA",
  },
  {
    iata: "VV",
    name: "Aerosvit Airlines",
  },
  {
    iata: "VH",
    name: "Viva Air Colombia",
  },
  {
    iata: "VW",
    name: "Aeromar",
  },
  {
    iata: "VX",
    name: "Virgin America",
  },
  {
    iata: "VY",
    name: "Vueling",
  },
  {
    iata: "W2",
    name: "FlexFlight",
  },
  {
    iata: "W3",
    name: "Arik Air",
  },
  {
    iata: "W4",
    name: "Ulendo Airlink",
  },
  {
    iata: "W5",
    name: "Mahan Air",
  },
  {
    iata: "W6",
    name: "Wizz Air",
  },
  {
    iata: "W7",
    name: "Wings of Lebanon",
  },
  {
    iata: "W8",
    name: "Cargojet",
  },
  {
    iata: "W9",
    name: "Air Bagan",
  },
  {
    iata: "W9",
    name: "Wizz Air UK",
  },
  {
    iata: "WA",
    name: "KLM Cityhopper",
  },
  {
    iata: "WV",
    name: "FlyWestair",
  },
  {
    name: "Western Air Express",
    iata: null,
  },
  {
    iata: "F4",
    name: "Air Flamenco",
  },
  {
    iata: "WB",
    name: "RwandAir",
  },
  {
    name: "Avianca Honduras",
    iata: null,
  },
  {
    iata: "WC",
    name: "Meregrass Inc",
  },
  {
    iata: "WH",
    name: "WDL Aviation",
  },
  {
    iata: "WE",
    name: "Centurion Cargo",
  },
  {
    iata: "WE",
    name: "Thai Smile",
  },
  {
    iata: "WR",
    name: "WestJet Encore",
  },
  {
    iata: "4T",
    name: "Transwest Air",
  },
  {
    iata: "WF",
    name: "Wideroe",
  },
  {
    name: "Swift Copters",
    iata: null,
  },
  {
    name: "West African Airlines",
    iata: null,
  },
  {
    iata: "WI",
    name: "White Airways",
  },
  {
    name: "Wiggins Airways",
    iata: null,
  },
  {
    iata: "WJ",
    name: "Air Labrador",
  },
  {
    iata: "WJ",
    name: "Jetsmart Airlines",
  },
  {
    iata: "WL",
    name: "European Coastal Airlines",
  },
  {
    name: "West Air Luxembourg",
    iata: null,
  },
  {
    iata: "WM",
    name: "Winair",
  },
  {
    iata: "WN",
    name: "Southwest Airlines",
  },
  {
    name: "World Airways",
    iata: null,
  },
  {
    iata: "WS",
    name: "WestJet",
  },
  {
    iata: "WT",
    name: "Wasaya Airways",
  },
  {
    iata: "WO",
    name: "Swoop",
  },
  {
    iata: "WU",
    name: "Wizz Air Ukraine",
  },
  {
    name: "WOW Air",
    iata: null,
  },
  {
    iata: "WX",
    name: "Cityjet",
  },
  {
    iata: "WY",
    name: "Oman Air",
  },
  {
    name: "MN Aviation",
    iata: null,
  },
  {
    iata: "WZ",
    name: "Red Wings",
  },
  {
    iata: "X3",
    name: "TUIfly",
  },
  {
    iata: "X4",
    name: "Air Excursions",
  },
  {
    iata: "X5",
    name: "Ten Airways",
  },
  {
    name: "Exec Air",
    iata: null,
  },
  {
    iata: "X9",
    name: "JSC Avion Express",
  },
  {
    iata: "XA",
    name: "ARINC",
  },
  {
    iata: "A8",
    name: "Aerolink Uganda",
  },
  {
    name: "Colt Cargo",
    iata: null,
  },
  {
    iata: "KW",
    name: "Korea Express Air",
  },
  {
    iata: "XE",
    name: "JSX Air",
  },
  {
    iata: "XG",
    name: "SunExpress Deutschland",
  },
  {
    name: "AirGO Private Airline",
    iata: null,
  },
  {
    iata: "XJ",
    name: "Thai AirAsia X",
  },
  {
    iata: "XK",
    name: "Air Corsica",
  },
  {
    iata: "XL",
    name: "LATAM Airlines Ecuador",
  },
  {
    name: "Air Excel",
    iata: null,
  },
  {
    iata: "XM",
    name: "Qantas Freight",
  },
  {
    iata: "XM",
    name: "J-Air",
  },
  {
    iata: "XN",
    name: "Xpressair",
  },
  {
    iata: "XO",
    name: "South East Asian Airlines (SEAIR)",
  },
  {
    name: "XOJET",
    iata: null,
  },
  {
    iata: "XP",
    name: "Xtra Airways",
  },
  {
    iata: "XQ",
    name: "SunExpress",
  },
  {
    name: "Virgin Australia Regional",
    iata: null,
  },
  {
    iata: "7A",
    name: "Express Air",
  },
  {
    name: "AirShare LLC",
    iata: null,
  },
  {
    iata: "XT",
    name: "Indonesia AirAsia X",
  },
  {
    iata: "XU",
    name: "African Express Airways",
  },
  {
    iata: "XW",
    name: "NokScoot Airlines",
  },
  {
    iata: "XY",
    name: "flynas",
  },
  {
    iata: "XZ",
    name: "South African Express",
  },
  {
    name: "Cygnus Air",
    iata: null,
  },
  {
    iata: "Y3",
    name: "Sky Kg",
  },
  {
    iata: "Y4",
    name: "Volaris",
  },
  {
    iata: "Y5",
    name: "Golden Myanmar Airlines",
  },
  {
    iata: "Y8",
    name: "Suparna Airlines",
  },
  {
    iata: "Y9",
    name: "Kish Air",
  },
  {
    iata: "YB",
    name: "Bora Jet",
  },
  {
    iata: "YC",
    name: "Yamal Airlines",
  },
  {
    name: "Caverton Helicopters Ltd.",
    iata: null,
  },
  {
    iata: "YD",
    name: "Synergy Aviation",
  },
  {
    iata: "YG",
    name: "South Airlines",
  },
  {
    iata: "YG",
    name: "YTO Cargo",
  },
  {
    iata: "YH",
    name: "Air Thanlwin",
  },
  {
    iata: "YH",
    name: "Sunsplash Aviation",
  },
  {
    name: "Air Sunshine",
    iata: null,
  },
  {
    iata: "YJ",
    name: "Asian Wings Airways",
  },
  {
    iata: "YL",
    name: "Libyan Wings",
  },
  {
    iata: "YM",
    name: "Montenegro Airlines",
  },
  {
    iata: "YN",
    name: "Air Creebec",
  },
  {
    iata: "YO",
    name: "Heli Air Monaco",
  },
  {
    iata: "YR",
    name: "Scenic Airlines",
  },
  {
    iata: "YS",
    name: "HOP!-REGIONAL",
  },
  {
    iata: "YT",
    name: "Yeti Airlines",
  },
  {
    iata: "YV",
    name: "Mesa Airlines",
  },
  {
    iata: "YW",
    name: "Air Nostrum",
  },
  {
    iata: "YX",
    name: "Republic Airways",
  },
  {
    iata: "YZ",
    name: "Alas Uruguay",
  },
  {
    iata: "ZU",
    name: "Ethiopian Mozambique Airlines",
  },
  {
    iata: "Z2",
    name: "Philippines AirAsia",
  },
  {
    iata: "Z5",
    name: "Global Africa Aviation",
  },
  {
    iata: "Z6",
    name: "Dniproavia",
  },
  {
    iata: "YK",
    name: "Avia Traffic Company",
  },
  {
    iata: "ZC",
    name: "Fly Africa Zimbabwe",
  },
  {
    iata: "Z7",
    name: "Cristalux SA",
  },
  {
    iata: "Z8",
    name: "Mali Airways",
  },
  {
    iata: "Z8",
    name: "Amaszonas SA",
  },
  {
    iata: "ZA",
    name: "Sky Angkor",
  },
  {
    iata: "ZB",
    name: "Air Albania",
  },
  {
    iata: "ZE",
    name: "EASTAR JET",
  },
  {
    iata: "ZG",
    name: "ZIPAIR Tokyo",
  },
  {
    iata: "ZH",
    name: "Shenzhen Airlines",
  },
  {
    iata: "ZI",
    name: "Aigle Azur",
  },
  {
    iata: "ZK",
    name: "Great Lakes Airlines",
  },
  {
    iata: "ZK",
    name: "Aircompany ZetAvia",
  },
  {
    iata: "ZL",
    name: "Rex Regional Express",
  },
  {
    iata: "ZM",
    name: "Cityline Hungary",
  },
  {
    iata: "ZN",
    name: "Naysa",
  },
  {
    name: "Zoom Air",
    iata: null,
  },
  {
    iata: "ZP",
    name: "Silk Way Airlines",
  },
  {
    iata: "WL",
    name: "World Atlantic Airlines",
  },
  {
    iata: "ZR",
    name: "Punto Azul",
  },
  {
    iata: "ZR",
    name: "Aviacon Zitotrans",
  },
  {
    name: "Kazaviaspas",
    iata: null,
  },
  {
    name: "Sun Air",
    iata: null,
  },
  {
    iata: "ZV",
    name: "Swiss Flight Services",
  },
  {
    iata: "ZW",
    name: "Air Wisconsin",
  },
  {
    iata: "ZX",
    name: "Air Georgian",
  },
  {
    iata: "MG",
    name: "Eznis Airways",
  },
  {
    iata: "ZY",
    name: "China Air Cargo",
  },
];

export const AIRLINES: string[] = [];
export const IATAS: string[] = [];
export const AIRLINES_MAP: { [k: string]: string } = {};
export const IATA_MAP: { [k: string]: string } = {};
export const IMAGES_MAP: { [k: string]: string } = {}

for (const a of IATA_CODES) {
  (async () => {
    if (a.iata) {
      AIRLINES.push(a.name);
      IATAS.push(a.iata);
      AIRLINES_MAP[a.name] = a.iata;  
      IATA_MAP[a.iata] = a.name;
      IMAGES_MAP[a.iata] = `https://content.airhex.com/content/logos/airlines_${a.iata}_250_250_t.png`
    }
  })();
} // O(n) 💀