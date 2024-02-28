import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import logo from "../../../assets/images/logo.png";
import { useCartContext } from "../../../Context/CartContext";
import Cart from "../../Shop/Cart";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [{ basket }] = useCartContext();
  const [cartToggle, setCartToggle] = useState(false);
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/services", text: "Services" },
    { to: "/shop", text: "Shop" },
  ];

  return (
    <header className="py-4 md:py-6 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              <img className="w-auto h-8" src={logo} alt="logo" />
              <span className="text-xl  text-gray-900 ">ksumite Shop </span>
            </NavLink>
          </div>

          <div className="flex lg:hidden">
            <button
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>

          <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-opacity-50 dark:focus:ring-gray-600"
              >
                {link.text}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
            <NavLink
              to="/signin"
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-opacity-50 dark:focus:ring-gray-600"
            >
              Sign in
            </NavLink>
            <NavLink
              to="/signup"
              className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:border-gray-600"
            >
              Create account
            </NavLink>

            <div
              className="text-gray-900 relative py-2 text-base font-medium transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 cursor-pointer dark:text-gray-400 dark:hover:text-opacity-50 dark:focus:ring-gray-600"
              onClick={() => setCartToggle(!cartToggle)}
            >
              <div className="-top-2 absolute left-4">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                  {basket?.length || 0}
                </p>
              </div>
              <FaShoppingCart className="w-6 h-6" />
            </div>

            {cartToggle && <Cart />}
          </div>
        </div>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:hidden mt-4 absolute w-full px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-md left-0 z-50 dark:bg-gray-800`}
        >
          <div className="grid gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 hover:bg-gray-800 hover:text-white focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-opacity-50 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                {link.text}
              </NavLink>
            ))}

            <NavLink
              to="/signin"
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 hover:bg-gray-800 hover:text-white focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-opacity-50 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              Sign in
            </NavLink>

            <NavLink
              to="/signup"
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 hover:bg-gray-800 hover:text-white focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-opacity-50 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              Create account
            </NavLink>

            <NavLink
              to="/cart"
              className="text-gray-900 relative py-2 text-base font-medium transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 hover:bg-gray-800 hover:text-white focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-opacity-50 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              state={{ cartToggle: true }}
            >
              <div className="-top-2 absolute left-4">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                  {basket?.length || 0}
                </p>
              </div>
              <FaShoppingCart className="w-6 h-6" />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
