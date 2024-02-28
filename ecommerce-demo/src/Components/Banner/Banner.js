import { useState, useEffect } from "react";
import cloth from "../../assets/images/cloth.png";
import cloth2 from "../../assets/images/cloth2.png";
import cloth3 from "../../assets/images/cloth3.png";
import cloth4 from "../../assets/images/cloth4.png";
import product6 from "../../assets/images/product-6.png";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
const Banner = ({ title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [cloth, cloth2, cloth3, cloth4, product6];
  const handleArrowClick = (increment) => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + increment + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleArrowClick(1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-12 pb-12 sm:pb-16 lg:pt-8 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          <div>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-5xl font-pj">
                {title ? (
                  <>
                    <NavLink to=".." className="text-red-500">
                      Home/
                    </NavLink>
                    {title}
                  </>
                ) : (
                  "Welcome to Aksumite Online Shop"
                )}
              </h1>
              <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                Aksumite online shop your one-stop destination for curated
                collection of top-tier products, from fashion to tech gadgets,
                conveniently accessible at your fingertips.
              </p>
              {title !== "services" && title !== "about" && (
                <>
                  {title ? (
                    <>
                      <span className="block mt-6 text-xs font-bold text-gray-500 dark:text-gray-500">
                        Add coupon code to get a big discount!
                      </span>
                      <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 mt-8 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="XXXX-XXXX-XXXX"
                          className="block w-full px-4 py-2 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent placeholder-opacity-50"
                          required=""
                        />
                        <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                          <button
                            type="submit"
                            className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                      <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
                        <span className="relative z-10">Shop Now</span>
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <div>
            <div className="relative">
              <img
                className="w-full transition-all duration-500 transform hover:scale-110 lg:scale-100 object-contain rounded-lg h-[520px]"
                src={images[currentImageIndex]}
                alt=""
              />
              <div className="absolute inset-0 flex justify-between items-center">
                <MdKeyboardArrowLeft
                  className="text-5xl text-gray-900 cursor-pointer bg-white rounded-full p-3 hover:bg-gray-200 transition-all duration-300"
                  onClick={() => handleArrowClick(-1)}
                />
                <MdKeyboardArrowRight
                  className="text-5xl text-gray-900 cursor-pointer bg-white rounded-full p-3 hover:bg-gray-200 transition-all duration-300"
                  onClick={() => handleArrowClick(1)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-24 text-black cursor-pointer">
          <div className="h-16 w-8 border-2 border-gray-400 rounded-full relative">
            <div className="h-4 w-4 border-2 border-gray-400 rounded-full absolute top-5 wheel"></div>
          </div>
          <div className="flex flex-col">
            <MdKeyboardArrowDown className="block -mb-2 text-2xl text-gray-700 animate-bounce" />
            <MdKeyboardArrowDown className="block -my-2 text-2xl text-gray-700 animate-bounce" />
            <MdKeyboardArrowDown className="block -my-2 text-2xl text-gray-700 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
