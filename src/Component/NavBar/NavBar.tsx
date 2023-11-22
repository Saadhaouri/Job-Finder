import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  if (location.pathname === "/login" || location.pathname === "/register")
    return null; // Return null to hide the navbar
  return (
    <nav className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor ">
          <strong>Job</strong>Finder
        </h1>
      </div>
      <ul className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          <Link to="/">Home</Link>
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          <Link to="/jobs">Jobs</Link>
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          <Link to="/companies">Companies</Link>
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          <Link to="/about">About</Link>
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          <Link to="/blog">Blog</Link>
        </li>
        {/* The following login and register links will be hidden on "/login" */}
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          <Link to="/login">Login</Link>
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
