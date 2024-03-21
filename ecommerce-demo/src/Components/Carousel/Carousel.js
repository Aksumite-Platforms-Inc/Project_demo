import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import Rating from "react-rating-stars-component";
import { FaCartPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { responsive } from "./CarouselData";
import { getAllProducts } from "../../service/products.services";
import { addCart } from "../../service/cart.services";
const CarouselSlide = () => {
  const [products, setProducts] = useState([]);
  const {
    state: { basket },
    dispatch,
  } = useCartContext();
  const [hoveredProduct, setHoveredProduct] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  const token = localStorage.getItem("token");
  const handleAddToCart = async (product) => {
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
  };

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl flex flex-col gap-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Popular Products For Female
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
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
        >
          {products?.map(
            (product, index) =>
              product.category === "Women Clothing" && (
                <div
                  key={product.id}
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
                          className={`text-white transition-all duration-200 bg-gray-900 bg-opacity-50 rounded-full p-2 hover:bg-opacity-100 focus:outline-none focus:bg-opacity-100
                          `}
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
                        <Link to="." title="">
                          {product.productName}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          ></span>
                        </Link>
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
              )
          )}
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselSlide;
