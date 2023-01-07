const { User, Thought } = require("../models");

const userController = {
  createUser(req, res) {
    console.log("working");
    User.create(req.body).then((databaseUserData) => {
      console.log(databaseUserData);
      res.json(databaseUserData);
    });
  },
};

module.exports = userController;
