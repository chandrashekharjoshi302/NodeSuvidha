const Book = require("../models/Book");

const createBook = async (req, res) => {
  try {
    const { title, author, price } = req.body;
    const book = new Book({ title, author, price, userId: req.user.userId });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({ userId: req.user.userId });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findOne({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      req.body,
      { new: true }
    );
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createBook, getBooks, getBookById, updateBook, deleteBook };
