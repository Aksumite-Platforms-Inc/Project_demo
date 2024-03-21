//cart routes
import express from "express";
const CartsRouter = express.Router();
import {
  getCart,
  addToCart,
  clearCart,
  removeFromCart,
} from "../controllers/Carts.controllers.js";
import { authMiddleware } from "../middlewares/Auth.middlewares.js";
CartsRouter.get("/", authMiddleware, getCart);
CartsRouter.post("/:productid", authMiddleware, addToCart);
CartsRouter.delete("/", authMiddleware, clearCart);
CartsRouter.delete("/:productid", authMiddleware, removeFromCart);
export default CartsRouter;
