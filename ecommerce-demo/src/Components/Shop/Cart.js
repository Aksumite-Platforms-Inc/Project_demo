import { useCartContext } from "../../Context/CartContext";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { useLocation } from "react-router-dom";
import Header from "../Common/Header/Header";
const Cart = () => {
  const [{ basket }, dispatch] = useCartContext();
  const location = useLocation();
  const cartToggle = location.state?.cartToggle || false;
  const handleRemoveFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <>
      {cartToggle && <Header />}
      <div
        className={`
       ${
         cartToggle
           ? "relative flex flex-col  items-center justify-center"
           : "absolute top-20 z-50 right-14 max-w-lg"
       }
      lg:px-8  bg-white py-4 shadow-lg rounded-md dark:bg-dark-2 max-h-[90vh] overflow-y-auto`}
      >
        {basket?.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
            <h2 className="text-2xl font-semibold">Your cart is empty</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              You have no items in your cart. Start adding items to your cart
            </p>
          </div>
        ) : (
          <>
            <ul>
              {basket?.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col py-6 sm:flex-row sm:justify-between"
                >
                  <div className="flex w-full space-x-2 sm:space-x-4">
                    <img
                      className="flex-shrink-0 object-cover w-12 h-12 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="flex flex-col justify-between w-full pb-4">
                      <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                          <h3 className="text-sm font-semibold leadi sm:pr-8">
                            {item.title}
                          </h3>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold">
                            {"$" + item.price}
                          </p>
                        </div>
                      </div>
                      <div className="flex text-sm divide-x">
                        <button
                          type="button"
                          className="flex items-center px-2 py-1 pl-0 space-x-1"
                          onClick={() => handleRemoveFromCart(item.id)}
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
                  {"$" + basket?.reduce((acc, item) => acc + item.price, 0)}
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
