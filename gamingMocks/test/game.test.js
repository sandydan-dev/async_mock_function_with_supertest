const {
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
} = require("../controllers/game.controller");
const { app } = require("../index");
const http = require("http");

jest.mock("../controllers/game.controller.js", () => ({
  ...jest.requireActual("../controllers/game.controller.js"),
  getAllGamesDetails: jest.fn(),
  getGamesById: jest.fn(),
  getGamesByTitle: jest.fn(),
  getGamesByTitleAndGenre: jest.fn(),
  addNewGame: jest.fn(),
  getAllDevelopers: jest.fn(),
  getDeveloperById: jest.fn(),
  getDeveloperByName: jest.fn(),
  getDeveloperByCountry: jest.fn(),
  addNewdeveloperDetails: jest.fn(),
}));

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3001, done);
});

afterAll((done) => {
  server.close(done);
});

describe("game mock function ", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should return all game list', async () => {
    let mockGame = [{
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
    { id: 3, title: "Minecraft", genre: "Sandbox", developer: "Mojang Studios" }]
    getAllGamesDetails.mockReturnValue(mockGame)
    let result = getAllGamesDetails()
    expect(result).toEqual(mockGame)
    expect(result.length).toEqual(3)
    expect(getAllGamesDetails).toHaveBeenCalled()
  })

  test('should return game id', () => {
    let mockGame = {
      id: 1,
      title: "The Legend of Zelda",
      genre: "Adventure",
      developer: "Nintendo",
    }
    getGamesById.mockReturnValue(mockGame)
    let result = getGamesById(1)
    expect(result).toEqual(mockGame)
    expect(getGamesById).toHaveBeenCalledWith(1)
  })

  test('should return game id with error', () => {
    getGamesById.mockReturnValue(undefined)
    let result = getGamesById(123)
    expect(result).toBeUndefined()
    expect(getGamesById).toHaveBeenCalledWith(123)
  })

  test('should return game title', () => {
    let mockGame = {
      id: 1,
      title: "The Legend of Zelda",
      genre: "Adventure",
      developer: "Nintendo",
    }
    getGamesByTitle.mockReturnValue(mockGame)
    let result = getGamesByTitle("The Legend of Zelda")
    expect(result).toEqual(mockGame)
    expect(getGamesByTitle).toHaveBeenCalledWith("The Legend of Zelda")
  })


  test('should return title and genre', () => {
    let mockGame = [{
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
    { id: 3, title: "Minecraft", genre: "Sandbox", developer: "Mojang Studios" }]

    getGamesByTitleAndGenre.mockReturnValue(mockGame)
    let result = getGamesByTitleAndGenre(
      "Super Mario Bros",
      "Platformer"
    )

    expect(result).toEqual(mockGame)
    expect(getGamesByTitleAndGenre).toHaveBeenCalledWith("Super Mario Bros",
      "Platformer")
  })

  // add new game
  test('should add new game', () => {
    let mockGame = { id: 4, title: "Minecraft", genre: "Sandbox", developer: "Mojang Studios" }
    addNewGame.mockReturnValue(mockGame)
    let result = addNewGame(mockGame)
    expect(result).toEqual(mockGame)
    expect(addNewGame).toHaveBeenCalledWith(mockGame)
  })

});



describe('Developer Mock Function', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should return all developer data list', () => {
    let mockDev = [
      { id: 1, name: "Nintendo", country: "Japan" },
      { id: 2, name: "Nintendo", country: "Japan" },
      { id: 3, name: "Mojang Studios", country: "Sweden" }
    ]

    getAllDevelopers.mockReturnValue(mockDev)
    let result = getAllDevelopers()
    expect(result).toEqual(mockDev)
    expect(result.length).toEqual(3)
    expect(getAllDevelopers).toHaveBeenCalled()

  })


  test('should return developer data by id', () => {
    let mockDev = { id: 1, name: "Nintendo", country: "Japan" }
    getDeveloperById.mockReturnValue(mockDev)
    let result = getDeveloperById(1)
    expect(result).toEqual(mockDev)
    expect(getDeveloperById).toHaveBeenCalledWith(1)
  })

  test('should return developer by name', () => {
    let mockDev = [{ id: 1, name: "Nintendo", country: "Japan" },
    { id: 2, name: "Torr", country: "Japan" }]
    getDeveloperByName.mockReturnValue(mockDev)

    let result = getDeveloperByName("Torr")
    expect(result).toEqual(mockDev)
    expect(getDeveloperByName).toHaveBeenCalledWith("Torr")
  })


  test('should return developer by country', () => {
    let mockDev = [{ id: 1, name: "Nintendo", country: "Indiana" },
    { id: 2, name: "Torr", country: "Japan" }]
    getDeveloperByCountry.mockReturnValue(mockDev)
    let result = getDeveloperByCountry("Japan")
    expect(result).toEqual(mockDev)
    expect(getDeveloperByCountry).toHaveBeenCalledWith("Japan")
  })


  test('should add new developer', () => {
    let mockDev = { id: 4, name: "Naydo", country: "U.S, Wall street" }
    addNewdeveloperDetails.mockReturnValue(mockDev)
    let result = addNewdeveloperDetails(mockDev)
    expect(result).toEqual(mockDev)
    expect(addNewdeveloperDetails).toHaveBeenCalledWith(mockDev)
  })


})