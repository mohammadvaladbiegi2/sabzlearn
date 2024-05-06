const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mycourseschema = new Schema({
  img: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  progress: {
    type: Number,
    require: true,
    default: 0,
  },
  courseid: {
    type: String,
    require: true,
  },
});

const myticketsschema = new Schema({
  title: {
    type: String,
    require: true,
  },
  text: {
    type: String,
    require: true,
  },
  department: {
    type: String,
    require: true,
  },
  answer: {
    type: String,
    require: false,
  },
});

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    courses: {
      type: [mycourseschema],
      require: false,
    },
    tickets: {
      type: [myticketsschema],
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
