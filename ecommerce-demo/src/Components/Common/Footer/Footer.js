import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedin,
  FaHome,
} from "react-icons/fa";
import { MdEmail, MdLocalPrintshop } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoIosPaperPlane } from "react-icons/io";
const Footer = () => {
  return (
    <footer class="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div class="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div class="flex justify-center">
          <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaFacebook />
          </a>
          <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaTwitter />
          </a>
          <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaGooglePlusG />
          </a>
          <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaInstagram />
          </a>
          <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div class="mx-6 py-10 text-center md:text-left">
        <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="ml-14">
            <h6 class="mb-4 flex items-center justify-center font-semibold  md:justify-start">
              <IoIosPaperPlane className="mr-2" />
              About us
            </h6>
            <p>
              Axum Online Shop: Your One-Stop Destination for Curated
              Collections of Top-Tier Products, from Fashion to Tech Gadgets,
              Conveniently Accessible at Your Fingertips.
            </p>
          </div>

          <div class="ml-14">
            <h6 class="mb-4 flex justify-center font-semibold   md:justify-start">
              FAQ
            </h6>
            <p class="mb-4">
              <a
                href="#!"
                class="text-neutral-600 hover:text-sky-600 dark:text-neutral-200">
                1. How can I place an order?
              </a>
            </p>
            <p class="mb-4">
              <a
                href="#!"
                class="text-neutral-600  hover:text-sky-600 dark:text-neutral-200">
                2. What payment methods do you accept?
              </a>
            </p>
            <p class="mb-4">
              <a
                href="#!"
                class="text-neutral-600  hover:text-sky-600 dark:text-neutral-200">
                3. How can I track my order?
              </a>
            </p>
            <p class="mb-4">
              <a
                href="#!"
                class="text-neutral-600  hover:text-sky-600 dark:text-neutral-200">
                4. Do you offer international shipping?
              </a>
            </p>
            <p>
              <a
                href="#!"
                class="text-neutral-600  hover:text-sky-600 dark:text-neutral-200">
                5. What is your return policy?
              </a>
            </p>
          </div>
          <div className="ml-14">
            <h6 class="mb-4 flex justify-center font-semibold  md:justify-start">
              Contact
            </h6>
            <p class="mb-4 flex items-center justify-center md:justify-start">
              <FaHome className="mr-2" />
              Addis Ababa, Ethiopia
            </p>
            <p class="mb-4 flex items-center justify-center md:justify-start">
              <MdEmail className="mr-2" />
              axum@gmail.com
            </p>
            <p class="mb-4 flex items-center justify-center md:justify-start">
              <FaPhone className="mr-2" />
              0091234561
            </p>
            <p class="flex items-center justify-center md:justify-start">
              <MdLocalPrintshop className="mr-2" />
              +1-907-555-1234
            </p>
          </div>
        </div>
      </div>

      <div className="terms flex justify-between px-4 bg-gray-200">
        <span>© Axum Shoping 2024. All rights reserved.</span>
        <span className="hover:underline">
          <a href="#">Terms· Privacy Policy</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
