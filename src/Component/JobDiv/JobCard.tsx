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
  handlshow: () => void; // Adjust the type of the handler as needed
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="group group/item singleJob w-[250px] p-[20px] bg-white  rounded-[10px] hover:bg-blueColor   shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
      <span className="flex justify-between items-center gap-4">
        <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white ">
          {job.JobTitle}
        </h1>
        <span className="flex justify-center gap-1 text-[8px]">
          <BiTimeFive />
          {job.time}
        </span>
      </span>
      <h6 className="text-[#ccc]">{job.Country}</h6>
      <p className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px]">
        {job.Description}
      </p>
      <div className="company flex items-center gap-2">
        <img src={job.Logo} alt="" className="w-[10%]" />
        <span className="text-[14px] py-[1rem] block group:hover:text-white">
          {job.Companies}
        </span>
      </div>
      <Link to="/login">
        <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default JobCard;
