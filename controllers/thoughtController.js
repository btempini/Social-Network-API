const { Thought, Reaction, User } = require("../models");

const thoughtController = {
  getAllThoughts(req, res) {
    Thought.find().then((dbThoughtData) => {
      res.json(dbThoughtData);
    });
  },

  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId }).then((dbThoughtData) => {
      if (!dbThoughtData) {
        return res.status(404).json({ message: "No thought with that Id!" });
      }
      res.json(dbThoughtData);
    });
  },

  createThought(req, res) {
    Thought.create(req.body)
      .then((thoughtArr) => {
        return User.findOneAndUpdate(
          {
            _id: req.body.thoughtId,
          },
          {
            $push: { thoughts: thoughtArr._id },
          },
          {
            new: true,
          }
        );
      })
      .then(() => {
        res.json({ message: "Success!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = thoughtController;
