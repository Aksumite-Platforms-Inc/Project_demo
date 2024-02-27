import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
const SignIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="  bg-gray-100 flex flex-col justify-start py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700">
                Email address
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="email"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700">
                Password
              </label>
              <div className="mt-1 rounded-md shadow-sm relative">
                <input
                  id="password"
                  type={isPasswordVisible ? "text" : "password"}
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
                <span
                  id="togglePassword"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer z-10"
                  onClick={togglePasswordVisibility}>
                  {isPasswordVisible ? <FiEye /> : <FiEyeOff />}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm leading-5 text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-5">
                <a className="font-medium text-sky-600 hover:text-sky-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 focus:outline-none focus:border-sky-700 focus:shadow-outline-indigo active:bg-sky-700 transition duration-150 ease-in-out">
                  Sign in
                </button>
              </span>
            </div>

            <div className="text-sm leading-5">
              If you don't have an account,
              <a
                href="/signup"
                className="font-medium text-sky-600 hover:text-sky-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                Create account?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
