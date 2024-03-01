import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv'

// import routes
import userRoute from './routes/user.route';

dotenv.config();

const server: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

server.use('/user', userRoute);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});