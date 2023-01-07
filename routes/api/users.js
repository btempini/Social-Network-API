const router = require("express").Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  addFriend,
} = require("../../controllers/userController");

//localhost:3001/api/users
router.route("/").get(getAllUsers).post(createUser);

//localhost:3001/api/users/:userId
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

//localhost:3001/api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend);

module.exports = router;
