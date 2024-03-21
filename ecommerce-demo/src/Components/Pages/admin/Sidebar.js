import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import logo from "../../../assets/images/logo.png";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { MdOutlineDiscount } from "react-icons/md";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-100 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-gray-100 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <IoIosArrowRoundBack className="w-6 h-6" />
          </button>

          <NavLink
            end
            to="/"
            className="flex justify-center items-center text-slate-900"
          >
            <img src={logo} alt="logo" className="w-12 h-12" />
            ksumite Shop
          </NavLink>
        </div>

        <div className="space-y-8">
          <div>
            <ul className="mt-3">
              {/* Dashboard */}

              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("dashboard") && "bg-slate-400 "
                }`}
              >
                <Link
                  end
                  to="dashboard"
                  className={`block text-slate-600 truncate transition duration-150 ${
                    pathname.includes("dashboard")
                      ? "hover:text-black text-slate-900"
                      : "hover:text-black"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center">
                      <RxDashboard className="w-6 h-6" />
                      <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Dashboard
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
              {/* products */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("products") && "bg-slate-400"
                }`}
              >
                <Link
                  end
                  to="products"
                  className={`block text-slate-600 truncate transition duration-150 ${
                    pathname.includes("products")
                      ? "hover:text-black text-slate-900"
                      : "hover:text-black"
                  }`}
                >
                  <div className="flex items-center">
                    <MdOutlineProductionQuantityLimits className="w-6 h-6" />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Products controller
                    </span>
                  </div>
                </Link>
              </li>
              {/* users */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("users") && "bg-slate-400"
                }`}
              >
                <Link
                  end
                  to="users"
                  className={`block text-slate-600 truncate transition duration-150 ${
                    pathname.includes("users")
                      ? "hover:text-black text-slate-900"
                      : "hover:text-black"
                  }`}
                >
                  <div className="flex items-center">
                    <CiUser className="w-6 h-6" />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Users Controller
                    </span>
                  </div>
                </Link>
              </li>
              {/* deals */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("deals") && "bg-slate-400"
                }`}
              >
                <Link
                  end
                  to="deals"
                  className={`block text-slate-600 truncate transition duration-150 ${
                    pathname.includes("deals")
                      ? "hover:text-black text-slate-900"
                      : "hover:text-black"
                  }`}
                >
                  <div className="flex items-center">
                    <MdOutlineDiscount className="w-6 h-6" />
                    <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Deals Controller
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
