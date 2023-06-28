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
    <div className="flex justify-between py-3 gap-8 bg-white pr-7 dark:bg-white">
      <div className=" flex flex-col  items-center self-center w-72 ">
        <div className="flex justify-center">
          <a href="">
            <img className=" w-48 h-24 object-contain" src={logo} alt="" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-9px dark:text-black">
            Copyright © <span>{currentYear}. </span>All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-gray-500 ">Connect</div>
        <div className="flex flex-col gap-1  items-center">
          <div>
            <a href="https://twitter.com/gdscaastu" target="_blank">
              <svg
                className="w-10 h-7 shrink-0 hover:fill-blue-300 fill-gray-700"
                viewBox="0 -2 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>twitter [#154]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1">
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-60.000000, -7521.000000)"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                        id="twitter-[#154]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/company/gdsc-aastu/"
              target="_blank"
            >
              <svg
                className="w-10 h-8 shrink-0 hover:fill-blue-500 fill-gray-700"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z" />
              </svg>
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/@gdscaastu" target="_blank">
              <svg
                className="w-10 h-8 shrink-0 hover:fill-red-500 fill-gray-700"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24.325 8.309s-2.655-.334-8.357-.334c-5.517 0-8.294.334-8.294.334A2.675 2.675 0 0 0 5 10.984v10.034a2.675 2.675 0 0 0 2.674 2.676s2.582.332 8.294.332c5.709 0 8.357-.332 8.357-.332A2.673 2.673 0 0 0 27 21.018V10.982a2.673 2.673 0 0 0-2.675-2.673zM13.061 19.975V12.03L20.195 16l-7.134 3.975z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className=" text-gray-500">Programs</div>
        <div className="flex flex-col gap-1 text-black">
          <div>
            <a
              className="hover:text-gray-500"
              href="https://www.womentechmakers.com/"
              target="_blank"
            >
              Women Techmakers
            </a>
          </div>
          <div>
            <a
              className="hover:text-gray-500"
              href="https://developers.google.com/programs/community/"
              target="_blank"
            >
              Google Developers Group
            </a>
          </div>
          <div>
            <a
              className="hover:text-gray-500"
              href="https://developers.google.com/experts/"
              target="_blank"
            >
              Google Developers Experts
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className=" text-gray-500">Developers Consoles</div>
        <div className="flex flex-col gap-1 text-black">
          <div>
            <a
              className="hover:text-gray-500"
              href="https://console.firebase.google.com/"
              target="_blank"
            >
              Firebase Console
            </a>
          </div>
          <div>
            <a
              className="hover:text-gray-500"
              href="https://console.cloud.google.com/"
              target="_blank"
            >
              Google Cloud Platform
            </a>
          </div>
          <div>
            <a
              className="hover:text-gray-500"
              href="https://console.actions.google.com/"
              target="_blank"
            >
              Actions on Google
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
