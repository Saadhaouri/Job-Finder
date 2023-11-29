import { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import JobModel from "../Data/Models/JobsModel";
import axios from "axios";
import AddJobModal from "./AddJob";
import CompaniesModel from "../Data/Models/CompaniesModel";
import jobsAPI from "../Data/Api/JobsApi";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const JobsPage: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isAddJobModalOpen, setAddJobModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;
  const [jobs, setJobs] = useState<JobModel[]>([]);
  const [Companies, setCompanies] = useState([]);

  useEffect(() => {
    axios
      .get<JobModel[]>("http://localhost:3000/jobs")
      .then((response) => setJobs(response.data));
  }, []);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const filteredJobs = jobs
    .filter((job) =>
      selectedCategories.length === 0
        ? true
        : selectedCategories.includes(job.category)
    )
    .filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  useEffect(() => {
    axios
      .get<CompaniesModel[]>("http://localhost:3000/companies")
      .then((response) => setCompanies(response.data));
  }, []);

  const categories = ["IT", "Marketing", "Finance", "Engineering", "Sales"];

  const arrayOfCompanies = Companies.map((cm) => cm.Title);
  console.log(" test ", arrayOfCompanies);
  const handleCategoryClick = (category: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((prevCategory) => prevCategory !== category)
        : [...prevSelected, category]
    );
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleDeleteJob = (jobId: number) => {
    // Implement logic to delete the job with the given jobId
    // Update the jobs list accordingly
  };

  const handleUpdateJob = (jobId: number) => {
    // Implement logic to update the job with the given jobId
    // Redirect to the job update/edit page or display a modal
  };

  const handleAddJobSubmit = async (data: JobModel) => {
    // Assuming you have a JobsAPI similar to CompaniesAPI
    const newJob = new JobModel(
      uuidv4(),
      data.title,
      data.category,
      data.company
    );

    try {
      // Replace JobsAPI.create with the actual method for adding a new job
      await jobsAPI.create(newJob);
      toast.success("Job added successfully!");
      setAddJobModalOpen(false);
    } catch (error) {
      console.error("Error creating job:", error);
    }

    try {
      // Fetch the updated list of jobs after adding a new one
      const updatedJobs = await axios.get<JobModel[]>(
        "http://localhost:3000/jobs"
      );
      setJobs(updatedJobs.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  //setAddJobModalOpen(false);
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4 text-blueColor ">
        Jobs Management
      </h1>
      {/* Category Buttons */}
      <div className=" flex justify-between items-center mb-4">
        <div className="space-x-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`${
                selectedCategories.includes(category)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-800"
              } px-4 py-2 rounded`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="search flex justify-around items-center space-y-0.5">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-1 p-2 mr-[10px] border rounded-md w-[26rem]"
          />
          {/* Add Job Button */}
          <button
            onClick={() => setAddJobModalOpen(true)}
            className="bg-green-500 flex items-center justify-between  text-white px-4 py-2 rounded"
          >
            <IoMdAddCircle className="icon text-[26px]" />
            Add Job
          </button>
        </div>
      </div>
      {/* Job List */}
      <ul>
        {currentJobs.map((job) => (
          <li key={job.id} className="mb-4 border p-4 rounded">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">Category: {job.category}</p>
            <div className="mt-2 space-x-2">
              <button
                onClick={() => handleUpdateJob(job.id)}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                Update
              </button>
              <button
                onClick={() => handleDeleteJob(job.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {/* Pagination */}
      <div className="mt-4">
        {Array.from({
          length: Math.ceil(filteredJobs.length / jobsPerPage),
        }).map((page, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {/* Add Job Modal or Page (You can implement this part based on your design) */}
      <AddJobModal
        show={isAddJobModalOpen}
        onClose={() => setAddJobModalOpen(false)}
        onSubmit={handleAddJobSubmit}
        categories={["IT", "Marketing", "Finance", "Engineering", "Sales"]} // Replace with your actual categories
        companies={arrayOfCompanies} // Replace with your actual companies
      />
    </div>
  );
};

export default JobsPage;
