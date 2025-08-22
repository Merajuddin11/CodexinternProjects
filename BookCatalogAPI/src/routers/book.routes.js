import express from "express";
import {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
  searchBooks,
} from "../controllers/book.controller.js";

const router = express.Router();

// for create book
router.post("/", createBook);

// for read all book
router.get("/", getBooks);

// for search book
router.get("/search", searchBooks);

// for get book by Id
router.get("/:id", getBookById);

// for update book
router.put("/:id", updateBook);

// for delete book
router.delete("/:id", deleteBook);

export default router;
