const { Thought, Reaction, User } = require("../models");

const thoughtController = {
  getAllThoughts(req, res) {
    Thought.find().then((dbThoughtData) => {
      res.json(dbThoughtData);
    });
  },

  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId }).then((thoughtData) => {
      if (!thoughtData) {
        return res.status(404).json({ message: "No thought with that Id!" });
      }
      res.json(thoughtData);
    });
  },

  createThought(req, res) {
    Thought.create(req.body)
      .then((thoughtData) => {
        return User.findOneAndUpdate(
          {
            _id: req.body.thoughtId,
          },
          {
            $push: { thoughts: thoughtData._id },
          },
          {
            new: true,
          }
        );
      })
      .then(() => {
        res.json({ message: "Success! Added to thoughts..." });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
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
};

module.exports = thoughtController;
