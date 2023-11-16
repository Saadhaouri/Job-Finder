import { useState } from "react";
import jobs from "../../Data/Alljobs";
import JobCard from "./JobCard";
import ReactPaginate from "react-paginate";
import "./jobs.css";

const alljobs = jobs;

const Job = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const jobsPerPage = 10; // adjust this value based on your preference

  const offset = currentPage * jobsPerPage;
  const currentJobs = alljobs.slice(offset, offset + jobsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const handlshow = () => {
    console.log("All data" + alljobs.length);
  };
  return (
    <div>
      <div className="JobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {currentJobs.map((job) => (
          <JobCard job={job} handlshow={handlshow} />
        ))}
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={Math.ceil(alljobs.length / jobsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
      />
    </div>
  );
};

export default Job;
