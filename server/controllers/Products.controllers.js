import Product from "../models/Products.models.js";

export const createProduct = async (req, res) => {
    const { name, brand, category, description, price, countInStock, rating, numReviews } = req.body;

    if (!name || !image || !brand || !category || !description || !price || countInStock ) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const product = await Product.create({
            name,
            image,
            brand,
            category,
            description,
            price,
            countInStock,
            rating,
            numReviews
        });

        res.status(201).json({ product });
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
};


export const updateProduct = async (req, res) => {
    const { productId } = req.params;
    const { name, brand, category, description, price, countInStock, rating, numReviews } = req.body;

    if (!name || !image || !brand || !category || !description || !price || countInStock ) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        product.name = name;
        product.price = price;
        product.image = image;
        product.brand = brand;
        product.category = category;
        product.countInStock = countInStock;
        product.rating = rating;
        product.numReviews = numReviews;
        product.description = description;

        await product.save();

        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
};

export const deleteProduct = async (req, res) => {
    const { productId } = req.params;

    try {
        const product = await Product.findByIdAndDelete(productId);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message || "Something went wrong" });
    }
};