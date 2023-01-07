const { connect, connection } = require("mongoose");

connect("mongodb://localhost:27017/socialApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
