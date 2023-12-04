import mongoose from 'mongoose'
const BookSchema = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  year: Number,
  genre: String,
  rating: Number,
  numPages: Number,
  format: String,
});

const Book = mongoose.model('Libro', BookSchema)

export default Book;