import React, { useState } from "react";
import logo from "../../assets/SliderImages/LO.png";
import { useLocation, NavLink } from "react-router-dom";

const MainNavbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsopen] = useState(false);
  const toggle = () => {
    setIsopen(!isOpen);
  };
  return (
    <nav className="lg:w-[80%] w-full bg-white dark:bg-white h-fit">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 dark:bg-white ">
        <a href="" className="flex items-center">
          <img src={logo} className="lg:h-24 h-[45px] mr-3" alt="" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          onClick={toggle}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 bg-blue-700 rounded-full md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  "
          aria-controls="navbar-default"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6 bg-blue-700"
            aria-hidden="true"
            fill="#ffffff"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto dark:bg-white
           ${isOpen ? "block transition duration-300 ease-in-out" : "hidden"}`}
          id="navbar-default">
          <ul className="font-medium flex dark:bg-white flex-col p-4 md:p-0 mt-4  rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                className={`block py-2 pl-3 pr-4 rounded md:p-0 no-underline text-lg ${
                  currentPath === "/"
                    ? "text-blue-700 bg-transparent"
                    : "text-black hover:text-gray-500"
                }`}
                aria-current="page">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={`block py-2 pl-3 pr-4 dark:bg-white rounded md:p-0 no-underline text-lg ${
                  currentPath === "/projects"
                    ? "text-blue-700 bg-transparent"
                    : "text-black hover:text-gray-500"
                }`}
                aria-current="page">
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                className={`block py-2 pl-3 pr-4 dark:bg-white rounded md:p-0 no-underline text-lg ${
                  currentPath === "/team"
                    ? "text-blue-700 bg-transparent"
                    : "text-black hover:text-gray-500"
                }`}
                aria-current="page">
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={`block py-2 pl-3 pr-4 dark:bg-white rounded md:p-0 no-underline text-lg ${
                  currentPath === "/events"
                    ? "text-blue-700 bg-transparent"
                    : "text-black hover:text-gray-500"
                }`}
                aria-current="page">
                Events
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
