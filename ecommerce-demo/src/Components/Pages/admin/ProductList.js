import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../service/products.services";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { useCartContext } from "../../../Context/CartContext";
import EditProductModal from "./EditProductModal";
import DeleteProductModal from "./DeleteProductModal";

function ProductList({ searchTerm }) {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState({});
  const { state, dispatch } = useCartContext();
  const [loading, setLoading] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(7);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllProducts();
      setData(response);
    };
    fetchData();
  }, [state]);

  const editToggleModal = (product) => {
    setEditModal(!editModal);
    setProduct(product);
  };

  const deleteToggleModal = (product_id) => {
    setDeleteModal(!deleteModal);
    setProduct(product_id);
  };
  const filteredProduct = data.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProduct.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {currentProducts.map((product) => (
        <tr className="hover:bg-gray-100" key={product._id}>
          <td className="p-4 w-4">
            <div className="flex items-center">
              <input
                id={`checkbox-${product._id}`}
                aria-describedby={`checkbox-${product._id}`}
                type="checkbox"
                className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"
              />
              <label htmlFor={`checkbox-${product._id}`} className="sr-only">
                checkbox
              </label>
            </div>
          </td>
          <td className=" whitespace-nowrap text-sm font-normal text-gray-500">
            <div className="text-base font-semibold text-gray-900">
              {product._id}
            </div>
          </td>
          <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
            {product.productName.slice(0, 20).concat("...")}
          </td>
          <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
            {product.brand}
          </td>
          <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
            {product.category}
          </td>
          <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
            {product.productDetails.slice(0, 30).concat("...")}
          </td>
          <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
            {`$${product.price.toFixed(2)}`}
          </td>
          <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
            {product.countInStock}
          </td>
          <td className="p-4 whitespace-nowrap space-x-2">
            <button
              type="button"
              data-modal-toggle="product-modal"
              className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
              onClick={() => editToggleModal(product)}
            >
              <CiEdit className="mr-2" />
              Edit item
            </button>
            <button
              type="button"
              data-modal-toggle="delete-product-modal"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center"
              onClick={() => deleteToggleModal(product._id)}
            >
              <RiDeleteBin6Line className="mr-2" />
              Delete item
            </button>
          </td>
        </tr>
      ))}
      <div className="flex justify-center mt-4">
        {data.length > productsPerPage && (
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
              { length: Math.ceil(data.length / productsPerPage) },
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
                currentPage === Math.ceil(data.length / productsPerPage)
              }
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              Next
            </button>
          </nav>
        )}
      </div>
      {editModal && (
        <EditProductModal
          editModal={editModal}
          toggleModal={editToggleModal}
          product={product}
        />
      )}
      {deleteModal && (
        <DeleteProductModal
          deleteModal={deleteModal}
          toggleModal={deleteToggleModal}
          productId={product}
        />
      )}
    </>
  );
}

export default ProductList;
