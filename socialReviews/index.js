const express = require("express");
const app = express();
const port = 3000;

// controller functions
const {
  getAllReviews,
  getReviewsById,
  addingNewReviews,
  getAllUserDetails,
  getUsersById,
  addNewUser,
} = require("./controllers/reviews.controller");

// middelware
app.use(express.json());

app.get("/r1/reviews", async (req, res) => {
  let response = await getAllReviews();
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: "No reviews found" });
  }
});

app.get("/r1/reviews/id/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  let response = await getReviewsById(id);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: "Reviews Id not found" });
  }
});

// adding new reviews
app.post("/r1/reviews/new_reviews", async (req, res) => {
  let newReviewBody = req.body;
  let response = await addingNewReviews(newReviewBody);
  if (response) {
    res.status(201).json(response);
  } else {
    res.status(404).json({ message: "New review not added" });
  }
});

//  get all user details

app.get("/u1/users", async (req, res) => {
  let response = await getAllUserDetails();
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: "Users not getting" });
  }
});

// get users by id

app.get("/u1/users/id/:id", async (req, res) => {
  let id = parseInt(req.params.id);
  let response = await getUsersById(id);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: "user id not found" });
  }
});

// adding new user

app.post("/u1/users/new", async (req, res) => {
  let newUser = req.body;
  let response = await addNewUser(newUser);
  if (response) {
    res.status(201).json(response);
  } else {
    res.status(404).json({ message: "User not added" });
  }
});

module.exports = { app, port };
