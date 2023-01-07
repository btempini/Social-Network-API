const router = require("express").Router();
const {
  createUser,
  getAllUsers,
  getUserById,
} = require("../../controllers/userController");

//localhost:3001/api/users
router.route("/").get(getAllUsers).post(createUser);

//localhost:3001/api/users/:_id
router.route("/:_id").get(getUserById);

module.exports = router;
