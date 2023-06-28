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
            <div>
              <a href="https://twitter.com/gdscaastu" target="_blank">
                Twitter
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/company/gdsc-aastu/"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
            <div>
              <a href="https://www.youtube.com/@gdscaastu" target="_blank">
                YouTube
              </a>
            </div>
            
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-black text-xl font-sans subpixel-antialiased">
            Programs
          </div>
          <div className="flex flex-col gap-3 text-gray-500 tracking-wide subpixel-antialiased">
            <div>
              <a href="https://www.womentechmakers.com/" target="_blank">
                Women Techmakers
              </a>
            </div>
            <div>
              <a
                href="https://developers.google.com/programs/community/"
                target="_blank"
              >
                Google Developers Group
              </a>
            </div>
            <div>
              <a href="https://developers.google.com/experts/" target="_blank">
                Google Developers Experts
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-2 mb-7">
          <div className=" text-black text-xl font-sans subpixel-antialiased">
            Developers
          </div>
          <div className="flex flex-col gap-3 text-gray-500  tracking-wide subpixel-antialiased">
            <div>
              <a href="https://console.firebase.google.com/" target="_blank">
                Firebase Console
              </a>
            </div>
            <div>
              <a href="https://console.cloud.google.com/" target="_blank">
                Google Cloud Platform
              </a>
            </div>
            <div>
              <a href="https://console.actions.google.com/" target="_blank">
                Actions on Google
              </a>
            </div>
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
