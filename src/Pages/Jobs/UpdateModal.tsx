// UpdateJobModal.tsx
import React from "react";
import { useForm } from "react-hook-form";
import JobModel from "../Data/Models/JobsModel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UpdateJobModalProps {
  show: boolean;
  onClose: () => void;
  companies: string[];
  categories: string[];
  onSubmit: (data: JobModel) => Promise<void>;
  jobToEdit: JobModel | null;
}

const UpdateJobModal: React.FC<UpdateJobModalProps> = ({
  show,
  onClose,
  onSubmit,
  jobToEdit,
  companies,
  categories,
}) => {
  const { register, handleSubmit, setValue } = useForm<JobModel>();

  React.useEffect(() => {
    // Set form values when jobToEdit changes
    if (jobToEdit) {
      setValue("JobTitle", jobToEdit.JobTitle); // Use the JobModel property names
      setValue("category", jobToEdit.category);
      setValue("Companies", jobToEdit.Companies);
      setValue("Description", jobToEdit.Description);
      setValue("Logo", jobToEdit.Logo);
      setValue("time", jobToEdit.time);
    }
  }, [jobToEdit, setValue]);
  return (
    <>
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-10 w-[40%] rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl font-bold mb-4">Edit Job</h2>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  {...register("JobTitle", { required: "Title is required" })}
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
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="mt-1 p-2 border rounded-md w-full"
                >
                  {/* Add a default option */}
                  <option value="" disabled>
                    Select Category
                  </option>
                  {/* Map over your categories and create an option for each */}
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
                  {...register("Companies", {
                    required: "Company is required",
                  })}
                  className="mt-1 p-2 border rounded-md w-full"
                >
                  {/* Add a default option */}
                  <option value="" disabled>
                    Select Company
                  </option>
                  {/* Map over your companies and create an option for each */}
                  {companies.map((company) => (
                    <option key={company} value={company}>
                      {company}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  {...register("Description", {
                    required: "Description is required",
                  })}
                  placeholder="Description of the job"
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Time
                </label>
                <input
                  type="text"
                  {...register("time", { required: "Time is required" })}
                  placeholder="Time of the job"
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>

              <div className="footermodal flex justify-end text-right">
                <button
                  type="submit"
                  className="bg-blueColor text-white px-4 py-2 rounded-md"
                >
                  Save Changes
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

export default UpdateJobModal;
