const games = [
  {
    id: 1,
    title: "The Legend of Zelda",
    genre: "Adventure",
    developer: "Nintendo",
  },
  {
    id: 2,
    title: "Super Mario Bros",
    genre: "Platformer",
    developer: "Nintendo",
  },
  { id: 3, title: "Minecraft", genre: "Sandbox", developer: "Mojang Studios" },
  {
    id: 4,
    title: "Grand Theft Auto V",
    genre: "Action-Adventure",
    developer: "Rockstar Games",
  },
  { id: 5, title: "Portal", genre: "Puzzle", developer: "Valve Corporation" },
  {
    id: 6,
    title: "The Last of Us",
    genre: "Survival Horror",
    developer: "Naughty Dog",
  },
  {
    id: 7,
    title: "Stardew Valley",
    genre: "Farming Simulation",
    developer: "ConcernedApe",
  },
  {
    id: 8,
    title: "Celeste",
    genre: "Platformer",
    developer: "Matt Makes Games",
  },
  {
    id: 9,
    title: "Overcooked 2",
    genre: "Cooking Simulator",
    developer: "Ghost Town Games",
  },
  { id: 10, title: "Cuphead", genre: "Run and Gun", developer: "Studio MDHR" },
  {
    id: 11,
    title: "Dark Souls III",
    genre: "Action RPG",
    developer: "FromSoftware",
  },
  {
    id: 12,
    title: "Life is Strange",
    genre: "Episodic Graphic Adventure",
    developer: "Dontnod Entertainment",
  },
  {
    id: 13,
    title: "Hollow Knight",
    genre: "Metroidvania",
    developer: "Team Cherry",
  },
  {
    id: 14,
    title: "Resident Evil 7: Biohazard",
    genre: "Survival Horror",
    developer: "Capcom",
  },
  {
    id: 15,
    title: "Hyper Light Drifter",
    genre: "Top-down Action",
    developer: "Heart Machine",
  },
];

const developers = [
  { id: 1, name: "Nintendo", country: "Japan" },
  { id: 2, name: "Torr", country: "Japan" },
  { id: 3, name: "Mojang Studios", country: "Sweden" },
  { id: 4, name: "Rockstar Games", country: "United States" },
  { id: 5, name: "Valve Corporation", country: "United States" },
  { id: 6, name: "Naughty Dog", country: "United States" },
  { id: 7, name: "ConcernedApe", country: "Canada" },
  { id: 8, name: "Matt Makes Games", country: "Canada" },
  { id: 9, name: "Ghost Town Games", country: "Poland" },
  { id: 10, name: "Studio MDHR", country: "Canada" },
  { id: 11, name: "FromSoftware", country: "Japan" },
  { id: 12, name: "Dontnod Entertainment", country: "France" },
  { id: 13, name: "Team Cherry", country: "Australia" },
  { id: 14, name: "Capcom", country: "Japan" },
  { id: 15, name: "Heart Machine", country: "United States" },
  { id: 16, name: "Rockstar Games", country: "United Kingdom" },
  { id: 17, name: "Santa Monica Studio", country: "United States" },
  { id: 18, name: "Naughty Dog", country: "United States" },
  { id: 19, name: "CD Projekt RED", country: "Poland" },
  { id: 20, name: "FromSoftware", country: "Japan" },
];

// get all games
async function getAllGamesDetails() {
  return games;
}

// get games by id
async function getGamesById(id) {
  return games.find((game) => game.id === id)
}

// get games by title
async function getGamesByTitle(title) {
  return games.find((game) => game.title === title);
}

// get games by title and genre
async function getGamesByTitleAndGenre(title, genre) {
  return games.find((game) => game.title === title && game.genre === genre);
}

// add new games
async function addNewGame(newGame) {
  let addedGame = { id: games.length + 1, ...newGame };
  games.push(addNewGame);
  return addedGame;
}

// get all developers
async function getAllDevelopers() {
  return developers;
}

// get developers by id
async function getDeveloperById(id) {
  return developers.find((dev) => dev.id === id);
}

//  get developer by name
async function getDeveloperByName(name) {
  return developers.find((dev) => dev.name === name);
}

async function getDeveloperByCountry(country) {
  return developers.find((dev) => dev.country === countryF);
}

async function addNewdeveloperDetails(newDev) {
  let newDeveloper = { id: developers.length + 1, ...newDev };
  developers.push(newDeveloper);
  return newDeveloper;
}

module.exports = {
  getAllGamesDetails,
  getGamesById,
  getGamesByTitle,
  getGamesByTitleAndGenre,
  addNewGame,
  getAllDevelopers,
  getDeveloperById,
  getDeveloperByName,
  getDeveloperByCountry,
  addNewdeveloperDetails,
};
