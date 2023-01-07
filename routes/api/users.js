const router = require("express").Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
} = require("../../controllers/userController");

//localhost:3001/api/users
router.route("/").get(getAllUsers).post(createUser);

//localhost:3001/api/users/:userID
router.route("/:userId").get(getUserById).post(updateUser);

module.exports = router;
