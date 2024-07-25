"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBook = exports.getBooks = void 0;
const book_1 = require("../models/book");
let currentId = book_1.books.length + 1;
const getBooks = (req, res) => {
    res.json(book_1.books);
};
exports.getBooks = getBooks;
const getBook = (req, res) => {
    const book = book_1.books.find(b => b.id === +req.params.id);
    if (!book)
        return res.status(404).json({ message: 'Book not found' });
    res.json(book);
};
exports.getBook = getBook;
const createBook = (req, res) => {
    const newBook = Object.assign({ id: currentId++ }, req.body);
    book_1.books.push(newBook);
    res.status(201).json(newBook);
};
exports.createBook = createBook;
const updateBook = (req, res) => {
    const index = book_1.books.findIndex(b => b.id === +req.params.id);
    if (index === -1)
        return res.status(404).json({ message: 'Book not found' });
    book_1.books[index] = Object.assign(Object.assign({}, book_1.books[index]), req.body);
    res.json(book_1.books[index]);
};
exports.updateBook = updateBook;
const deleteBook = (req, res) => {
    const index = book_1.books.findIndex(b => b.id === +req.params.id);
    if (index === -1)
        return res.status(404).json({ message: 'Book not found' });
    book_1.books.splice(index, 1);
    res.status(204).send();
};
exports.deleteBook = deleteBook;
