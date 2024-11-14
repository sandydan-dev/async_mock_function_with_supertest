const reviews = [
  { id: 1, content: "Great product!", userId: 1 },
  { id: 2, content: "Not bad, could be better.", userId: 2 },
  { id: 3, content: "Excellent service!", userId: 3 },
  { id: 4, content: "Love it!", userId: 4 },
  { id: 5, content: "Good quality, good price.", userId: 5 },
  { id: 6, content: "Disappointing experience.", userId: 6 },
  { id: 7, content: "Awesome product!", userId: 7 },
  { id: 8, content: "Decent, nothing special.", userId: 8 },
  { id: 9, content: "Fantastic customer support!", userId: 9 },
  { id: 10, content: "Would recommend!", userId: 10 },
  { id: 11, content: "Average product.", userId: 11 },
  { id: 12, content: "Great value for money!", userId: 12 },
  { id: 13, content: "Not what I expected.", userId: 13 },
  { id: 14, content: "Excellent product!", userId: 14 },
  { id: 15, content: "Good but could be improved.", userId: 15 },
];

const users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  { id: 3, name: "Michael Johnson", email: "michael.johnson@example.com" },
  { id: 4, name: "Emily Brown", email: "emily.brown@example.com" },
  { id: 5, name: "David Lee", email: "david.lee@example.com" },
  { id: 6, name: "Sarah Taylor", email: "sarah.taylor@example.com" },
  { id: 7, name: "Kevin White", email: "kevin.white@example.com" },
  { id: 8, name: "Lisa Nguyen", email: "lisa.nguyen@example.com" },
  { id: 9, name: "James Davis", email: "james.davis@example.com" },
  { id: 10, name: "Amy Wilson", email: "amy.wilson@example.com" },
  { id: 11, name: "Robert Harris", email: "robert.harris@example.com" },
  { id: 12, name: "Maria Rodriguez", email: "maria.rodriguez@example.com" },
];

// REVIEWS FUNCTIONS
async function getAllReviews() {
  return reviews;
}

async function getReviewsById(id) {
  return reviews.find((review) => review.id === id);
}

// adding new reviews
async function addingNewReviews(newReviews) {
  let addReviews = { id: reviews.length + 1, ...newReviews };
  reviews.push(addReviews);
  return addReviews; // return the new review
}

// USERS FUNCTION

async function getAllUserDetails() {
  return users;
}

async function getUsersById(id) {
  return users.find((user) => user.id === id);
}

async function addNewUser(newUser) {
  let addUser = { id: users.length + 1, ...newUser };
  users.push(addUser);
  return addUser;
}

module.exports = {
  getAllReviews,
  getReviewsById,
  addingNewReviews,
  getAllUserDetails,
  getUsersById,
  addNewUser,
};
