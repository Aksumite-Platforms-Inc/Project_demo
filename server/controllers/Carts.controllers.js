import Cart from "../models/Cart.js";

// Add a product to the cart
export const addToCart = async (req, res) => {
  const { quantity } = req.body;
  const { userid } = req.user;
  const { productid } = req.params;
  if (!quantity) {
    return res.status(400).json({ message: "quantity is requred" });
  }
  try {
    // Check if the cart already exists for the user
    let cart = await Cart.findOne({ userid });

    if (!cart) {
      // If cart doesn't exist, create a new cart
      cart = new Cart({ userid, cartItems: [{ productid, quantity }] });
    } else {
      // If cart exists, check if the product already exists in the cart
      const existingItemIndex = cart.cartItems.findIndex(
        (item) => item.productid === productid
      );

      if (existingItemIndex !== -1) {
        // If the product already exists, update its quantity
        cart.cartItems[existingItemIndex].quantity += quantity;
      } else {
        // If the product doesn't exist, add it to the cart
        cart.cartItems.push({ productid, quantity });
      }
    }

    // Save the cart to the database
    await cart.save();

    res.status(200).json({ message: "Product added to cart successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

// Get the cart for a specific user
export const getCart = async (req, res) => {
  const { userid } = req.user;

  try {
    // Find the cart for the user
    const cart = await Cart.findOne({ userid }).populate("cartItems.productid");

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

// Remove a product from the cart
export const removeFromCart = async (req, res) => {
  const { productid } = req.params;
  const { userid } = req.user;
  try {
    // Find the cart for the user
    const cart = await Cart.findOne({ userid });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Remove the product from the cart
    cart.cartItems = cart.cartItems.filter(
      (item) => item.productid !== productid
    );

    // Save the updated cart
    await cart.save();

    res.status(200).json({ message: "Product removed from cart successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};

// Clear the entire cart for a user
export const clearCart = async (req, res) => {
  const { userid } = req.user;

  try {
    // Find and delete the cart for the user
    const cart = await Cart.findOne({ userid });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    cart.cartItems = [];

    await cart.save();
    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message || "Something went wrong" });
  }
};
