const router = require("express").Router();
const {
  getAllThoughts,
  createThought,
  getThoughtById,
  updateThought,
} = require("../../controllers/thoughtController");

//localhost:3001/api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

//localhost:3001/api/thoughts/:thoughtId
router.route("/:thoughtId").get(getThoughtById).put(updateThought);

module.exports = router;