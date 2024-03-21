//cart model

import mongoose from "mongoose";

const { Schema, model } = mongoose;

const cartSchema = new Schema(
  {
    userid: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    cartItems: [
      {
        productid: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

const Cart = model("Cart", cartSchema);

export default Cart;
