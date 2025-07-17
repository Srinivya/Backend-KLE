const mongoose = require("mongoose");
const tokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: "1d" },
});
module.exports = mongoose.model("Token", tokenSchema);