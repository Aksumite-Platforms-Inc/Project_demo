import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import Rating from "react-rating-stars-component";
import { NavLink } from "react-router-dom";
import Trendign from "./Trendign";
import { useCartContext } from "../../Context/CartContext";
import { addCart } from "../../service/cart.services";
import { getAllProducts } from "../../service/products.services";
const Category = ({ quantity }) => {
  const {
    state: { basket },
    dispatch,
  } = useCartContext();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [category, setCategory] = useState("All Products");
  const [hoveredProduct, setHoveredProduct] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        console.log(response);
        if (quantity) setProducts(response.slice(4, quantity + 4));
        else setProducts(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [basket]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const filteredProducts =
    category === "All Products"
      ? products
      : products.filter((product) => product.category === category);
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const token = localStorage.getItem("token");
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAddToCart = async (product) => {
    try {
      const response = await addCart(null, token, product._id);
      dispatch({
        type: "SET_TOAST",
        toasts: {
          open: true,
          message: "Product added to cart",
          type: "success",
        },
      });
      dispatch({
        type: "ADD_TO_CART",
        item: product,
      });
      setHoveredProduct(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="py-12 bg-white sm:py-16 lg:py-20 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="mx-auto text-center">
            <Trendign />
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl text-center">
                Shop By Category
              </h2>
              <p className="mt-4 text-base font-normal leading-7 text-gray-600">
                select the category you want to shop from our store
              </p>
            </div>
            {!quantity && (
              <div className="w-full flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl text-center">
                  {quantity ? "Popular Products" : category}
                </h2>
                <select
                  className="flex px-4 py-2 mt-6 text-gray-900 bg-gray-100 border-none rounded-md focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 justify-end"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="All Products">All Products</option>
                  <option value="Featured products">Featured products</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Women Clothing">Women Clothing</option>
                  <option value="Men Clothing">Men Clothing</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Jewelry">Jewelry</option>
                </select>
              </div>
            )}
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts
              ?.filter((product) => {
                if (category === "All Products") return product;
                else if (product.category === category) return product;
              })
              ?.map((product, index) => (
                <div
                  key={product._id}
                  className="relative group"
                  onMouseEnter={() => setHoveredProduct(index)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="overflow-hidden aspect-w-1 aspect-h-1">
                    <img
                      className="object-cover w-full h-96 transition-all duration-300 group-hover:scale-125"
                      src={`https://aksumite-online-shop-ymwg.vercel.app/api/all/images/${product.image}`}
                      alt=""
                    />
                    {hoveredProduct === index && (
                      <div className="absolute inset-0 flex items-center justify-center z-50">
                        <button
                          className={`text-white transition-all duration-200 bg-gray-900 bg-opacity-50 rounded-full p-2 hover:bg-opacity-100 focus:outline-none focus:bg-opacity-100`}
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to cart
                          <FaCartPlus className="inline-block ml-2" />
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="flex items-start justify-between mt-4 space-x-4">
                    <div>
                      <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                        <a href="#" title="">
                          {product.productName}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </h3>
                      <div className="flex items-center mt-2.5 space-x-px">
                        <Rating
                          count={5}
                          size={16}
                          activeColor="#ffd700"
                          isHalf={true}
                          value={Math.floor(Math.random() * 5 + 1)}
                          edit={false}
                        />
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-2">
              {!quantity ? (
                Array.from({
                  length: Math.ceil(filteredProducts.length / productsPerPage),
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`px-3 py-1 rounded-md focus:outline-none ${
                      currentPage === index + 1
                        ? "bg-gray-900 text-white"
                        : "bg-gray-200 text-gray-900"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))
              ) : (
                <NavLink
                  to="/shop"
                  className="px-3 py-2 rounded-md focus:outline-none bg-gray-900 text-white hover:bg-opacity-80"
                >
                  Explore More
                </NavLink>
              )}
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
