import React, { useState } from "react";
import { useEffect } from "react";
import logo from "../../assets/SliderImages/LO.png";
import { useMediaQuery } from "react-responsive";
import MobFooter from "./MobFooter";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isDesktop = useMediaQuery({ minWidth: 768 });
  if (!isDesktop) {
    return <MobFooter />;
  }
  return (
    <div className="flex justify-between py-3 gap-8 bg-white pr-7">
      <div className=" flex flex-col  items-center self-center w-72 ">
        <div className="flex justify-center">
          <img className=" w-48 h-24 object-contain" src={logo} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-9px">
            Copyright © <span>{currentYear}. </span>All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-black">Connect</div>
        <div className="flex flex-col gap-1  text-gray-500">
          <div>Twitter</div>
          <div>Linkedin</div>
          <div>YouTube</div>
          <div>Events</div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className=" text-black">Programs</div>
        <div className="flex flex-col gap-1 text-gray-500">
          <div>Women Techmakers</div>
          <div>Google Developers Group</div>
          <div>Google Developers Experts</div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-black">Developers Consoles</div>
        <div className="flex flex-col gap-1 text-gray-500">
          <div>Firebase Console</div>
          <div>Google Cloud Platform</div>
          <div>Actions on Google</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
