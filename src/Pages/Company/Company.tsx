import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoAdd } from "react-icons/io5";
import CompaniesModel from "../Data/Models/CompaniesModel";
import CompaniesAPI from "../Data/Api/CompaniesApi";
import { v4 as uuidv4 } from "uuid";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEdit } from "react-icons/ai";
import AddCompany from "./AddCompany";
import UpdateCompany from "./UpdateCompany";
import DeleteConfirmationModal from "./DeleteCompany";
import Footer from "../../Component/FooterDiv/Footer";

interface IFormCompanies {
  id: string;
  logo: string;
  Title: string;
}

const Company: React.FC = () => {
  const [companies, setCompanies] = useState<CompaniesModel[]>([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [companyToDelete, setCompanyToDelete] = useState<string | null>(null);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [companyToEdit, setCompanyToEdit] = useState<CompaniesModel | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    axios
      .get<CompaniesModel[]>("http://localhost:3000/companies")
      .then((response) => setCompanies(response.data));
  }, []);

  const onSubmit = async (data: IFormCompanies) => {
    if (companyToEdit) {
      const updatedCompany = new CompaniesModel(
        companyToEdit.id,
        data.Title,
        data.logo
      );

      try {
        await CompaniesAPI.update(updatedCompany);
        toast.success("Company updated successfully!");
        setShowEditDialog(false);
      } catch (error) {
        console.error("Error updating company:", error);
      }

      setCompanyToEdit(null);
    } else {
      const newCompany = new CompaniesModel(uuidv4(), data.Title, data.logo);

      try {
        await CompaniesAPI.create(newCompany);
        toast.success("Company added successfully!");
        setShowAddDialog(false);
      } catch (error) {
        console.error("Error creating company:", error);
      }
    }

    try {
      const updatedCompanies = await axios.get<CompaniesModel[]>(
        "http://localhost:3000/companies"
      );
      setCompanies(updatedCompanies.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  const handleShowDeleteConfirmation = (companyId: string) => {
    setCompanyToDelete(companyId);
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    if (companyToDelete) {
      try {
        await CompaniesAPI.delete(companyToDelete);
        const updatedCompanies = await axios.get<CompaniesModel[]>(
          "http://localhost:3000/companies"
        );
        setCompanies(updatedCompanies.data);
      } catch (error) {
        console.error("Error deleting company:", error);
      }

      setShowDeleteConfirmation(false);
    }
  };

  const filteredCompanies = companies.filter((company) =>
    company.Title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="header flex items-center p-3 gap-0 justify-between w-[100%] ">
          <h3 className="text-blueColor text-[32px] font-bold">
            Companies management
          </h3>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-3.5 border border-gray-300 rounded-md mr-2"
            />
            <button className=" bg-blueColor flex items-center text-white p-3 rounded-lg cursor-pointer">
              <IoAdd
                className="text-[32px]"
                onClick={() => setShowAddDialog(true)}
              />
              New Company
            </button>
          </div>
        </div>
        <AddCompany
          show={showAddDialog}
          onClose={() => setShowAddDialog(false)}
          onSubmit={onSubmit}
        />
        <UpdateCompany
          show={showEditDialog}
          onClose={() => setShowEditDialog(false)}
          companyToEdit={companyToEdit}
          onSubmit={onSubmit}
        />
        <DeleteConfirmationModal
          show={showDeleteConfirmation}
          onClose={() => setShowDeleteConfirmation(false)}
          onConfirm={handleConfirmDelete}
        />
        <div className="grid bg-greyIsh p-[2rem] w-full rounded-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCompanies?.map((company) => (
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
                  onClick={() => {
                    setCompanyToEdit(company);
                    setShowEditDialog(true);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Company;
