import React from "react";
import lili from "../../../assets/images/lili.jpg";
import suzi from "../../../assets/images/suzi.jpg";
import meri from "../../../assets/images/meri.jpg";
import kasech from "../../../assets/images/kasech.jpg";

function About() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="">
          <h1 className="pt-5 text-center font-bold text-4xl pb-5">
            <span className="relative">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Us
              </span>
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
            </span>
          </h1>

          <div className="container mx-auto px-4 py-8">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Axumite Clothes Shopping Company
            </h2>
            <p className="text-lg mb-8">
              Axumite Clothes Shopping Company specializes in providing
              fashionable clothing options for kids, men, and girls. Our company
              is dedicated to offering high-quality garments that are trendy,
              comfortable, and cater to diverse styles and preferences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-4">
                <h3 className="text-2xl font-bold mb-4">For Kids:</h3>
                <p className="text-lg">
                  We understand the importance of dressing children in stylish
                  and age-appropriate clothing. Our collection for kids includes
                  a wide range of options, including trendy outfits, comfortable
                  everyday wear, and special occasion attire. From adorable
                  dresses and tops to durable jeans and shorts, we ensure that
                  our clothing for kids is not only fashionable but also
                  designed with their comfort and functionality in mind.
                </p>
              </div>

              <div className="bg-gray-100 p-4">
                <h3 className="text-2xl font-bold mb-4">For Men:</h3>
                <p className="text-lg">
                  Our men's collection features a variety of stylish and
                  on-trend clothing options. Whether you're looking for casual
                  wear, formal attire, or sporty outfits, we have you covered.
                  From smart shirts and trousers to comfortable t-shirts and
                  jeans, our range of men's clothing combines quality fabrics,
                  modern designs, and attention to detail to ensure that you can
                  dress confidently for any occasion.
                </p>
              </div>

              <div className="bg-gray-100 p-4">
                <h3 className="text-2xl font-bold mb-4">For Girls:</h3>
                <p className="text-lg">
                  Our girls' collection showcases an array of fashionable
                  clothing choices that cater to different tastes and
                  personalities. From cute dresses and skirts to trendy tops and
                  bottoms, our clothing for girls is designed to empower them to
                  express their individual style. We pay attention to the latest
                  fashion trends and incorporate them into our designs, ensuring
                  that girls can stay fashion-forward while feeling comfortable
                  and confident.
                </p>
              </div>
            </div>

            <p className="text-lg mt-8">
              At Axumite Clothes Shopping Company, we prioritize customer
              satisfaction and strive to provide an enjoyable shopping
              experience. We offer a user-friendly website and convenient
              ordering process, making it easy for our customers to explore our
              collection, select their desired items, and make purchases. Our
              commitment to quality extends to excellent customer service,
              ensuring that any queries or concerns are promptly addressed.
            </p>

            <p className="text-lg mt-8">
              We take pride in being a reliable and trusted clothing company,
              and we continuously update our inventory to bring you the latest
              fashion trends and styles. Whether you're shopping for your kids,
              yourself, or the little girls in your life, Axumite Clothes
              Shopping Company is here to provide you with fashionable clothing
              options that meet your needs and preferences.
            </p>
          </div>
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-1 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h1 className=" text-center font-bold text-4xl pb-5 text-gradient bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Team
              </span>
            </h1>
            <p className="text-lg mb-8">
              Axumite is a leading online cloth shopping destination that offers
              a wide range of stylish and affordable clothing options for men,
              women, and children
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transform transition-all duration-300">
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={lili}
                alt="lili"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Kasahun Ibrahim
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Finance Manager
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Kasahun drives the technical strategy of the flowbite platform
                  and brand.
                </p>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transform transition-all duration-300">
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={suzi}
                alt="Jese Avatar"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Suzi Eshetu
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Acountant
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Suzi drives the technical strategy of the flowbite platform
                  and brand.
                </p>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transform transition-all duration-300">
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={meri}
                alt="Michael Avatar"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Meron Musse
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Shift Manager
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Meron drives the technical strategy of the flowbite platform
                  and brand.
                </p>
              </div>
            </div>
            <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transform transition-all duration-300">
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={kasech}
                alt="Sofia Avatar"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Lili Melese
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  Marketing & Sale
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Lili drives the technical strategy of the flowbite platform
                  and brand.
                </p>
                <ul className="flex space-x-4 sm:mt-0"></ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
