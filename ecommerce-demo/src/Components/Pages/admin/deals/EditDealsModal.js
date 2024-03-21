import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useCartContext } from "../../../../Context/CartContext";
import { updateDeal } from "../../../../service/deals.services";
import { formatDateTime } from "./formatDate";
function EditDealsModal({ editModal, toggleModal, deals }) {
  const { state, dispatch } = useCartContext();
  const token = localStorage.getItem("token");
  const [data, setData] = useState({
    title: "",
    description: "",
    discount: "",
    startDate: "",
    endDate: "",
    isActive: 0,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setData({
      title: deals.title,
      description: deals.description,
      discount: deals.discount,
      startDate: formatDateTime(deals.startDate),
      endDate: formatDateTime(deals.endDate),
      isActive: Number(deals.isActive),
    });
  }, [deals]);

  const { title, description, discount, startDate, endDate, isActive } = data;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await updateDeal(data, token, deals._id);
      console.log(response);
      setLoading(false);
      dispatch({
        type: "SET_TOAST",
        toasts: {
          open: true,
          message: "Product updated successfully",
          type: "success",
        },
      });
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
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);
  return (
    <>
      <div
        class={` ${editModal ? "flex" : "hidden"} 
         overflow-x-hidden overflow-y-auto fixed top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center h-modal sm:h-full"
        id="product-modal`}
      >
        <div class="relative w-full max-w-2xl px-4 h-full md:h-auto">
          <div class="bg-white rounded-lg shadow relative">
            <div class="flex items-start justify-between p-5 border-b rounded-t">
              <h3 class="text-xl font-semibold">Edit Deals</h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="product-modal"
                onClick={toggleModal}
              >
                <IoMdClose className="w-6 h-6" />
              </button>
            </div>

            <div class="p-6 space-y-6">
              <form onSubmit={handleSubmit}>
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-full">
                    <label
                      for="title"
                      class="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      required
                      value={title}
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
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="startDate"
                      class="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Start Date
                    </label>
                    <input
                      type="datetime-local"
                      name="startDate"
                      id="startDate"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      required
                      value={startDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="endDate"
                      class="text-sm font-medium text-gray-900 block mb-2"
                    >
                      End Date
                    </label>
                    <input
                      type="datetime-local"
                      name="endDate"
                      id="endDate"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      required
                      value={endDate}
                      onChange={handleChange}
                    />
                  </div>{" "}
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="discount"
                      class="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Discount
                    </label>
                    <input
                      type="number"
                      name="discount"
                      id="discount"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      required
                      value={discount}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="status"
                      class="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Status
                    </label>
                    <input
                      type="text"
                      name="isActive"
                      id="status"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      required
                      value={isActive}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="p-6 border-t border-gray-200 rounded-b">
                  <button
                    class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    type="submit"
                  >
                    {loading ? "Updating..." : "update"}
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

export default EditDealsModal;
