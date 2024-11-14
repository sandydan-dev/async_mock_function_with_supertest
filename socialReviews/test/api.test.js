const {
  getAllReviews,
  getReviewsById,
  addingNewReviews,
  getAllUserDetails,
  getUsersById,
  addNewUser,
} = require("../controllers/reviews.controller");

const http = require("http");
const { app } = require("../index");
const request = require("supertest");
const exp = require("constants");

// define jest mock function

jest.mock("../controllers/reviews.controller.js", () => ({
  ...jest.requireActual("../controllers/reviews.controller.js"),
  getAllReviews: jest.fn(),
  getReviewsById: jest.fn(),
  addingNewReviews: jest.fn(),
  getAllUserDetails: jest.fn(),
  getUsersById: jest.fn(),
  addNewUser: jest.fn(),
}));

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3001, done);
});

afterAll((done) => {
  server.close(done);
});

// Reviews function testing
describe("👍 Reviews functions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // get all reviews
  test("fetching all reviews", async () => {
    let mockReview = [
      { id: 1, content: "Great product!", userId: 1 },
      { id: 2, content: "Not bad, could be better.", userId: 2 },
      { id: 3, content: "Excellent service!", userId: 3 },
    ];
    getAllReviews.mockReturnValue(mockReview);
    let result = await getAllReviews();
    expect(result).toEqual(mockReview);
    expect(getAllReviews).toHaveBeenCalled();
  });

  // get  reviews by id
  test("fetch reviews by id", async () => {
    let mockReview = { id: 1, content: "Great product!", userId: 1 };
    getReviewsById.mockReturnValue(mockReview);
    let result = await getReviewsById(1);
    expect(result).toEqual(mockReview);
    expect(getReviewsById).toHaveBeenCalledWith(1);
  });

  // if id not found
  test("should showing undefined when reviews id not found", async () => {
    let mockReview = undefined;
    getReviewsById.mockReturnValue(mockReview);
    let result = await getReviewsById(123);
    expect(result).toBeUndefined();
    expect(getReviewsById).toHaveBeenCalledWith(123);
  });

  // add new reviews
  test("adding new reviews", async () => {
    let mockReview = { id: 4, content: "Great Wall!", userId: 4 };

    addingNewReviews.mockReturnValue(mockReview);
    let result = await addingNewReviews(mockReview);
    expect(result).toEqual(mockReview);
    expect(addingNewReviews).toHaveBeenCalledWith(mockReview);
  });
});

// Users function testing

describe("👍 Users funnction testing", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // get all users
  test("fetch all users", async () => {
    let mockUsers = [
      { id: 1, name: "John Doe", email: "john.doe@example.com" },
      { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
      { id: 3, name: "Michael Johnson", email: "michael.johnson@example.com" },
    ];

    getAllUserDetails.mockReturnValue(mockUsers);
    let result = await getAllUserDetails();
    expect(result).toEqual(mockUsers);
    expect(getAllUserDetails).toHaveBeenCalled();
  });

  // get users by id
  test("fetch users by id", async () => {
    let mockUsers = { id: 1, name: "John Doe", email: "john.doe@example.com" };
    getUsersById.mockReturnValue(mockUsers);
    let result = await getUsersById(1);
    expect(result).toEqual(mockUsers);
    expect(getUsersById).toHaveBeenCalledWith(1);
  });

  // if users id not found
  test("user id not found showing null value", async () => {
    getUsersById.mockReturnValue(undefined);
    let result = await getUsersById(1234);
    expect(result).toBeUndefined();
    expect(getUsersById).toHaveBeenCalledWith(1234);
  });

  // add new user
  test("adding new users to list", async () => {
    let mockUsers = {
      id: 4,
      name: "Sandeep Dhanwate",
      email: "sandeep@gmail.com",
    };
    addNewUser.mockReturnValue(mockUsers);
    let result = await addNewUser(mockUsers);
    expect(result).toEqual(mockUsers);
    expect(addNewUser).toHaveBeenCalledWith(mockUsers);
  });
});

// test reviews api endpoint
describe(" 🧪 test revies api endpoint", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("GET Method (/r1/reviews),should retrieve all reviews", async () => {
    let mR = [
      { id: 1, content: "Great product!", userId: 1 },
      { id: 2, content: "Not bad, could be better.", userId: 2 },
      { id: 3, content: "Excellent service!", userId: 3 },
    ];
    getAllReviews.mockResolvedValue(mR);
    let result = await request(server).get("/r1/reviews");
    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(mR);
  });

  // if all reviews not found
  it("should retrun 404 status code, if reviews not retrive", async () => {
    getAllReviews.mockResolvedValue(null);
    let result = await request(server).get("/r1/reviews");
    expect(result.statusCode).toEqual(404);
    expect(result.body.message).toEqual("No reviews found");
  });

  // reviews by id endpoint
  it("GET Method (/r1/reviews/id/1),should return reviews by id, with endpoint", async () => {
    let mR = { id: 1, content: "Great product!", userId: 1 };
    getReviewsById.mockResolvedValue(mR);
    let result = await request(server).get("/r1/reviews/id/1");
    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(mR);
  });

  // reviews by id if not found endpoint
  it("GET Method (/r1/reviews/id/11234), should return status code 404 error code", async () => {
    getReviewsById.mockResolvedValue(null);
    let result = await request(server).get("/r1/reviews/id/123");
    expect(result.statusCode).toEqual(404);
    expect(result.body.message).toEqual("Reviews Id not found");
  });

  // add new reviews with endpoint
  it("POST Method (/r1/reviews/new_reviews), should return new  reviews", async () => {
    let mR = { id: 4, content: "Hello World!", userId: 4 };
    addingNewReviews.mockResolvedValue(mR);
    let result = await request(server)
      .post("/r1/reviews/new_reviews")
      .send({ content: "Hello World!", userId: 4 });

    expect(result.statusCode).toEqual(201);
    expect(result.body).toEqual(mR);
  });

  it("should return statuscode  404 error ", async () => {
    addingNewReviews.mockResolvedValue(null);
    let result = await request(server)
      .post("/r1/reviews/new_reviews")
      .send({ content: "Hello World!", userId: 4 });
    expect(result.statusCode).toEqual(404);
    expect(result.body.message).toEqual("New review not added");
  });
});

// test user api endpoint
describe(" 🚀 test user api endpoints", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  //
  it("GET Method (/u1/users), should return status code 200", async () => {
    let mU = [
      { id: 1, name: "John Doe", email: "john.doe@example.com" },
      { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
      { id: 3, name: "Michael Johnson", email: "michael.johnson@example.com" },
    ];

    getAllUserDetails.mockResolvedValue(mU);
    let result = await request(server).get("/u1/users");
    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(mU);
  });

  // if all users not found
  it("shoulde return 404 status code if all users not found", async () => {
    getAllUserDetails.mockResolvedValue(undefined);
    let result = await request(server).get("/u1/users");
    expect(result.statusCode).toEqual(404);
    expect(result.body.message).toEqual("Users not getting");
  });

  // get users by id with endpoint
  it("GET Method (/u1/users/id/1), should return status code 200", async () => {
    let mU = { id: 1, name: "John Doe", email: "john.doe@example.com" };
    getUsersById.mockResolvedValue(mU);
    let result = await request(server).get("/u1/users/id/1");
    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(mU);
  });

  // get user by id if not found
  it("should return 404 status code if id not found", async () => {
    getUsersById.mockResolvedValue(null);
    let result = await request(server).get("/u1/users/id/1234");
    expect(result.statusCode).toEqual(404);
    expect(result.body.message).toEqual("user id not found");
  });

  // adding new user with api endpoint
  it("POST Method /u1/users/new, should add new user ", async () => {
    let mU = { id: 4, name: "Sandy Doe", email: "sandy.doe@example.com" };
    addNewUser.mockResolvedValue(mU);
    let result = await request(server)
      .post("/u1/users/new")
      .send({ name: "Sandy Doe", email: "sandy.doe@example.com" });

    expect(result.statusCode).toEqual(201);
    expect(result.body).toEqual(mU);
  });

  // is user not added
  it("POST Method new user not added, return statuscode 404", async () => {
    addNewUser.mockResolvedValue(null);
    let result = await request(server).post("/u1/users/new");
    expect(result.statusCode).toEqual(404);
    expect(result.body.message).toEqual("User not added");
  });
});
