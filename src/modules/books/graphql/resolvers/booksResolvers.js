import {
    bookCreateOne,
    booksFetch,
    bookFindById,
    deleteBookById,
    bookFindByIdAndUpdate
} from "../../services/booksServices";

export default { 
    Query:{
        booksFetch: (_, {author, title}) => booksFetch(author, title),
        bookFindById: (_, {id}) => bookFindById(id)
    },
    Mutation: {
        bookCreateOne: (_, {author, title, description, year, genre, rating, numPages, format}) => bookCreateOne({author, title, description, year, genre, rating, numPages, format}),
        deleteBookById: (_, {id}) => deleteBookById(id),
        bookFindByIdAndUpdate: (_, {id, author, title, description, year, genre, rating, numPages, format}) => bookFindByIdAndUpdate(id, author, title, description, year, genre, rating, numPages, format)
    }
}