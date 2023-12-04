import React from "react";
import { useForm } from "react-hook-form";
import CompaniesModel from "../Data/Models/CompaniesModel";
import "react-toastify/dist/ReactToastify.css";

interface AddCompanyModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (data: CompaniesModel) => Promise<void>;
}

const AddCompany: React.FC<AddCompanyModalProps> = ({
  show,
  onClose,
  onSubmit,
}) => {
  const { register, handleSubmit } = useForm<CompaniesModel>();

  return (
    <>
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-10 w-[40%] rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl font-bold mb-4">Add New Company</h2>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  {...register("Title", { required: "Title is required" })}
                  placeholder="Title of Company"
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="logo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Logo URL
                </label>
                <input
                  type="text"
                  {...register("logo", { required: "Logo URL is required" })}
                  placeholder="Url of the logo"
                  className="mt-1 p-2 border rounded-md w-full"
                  autoComplete="off"
                />
              </div>
              <div className="footermodal flex justify-end text-right">
                <button
                  type="submit"
                  className="bg-blueColor text-white px-4 py-2 rounded-md"
                >
                  Add Company
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-300 text-gray-700 ml-2 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCompany;
