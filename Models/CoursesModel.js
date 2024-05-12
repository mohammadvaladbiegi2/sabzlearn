const mongoose = require("mongoose");
import { SeasonModel } from "./SeasonModel";
import { CommentModel } from "./CommentModel";
import { SectionModel } from "./SectionModel";
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
    desc: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    teacher: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    suport: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },

    viewtype: {
      type: String,
      required: true,
    },
    student: {
      type: Number,
      required: true,
    },

    ispresell: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

courseSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "course",
});
courseSchema.virtual("seasons", {
  ref: "Season",
  localField: "_id",
  foreignField: "course",
});

export const CourseModel =
  mongoose.models.Course || mongoose.model("Course", courseSchema);
