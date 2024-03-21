import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import { IoChevronForwardSharp } from "react-icons/io5";
import { MdInfoOutline, MdOutlineDelete } from "react-icons/md";
import DealsList from "./DealsList";
import { useState } from "react";
import AddDealsModal from "./AddDealsModal";
import { MdAdd } from "react-icons/md";
function Deals() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
        <div class="mb-1 w-full">
          <div class="mb-4">
            <nav class="flex mb-5" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 md:space-x-2">
                <li class="inline-flex items-center">
                  <a
                    href="#"
                    class="text-gray-700 hover:text-gray-900 inline-flex items-center"
                  >
                    <IoMdHome className="w-5 h-5 mr-2" />
                    Home
                  </a>
                </li>
                <li>
                  <div class="flex items-center">
                    <IoChevronForwardSharp className="w-4 h-4 text-gray-400" />
                    <a
                      href="#"
                      class="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium"
                    >
                      Deals
                    </a>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <IoChevronForwardSharp className="w-4 h-4 text-gray-400" />
                    <span
                      class="text-gray-400 ml-1 md:ml-2 text-sm font-medium"
                      aria-current="page"
                    >
                      List
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 class="text-xl sm:text-2xl font-semibold text-gray-900">
              All deals
            </h1>
          </div>
          <div class="sm:flex">
            <div class="hidden sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0">
              <form class="lg:pr-3" action="#" method="GET">
                <label for="deals-search" class="sr-only">
                  Search
                </label>
                <div class="mt-1 relative lg:w-64 xl:w-96">
                  <input
                    type="text"
                    name="email"
                    id="deals-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Search for deals"
                  />
                </div>
              </form>
              <div className="hidden md:flex pl-2 space-x-1">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center"
                ></a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center"
                >
                  <MdOutlineDelete className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center"
                >
                  <MdInfoOutline className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center"
                >
                  <BsThreeDotsVertical className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div class="flex items-center space-x-2 sm:space-x-3 ml-auto">
              <button
                type="button"
                data-modal-toggle="add-product-modal"
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2 text-center sm:ml-auto"
                onClick={toggleModal}
              >
                <MdAdd className="w-4 h-4 mr-2"></MdAdd>
                Add Deals
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden">
              <table className="table-fixed min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all"
                          aria-describedby="checkbox-1"
                          type="checkbox"
                          className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"
                        />
                        <label for="checkbox-all" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      title
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      discount
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      start date
                    </th>

                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      end date
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Actions
                    </th>
                    <th scope="col" className="p-4"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <DealsList />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {<AddDealsModal showModal={showModal} toggleModal={toggleModal} />}
    </>
  );
}
export default Deals;
