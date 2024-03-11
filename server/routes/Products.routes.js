//import express
import express from "express";
const ProductsRouter = express.Router();
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/Products.controllers.js";
ProductsRouter.get("/", getProducts);
ProductsRouter.get("/:productid", getProductById);
ProductsRouter.post("/create", createProduct);
ProductsRouter.put("/:productid", updateProduct);
ProductsRouter.delete("/:productid", deleteProduct);
export default ProductsRouter;