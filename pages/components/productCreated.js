import { useState, useEffect } from "react";
import { useProductStore } from "../states/products";
import { add, get } from "../api/products";

export default function Create({ show, onClose }) {
  const setProducts = useProductStore((s) => s.setProducts);
  const [product_name, setProductName] = useState("");
  const [product_desc, setProductDesc] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  if (!show) return null;

  const save = async () => {
    try {
      const result = await add({ product_name, product_desc, price });
      setProducts(await get());
      onClose();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
      <div className="bg-gray-200 rounded-lg shadow-lg max-w-sm w-full mx-4 md:mx-0">
        <div className="p-6">
          <h3 className="text-xl font-semibold text-black mb-4">Add Product</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 text-white"
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 text-white"
              onChange={(e) => setProductDesc(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price
            </label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-lg p-2 text-white"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              İptal
            </button>
            <button
              onClick={save}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
