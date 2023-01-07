const mongoDB = require("mongoose");
mongoDB.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/socialApp",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoDB.connection;
