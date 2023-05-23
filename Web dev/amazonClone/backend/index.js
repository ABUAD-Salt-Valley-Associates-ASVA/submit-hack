import express from 'express';
import data from "./data.js";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoute.js';


dotenv.config()


const DB = /*process.env.MONGO_URI ||*/ process.env.MONGO_LOCAL
mongoose
    .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB is connected"))
    .catch(err => console.log(err))


const app = express()
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 3500;


app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
});