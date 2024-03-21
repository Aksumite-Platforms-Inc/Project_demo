import React, { useState } from "react";
import { MdAdd, MdOutlineDelete } from "react-icons/md";
import AddProductModal from "./AddProductModal";
import ProductList from "./ProductList";
import { MdInfoOutline } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
function Product() {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <nav className="flex mb-5" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="text-gray-700 hover:text-gray-900 inline-flex items-center"
                  >
                    <IoMdHome className="w-5 h-5 mr-2" />
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <IoChevronForwardSharp className="w-4 h-4 text-gray-400" />

                    <a
                      href="#"
                      className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium"
                    >
                      Admin
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <IoChevronForwardSharp className="w-4 h-4 text-gray-400" />
                    <span
                      className="text-gray-400 ml-1 md:ml-2 text-sm font-medium"
                      aria-current="page"
                    >
                      Products
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
              All products
            </h1>
          </div>
          <div className="block sm:flex items-center md:divide-x md:divide-gray-100">
            <form className="sm:pr-3 mb-4 sm:mb-0" action="#" method="GET">
              <label for="products-search" className="sr-only">
                Search
              </label>
              <div className="mt-1 relative sm:w-64 xl:w-96">
                <input
                  type="text"
                  name="email"
                  id="products-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Search for products"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </form>
            <div className="flex items-center sm:justify-end w-full">
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
              <button
                type="button"
                data-modal-toggle="add-product-modal"
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2 text-center sm:ml-auto"
                onClick={toggleModal}
              >
                <MdAdd className="w-4 h-4 mr-2"></MdAdd>
                Add product
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
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      brand
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      description
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      price
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      count in stock
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
                  <ProductList searchTerm={searchTerm} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Add Product Modal --> */}
      <AddProductModal showModal={showModal} toggleModal={toggleModal} />
      {/* <!-- End of Add Product Modal --> */}
    </>
  );
}

export default Product;
