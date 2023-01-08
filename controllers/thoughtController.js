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
        console.log(req.body);
        return User.findOneAndUpdate(
          {
            _id: req.body.userId,
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
      .then((dbThoughtData) => {
        !dbThoughtData
          ? res
              .status(404)
              .json({ message: "No user with this id in database" })
          : res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((dbThoughtData) => {
        !dbThoughtData
          ? res
              .status(404)
              .json({ message: "No user with this id in database" })
          : res.json("Success! Thought Removed...");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  createReaction(req, res) {
    Thought.findOneAndUpdate(
      {
        _id: req.params.thoughtId,
      },
      {
        $addToSet: {
          reactions: req.body,
        },
      },
      {
        new: true,
      }
    )
      .then((dbReactionData) => {
        !dbReactionData
          ? res.status(404).json({ message: "No reaction with that Id" })
          : res.json(dbReactionData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      {
        _id: req.params.thoughtId,
      },
      {
        $pull: {
          reactions: { _id: req.params.reactionId },
        },
      },
      {
        new: true,
      }
    )
      .then((dbReactionData) => {
        !dbReactionData
          ? res.status(404).json({ message: "No reaction with that Id" })
          : res.json(dbReactionData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = thoughtController;
