import express from "express";
const DealsRouter = express.Router();

import {
  createDeal,
  getDeals,
  updateDeal,
  deleteDeal,
} from "../controllers/Deals.controllers.js";
import {
  authMiddleware,
  adminMiddleware,
} from "../middlewares/Auth.middlewares.js";
DealsRouter.get("/", getDeals);
DealsRouter.post("/create", authMiddleware, adminMiddleware, createDeal);
DealsRouter.put("/:dealid", authMiddleware, adminMiddleware, updateDeal);
DealsRouter.delete("/:dealid", authMiddleware, adminMiddleware, deleteDeal);

export default DealsRouter;
