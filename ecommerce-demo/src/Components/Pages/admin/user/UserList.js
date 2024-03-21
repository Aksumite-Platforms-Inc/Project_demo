import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { getAllUsers } from "../../../../service/users.services";
import DeleteUserModal from "./DeleteUserModal";

function UserList({ searchTerm }) {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [deleteModal, setDeleteModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(7);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllUsers(token);
      setData(response);
    };
    fetchData();
  }, [token]);

  const deleteToggleModal = (user_id) => {
    setDeleteModal(!deleteModal);
    setUser(user_id);
  };

  const filteredUsers = data.filter((user) =>
    user.firstname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {currentUsers.map((user) => (
        <tr className="hover:bg-gray-100" key={user._id}>
          <td className="p-4 w-4">
            <div className="flex items-center">
              <input
                id={`checkbox-${user._id}`}
                aria-describedby={`checkbox-${user._id}`}
                type="checkbox"
                className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"
              />
              <label htmlFor={`checkbox-${user._id}`} className="sr-only">
                checkbox
              </label>
            </div>
          </td>
          <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
            <div className="text-base font-semibold text-gray-900">
              {user._id}
            </div>
          </td>
          <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
            {user.firstname}
          </td>
          <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
            {user.lastname}
          </td>
          <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
            {user.username}
          </td>
          <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
            {user.email}
          </td>
          <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
            {user.isAdmin ? "Admin" : "user"}
          </td>
          <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
            {new Date(user.createdAt).toLocaleDateString()}
          </td>
          <td className="p-4 whitespace-nowrap space-x-2">
            <button
              type="button"
              data-modal-toggle="delete-product-modal"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
              onClick={() => deleteToggleModal(user._id)}
            >
              <RiDeleteBin6Line className="mr-2" />
              Delete user
            </button>
          </td>
        </tr>
      ))}

      <div className="flex justify-center mt-4">
        {filteredUsers.length > usersPerPage && (
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              Previous
            </button>
            {Array.from(
              { length: Math.ceil(filteredUsers.length / usersPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                    currentPage === i + 1
                      ? "text-indigo-500 bg-indigo-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(filteredUsers.length / usersPerPage)
              }
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              Next
            </button>
          </nav>
        )}
      </div>

      <DeleteUserModal
        deleteModal={deleteModal}
        toggleModal={deleteToggleModal}
        userId={user}
      />
    </>
  );
}

export default UserList;
