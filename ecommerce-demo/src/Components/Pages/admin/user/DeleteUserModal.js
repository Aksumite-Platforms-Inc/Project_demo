import { Link } from "react-router-dom";
import { deleteUser } from "../../../../service/users.services";
import { useCartContext } from "../../../../Context/CartContext";

function DeleteUserModal({ deleteModal, toggleModal, userId }) {
  const token = localStorage.getItem("token");
  const {
    state: { user },
    dispatch,
  } = useCartContext();
  const handleDelete = async () => {
    if (user.userid === userId) {
      dispatch({
        type: "SET_TOAST",
        toasts: {
          open: true,
          message: "Admin User Can't be Deleted ",
          type: "error",
        },
      });
      return;
    }
    try {
      const response = await deleteUser(userId, token);
      dispatch({
        type: "SET_TOAST",
        toasts: {
          open: true,
          message: "User deleted successfully",
          type: "success",
        },
      });
    } catch (error) {
      console.log(error.message);
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
      <div
        className={`${
          deleteModal ? "flex" : "hidden"
        } overflow-x-hidden overflow-y-auto fixed top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center h-modal sm:h-full"
        id="delete-product-modal`}
      >
        <div className="relative w-full max-w-md px-4 h-full md:h-auto">
          <div className="bg-white rounded-lg shadow relative">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="delete-product-modal"
                onClick={toggleModal}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-6 pt-0 text-center">
              <svg
                className="w-20 h-20 text-red-600 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
                Are you sure you want to delete this User?
              </h3>
              <Link
                to="."
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
                onClick={() => {
                  handleDelete();
                  toggleModal();
                }}
              >
                Yes, I'm sure
              </Link>
              <Link
                to="."
                className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
                data-modal-toggle="delete-product-modal"
                onClick={toggleModal}
              >
                No, cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteUserModal;
