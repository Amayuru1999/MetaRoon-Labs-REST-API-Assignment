import express, { Request, Response } from 'express';
import bookRoutes from './routes/books';
import dotenv from 'dotenv';
dotenv.config();

const app = express();


const port: string = process.env.PORT || '3000' ;
app.use(express.json());
app.use('/api/v1/books', bookRoutes);

app.get('/', (req: Request, res: Response) => {

    res.send('Hello, MetaRooooon 2!');
});

export default app;
app.listen(port, () => {

    console.log(`🚀 Server is running on http://localhost:${port}`);
});