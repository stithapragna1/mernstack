const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor", required: true },
  topic: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ["pending", "accepted", "declined", "rescheduled"], default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Session", sessionSchema);
