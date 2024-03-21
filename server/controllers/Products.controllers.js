import Product from "../models/Products.models.js";

export const createProduct = async (req, res) => {
  const {
    productName,
    brand,
    category,
    productDetails,
    price,
    countInStock,
    rating,
    numReviews,
  } = req.body;

  const image = res.locals.savedFileName;
  if (
    !productName ||
    !image ||
    !brand ||
    !category ||
    !productDetails ||
    !price ||
    !countInStock
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const product = await Product.create({
      productName,
      image,
      brand,
      category,
      productDetails,
      price,
      countInStock,
      rating,
      numReviews,
    });

    res.status(201).json({ product });
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}, { __v: 0 }).sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

export const updateProduct = async (req, res) => {
  const { productid } = req.params;

  const {
    productName,
    brand,
    category,
    productDetails,
    price,
    countInStock,
    rating,
    numReviews,
  } = req.body;
  const image = res.locals.savedFileName;
  if (
    !productName ||
    !brand ||
    !category ||
    !productDetails ||
    !price ||
    !countInStock
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const product = await Product.findById(productid);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.productName = productName;
    product.price = price;
    product.image = image == "" ? product.image : image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    product.rating = rating || product.rating;
    product.numReviews = numReviews || product.numReviews;
    product.productDetails = productDetails;

    await product.save();

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

export const deleteProduct = async (req, res) => {
  const { productid } = req.params;

  try {
    const product = await Product.findByIdAndDelete(productid);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};
