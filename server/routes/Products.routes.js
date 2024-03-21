//import express
import express from "express";
const ProductsRouter = express.Router();
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/Products.controllers.js";
import {
  authMiddleware,
  adminMiddleware,
  fileUploadMiddleware,
} from "../middlewares/Auth.middlewares.js";
ProductsRouter.get("/", getProducts);
ProductsRouter.post(
  "/create",
  authMiddleware,
  adminMiddleware,
  fileUploadMiddleware,
  createProduct
);
ProductsRouter.put(
  "/:productid",
  authMiddleware,
  adminMiddleware,
  fileUploadMiddleware,
  updateProduct
);
ProductsRouter.delete(
  "/:productid",
  authMiddleware,
  adminMiddleware,
  deleteProduct
);
export default ProductsRouter;
