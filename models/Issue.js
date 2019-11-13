const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  issue: { type: String, required: true },
  details: String,
  date: { type: Date, default: Date.now },
  resolved: { type: Boolean, default: false }
});

const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;
