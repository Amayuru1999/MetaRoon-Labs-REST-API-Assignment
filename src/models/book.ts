export interface Book {
    id: number;
    title: string;
    author: string;
    published: string;
}
export let books: Book[] = [
    { id: 1, title: '1984', author: 'George Orwell', published: '1949' },
    { id: 2, title: 'Brave New World', author: 'Aldous Huxley', published: '1932' }
];