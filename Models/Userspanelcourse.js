const mongoose = require("mongoose");

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

const courseSchema = new Schema(
  {
    title: {
      type: titleschema,
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
