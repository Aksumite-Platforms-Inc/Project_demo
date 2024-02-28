import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom"; // Add this import statement
const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className=" flex flex-col justify-start py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Create an account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            {/* Change the anchor tags to Link components */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-5 text-gray-700 dark:text-gray-300"
              >
                First Name
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="name"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-5 text-gray-700 dark:text-gray-300"
              >
                Last Name
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="name"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700 dark:text-gray-300"
              >
                Email Address
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="email"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <div className="mt-1 rounded-md shadow-sm relative">
                <input
                  id="password"
                  type={isPasswordVisible ? "text" : "password"}
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                <span
                  id="togglePassword"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer z-10"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? <FiEye /> : <FiEyeOff />}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm leading-5">
                <p className="text-gray-500 dark:text-gray-300">
                  By creating an account, you agree to our
                  <Link
                    to="/terms"
                    className="font-medium mx-2 text-sky-600 hover:text-sky-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Terms
                  </Link>
                  and
                  <Link
                    to="/privacy"
                    className="font-medium mx-2 text-sky-600 hover:text-sky-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div>
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 focus:outline-none focus:border-sky-700 focus:shadow-outline-indigo active:bg-sky-700 transition duration-150 ease-in-out"
                >
                  Sign up
                </button>
              </span>
            </div>
            <div className="text-sm leading-5 dark:text-gray-300 text-center">
              Already have an account?
              <Link
                to="/signin"
                className="font-medium mx-2 text-sky-600 hover:text-sky-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
