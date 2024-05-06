const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    require: true,
  },
  time: {
    type: Number,
    required: true,
  },
});

export const Lesson =
  mongoose.models.Lesson || mongoose.model("Lesson", sectionSchema);
