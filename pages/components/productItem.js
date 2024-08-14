import React, { useState } from "react";
import RemoveModal from "./removeModal";
import UpdateModal from "./updateModal";
import { remove, update } from "../api/products";
import { useProductStore } from "../states/products";
import { get } from "../api/products";

export default function ProductItem(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState(null);

  const setProducts = useProductStore((s) => s.setProducts);

  const openModal = () => {
    setIsOpen(true);
    document.body.classList.add("overflow-y-hidden");
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-y-hidden");
  };

  const openUpdateModal = (product) => {
    setProductToUpdate(product);
    setIsUpdateModalOpen(true);
    document.body.classList.add("overflow-y-hidden");
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setProductToUpdate(null);
    document.body.classList.remove("overflow-y-hidden");
  };

  const rem = async (id) => {
    try {
      await remove(id);
      setProducts(await get());
      closeModal();
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  const updateProduct = async (updatedProduct) => {
    try {
      await update(updatedProduct.id, updatedProduct);
      setProducts(await get());
      closeUpdateModal();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="min-w-full ">
      <table className="min-w-full divide-y table-fixed">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-[14px] font-medium text-gray-300 uppercase w-1/4">
              Product Name
            </th>
            <th className="px-6 py-3 text-left text-[14px] font-medium text-gray-300 uppercase w-2/4">
              Description
            </th>
            <th className="px-6 py-3 text-left text-[14px] font-medium text-gray-300 uppercase w-1/4">
              Price
            </th>
            <th className="px-6 py-3 text-center text-[14px] font-medium text-gray-300 uppercase w-1/4">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y text-white">
          <tr>
            <td className="px-6 py-4 truncate max-w-xs">
              {props.data.product_name}
            </td>
            <td className="px-6 py-4 truncate max-w-xs">
              {props.data.product_desc}
            </td>
            <td className="px-6 py-4 truncate max-w-xs">{props.data.price}</td>
            <td className="px-6 py-4 truncate max-w-xs">
              <button
                className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                onClick={() => openUpdateModal(props.data)}
              >
                Edit
              </button>
              <button
                className="bg-rose-500 ml-4 text-white rounded-md px-4 py-2 hover:bg-rose-700 transition"
                onClick={openModal}
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <RemoveModal
        isOpen={isOpen}
        onClose={closeModal}
        onConfirm={() => rem(props.data.id)}
      />
      <UpdateModal
        isOpen={isUpdateModalOpen}
        onClose={closeUpdateModal}
        onUpdate={updateProduct}
        product={productToUpdate}
      />
    </div>
  );
}
