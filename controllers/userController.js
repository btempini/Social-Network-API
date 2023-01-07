const { User, Thought } = require("../models");

const userController = {
  createUser(req, res) {
    User.create(req.body).then((databaseUserData) => {
      res.json(databaseUserData);
    });
  },
};

module.exports = userController;
