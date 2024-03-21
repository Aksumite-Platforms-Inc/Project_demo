import React, { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useCartContext } from "../../../../Context/CartContext";
import { addDeal } from "../../../../service/deals.services";

function AddDealsModal({ showModal, toggleModal }) {
  const [data, setData] = useState({
    title: "",
    description: "",
    discount: "",
    startDate: "",
    endDate: "",
    isActive: "",
  });
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useCartContext();
  const { title, description, discount, startDate, endDate, isActive } = data;
  const token = localStorage.getItem("token");
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await addDeal(data, token);
      console.log(response);
      setLoading(false);
      dispatch({
        type: "SET_TOAST",
        toasts: {
          open: true,
          message: "deals added successfully",
          type: "success",
        },
      });
    } catch (err) {
      console.error(err);
      setLoading(false);
      dispatch({
        type: "SET_TOAST",
        toasts: {
          open: true,
          message: err.message,
          type: "error",
        },
      });
    }
  };
  return (
    <>
      <div
        className={`
        ${showModal ? "flex" : "hidden"}
              overflow-x-hidden overflow-y-auto fixed top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center h-modal sm:h-full"
        id="add-product-modal`}
      >
        <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="bg-white rounded-lg shadow relative">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold">Add Deals</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="add-product-modal"
                onClick={toggleModal}
              >
                <IoMdClose className="w-6 h-6" />
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-full ">
                    <label
                      htmlFor="title"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="Title"
                      required
                      value={title}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="startDate"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Start Date
                    </label>
                    <input
                      type="datetime-local"
                      name="startDate"
                      id="startDate"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="Start Date"
                      required
                      value={startDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="startDate"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      End Date
                    </label>
                    <input
                      type="datetime-local"
                      name="endDate"
                      id="endDate"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="End Date"
                      required
                      value={endDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="discount"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Discount
                    </label>
                    <input
                      type="number"
                      name="discount"
                      id="discount"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="discount"
                      required
                      value={discount}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="status"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Status
                    </label>
                    <input
                      type="text"
                      name="isActive"
                      id="status"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="Status"
                      required
                      value={isActive}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="description"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows="6"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                      placeholder="Write some details about the deals"
                      required
                      value={description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                {/* <!-- Modal footer --> */}
                <div className="p-6 border-t border-gray-200 rounded-b">
                  <button
                    className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    type="submit"
                  >
                    {loading ? "Adding Deals..." : "Add Deals"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddDealsModal;
