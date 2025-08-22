import mongoose from "mongoose";

// for book database schema
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: String,
  publicationYear: Number,
  availability: { type: Boolean, default: true },
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
