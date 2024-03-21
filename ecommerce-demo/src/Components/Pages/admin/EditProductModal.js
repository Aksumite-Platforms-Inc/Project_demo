import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useCartContext } from "../../../Context/CartContext";
import { updateProduct } from "../../../service/products.services";

function EditProductModal({ editModal, toggleModal, product }) {
  const { state, dispatch } = useCartContext();
  const token = localStorage.getItem("token");
  const [data, setData] = useState({
    id: "",
    productName: "",
    category: "",
    brand: "",
    price: "",
    productDetails: "",
    countInStock: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setData({
      productName: product.productName,
      category: product.category,
      brand: product.brand,
      price: product.price,
      productDetails: product.productDetails,
      countInStock: product.countInStock,
      image: "",
    });
  }, [product]);
  const {
    productName,
    category,
    brand,
    price,
    productDetails,
    image,
    countInStock,
  } = data;
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
      const response = await updateProduct(formData, token, product._id);

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
              <h3 class="text-xl font-semibold">Edit product</h3>
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
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="product-name"
                      class="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="productName"
                      id="product-name"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
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
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="brand"
                      class="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Brand
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="Apple"
                      required
                      value={brand}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="price"
                      class="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="$2300"
                      required
                      value={price}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="count-in-stock"
                      class="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Count in stock
                    </label>
                    <input
                      type="number"
                      name="countInStock"
                      id="Count-in-stock"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      placeholder="$2300"
                      required
                      value={countInStock}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col-span-full">
                    <label
                      for="product-details"
                      class="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Product Details
                    </label>
                    <textarea
                      id="product-details"
                      name="productDetails"
                      rows="6"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                      placeholder="e.g. 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, Ram 16 GB DDR4 2300Mhz"
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
                        onChange={(e) =>
                          setData({
                            ...data,
                            image: e.target.files[0],
                          })
                        }
                      />
                    </div>
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

export default EditProductModal;
