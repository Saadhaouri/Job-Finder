import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";

interface JobCardProps {
  job: {
    id: string;
    JobTitle: string;
    time: string;
    Country: string;
    Description: string;
    Logo: string;
    Companies: string;
  };
  handleShow: () => void; // Adjust the type of the handler as needed
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="job-card-container bg-white rounded-md shadow-lg p-4 m-4 max-w-[280px] hover:shadow-xl transition duration-300 ease-in-out">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold text-gray-800">{job.JobTitle}</h1>
        <span className="flex items-center text-xs text-gray-500">
          <BiTimeFive className="mr-1" />
          {job.time}
        </span>
      </div>
      <h6 className="text-sm text-gray-500">{job.Country}</h6>
      <p className="text-sm text-gray-600 mt-4 border-t border-gray-300 pt-4 overflow-hidden max-h-16">
        {job.Description}
      </p>
      <div className="company flex items-center mt-4">
        <span className="text-md font-semibold text-blue-500 group-hover:text-white">
          {job.Companies}
        </span>
      </div>
      <div className=" flex  justify-center bg-blueColor text-white p-2 rounded-lg mt-3">
        <Link to="/login">
          <button className="apply-button">Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
