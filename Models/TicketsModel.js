const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ticketsSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    department: {
      type: String,
      require: true,
    },
    answer: {
      type: String,
      require: false,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Ticket =
  mongoose.models.Ticket || mongoose.model("Ticket", ticketsSchema);
