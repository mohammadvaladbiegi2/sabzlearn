const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
});

const commentSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  whoanswers: {
    type: String,
    required: true,
  },
});

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
    lastupdate: {
      type: String,
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
    season: {
      type: [
        {
          title: {
            type: String,
            required: true,
          },
          section: {
            type: [sectionSchema],
            required: true,
          },
        },
      ],
    },
    comment: {
      type: [commentSchema],
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

export const CourseModel =
  mongoose.models.Course || mongoose.model("Course", courseSchema);
