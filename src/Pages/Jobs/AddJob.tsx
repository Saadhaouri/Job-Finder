import React from "react";
import { useForm } from "react-hook-form";
import JobModel from "../Data/Models/JobsModel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AddJobModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (data: JobModel) => Promise<void>;
  categories: string[]; // Add categories as a prop
  companies: string[]; // Add companies as a prop
}

const AddJobModal: React.FC<AddJobModalProps> = ({
  show,
  onClose,
  onSubmit,
  categories,
  companies,
}) => {
  const { reset, register, handleSubmit } = useForm<JobModel>();

  return (
    <>
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-10 w-[40%] rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl font-bold mb-4">Add New Job</h2>
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
                  {...register("title", { required: "Title is required" })}
                  placeholder="Title of Job"
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="category"
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="mt-1 p-2 border rounded-md w-full"
                >
                  <option value="" disabled selected>
                    Select Category
                  </option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company
                </label>
                <select
                  id="company"
                  {...register("company", { required: "Company is required" })}
                  className="mt-1 p-2 border rounded-md w-full"
                >
                  <option value="" disabled selected>
                    Select Company
                  </option>
                  {companies.map((company) => (
                    <option key={company} value={company}>
                      {company}
                    </option>
                  ))}
                </select>
              </div>
              <div className="footermodal flex justify-end text-right">
                <button
                  type="submit"
                  className="bg-blueColor text-white px-4 py-2 rounded-md"
                >
                  Add Job
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
      <ToastContainer />
    </>
  );
};

export default AddJobModal;
