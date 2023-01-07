const router = require("express").Router();
const { createUser } = require("../../controllers/userController");

//localhost:27017/api/users
router.route("/").post(createUser);

module.exports = router;
