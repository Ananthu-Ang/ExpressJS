// const express = require("express");

// const router = express.Router();

// // router.get("/users", (req, res) => {
// //   res.status(200).json({ users: "users" });
// // });

// // /////////////GET USER BY ID///////////////

// // router.get("/users/:id", (req, res) => {

// //   console.log(req.params.id)
// //   res.status(200).json({ users: "userlist" });
// // });

// module.exports = router;

const express = require("express");

const router = express.Router();
const users = [
  {
    userId: 1,
    username: "johndoe",
    email: "johndoe@example.com",
  },
  {
    userId: 2,
    username: "janedoe",
    email: "janedoe@example.com",
  },
  {
    userId: 3,
    username: "alice_smith",
    email: "alice.smith@example.com",
  },
  {
    userId: 4,
    username: "bob_jones",
    email: "bob.jones@example.com",
  },
  {
    userId: 5,
    username: "charlie_brown",
    email: "charlie.brown@example.com",
  },
  {
    userId: 6,
    username: "david_white",
    email: "david.white@example.com",
  },
  {
    userId: 7,
    username: "emma_clark",
    email: "emma.clark@example.com",
  },
  {
    userId: 8,
    username: "frank_harris",
    email: "frank.harris@example.com",
  },
  {
    userId: 9,
    username: "grace_martin",
    email: "grace.martin@example.com",
  },
  {
    userId: 10,
    username: "henry_lee",
    email: "henry.lee@example.com",
  },
];
/////////////////create a route for get a specific user with id?////////////////////

router.get("/userwithId/:UserID", (req, res) => {
  const Specificuser = users.find(
    (e) => e.userId.toString() === req.params.UserID
  );
  console.log(Specificuser);
  if (Specificuser) {
    res.status(200).json({ user: Specificuser });
  }
});

////////////////////////////create a route for get a specific user with id?////////////
router.get("/alluser", (req, res) => {
  res.status(200).json({ Allusers: users });
});

//////////////////// create a route for create a user? ////////////////
router.post("/createuser", (req, res) => {
  users.push(req.body);
  res.status(200).send(users);
});

///////////////////create a route for update a user with id?////////////

router.put("/userUpdate/:UserID", (req, res) => {
  const { username, email } = req.body;
  const userID = req.params.UserID;

  const updatedUsers = users.map((user) => {
    if (user.userId == userID) {
      return { ...user, username: username, email: email };
    }
    return user;
  });

  res
    .status(200)
    .json({ updatedUsers: updatedUsers, message: "User Updated Successfully" });
});

module.exports = router;
