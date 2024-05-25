import React from "react";

const FullScreenModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="flex flex-col w-full h-full bg-white">
        <button onClick={onClose} className="self-end p-4">
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default FullScreenModal;
