import { useState, useEffect } from "react";
import cloth4 from "../../assets/images/cloth4.png";
import elec from "../../assets/images/electronics.png";
import furn from "../../assets/images/furniture.png";
import misc from "../../assets/images/mis.png";
import shoes from "../../assets/images/shoe.png";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
const Banner = ({ title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [cloth4, elec, furn, misc, shoes];
  const name = ["Cloth", "Electronics", "Furniture", "Miscellaneous", "Shoes"];
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
    <section className="pt-12 pb-12 sm:pb-16 lg:pt-8 bg-gray-100 dark:bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          <div>
            <div className="text-left md:text-center lg:text-left">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl sm:leading-tight lg:leading-tight lg:text-5xl font-pj">
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
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 sm:mt-8 font-inter text-left">
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
                          className="block w-full px-4 py-2 text-gray-900 dark:text-white placeholder-gray-900 dark:placeholder-gray-300 bg-transparent border border-gray-400 dark:border-gray-700 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent placeholder-opacity-50"
                          required=""
                        />
                        <div className="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                          <button
                            type="submit"
                            className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 dark:bg-gray-800 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600"
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
            <div className="relative  py-4">
              <img
                className="w-full transition-all duration-500 transform hover:scale-110 lg:scale-100 object-contain rounded-lg h-[540px]"
                src={images[currentImageIndex]}
                alt=""
              />
              <div className="w-full absolute flex justify-center items-center text-xl font-light text-gray-800 dark:text-white bottom-0 rounded-b-lg bg-white bg-opacity-20 dark:bg-gray-800 dark:bg-opacity-10 mt-10">
                <span className="text-gray-900 dark:text-white font-light text-xl ">
                  Aksumite
                  <span className="text-blue-500 font-bold border-b-2 border-blue-300 transition-all duration-300 text-2xl">
                    {" "}
                    {name[currentImageIndex]}
                  </span>{" "}
                  Collection
                </span>
              </div>
              <div className="absolute inset-0 flex justify-between items-center">
                <MdKeyboardArrowLeft
                  className="text-5xl text-gray-900 dark:text-black cursor-pointer bg-white rounded-full p-3 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition-all duration-300"
                  onClick={() => handleArrowClick(-1)}
                />
                <MdKeyboardArrowRight
                  className="text-5xl text-gray-900 dark:text-black  dark:hover:text-white cursor-pointer bg-white rounded-full p-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                  onClick={() => handleArrowClick(1)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-24 text-black dark:text-white cursor-pointer">
          <div className="h-16 w-8 border-2 border-gray-400 dark:border-gray-700 rounded-full relative">
            <div className="h-4 w-4 border-2 border-gray-400 dark:border-gray-700 rounded-full absolute top-5 wheel"></div>
          </div>
          <div className="flex flex-col">
            <MdKeyboardArrowDown className="block -mb-2 text-2xl text-gray-700 dark:text-gray-300 animate-bounce" />
            <MdKeyboardArrowDown className="block -my-2 text-2xl text-gray-700 dark:text-gray-300 animate-bounce" />
            <MdKeyboardArrowDown className="block -my-2 text-2xl text-gray-700 dark:text-gray-300 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
