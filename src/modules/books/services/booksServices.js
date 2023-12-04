import Book from '../model/Book';

export async function bookCreateOne({author, title, description, year, genre, rating, numPages, format}) {
  return await Book.create({
    author,
    title,
    description,
    year,
    genre,
    rating,
    numPages,
    format,
  })
}

export async function booksFetch(author, title) {
  if(author && title) return await Book.find({author,title})

  return await Book.find()
}

export async function bookFindById(id) {
  return await Book.findById(id)
}

export async function deleteBookById(id) {
  return await Book.findByIdAndDelete(id)
}

export async function bookFindByIdAndUpdate(id, author, title, description, year, genre, rating, numPages, format) {
  return await Book.findByIdAndUpdate(id, {
    author,
    title,
    description,
    year,
    genre,
    rating,
    numPages,
    format,
  })
}
