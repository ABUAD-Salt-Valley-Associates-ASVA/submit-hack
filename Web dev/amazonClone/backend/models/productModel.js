import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    catergory: {
        type: String,
        required: true,

    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    countInStock: {
        type: Number,
        default: 0,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,

    },
    numReviews: {
        type: Number,
    },
    quality: {
        type: String
    }

}, {
    timestamps: true
}
)


const Product = mongoose.model('Product', ProductSchema)

export default Product;