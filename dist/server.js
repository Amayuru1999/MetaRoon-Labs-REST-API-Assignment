"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_1 = __importDefault(require("./routes/books"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || '3000';
app.use(express_1.default.json());
app.use('/api/v1/books', books_1.default);
app.get('/', (req, res) => {
    res.send('Hello, MetaRooooon 2!');
});
app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});
