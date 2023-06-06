import React from "react";

const CloudComputingBox = () => {
  return (
    <div className="container ml-4 w-full p-4 flex flex-row justify-between gap-4">
      <div>
        <div className="flex w-16 h-16 bg-red-500 rounded-lg justify-center items-center">
          <svg
            fill="#ffffff"
            className="w-12 h-12 shrink-0"
            viewBox="0 0 64 64"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M45,50.15H17.63a11.56,11.56,0,0,1-2.41-22.86,16.11,16.11,0,0,1,31-3A12.94,12.94,0,0,1,45,50.15ZM31.11,17.85A12.13,12.13,0,0,0,19,29.19a2,2,0,0,1-1.88,1.87,7.55,7.55,0,0,0,.48,15.09H45a8.94,8.94,0,0,0,0-17.88h-.26a2,2,0,0,1-1.93-1.48A12.15,12.15,0,0,0,31.11,17.85Z" />
            <path d="M32,40.5a2,2,0,0,1-1.26-.44L25.3,35.63a2,2,0,0,1,2.52-3.1L30,34.3V28.66a2,2,0,1,1,4,0V38.5a2,2,0,0,1-2,2Z" />
            <path d="M32,40.5a2,2,0,0,1-2-2V28.66a2,2,0,1,1,4,0V34.3l2.18-1.77a2,2,0,1,1,2.52,3.1l-5.44,4.43A2,2,0,0,1,32,40.5Z" />
          </svg>
        </div>
      </div>
      <div className=" flex flex-col gap-1 ">
        <h1 className="text-black font-bold text-lg">Cloud Computing</h1>
        <p className="text-xs mr-3">
          For passionate developers who want to stay relevant in a cloud first
          world where businesses demand for agility and innovation and prompt
          rise of cloud-native applications to bridges gaps between data,
          insight, and action.
        </p>
      </div>
    </div>
  );
};

export default CloudComputingBox;
