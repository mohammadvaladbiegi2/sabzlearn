const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    questioner: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: false,
    },
    whoanswers: {
      type: String,
      required: false,
    },
    course: {
      type: mongoose.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const CommentModel =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);
