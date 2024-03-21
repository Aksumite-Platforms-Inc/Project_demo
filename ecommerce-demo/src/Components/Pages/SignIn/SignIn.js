import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, Navigate, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import { loginUser } from "../../../service/users.services";
import Toast from "../../Toast/Toast";
import { useCartContext } from "../../../Context/CartContext";
const SignIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { state, dispatch } = useCartContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await loginUser(data);
      localStorage.setItem("token", response.token);
      setLoading(false);
      dispatch({
        type: "SET_TOAST",
        toasts: {
          open: true,
          message: "Logged in successfully",
          type: "success",
        },
      });
      navigate("/");
    } catch (error) {
      setLoading(false);
      dispatch({
        type: "SET_TOAST",
        toasts: {
          open: true,
          message: error.message,
          type: "error",
        },
      });
    }
  };

  return (
    <>
      <Toast />
      <div className="   flex flex-col justify-start py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-gray-700 dark:text-gray-300"
                >
                  Email address
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    required
                    className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    onChange={handleChange}
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
                    name="password"
                    value={data.password}
                    className="appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    onChange={handleChange}
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
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm leading-5 text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-5">
                  <Link
                    to="/forgot-password"
                    className="font-medium text-sky-600 hover:text-sky-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-500 focus:outline-none focus:border-sky-700 focus:shadow-outline-indigo active:bg-sky-700 transition duration-150 ease-in-out"
                  >
                    {loading ? "Loading..." : "Sign in"}
                  </button>
                </span>
              </div>

              <div className="text-sm leading-5 dark:text-gray-300 text-center">
                don't have an account?
                <Link
                  to="/signup" // Replace the <a> tag with <Link> and set the "to" prop to the desired URL
                  className="font-medium ml-2 text-sky-600 hover:text-sky-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Create account?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
