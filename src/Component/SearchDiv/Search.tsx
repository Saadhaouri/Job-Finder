import { IoSearchSharp } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";

const Search = () => {
  return (
    <div className=" searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[2rem] m-3   ">
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
            <GoHome className=" text-[30px] icon " />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%] "
              placeholder="Search by Companies..."
            />
            <IoIosCloseCircle className=" text-[30px] text-[#a5a6a6] hever:text-textColor icon  " />
          </div>
          <div className=" flex gap-2 items-center  ">
            <CiLocationOn className=" text-[30px] icon " />
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

      <div className="secDiv flex  items-center gap-10 justify-center ">
        <div className="singleSeach flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold">
            Sort By:{" "}
          </label>
          <select
            name="relevance"
            id=""
            className=" bg-white px-4 py-1 rounded-[3px]"
          >
            <option value=""> Relevance </option>
            <option value=""> Inclusive </option>
            <option value=""> Start With </option>
            <option value=""> Contains </option>
          </select>
        </div>
        <div className="secDiv flex gap-8 items-center justify-between ">
          <div className="singleSeach flex items-center gap-2">
            <label htmlFor="relevance" className="text-[#808080] font-semibold">
              Type:{" "}
            </label>
            <select
              name="level"
              id="level"
              className=" bg-white px-4 py-1 rounded-[3px]"
            >
              <option value=""> Fulltime </option>
              <option value=""> Remote </option>
              <option value=""> Contract </option>
              <option value=""> Part-time </option>
            </select>
          </div>
        </div>
        <div className="secDiv flex gap-8 items-center justify-between ">
          <div className="singleSeach flex items-center gap-2">
            <label htmlFor="relevance" className="text-[#808080] font-semibold">
              Level:{" "}
            </label>
            <select
              name="relevance"
              id=""
              className=" bg-white px-4 py-1 rounded-[3px]"
            >
              <option value=""> Senior </option>
              <option value=""> Beginner </option>
              <option value=""> internediate </option>
              <option value=""> Advocate </option>
            </select>
          </div>
          <span className="text-[#a1a1a1] cursor-pointer"> Clear All</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
