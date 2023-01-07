const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    //add validation
  },

  //?? Are these references formatted correctly?
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],

  //?? Self reference?
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
