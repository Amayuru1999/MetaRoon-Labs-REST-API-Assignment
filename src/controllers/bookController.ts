import { Request, Response } from 'express';
import { books, Book } from '../models/book';

let currentId = books.length + 1;

export const getBooks = (req: Request, res: Response) => {
    res.json(books);
};

export const getBook = (req: Request, res: Response) => {
    const book = books.find(b => b.id === +req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
};

export const createBook = (req: Request, res: Response) => {
    const newBook: Book = { id: currentId++, ...req.body };
    books.push(newBook);
    res.status(201).json(newBook);
};

export const updateBook = (req: Request, res: Response) => {
    const index = books.findIndex(b => b.id === +req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Book not found' });

    books[index] = { ...books[index], ...req.body };
    res.json(books[index]);
};

export const deleteBook = (req: Request, res: Response) => {
    const index = books.findIndex(b => b.id === +req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Book not found' });

    books.splice(index, 1);
    res.status(204).send();
};
