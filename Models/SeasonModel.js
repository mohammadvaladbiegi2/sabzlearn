const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import { SectionModel } from "./SectionModel";

const seasonSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    course: {
      type: mongoose.Types.ObjectId,
      ref: "Course",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
seasonSchema.virtual("sections", {
  ref: "Section",
  localField: "_id",
  foreignField: "season",
});

export const SeasonModel =
  mongoose.models.Season || mongoose.model("Season", seasonSchema);
