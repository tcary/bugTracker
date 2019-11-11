const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
    bug: { type: String, required: true },
    details: String,
    date: { type: Date, default: Date.now }
});

const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;
