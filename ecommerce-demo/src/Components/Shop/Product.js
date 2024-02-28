import Category from "./Category";
import product0 from "../../assets/images/product-0.jpg";
import product1 from "../../assets/images/product-1.jpg";
import product2 from "../../assets/images/product-2.jpg";
const Product = () => (
  <section className="overflow-hidden pt-20 pb-2 lg:pt-[120px] lg:pb-[10px] bg-white dark:bg-dark">
    <div className="flex flex-col items-center justify-center max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <span className="block mb-4 text-xs font-bold text-gray-500 dark:text-gray-500">
        the best products for you
      </span>
      <h2 className="mb-5 text-3xl font-bold text-dark dark:text-black sm:text-[40px]/[48px] ">
        Find the best products for you
      </h2>
      <p className="mb-5 text-base text-body-color dark:text-dark-6">
        Whether you're looking for specific features, price ranges, or brands,
        our filters help you quickly narrow down options, so you can find
        exactly what you need with ease.
      </p>
    </div>
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl bg-gray-100 py-4 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between -mx-4">
        <div className="w-full px-4 lg:w-6/12">
          <div className="flex items-center -mx-3 sm:-mx-4">
            <div className="w-full px-3 sm:px-4 xl:w-1/2">
              <div className="py-3 sm:py-4">
                <img src={product2} alt="" className="w-1/2 rounded-2xl" />
              </div>
              <div className="py-3 sm:py-4">
                <img src={product1} alt="" className="w-1/2 rounded-2xl" />
              </div>
            </div>
            <div className="w-full px-3 sm:px-4 xl:w-1/2 -ml-8">
              <div className="relative z-10 my-4">
                <img src={product0} alt="" className="w-full rounded-2xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
          <div className="mt-10 lg:mt-0">
            <span className="block mb-4 text-lg font-bold text-red-500 dark:text-red-500 opacity-80">
              UP TO 70%
            </span>
            <h2 className="mb-5 text-3xl font-bold text-dark dark:text-gray-100 sm:text-[40px]/[48px]">
              Get the best deals
            </h2>
            <p className="mb-5 text-base text-body-color dark:text-gray-200">
              Whether you're looking for specific features, price ranges, or
              brands, our filters help you quickly narrow down options, so you
              can find exactly what you need with ease.
            </p>

            <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
              <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full dark:bg-red-500 dark:text-white dark:hover:text-white dark:hover:before:bg-red-500 dark:hover:before:w-full">
                <span className="relative z-10">Shop Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Category quantity={4} />
  </section>
);

export default Product;
