//cart routes
import express from "express";
const CartsRouter = express.Router();
import {
    getCart,
    addToCart,
    clearCart,
    removeFromCart,
} from "../controllers/Carts.controllers.js";
CartsRouter.get("/", getCart);
CartsRouter.post("/:productid", addToCart);
CartsRouter.put("/:productid", clearCart);
CartsRouter.delete("/:productid", removeFromCart);
export default CartsRouter