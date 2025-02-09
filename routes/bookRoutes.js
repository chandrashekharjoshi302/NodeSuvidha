const express = require("express");
const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controller/bookController");
const { auth } = require("../middlewares/auth");
const router = express.Router();

router.post("/", createBook);
router.get("/", auth, getBooks);
router.get("/:id", auth, getBookById);
router.put("/:id", auth, updateBook);
router.delete("/:id", auth, deleteBook);

module.exports = router;
