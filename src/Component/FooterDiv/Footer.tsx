import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center ">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5rem]">
            <strong> Job</strong>Finder
          </h1>
        </div>
        <p className=" text-white pb-[13px] opacity-70 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          magnam, dolor corporis rem sed minus.
        </p>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Company
        </span>
        <div className="grid gap-3 ">
          <li className="text-white opacity-[.7] hover:opacity-[1]  cursor-pointer list-none">
            About Us
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] cursor-pointer list-none">
            Features
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]  cursor-pointer list-none ">
            News
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]  cursor-pointer list-none ">
            FAQ
          </li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] cursor-pointer text-white">
          Resources
        </span>
        <div className="grid gap-3 ">
          <li className="text-white opacity-[.7] hover:opacity-[1] list-none cursor-pointer ">
            Account
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] list-none cursor-pointer">
            Supprt Center
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] list-none cursor-pointer">
            Feedback
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] list-none cursor-pointer ">
            Contact Us
          </li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Support
        </span>
        <div className="grid gap-3 ">
          <li className="text-white opacity-[.7] hover:opacity-[1] list-none  cursor-pointer">
            Events
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] list-none cursor-pointer">
            Promo
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] list-none cursor-pointer">
            Req Demo
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1] list-none cursor-pointer">
            Careers
          </li>
        </div>
      </div>
      <div className="grid">
        <span className="DivTitle text-[18px] font-semibold pb-[1.5rem] text-white ">
          Contact Info
        </span>
        <div>
          <small className="text-[14px]  text-white">
            saadhaouri@gmail.com
          </small>
          <div className=" icon flex gap-4 py-[1rem]">
            <FaFacebookF className="text-white  w-[30px] h-[30px]  icon  " />
            <BiLogoGmail className="text-white  w-[30px] h-[30px]  icon  " />
            <AiFillInstagram className="text-white  w-[30px] h-[30px]  icon  " />
            <FaTwitter className="text-white  w-[30px] h-[30px]  icon  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
