const { connect, connection } = require("mongoose");

connect("mongodb://localhost/socialApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
