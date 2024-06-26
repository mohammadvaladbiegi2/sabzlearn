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
const writerschema = new Schema({
  fa: {
    type: String,
    required: true,
  },
  en: {
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

const articleSchema = new Schema(
  {
    img: {
      type: String,
      required: true,
    },
    desc: {
      type: { descschema },
      required: true,
    },
    writer: {
      type: { writerschema },
      required: true,
    },
    title: {
      type: { titleschema },
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Article =
  mongoose.models.Article || mongoose.model("Article", articleSchema);
