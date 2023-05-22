import express from 'express';
import data from "./data.js";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';


dotenv.config()


const DB = process.env.MONGO_URI ? process.env.MONGO_URI : process.env.MONGO_LOCAL
mongoose
    .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB is connected"))
    .catch(err => console.log(err))


const app = express()
app.use(cors());

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);


const PORT = process.env.PORT || 3500;


app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
});