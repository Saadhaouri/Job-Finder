import { useState, useEffect } from "react";
import axios from "axios";
import { IoAdd } from "react-icons/io5";

const CompaniesPage = () => {
  const [companies, setCompanies] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newCompany, setNewCompany] = useState({
    title: "",
    logo: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/companies")
      .then((response) => setCompanies(response.data));
  }, []);

  const handleAddButtonClick = () => {
    setShowAddDialog(true);
  };

  const handleCloseDialog = () => {
    setShowAddDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCompany((prevCompany) => ({
      ...prevCompany,
      [name]: value,
    }));
  };

  const handleAddCompany = () => {
    // Implement logic to add a new company
    // You can send a POST request to your API to add a new company
    // Update the 'companies' state with the new data
    // Close the dialog
    setShowAddDialog(false);
  };

  return (
    <div className="container mx-auto my-8">
      <div className="header flex items-center p-3 gap-0 justify-between w-[100%] ">
        <h3 className="text-blueColor text-[32px] font-bold">
          Companies management
        </h3>
        <button
          onClick={handleAddButtonClick}
          className="bg-blueColor flex p-3 rounded-lg text-white items-center "
        >
          <IoAdd className="text-[32px]" /> New company
        </button>
      </div>

      {/* New Company Dialog */}
      {showAddDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-10 w-[40%] rounded-lg">
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
                placeholder="Title of Company "
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
                placeholder="Url of the logo"
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="footermodal  fles justify-end text-right">
              <button
                onClick={handleAddCompany}
                className="bg-blueColor text-white px-4 py-2 rounded-md"
              >
                Add Company
              </button>
              <button
                onClick={handleCloseDialog}
                className="bg-gray-300 text-gray-700 ml-2 px-4 py-2 rounded-md"
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
            className="bg-white  flex justify-evenly  p-4 rounded-lg shadow-md"
          >
            <img
              src={company.logo}
              alt={company.Title}
              className="  rounded-[50%] h-10 w-10 object-cover mb-2"
            />
            <h5 className="text-xl font-bold mb-2">{company.Title}</h5>
            {/* You can add more details here if needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesPage;
