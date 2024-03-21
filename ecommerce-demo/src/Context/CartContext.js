//cart context
import { request } from "../lib/axiosConfig";
import { useLocation, useNavigate } from "react-router-dom";
import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  basket: [],
  user: null,
  toasts: {
    open: false,
    message: "",
    type: "",
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOAST":
      return {
        ...state,
        toasts: {
          open: action.toasts.open,
          message: action.toasts.message,
          type: action.toasts.type,
        },
      };
    case "SET_BASKET":
      return {
        ...state,
        basket: action.basket,
      };
    case "ADD_TO_CART":
      const checkItem = state.basket.find(
        (basketItem) => basketItem._id === action.item._id
      );
      if (checkItem) {
        checkItem.quantity += 1;
        return {
          ...state,
          basket: [...state.basket],
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      const filteredBasket = state.basket.filter(
        (item) => item._id !== action.id
      );

      return {
        ...state,
        basket: filteredBasket,
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
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await request("get", "users/checkuser", null, token);
        dispatch({ type: "SET_USER", user: data.user }); // Change users to user
        //get user basket from db and set it to state
        const response = await request("get", "carts", null, token);
        dispatch({ type: "SET_BASKET", basket: response.data.cartItems });
        console.log(response.data.cartItems, "cart itemssss");
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [token, dispatch]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCartContext = () => useContext(CartContext);
