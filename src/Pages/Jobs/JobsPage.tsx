// JobsPage.tsx
import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import JobModel from "../Data/Models/JobsModel";
import axios from "axios";
import AddJobModal from "./AddJob";
import CompaniesModel from "../Data/Models/CompaniesModel";
import jobsAPI from "../Data/Api/JobsApi";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import DeleteJobModal from "./DeleteJobModal";

const JobsPage: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isAddJobModalOpen, setAddJobModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;
  const [jobs, setJobs] = useState<JobModel[]>([]);
  const [Companies, setCompanies] = useState([]);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

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

  const handleCategoryClick = (category: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((prevCategory) => prevCategory !== category)
        : [...prevSelected, category]
    );
  };

  const handleDeleteJob = (jobId: number) => {
    setSelectedJobId(jobId);
    setDeleteModalOpen(true);
  };

  const handleCancelDelete = () => {
    setSelectedJobId(null);
    setDeleteModalOpen(false);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleConfirmDeleteJob = async () => {
    if (selectedJobId) {
      try {
        await jobsAPI.delete(selectedJobId);

        const updatedJobs = await axios.get<JobModel[]>(
          "http://localhost:3000/jobs"
        );
        setJobs(updatedJobs.data);

        toast.success("Job deleted successfully!");
      } catch (error) {
        console.error("Error deleting job:", error);
      }

      setSelectedJobId(null);
      setDeleteModalOpen(false);
    }
  };
  const handleUpdateJob = (jobId: string) => {
    console.log(jobId);
  };
  const handleAddJobSubmit = async (data: JobModel) => {
    const newJob = new JobModel(
      uuidv4(),
      data.title,
      data.category,
      data.company
    );

    try {
      await jobsAPI.create(newJob);
      toast.success("Job added successfully!");
      setAddJobModalOpen(false);
    } catch (error) {
      console.error("Error creating job:", error);
    }

    try {
      const updatedJobs = await axios.get<JobModel[]>(
        "http://localhost:3000/jobs"
      );
      setJobs(updatedJobs.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4 text-blueColor ">
        Jobs Management
      </h1>
      <div className="flex justify-between items-center mb-4">
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
          <button
            onClick={() => setAddJobModalOpen(true)}
            className="bg-green-500 flex items-center justify-between  text-white px-4 py-2 rounded"
          >
            <IoMdAddCircle className="icon text-[26px]" />
            Add Job
          </button>
        </div>
      </div>
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
              </button>{" "}
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
      <AddJobModal
        show={isAddJobModalOpen}
        onClose={() => setAddJobModalOpen(false)}
        onSubmit={handleAddJobSubmit}
        categories={["IT", "Marketing", "Finance", "Engineering", "Sales"]}
        companies={arrayOfCompanies}
      />
      <DeleteJobModal
        show={isDeleteModalOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDeleteJob}
      />
    </div>
  );
};

export default JobsPage;
