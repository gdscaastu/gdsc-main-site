import React from "react";
import logo from "../../assets/SliderImages/LO.png";
import useLocalStorage from "../Hook/useLocalStorage";
import { useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser, logout] = useLocalStorage("isAdmin", null);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-1/5 flex flex-col items-center shadow-right gap-3">
      <div className="block py-2 px-4">
        <div className=" flex flex-col gap-0.1  items-center self-center w-72">
          <div className="flex items-center justify-center">
            <img className=" w-54 h-24 object-contain" src={logo} alt="" />
          </div>
        </div>
      </div>
      <div className="block py-2 px-4 flex flex-col items-center gap-1">
        <svg
          className="h-14 w-14 border border-green-400 p-2 rounded-full"
          viewBox="0 0 24 24"
          fill="#85cb97"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1Z"
            fill="#85cb97"
          />
          <path
            d="M7 14C4.23858 14 2 16.2386 2 19V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V19C22 16.2386 19.7614 14 17 14H7Z"
            fill="#85cb97"
          />
        </svg>
        <p>Admin User</p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="block py-2 px-6 cursor-pointer">
          <NavLink to="/admin">Project</NavLink>
        </div>
        <div className="block py-2 px-6 ">
          <NavLink to="/admin/team">Teams</NavLink>
        </div>
        <div className="block py-2 px-6 ">
          <NavLink to="/admin/event">Events</NavLink>
        </div>
        <div className="block py-2 px-6 ">
          <NavLink to="/admin/sponsor">Sponsor</NavLink>
        </div>
      </div>
      <div className="py-2 px-4 flex justify-center absolute bottom-0 pb-11 gap-2">
        <button onClick={handleLogout} className="flex">
          <svg
            fill="#85cb97"
            className="h-5 w-5 self-center"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M106.667 512c0-200.295 162.371-362.667 362.667-362.667 57.937 0 112.644 13.57 161.173 37.687 10.551 5.243 23.356.941 28.599-9.61 5.239-10.551.939-23.355-9.613-28.599-54.293-26.982-115.486-42.144-180.16-42.144C245.473 106.667 64 288.141 64 512s181.474 405.333 405.333 405.333c64.674 0 125.867-15.164 180.16-42.146 10.551-5.244 14.852-18.044 9.613-28.595-5.244-10.551-18.048-14.857-28.599-9.613-48.529 24.115-103.236 37.687-161.173 37.687-200.295 0-362.667-162.372-362.667-362.667z" />
            <path d="M783.087 326.249c-8.333-8.332-21.841-8.332-30.174 0-8.329 8.331-8.329 21.839 0 30.17l134.251 134.249h-353.83c-11.78 0-21.333 9.553-21.333 21.333s9.553 21.333 21.333 21.333h353.83L752.913 667.58c-8.329 8.333-8.329 21.841 0 30.174 8.333 8.329 21.841 8.329 30.174 0l170.667-170.667a21.29 21.29 0 004.655-6.985A21.31 21.31 0 00960 512a21.252 21.252 0 00-5.79-14.613l-.512-.525-170.611-170.613z" />
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
