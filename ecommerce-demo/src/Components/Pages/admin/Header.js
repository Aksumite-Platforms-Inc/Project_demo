import React, { useState } from "react";
import { useCartContext } from "../../../Context/CartContext";
import { GrUserAdmin } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const {
    state: { user },
  } = useCartContext();
  return (
    <>
      <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 -mb-px">
            <div className="flex">
              <button
                className="text-slate-500 hover:text-slate-600 lg:hidden"
                aria-controls="sidebar"
                aria-expanded={sidebarOpen}
                onClick={(e) => {
                  e.stopPropagation();
                  setSidebarOpen(!sidebarOpen);
                }}
              >
                <CiMenuBurger className="w-6 h-6" />
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <div>
                <button
                  className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full ml-3 ${
                    searchModalOpen && "bg-slate-200"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSearchModalOpen(true);
                  }}
                >
                  <IoSearchOutline className="w-5 h-5" />
                </button>
              </div>
              <div className="relative inline-flex">
                <button
                  className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full
                     bg-slate-200"
                  }`}
                >
                  <IoIosNotificationsOutline className="w-5 h-5" />
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white dark:border-[#182235] rounded-full"></div>
                </button>
              </div>
              <hr className="w-px h-6 bg-slate-200 dark:bg-slate-700 border-none" />
              {user && user.isAdmin && (
                <div className="relative inline-flex">
                  <button
                    className={`mx-2 flex items-center justify-center  hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full`}
                  >
                    <GrUserAdmin className="w-4 h-4 mr-2" />{" "}
                    <div
                      className=" 
                    text-lg font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-opacity-50 dark:focus:ring-gray-600"
                    >
                      {user.username}
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
