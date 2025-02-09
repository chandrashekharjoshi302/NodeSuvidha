const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
  author: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
  publicationYear: {
    type: Number,
    required: true,
    min: 1000,
    max: 2022,
  },
  genre: {
    type: String,
    required: true,
    enum: [
      "Fiction",
      "Non-Fiction",
      "Children",
      "Mystery",
      "Biography",
      "Sci-Fi",
      "Thriller",
    ],
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    maxlength: 13,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
