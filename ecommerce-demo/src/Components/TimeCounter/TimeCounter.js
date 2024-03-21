import { useState, useEffect } from "react";

import CountdownTimer from "./CountdownTimer";
import { Link } from "react-router-dom";
import { getAllDeals } from "../../service/deals.services";

const TimeCounter = () => {
  // const totalSeconds = 2 * 24 * 3600 + 10 * 3600 + 34 * 60 + 60;
  const [deal, setdeal] = useState({
    remainingSeconds: 0,
    title: "",
    description: "",
    discount: 0,
    isActivated: false,
  });
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchDeals = async () => {
      const deals = await getAllDeals();

      const startDate = new Date(deals[0].startDate).getTime();
      const endDate = new Date(deals[0].endDate).getTime();
      const totalSeconds = Math.floor((endDate - startDate) / 1000);
      setdeal({
        ...deal,
        remainingSeconds: totalSeconds,
        title: deals[0].title,
        description: deals[0].description,
        discount: deals[0].discount,
        isActivated: deals[0].isActive,
      });
    };
    const interval = setInterval(() => {
      setdeal((prev) => {
        return {
          ...prev,
          remainingSeconds: prev.remainingSeconds - 1,
        };
      });
    }, 1000);
    fetchDeals();
    return () => clearInterval(interval);
  }, []);
  const { remainingSeconds, title, description, discount } = deal;
  const days = Math.floor(remainingSeconds / (24 * 3600));
  const hours = Math.floor((remainingSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  return (
    <>
      {deal.isActivated ? (
        <div className="w-full py-12  sm:py-16 lg:py-20 bg-hot bg-center bg-[#e4e7ed] ">
          <div className="flex items-center justify-center w-full px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="max-w-md mx-auto text-center">
                <div className="max-w-md mx-auto text-center">
                  <CountdownTimer
                    days={days}
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                  />
                  <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl text-center">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 sm:text-base text-center">
                    {description}
                  </p>
                  <p className="mt-2 text-lg font-bold text-gray-900 sm:text-xl text-center">
                    {discount}% off
                  </p>
                  <Link
                    to="/shop"
                    className="inline-block w-40 py-2 mt-6 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-300"
                  >
                    Shop now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full py-12  sm:py-16 lg:py-20 bg-hot bg-center bg-[#e4e7ed] ">
          <div className="flex items-center justify-center w-full px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="max-w-md mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl text-center">
                  No deals available
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TimeCounter;
