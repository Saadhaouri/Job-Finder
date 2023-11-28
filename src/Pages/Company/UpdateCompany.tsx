import React from "react";
import { useForm } from "react-hook-form";
import CompaniesModel from "../Data/Models/CompaniesModel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface UpdateCompanyModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (data: CompaniesModel) => Promise<void>;
  companyToEdit: CompaniesModel | null;
}

const UpdateCompany: React.FC<UpdateCompanyModalProps> = ({
  show,
  onClose,
  onSubmit,
  companyToEdit,
}) => {
  const { register, handleSubmit, setValue } = useForm<CompaniesModel>();

  React.useEffect(() => {
    // Set form values when companyToEdit changes
    if (companyToEdit) {
      setValue("Title", companyToEdit.Title);
      setValue("logo", companyToEdit.logo);
    }
  }, [companyToEdit, setValue]);

  return (
    <>
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-10 w-[40%] rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl font-bold mb-4">Edit Company</h2>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
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
                  placeholder="Urlof Company Logo"
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

export default UpdateCompany;
