//cart routes
import express from "express";
const CartsRouter = express.Router();
import {
    getCarts,
    createCart,
    updateCart,
    deleteCart,
} from "../controllers/Carts.controllers.js";
CartsRouter.get("/", getCarts);
CartsRouter.post("/create", createCart);
CartsRouter.put("/:cartid", updateCart);
CartsRouter.delete("/:cartid", deleteCart);
export default CartsRouter