const mongoose = require("mongoose");
import { SeasonModel } from "./SeasonModel";
import { CommentModel } from "./CommentModel";
import { SectionModel } from "./SectionModel";
const Schema = mongoose.Schema;

const titleschema = new Schema({
  fa: {
    type: String,
    required: true,
  },
  en: {
    type: String,
    required: true,
  },
  ge: {
    type: String,
    required: true,
  },
  ku: {
    type: String,
    required: true,
  },
});
const descschema = new Schema({
  fa: {
    type: String,
    required: true,
  },
  en: {
    type: String,
    required: true,
  },
  ge: {
    type: String,
    required: true,
  },
  ku: {
    type: String,
    required: true,
  },
});
const teacherschema = new Schema({
  fa: {
    type: String,
    required: true,
  },
  en: {
    type: String,
    required: true,
  },
  ge: {
    type: String,
    required: true,
  },
  ku: {
    type: String,
    required: true,
  },
});
const suportschema = new Schema({
  fa: {
    type: String,
    required: true,
  },
  en: {
    type: String,
    required: true,
  },
  ge: {
    type: String,
    required: true,
  },
  ku: {
    type: String,
    required: true,
  },
});
const viewtypeschema = new Schema({
  fa: {
    type: String,
    required: true,
  },
  en: {
    type: String,
    required: true,
  },
  ge: {
    type: String,
    required: true,
  },
  ku: {
    type: String,
    required: true,
  },
});

const courseSchema = new Schema(
  {
    title: {
      type: { titleschema },
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    desc: {
      type: { descschema },
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    teacher: {
      type: { teacherschema },
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    suport: {
      type: { suportschema },
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },

    viewtype: {
      type: { viewtypeschema },
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
