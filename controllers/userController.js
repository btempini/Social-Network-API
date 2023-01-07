const { User, Thought } = require("../models");

const userController = {
  //Create a User
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //Get all users
  getAllUsers(req, res) {
    User.find().then((dbUserData) => {
      res.json(dbUserData);
    });
  },
  //Get user by ID
  getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate("friends")
      .populate("thoughts")
      .then((dbUserData) => {
        !dbUserData
          ? res
              .status(404)
              .json({ message: "No user with this id in database" })
          : res.json(dbUserData);
      });
  },
  //Update User
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      {
        runValidators: true,
        new: true,
      }
    )
      .then((dbUserData) => {
        !dbUserData
          ? res
              .status(404)
              .json({ message: "No user with this id in database" })
          : res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //Delete User
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((dbUserData) => {
        !dbUserData
          ? res
              .status(404)
              .json({ message: "No user with this id in database" })
          : res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //Add friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((dbUserData) => {
        !dbUserData
          ? res
              .status(404)
              .json({ message: "No user with this id in database" })
          : res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = userController;
