//cart context

import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  basket: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_CART":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};
export const getBasketTotal = (basket) => {
  return basket
    ?.reduce((amount, item) => item.price * (item.quantity || 1) + amount, 0)
    .toFixed(2);
};
const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCartContext = () => useContext(CartContext);
