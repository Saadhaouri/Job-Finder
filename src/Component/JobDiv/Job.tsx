import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import ReactPaginate from "react-paginate";
import "./jobs.css";
import axios from "axios";
import JobModel from "../../Pages/Data/Models/JobsModel";

const Job = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const jobsPerPage = 10; // adjust this value based on your preference
  const [jobs, setJobs] = useState<JobModel[]>([]);

  useEffect(() => {
    axios
      .get<JobModel[]>("http://localhost:3000/jobs")
      .then((response) => setJobs(response.data));
  }, []);

  const offset = currentPage * jobsPerPage;
  const alljobs = jobs.slice(offset, offset + jobsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const handlshow = (job) => {
    console.log(job);
  };
  return (
    <div className="container m-auto ">
      <div className="JobContainer grid grid-cols-5 py-10 mt-4">
        {alljobs.map((jobs) => (
          <JobCard
            key={jobs.id}
            job={jobs}
            handleShow={() => handlshow(jobs.JobTitle)}
          />
        ))}
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={Math.ceil(alljobs.length / jobsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={4}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
      />
    </div>
  );
};

export default Job;
