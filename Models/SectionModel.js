const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import { SeasonModel } from "./SeasonModel";

const sectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    season: {
      type: mongoose.Types.ObjectId,
      ref: "Season",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const SectionModel =
  mongoose.models.Section || mongoose.model("Section", sectionSchema);
