import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { useCartContext } from "../../../../Context/CartContext";
import { getAllDeals } from "../../../../service/deals.services";
import DeleteDealsModal from "./DeleteDealsModal";
import EditDealsModal from "./EditDealsModal";

function DealsList() {
  const [data, setData] = useState([]);
  const [deals, setDeals] = useState({});
  const { state, dispatch } = useCartContext();
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const token = localStorage.getItem("token");
  const options = {
    minute: "numeric",
    hour: "numeric",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllDeals(token);
      setData(response);
    };
    fetchData();
  }, [state]);
  const editToggleModal = (deal) => {
    setEditModal(!editModal);
    setDeals(deal);
  };
  const deleteToggleModal = (deal_id) => {
    setDeleteModal(!deleteModal);
    setDeals(deal_id);
  };
  return (
    <>
      {data.map((deal) => (
        <tr class="hover:bg-gray-100" key={deal._id}>
          <td class="p-4 w-4">
            <div class="flex items-center">
              <input
                id="checkbox-{{ .id }}"
                aria-describedby="checkbox-1"
                type="checkbox"
                class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"
              />
              <label for="checkbox-{{ .id }}" class="sr-only">
                checkbox
              </label>
            </div>
          </td>
          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
            <div class="text-base font-semibold text-gray-900">{deal._id}</div>
          </td>
          <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">
            {deal.title}
          </td>
          <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">
            {deal.description.slice(0, 30).concat("...")}
          </td>
          <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">
            {`${deal.discount}%`}
          </td>
          <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">
            {new Date(deal.startDate).toLocaleDateString("en-US", options)}
          </td>
          <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">
            {new Date(deal.endDate).toLocaleDateString("en-US", options)}
          </td>
          <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">
            {deal.isActive ? "Active" : "inActive"}
          </td>
          <td class="p-4 whitespace-nowrap space-x-2">
            <button
              type="button"
              data-modal-toggle="product-modal"
              class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
              onClick={() => editToggleModal(deal)}
            >
              <CiEdit class="mr-2" />
              Edit item
            </button>
            <button
              type="button"
              data-modal-toggle="delete-product-modal"
              class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
              onClick={() => deleteToggleModal(deal._id)}
            >
              <RiDeleteBin6Line class="mr-2" />
              Delete item
            </button>
          </td>
        </tr>
      ))}
      {editModal && (
        <EditDealsModal
          editModal={editModal}
          toggleModal={editToggleModal}
          deals={deals}
        />
      )}
      {deleteModal && (
        <DeleteDealsModal
          deleteModal={deleteModal}
          toggleModal={deleteToggleModal}
          dealsId={deals}
        />
      )}
    </>
  );
}

export default DealsList;
