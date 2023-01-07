const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      //validation between 1 - 280 characters
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: { type: Date, default: Date.now },
      //need to get format date
    },
    username: {
      type: String,
      required: true,
    },
    reaction: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
