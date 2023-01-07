const { Thought, Reaction, User } = require("../models");

const thoughtController = {
  getAllThoughts(req, res) {
    Thought.find().then((databaseThoughtData) => {
      res.json(databaseThoughtData);
    });
  },

  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId }).then(
      (databaseThoughtData) => {
        if (!databaseThoughtData) {
          return res.status(404).json({ message: "No thought with that Id!" });
        }
        res.json(databaseThoughtData);
      }
    );
  },
};
