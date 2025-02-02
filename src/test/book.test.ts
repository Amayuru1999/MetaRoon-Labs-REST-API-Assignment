import request from 'supertest';
import app from '../server';

describe('Books API', () => {
    it('should fetch all books', async () => {
        const response = await request(app).get('/api/v1/books');
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(2);
    });

    it('should fetch a single book', async () => {
        const response = await request(app).get('/api/v1/books/1');
        expect(response.status).toBe(200);
        expect(response.body.title).toBe('1984');
    });

    it('should create a new book', async () => {
        const newBook = { title: 'Fahrenheit 451', author: 'Ray Bradbury', published: '1953' };
        const response = await request(app).post('/api/v1/books').send(newBook);
        expect(response.status).toBe(201);
        expect(response.body.title).toBe('Fahrenheit 451');
    });

    it('should update a book', async () => {
        const updatedBook = { title: '1984 (Updated)' };
        const response = await request(app).put('/api/v1/books/1').send(updatedBook);
        expect(response.status).toBe(200);
        expect(response.body.title).toBe('1984 (Updated)');
    });

    it('should delete a book', async () => {
        const response = await request(app).delete('/api/v1/books/1');
        expect(response.status).toBe(204);
    });
});
