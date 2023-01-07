const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema ({
  thoughtText: {
    type: String,
    required: true,
    //validation between 1 - 280 characters
  },
  createdAt: {
    type: 
  }
})