import React, { useState, useEffect } from "react";

export default function UpdateModal({ isOpen, onClose, onUpdate, product }) {
  const [formData, setFormData] = useState({
    product_name: "",
    product_desc: "",
    price: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        product_name: product.product_name || "",
        product_desc: product.product_desc || "",
        price: product.price || "",
      });
    }
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = () => {
    if (onUpdate) {
      onUpdate({ ...product, ...formData });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="modelConfirm"
      className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
    >
      <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white text-black max-w-md">
        <div className="flex justify-end p-2">
          <button
            onClick={onClose}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="p-4 pt-0 ">
          <h3 className="text-[36px] font-bold text-center mt-1 mb-6">
            Update Product
          </h3>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="product_name"
            value={formData.product_name}
            onChange={handleInputChange}
            placeholder="Product Name"
            className="mb-4 p-2 border text-white  border-gray-300 rounded-lg w-full"
          />
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            type="text_area"
            name="product_desc"
            value={formData.product_desc}
            onChange={handleInputChange}
            placeholder="Product Description"
            className="mb-4 p-2 border text-white  border-gray-300 rounded-lg w-full"
          />
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="mb-4 p-2 border text-white  border-gray-300 rounded-lg w-full"
          />
          <button
            onClick={handleUpdate}
            className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
          >
            Update
          </button>
          <button
            onClick={onClose}
            className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
