export const elements = {
  gameDisplay: document.querySelector('.play-game'),   
  usernameInput: document.querySelector("#input-username"),
  playerName: document.getElementById("player-name"),
  playGame: document.querySelector(".play-game"),
  clickHereBtn: document.getElementById("click-here-btn"),
  gameDisplayBtn: document.getElementById("game-display"),
  yourScore: document.getElementById("your-score"),
  totalClicks: document.getElementById("total-clicks"),
  userScores: document.getElementById("user-scores"),
  lettersContainer: document.querySelector('.letters-container'),
  wordContainer: document.querySelector('.word'),
  hangman: document.querySelector('.hangman')
};


export const englishWords = [
  "apple", "banana", "chocolate", "dolphin", "elephant", "freedom", "guitar", "happiness",
  "internet", "jazz", "kangaroo", "lighthouse", "moonlight", "navigate", "opportunity", "paradise",
  "quasar", "rainbow", "serendipity", "tangerine", "umbrella", "vibrant", "whisper", "xylophone",
  "yellow", "zeppelin", "amazing", "blossom", "cascade", "delight", "effervescent", "fantastic",
  "glisten", "harmony", "inspire", "jubilant", "kaleidoscope", "lullaby", "magnificent", "nostalgia",
  "oasis", "paradox", "quintessential", "radiant", "serenity", "tranquil", "uplifting", "verdant",
  "wonder", "xylograph", "yesterday", "zenith", "adventure", "breathtaking", "captivating", "dreamscape",
  "eloquent", "fascinate", "gratitude", "harmonious", "innovation", "juxtapose", "kismet", "labyrinth",
  "mellifluous", "nirvana", "optimistic", "petrichor", "quixotic", "rhapsody", "symbiosis", "tranquility",
  "ubiquitous", "vivid", "whimsical", "xanadu", "yearning", "zephyr", "ambrosial", "beatitude", "cynosure",
  "denouement", "epiphany", "felicity", "gossamer", "halcyon", "idyllic", "jocund", "kaleidoscopic", "luminescent",
  "mirth", "noble", "oscillate", "panacea", "quandary", "resplendent", "seraphic", "talisman", "ubiquity",
  "voluptuous", "whistle", "xenial", "yearning", "zestful", "alacrity", "benevolent", "comely", "divulge",
  "effulgent", "felicitous", "gormandize", "halcyon", "insouciant", "jubilant", "kaleidoscopic", "lagniappe",
  "mellifluous", "nonpareil", "obfuscate", "paragon", "quiescent", "resplendent", "salubrious", "taciturn",
  "ubiquitous", "veritable", "wherewithal", "xanadu", "yesterday", "zephyr",
  // ... Add more words as needed
];
