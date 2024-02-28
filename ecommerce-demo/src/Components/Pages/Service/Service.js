import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import kidsFashion from "../../../assets/images/cloth.png";
import Fashion2 from "../../../assets/images/cloth1.png";
import men1 from "../../../assets/images/men1.png";
import men2 from "../../../assets/images/men2.png";
import men3 from "../../../assets/images/men3.png";
import men4 from "../../../assets/images/men4.png";

function Service() {
  return (
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mb-6">
      <h1 className="pt-10 text-center font-bold text-4xl pb-10 text-gradient bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
        Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Service
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 items-center gap-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg hover:scale-105 hover:rotate-3 transition-transform duration-300 object-cover h-64"
            src={kidsFashion}
            alt=""
          />
          <div className="p-5">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
              <FaQuoteLeft className="mr-2" /> Wide Product Selection in 2024
            </h5>
            <p className=" mb-3 font-normal text-gray-700 dark:text-gray-400">
              Kids fashion offers a delightful array of styles, colors, and
              trends.
            </p>
            <div className="relative inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#24a0ed] rounded-lg hover:bg-[#34a0ed] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-300">
              <span className="absolute top-0 left-0 right-0 bottom-0 bg-[#24a0ed] opacity-0 transform scale-0 rounded-lg transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></span>
              <span className="relative z-10">Read more</span>
            </div>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg hover:scale-105 hover:rotate-3 transition-transform duration-300 object-cover h-64"
            src={men1}
            alt=""
          />
          <div className="p-5">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
              <FaQuoteLeft className="mr-2" /> Wide Product Selection in 2024
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Kids fashion offers a delightful array of styles, colors, and
              trends.
            </p>
            <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#24a0ed] rounded-lg hover:bg-[#34a0ed] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg hover:scale-105 hover:rotate-3 transition-transform duration-300 object-cover h-64"
            src={men2}
            alt=""
          />
          <div className="p-5">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
              <FaQuoteLeft className="mr-2" /> Wide Product Selection in 2024
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Kids fashion offers a delightful array of styles, colors, and
              trends.
            </p>
            <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#24a0ed] rounded-lg hover:bg-[#34a0ed] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
            </div>
          </div>
        </div>
      </div>
      <div className="second-container pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 items-center gap-4">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg hover:scale-105 hover:rotate-3 transition-transform duration-300 object-cover h-64"
              src={men3}
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <FaQuoteLeft className="mr-2" /> Wide Product Selection in 2024
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Kids fashion offers a delightful array of styles, colors, and
                trends.
              </p>
              <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#24a0ed] rounded-lg hover:bg-[#34a0ed] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
              </div>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg hover:scale-105 hover:rotate-3 transition-transform duration-300 object-cover h-64"
              src={men4}
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <FaQuoteLeft className="mr-2" /> Wide Product Selection in 2024
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Kids fashion offers a delightful array of styles, colors, and
                trends.
              </p>
              <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#24a0ed] rounded-lg hover:bg-[#34a0ed] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg hover:scale-105 hover:rotate-3 transition-transform duration-300 object-cover h-64"
              src={Fashion2}
              alt=""
            />
            <div className="p-5">
              <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                <FaQuoteLeft className="mr-2" /> Wide Product Selection in 2024
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Kids fashion offers a delightful array of styles, colors, and
                trends.
              </p>
              <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#24a0ed] rounded-lg hover:bg-[#24a0ed] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
