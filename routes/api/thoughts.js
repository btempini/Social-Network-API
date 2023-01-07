const router = require("express").Router();
const {
  getAllThoughts,
  createThought,
} = require("../../controllers/thoughtController");

//localhost:3001/api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

//localhost:3001/api/thoughts/:thoughtId

module.exports = router;
