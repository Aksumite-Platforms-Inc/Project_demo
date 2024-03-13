//deal model

import mongoose from "mongoose";

const { Schema, model } = mongoose;

const dealsSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    discount: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Deal = model("Deal", dealsSchema);

export default Deal;
