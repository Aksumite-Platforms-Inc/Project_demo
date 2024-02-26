import { useState, useEffect } from "react";
import cloth from "../../assets/images/cloth.png";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
} from "react-icons/md";

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [cloth]; // Add more images here

  const handleLeftArrowClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="pt-12 pb-12 sm:pb-16 lg:pt-8 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          <div>
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                Welcome To Axum Online Shop
              </h1>
              <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                Axum online shop your one-stop destination for curated
                collection of top-tier products, from fashion to tech gadgets,
                conviniently acceesible at your fingertips.
              </p>
              <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
                  <span className="relative z-10">Shop Now</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <img
                className="w-full transition-all duration-500 transform hover:scale-110 lg:scale-100 object-cover rounded-lg h-full"
                src={images[currentImageIndex]}
                alt=""
              />
              <div className="absolute inset-0 flex justify-between items-center">
                <MdKeyboardArrowLeft
                  className="text-5xl text-gray-900 cursor-pointer bg-white rounded-full p-3 hover:bg-gray-200 transition-all duration-300"
                  onClick={handleLeftArrowClick}
                />
                <MdKeyboardArrowRight
                  className="text-5xl text-gray-900 cursor-pointer bg-white rounded-full p-3 hover:bg-gray-200 transition-all duration-300"
                  onClick={handleRightArrowClick}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center mt-24 text-black cursor-pointer">
          <div className=" h-16 w-8 border-2 border-gray-400 rounded-full relative">
            <div className=" h-4 w-4 border-2 border-gray-400 rounded-full absolute top-5 wheel"></div>
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
