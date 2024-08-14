// components/FullScreenModal.js
import React from "react";

const FullScreenModal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className=" p-4 rounded shadow-lg w-full  relative">
        <button
          className="absolute top-[-40px] right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <h1 className="text-[36px] text-red-600">X</h1>
        </button>
        {children}
      </div>
    </div>
  );
};

export default FullScreenModal;
