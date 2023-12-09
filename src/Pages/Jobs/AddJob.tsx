import React from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import JobModel from "../Data/Models/JobsModel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CountryDropdown } from "react-country-region-selector";
import { yupResolver } from "@hookform/resolvers/yup";

interface AddJobModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: SubmitHandler<JobModel>;
  categories: string[];
  companies: string[];
  setCountry: React.Dispatch<React.SetStateAction<string>>;
}

const AddJobModal: React.FC<AddJobModalProps> = ({
  show,
  onClose,
  onSubmit,
  categories,
  companies,
  setCountry,
}) => {
  const { register, handleSubmit, control, setValue } = useForm<JobModel>({
    resolver: yupResolver(NewJob),
  });

  const selectCountry = (val: string) => {
    setCountry(val);
    setValue("Country", val);
  };

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
                  id="category"
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="mt-1 p-2 border rounded-md w-full"
                >
                  <option value="" defaultValue>
                    Select Category
                  </option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mt-4 text-gray-700"
                >
                  Country
                </label>
                <Controller
                  control={control}
                  name="Country"
                  render={({ field }) => (
                    <CountryDropdown
                      value={field.value}
                      onChange={(val) => {
                        selectCountry(val);
                        field.onChange(val);
                      }}
                      onBlur={field.onBlur}
                      className="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                    />
                  )}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-sm mt-4 font-medium text-gray-700"
                >
                  Company
                </label>
                <select
                  {...register("Companies", {
                    required: "Company is required",
                  })}
                  className="mt-1 p-2 border rounded-md w-full"
                >
                  <option value="" defaultValue>
                    Select Company
                  </option>
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

              {/* Removed Logo input field as per your requirement */}

              <div className="mb-4">
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Time
                </label>
                <input
                  type="date"
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
