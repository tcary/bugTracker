const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  details: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", projectSchema);

module.exports = Book;
