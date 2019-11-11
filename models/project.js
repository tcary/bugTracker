const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  issues: [
    {
      type: Schema.Types.ObjectId,
      ref: "Issue"
    }
  ],
  title: { type: String, required: true },
  bug: { type: String, required: true },
  details: String,
  date: { type: Date, default: Date.now }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
