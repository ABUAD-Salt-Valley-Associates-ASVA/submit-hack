import express from 'express';
import Product from '../models/productModel.js';
const productRouter = express.Router()

productRouter.get('/', async (req, res) => {
    const products = await Product.find({})
    // if (!products) throw new Error('Product not found');
    res.status(200).send({ products });
})



productRouter.get('/slug/:slug', async (req, res) => {
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) {
        res.status(400).json({message: "Product not found."})
    }
    res.status(200).send(product)
})

productRouter.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.status(200).send(product)
    }
    res.status(400).json({message: "Not found."})
})



export default productRouter;