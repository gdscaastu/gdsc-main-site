import React from "react";
import logo from "../../assets/SliderImages/LO.png";

const MobFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col bg-white w-full px-7">
      <div className="grid grid-cols-2 gap-7">
        <div className="flex flex-col gap-3">
          <div className="text-black text-xl font-sans subpixel-antialiased">
            Connect
          </div>
          <div className="flex flex-col gap-3  text-gray-500 tracking-wide subpixel-antialiased">
            <div>Twitter</div>
            <div>Linkedin</div>
            <div>YouTube</div>
            <div>Events</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-black text-xl font-sans subpixel-antialiased">
            Programs
          </div>
          <div className="flex flex-col gap-3 text-gray-500 tracking-wide subpixel-antialiased">
            <div>Women Techmakers</div>
            <div>Google Developers Group</div>
            <div>Google Developers Experts</div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-2 mb-7">
          <div className=" text-black text-xl font-sans subpixel-antialiased">
            Developers
          </div>
          <div className="flex flex-col gap-3 text-gray-500  tracking-wide subpixel-antialiased">
            <div>Firebase Console</div>
            <div>Google Cloud Platform</div>
            <div>Actions on Google</div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col  items-center justify-center self-center w-72">
        <div className="flex justify-center">
          <img className=" w-52 h-24 object-contain" src={logo} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className=" tracking-wide">
            Copyright © <span>{currentYear}. </span>All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobFooter;
