import express from "express";
const DealsRouter = express.Router();

import {
  createDeal,
  getDeals,
  updateDeal,
  deleteDeal,
} from "../controllers/Deals.controllers.js";
DealsRouter.get("/", getDeals);
DealsRouter.post("/create", createDeal);
DealsRouter.put("/:dealid", updateDeal);
DealsRouter.delete("/:dealid", deleteDeal);

export default DealsRouter;
