import React from "react";

interface DeleteConfirmationModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  show,
  onClose,
  onConfirm,
}) => {
  return (
    <>
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-10 w-[40%] rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-4">Are you sure you want to delete this item?</p>
            <div className="flex justify-end text-right">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={onConfirm}
              >
                Confirm
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteConfirmationModal;
