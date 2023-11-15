import { IoSearchSharp } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";

const Search = () => {
  return (
    <div className=" searchDiv grid gp-10 bg-greyIsh rounded-[10px] p-[3rem]   ">
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700 ">
          <div className=" flex gap-2 items-center  ">
            <IoSearchSharp className=" text-[25px] icon " />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%] "
              placeholder="Search Job Here..."
            />
            <IoIosCloseCircle className=" text-[30px] text-[#a5a6a6] hever:text-textColor icon  " />
          </div>
          <div className=" flex gap-2 items-center  ">
            <GoHome className=" text-[25px] icon " />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%] "
              placeholder="Search by Companies..."
            />
            <IoIosCloseCircle className=" text-[30px] text-[#a5a6a6] hever:text-textColor icon  " />
          </div>
          <div className=" flex gap-2 items-center  ">
            <CiLocationOn className=" text-[20px] icon " />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%] "
              placeholder="Search by Location..."
            />
            <IoIosCloseCircle className=" text-[30px] text-[#a5a6a6] hever:text-textColor icon  " />
          </div>
          <button className=" bg-blueColor h-full p-5 px-10 rounded-[6px] text-white cursor-pointer ">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
