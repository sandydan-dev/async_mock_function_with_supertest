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
const request = require("supertest");
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


describe('game api testing', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })


    it('should return correct api with status 200', async () => {
        let mockGameApi = [
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
            }
        ]

        getAllGamesDetails.mockResolvedValue(mockGameApi)
        let result = await request(server).get('/api/games')

        expect(result.statusCode).toEqual(200)
        expect(result.body).toEqual(mockGameApi)
    })


    // game api testing
    it('should return game api', async () => {
        let mockGameApi =
        {
            id: 1,
            title: "The Legend of Zelda",
            genre: "Adventure",
            developer: "Nintendo",
        }

        getGamesById.mockResolvedValue(mockGameApi)
        let result = await request(server).get('/api/games/id/1')
        expect(result.statusCode).toEqual(200)
        expect(result.body).toEqual(mockGameApi)

    })

    // game api test should return 404 status code if id not found
    it('should return game api', async () => {

        getGamesById.mockResolvedValue(null)
        let result = await request(server).get('/api/games/id/123')
        expect(result.statusCode).toEqual(404)
        expect(result.body.message).toEqual('No game found with this id')

    })


    // get games title
    it('should return game title with 200 status code', async () => {
        let mockGameApi =
        {
            id: 1,
            title: "The Legend of Zelda",
            genre: "Adventure",
            developer: "Nintendo",
        }

        getGamesByTitle.mockResolvedValue(mockGameApi)
        let result = await request(server).get('/api/games/title/The%20Legend%20of%20Zelda')
        expect(result.statusCode).toEqual(200)
        expect(result.body).toEqual(mockGameApi)
    })

    // get game title and genre with api
    it('should return title and genre with 200 status code', async () => {
        let mockGameApi = [
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
            }
        ]
        getGamesByTitleAndGenre.mockResolvedValue(mockGameApi)
        let result = await request(server).get('/api/games/title_genre')
        expect(result.statusCode).toEqual(200)
        expect(result.body).toEqual(mockGameApi)
    })


    // add new game
    it('should return new game data with 201 status code', async () => {
        let mockGameApi = {
            id: 16,
            title: "God of war",
            genre: "playstation",
            developer: "guichy",
        }

        addNewGame.mockResolvedValue(mockGameApi)
        let result = await request(server).post('/api/add/new_game').send({
            title: "God of war",
            genre: "playstation",
            developer: "guichy"
        })

        expect(result.statusCode).toEqual(201)
        expect(result.body).toEqual(mockGameApi)
    })

})