const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      require: false,
    },
    courseid: {
      type: String,
      require: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const UserspanelcourseModel =
  mongoose.models.Userspanelcourse ||
  mongoose.model("Userspanelcourse", courseSchema);
