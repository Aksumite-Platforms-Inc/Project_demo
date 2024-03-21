import { useCartContext } from "../../Context/CartContext";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { clearCart, getAllCarts } from "../../service/cart.services";
import { useEffect, useState } from "react";
const Cart = ({ basketZero }) => {
  const { state, dispatch } = useCartContext();
  const location = useLocation();
  const cartToggle = location.state?.cartToggle || false;
  const token = localStorage.getItem("token");
  const [cartItems, setCartItems] = useState([]);
  const handleRemoveFromCart = async (id) => {
    try {
      const response = await clearCart(id, token);
      dispatch({
        type: "REMOVE_FROM_CART",
        id,
      });
      basketZero(response.cartItems?.length);
      console.log(state.basket?.length, "cart items length");
    } catch (error) {
      console.log(error);
    }
  };

  //get the cart items from the database and display them
  useEffect(() => {
    const getCartItems = async () => {
      try {
        const response = await getAllCarts(token);
        setCartItems(response);
        console.log(response);
        basketZero(response.cartItems.length);
        console.log(state.basket?.length, "cart items lengthd");
      } catch (error) {
        console.log(error);
      }
    };
    getCartItems();
  }, [state, token, dispatch]);

  return (
    <>
      <div
        className={`
       ${
         cartToggle
           ? "relative flex flex-col  items-center justify-center"
           : "absolute top-16 right-2 z-50  max-w-lg"
       }
      lg:px-8  bg-white py-4 shadow-lg rounded-md dark:bg-dark-2 max-h-[90vh] overflow-y-auto`}
      >
        {!cartItems?.cartItems?.length ? (
          <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
            <h2 className="text-2xl font-semibold">Your cart is empty</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              You have no items in your cart. Start adding items to your cart
            </p>
          </div>
        ) : (
          <>
            <ul>
              {cartItems.cartItems.map((product) => (
                <li
                  key={product.productid._id}
                  className="flex flex-col py-6 sm:flex-row sm:justify-between"
                >
                  <div className="flex w-full space-x-2 sm:space-x-4">
                    <img
                      className="flex-shrink-0 object-cover w-12 h-12 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                      src={`http://localhost:3001/api/all/images/${product.productid.image}`}
                      alt={product.productid.productName}
                    />
                    <div className="flex flex-col justify-between w-full pb-4">
                      <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                          <h3 className="text-sm font-semibold leadi sm:pr-8">
                            {product.productid.productName}
                          </h3>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold">
                            {"$" + product.productid.price}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-semibold">
                            {`Quantity: ${product.quantity} `}
                          </span>
                        </div>
                      </div>

                      <div className="flex text-sm divide-x">
                        <button
                          type="button"
                          className="flex items-center px-2 py-1 pl-0 space-x-1"
                          onClick={() =>
                            handleRemoveFromCart(product.productid._id)
                          }
                        >
                          <RiDeleteBinLine className="w-4 h-4 fill-current" />
                          <span>Remove</span>
                        </button>
                        <button
                          type="button"
                          className="flex items-center px-2 py-1 space-x-1"
                        >
                          <IoMdHeartEmpty className="w-4 h-4 fill-current" />
                          <span>Add to favorites</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="space-y-1 text-right">
              <p>
                Total amount:
                <span className="font-semibold">
                  {"$" +
                    cartItems.cartItems.reduce(
                      (a, c) => a + c.productid.price,
                      0
                    )}
                </span>
              </p>
              <p className="text-sm dark:text-gray-400">
                Not including taxes and shipping costs
              </p>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                className="text-red hover:before:bg-red border-blue-500 relative h-[50px] w-40 overflow-hidden border bg-blue-900 px-3 text-gray-100 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:border-red-500
            hover:before:left-0 hover:before:w-full"
              >
                <span className="relative z-10">Checkout</span>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
