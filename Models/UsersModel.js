const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import { Ticket } from "./TicketsModel";
import { UserspanelcourseModel } from "./Userspanelcourse";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.virtual("tickets", {
  ref: "Ticket",
  localField: "_id",
  foreignField: "user",
});
userSchema.virtual("courses", {
  ref: "Userspanelcourse",
  localField: "_id",
  foreignField: "user",
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
