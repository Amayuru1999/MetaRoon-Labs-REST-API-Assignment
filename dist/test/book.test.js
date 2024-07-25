"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const books_1 = __importDefault(require("../routes/books"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/books', books_1.default);
describe('Books API', () => {
    it('should fetch all books', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get('/api/v1/books');
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(2);
    }));
    it('should fetch a single book', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get('/api/v1/books/1');
        expect(response.status).toBe(200);
        expect(response.body.title).toBe('1984');
    }));
    it('should create a new book', () => __awaiter(void 0, void 0, void 0, function* () {
        const newBook = { title: 'Fahrenheit 451', author: 'Ray Bradbury', published: '1953' };
        const response = yield (0, supertest_1.default)(app).post('/api/v1/books').send(newBook);
        expect(response.status).toBe(201);
        expect(response.body.title).toBe('Fahrenheit 451');
    }));
    it('should update a book', () => __awaiter(void 0, void 0, void 0, function* () {
        const updatedBook = { title: '1984 (Updated)' };
        const response = yield (0, supertest_1.default)(app).put('/api/v1/books/1').send(updatedBook);
        expect(response.status).toBe(200);
        expect(response.body.title).toBe('1984 (Updated)');
    }));
    it('should delete a book', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).delete('/api/v1/books/1');
        expect(response.status).toBe(204);
    }));
});
