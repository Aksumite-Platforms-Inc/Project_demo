import React, { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { addProduct } from "../../../service/products.services";
import { useCartContext } from "../../../Context/CartContext";

function AddProductModal({ showModal, toggleModal }) {
  const [formDatas, setFormDatas] = useState({
    productName: "",
    category: "clothing",
    brand: "",
    price: "",
    countInStock: "",
    productDetails: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useCartContext();
  const imageref = useRef(null);
  const {
    productName,
    category,
    brand,
    price,
    productDetails,
    image,
    countInStock,
  } = formDatas;
  const token = localStorage.getItem("token");
  const handleChange = (e) => {
    setFormDatas({ ...formDatas, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(image, "image");
      const formData = new FormData();
      formData.append("image", image);
      formData.append("productName", productName);
      formData.append("category", category);
      formData.append("brand", brand);
      formData.append("price", price);
      formData.append("productDetails", productDetails);
      formData.append("countInStock", countInStock);

      await addProduct(formData, token);
      setFormDatas({
        productName: "",
        category: "clothing",
        brand: "",
        price: "",
        countInStock: "",
        productDetails: "",
        image: "",
      });
      imageref.current.value = "";
      setLoading(false);
      dispatch({
        type: "SET_TOAST",
        toasts: {
          open: true,
          message: "Product added successfully",
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
              <h3 className="text-xl font-semibold">Add product</h3>
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
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="product-name"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="productName"
                      id="product-name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="Product Name"
                      required
                      value={productName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="category"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      required
                      value={category}
                      onChange={handleChange}
                    >
                      <option value="clothing">clothing</option>
                      <option value="Women Clothing">Women Clothing</option>
                      <option value="Shoes">Shoes</option>
                      <option value="Jewelry">Jewelry</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Featured Products">
                        Featured Products
                      </option>
                      <option value="Health & Beauty">Health & Beauty</option>
                      <option value="Home & Living">Home & Living</option>
                      <option value="Sports & Outdoors ">
                        Sports & Outdoors
                      </option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="brand"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Brand
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="brand"
                      required
                      value={brand}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="price"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="price"
                      required
                      value={price}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="countInStock"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Count In Stock
                    </label>
                    <input
                      type="number"
                      name="countInStock"
                      id="countInStock"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="countInStock"
                      required
                      value={countInStock}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="product-details"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Product Details
                    </label>
                    <textarea
                      id="product-details"
                      name="productDetails"
                      rows="6"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                      placeholder="Write some details about the product"
                      required
                      value={productDetails}
                      onChange={handleChange}
                    ></textarea>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="image"
                        className="text-sm font-medium text-gray-900 block mb-2"
                      >
                        Image
                      </label>
                      <input
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                        required
                        ref={imageref}
                        onChange={(e) =>
                          setFormDatas({
                            ...formDatas,
                            image: e.target.files[0],
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* <!-- Modal footer --> */}
                <div className="p-6 border-t border-gray-200 rounded-b">
                  <button
                    className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    type="submit"
                  >
                    {loading ? "Adding Product..." : "Add Product"}
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
export default AddProductModal;
