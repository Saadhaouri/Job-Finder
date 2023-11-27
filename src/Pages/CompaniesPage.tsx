import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoAdd } from "react-icons/io5";
import { useForm } from "react-hook-form";
import CompaniesModel from "./Data/Models/CompaniesModel";
import CompaniesAPI from "./Data/Api/CompaniesApi";
import { v4 as uuidv4 } from "uuid";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEdit } from "react-icons/ai";

interface IFormcompanies {
  id: string;
  logo: string;
  Title: string;
}

const CompaniesPage: React.FC = () => {
  const [companies, setCompanies] = useState<CompaniesModel[]>([]);
  const [showAddDialog, setShowAddDialog] = useState(false);

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [companyToDelete, setCompanyToDelete] = useState<string | null>(null);

  const [showEditDialog, setShowEditDialog] = useState(false);
  const [companyToEdit, setCompanyToEdit] = useState<CompaniesModel | null>(
    null
  );

  const { reset, register, handleSubmit } = useForm<IFormcompanies>({});

  useEffect(() => {
    axios
      .get<CompaniesModel[]>("http://localhost:3000/companies")
      .then((response) => setCompanies(response.data));
  }, []);

  const onSubmit = (data: IFormcompanies) => {
    if (companyToEdit) {
      // If editing, update the existing company
      const updatedCompany = new CompaniesModel(
        companyToEdit.id,
        data.Title,
        data.logo
      );

      CompaniesAPI.update(updatedCompany).then(() => {
        toast.success("Company updated successfully!");
        setShowEditDialog(false);
      });

      // Clear the editing state
      setCompanyToEdit(null);
    } else {
      // If creating, add a new company
      data.id = uuidv4();
      const newCompany = new CompaniesModel(data.id, data.Title, data.logo);

      CompaniesAPI.create(newCompany).then(() => {
        toast.success("Company added successfully!");
        setShowAddDialog(false);
      });
    }

    axios
      .get<CompaniesModel[]>("http://localhost:3000/companies")
      .then((response) => setCompanies(response.data));

    // Clear the form fields
    reset();
  };

  const handleShowDeleteConfirmation = (companyId: string) => {
    setCompanyToDelete(companyId);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    if (companyToDelete) {
      await CompaniesAPI.delete(companyToDelete);
      // Refresh the list of companies after deletion
      const updatedCompanies = await axios.get<CompaniesModel[]>(
        "http://localhost:3000/companies"
      );
      setCompanies(updatedCompanies.data);

      // Close the confirmation modal
      setShowDeleteConfirmation(false);
    }
  };

  const handleCloseDialog = () => {
    setShowAddDialog(false);
    setShowEditDialog(false);
  };

  const handleEditButtonClick = (companyId: string) => {
    const companyToEdit = companies.find((company) => company.id === companyId);
    setCompanyToEdit(companyToEdit);
    console.log(companyToEdit);
    setShowEditDialog(true);
  };

  const handleCancelEdit = () => {
    // Close the edit modal without saving changes
    setShowEditDialog(false);
    setCompanyToEdit(null);
  };

  return (
    <div className="container mx-auto my-8">
      <div className="header flex items-center p-3 gap-0 justify-between w-[100%] ">
        <h3 className="text-blueColor text-[32px] font-bold">
          Companies management
        </h3>
        <button
          onClick={() => setShowAddDialog(true)}
          className="bg-blueColor flex p-3 rounded-lg text-white items-center "
        >
          <IoAdd className="text-[32px]" /> New company
        </button>
      </div>
      {/* New/Edit Company Dialog */}
      {showAddDialog && (
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
                  onClick={handleCloseDialog}
                  className="bg-gray-300 text-gray-700 ml-2 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showEditDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-10 w-[40%] rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl font-bold mb-4">Edit Company</h2>
              <p>{companyToEdit?.Title}</p>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="Title"
                  {...register("Title", { required: "Title is required" })}
                  placeholder="Title of Company"
                  className="mt-1 p-2 border rounded-md w-full"
                  defaultValue={companyToEdit?.Title}
                />
                {/* <input
                  type="text"
                  id="Title"
                  placeholder="Title of Company"
                  className="mt-1 p-2 border rounded-md w-full"
                  value={companyToEdit?.Title}
                /> */}
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
                  value={companyToEdit?.logo}
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
                  onClick={handleCancelEdit}
                  className="bg-gray-300 text-gray-700 ml-2 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Delete Confirmation Modal */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-10 w-[40%] rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Confirm Deletion</h2>
            <p className="mb-4">
              Are you sure you want to delete this company?
            </p>
            <div className="flex justify-end text-right">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleConfirmDelete}
              >
                Confirm
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                onClick={() => setShowDeleteConfirmation(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="grid bg-greyIsh p-[2rem] w-full rounded-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {companies?.map((company) => (
          <div
            key={company.id}
            className="bg-white  flex justify-between items-center p-4 rounded-lg shadow-md"
          >
            <img
              src={company.logo}
              alt={company.Title}
              className="rounded-[50%] h-10 w-10 object-cover mb-2"
            />
            <h5 className="text-xl font-bold mb-2">{company.Title}</h5>
            <div className="action flex grid-cols-2">
              <MdDelete
                className="icon text-[26px] text-[#b8b8b8] hover:text-[#D71313]"
                onClick={() => handleShowDeleteConfirmation(company.id)}
              />
              <h1>|</h1>
              <AiFillEdit
                className="icon text-[26px] text-[#b8b8b8] hover:text-blueColor"
                onClick={() => handleEditButtonClick(company.id)}
              />
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default CompaniesPage;
