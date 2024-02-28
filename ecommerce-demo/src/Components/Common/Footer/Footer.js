import React from "react";
import { Link } from "react-router-dom";
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
    <footer className="bg-neutral-100 text-center text-neutral-600  lg:text-left dark:bg-neutral-600 dark:text-neutral-200">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center">
          <Link to="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaFacebook />
          </Link>
          <Link to="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaTwitter />
          </Link>
          <Link to="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaGooglePlusG />
          </Link>
          <Link to="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaInstagram />
          </Link>
          <Link to="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <FaLinkedin />
          </Link>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="ml-14">
            <h6 className="mb-4 flex items-center justify-center font-semibold  md:justify-start">
              <IoIosPaperPlane className="mr-2" />
              About us
            </h6>
            <p>
              Axum Online Shop: Your One-Stop Destination for Curated
              Collections of Top-Tier Products, from Fashion to Tech Gadgets,
              Conveniently Accessible at Your Fingertips.
            </p>
          </div>

          <div className="ml-14">
            <h6 className="mb-4 flex justify-center font-semibold   md:justify-start">
              FAQ
            </h6>
            <ol className="hover:*:underline leading-5 list-decimal ">
              <li className="mb-4">
                <Link
                  to="#!"
                  className="text-neutral-600 hover:text-sky-600 dark:text-neutral-200 "
                >
                  How can I place an order?
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="#!"
                  className="text-neutral-600  hover:text-sky-600 dark:text-neutral-200"
                >
                  What payment methods do you accept?
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="#!"
                  className="text-neutral-600  hover:text-sky-600 dark:text-neutral-200"
                >
                  How can I track my order?
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="#!"
                  className="text-neutral-600  hover:text-sky-600 dark:text-neutral-200"
                >
                  Do you offer international shipping?
                </Link>
              </li>
              <li>
                <Link
                  to="#!"
                  className="text-neutral-600  hover:text-sky-600 dark:text-neutral-200"
                >
                  What is your return policy?
                </Link>
              </li>
            </ol>
          </div>

          <div className="ml-14">
            <h6 className="mb-4 flex justify-center font-semibold  md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaHome className="mr-2" />
              Addis Ababa, Ethiopia
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <MdEmail className="mr-2" />
              axum@gmail.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaPhone className="mr-2" />
              0091234561
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <MdLocalPrintshop className="mr-2" />
              +1-907-555-1234
            </p>
          </div>
        </div>
      </div>

      <div className="terms flex justify-between px-4 bg-gray-200">
        <span>© Aksumite Shoping 2024. All rights reserved.</span>
        <span className="hover:underline">
          <Link to="#">Terms· Privacy Policy</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
