import { Link } from "react-router-dom";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import Rating from "react-rating-stars-component";
import product1 from "../../assets/images/product-1.png";
import product2 from "../../assets/images/product-2.png";
import product3 from "../../assets/images/product-3.png";
import product4 from "../../assets/images/product-4.png";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import { useCartContext } from "../../Context/Cart";

const products = [
  {
    id: 10356,

    title: "Beoplay M5 Bluetooth Speaker",
    image: product1,
    price: 999.0,
    rating: 3.5,
    isNew: true,
  },
  {
    id: 10357,
    title: "Apple Smart Watch 6 - Special Edition",
    image: product2,
    price: 299.0,
    rating: 5,
    isNew: false,
  },
  {
    id: 10358,
    title: "Beylob 90 Speaker",
    image: product3,
    price: 129.0,
    rating: 4.5,
    isNew: false,
    salePrice: "99.00",
    sale: true,
  },
  {
    id: 10359,
    title: "Martino 75 Bluetooth",
    image: product4,
    price: 199.0,
    rating: 2.5,
    isNew: false,
  },
];
const Trendign = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [{ basket }, dispatch] = useCartContext();

  const handleAddToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      },
    });
    setHoveredProduct(null);
  };
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Trending Items
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600">
            Shop the latest products from the most popular items
          </p>
        </div>
        <div className="flex justify-end">
          <Link
            to="/shop"
            className="w-full text-right font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
          >
            See more items{" "}
            <HiMiniArrowLongRight className="inline-block w-6 h-6 text-gray-900" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              className="relative group"
              key={index}
              onMouseEnter={() => setHoveredProduct(index)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src={product.image}
                  alt=""
                />
                {hoveredProduct === index && (
                  <div className="absolute inset-0 flex items-center justify-center z-50">
                    <button
                      className={`text-white transition-all duration-200 bg-gray-900 bg-opacity-50 rounded-full p-2 hover:bg-opacity-100 focus:outline-none focus:bg-opacity-100 ${
                        basket.some((item) => item.id === product.id)
                          ? "cursor-not-allowed"
                          : ""
                      }`}
                      onClick={() => handleAddToCart(product)}
                      disabled={basket.some((item) => item.id === product.id)}
                    >
                      {basket.some((item) => item.id === product.id)
                        ? "Added"
                        : "Add to cart"}{" "}
                      <FaCartPlus className="inline-block ml-2" />
                    </button>
                  </div>
                )}
              </div>
              {product.isNew && (
                <div className="absolute left-3 top-3">
                  <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">
                    New
                  </p>
                </div>
              )}
              {product.sale && (
                <div className="absolute right-3 top-3">
                  <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-100 uppercase bg-gray-900 rounded-full">
                    Sale
                  </p>
                </div>
              )}
              <div className="flex items-start justify-between mt-4 space-x-4">
                <div>
                  <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    <a href="#" title="">
                      {product.title}
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
                      value={product.rating}
                      edit={false}
                    />
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    {product.price}
                  </p>
                  {product.salePrice && (
                    <del className="mt-0.5 text-xs sm:text-sm font-bold text-gray-500">
                      {product.salePrice}
                    </del>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trendign;
