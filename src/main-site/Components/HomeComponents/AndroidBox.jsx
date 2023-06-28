import React from "react";

const AndroidBox = () => {
  return (
    <div className="container ml-4 w-full p-4 flex flex-row justify-between gap-5">
      <div>
        <div className="flex w-16 h-16 bg-green-500 rounded-lg justify-center">
          <svg
            fill="#ffffff"
            className="w-12 h-12 shrink-0 items-center self-center"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>android</title>
            <path d="M23.35 12.653l2.496-4.323c0.044-0.074 0.070-0.164 0.070-0.26 0-0.287-0.232-0.519-0.519-0.519-0.191 0-0.358 0.103-0.448 0.257l-0.001 0.002-2.527 4.377c-1.887-0.867-4.094-1.373-6.419-1.373s-4.532 0.506-6.517 1.413l0.098-0.040-2.527-4.378c-0.091-0.156-0.259-0.26-0.45-0.26-0.287 0-0.519 0.232-0.519 0.519 0 0.096 0.026 0.185 0.071 0.262l-0.001-0.002 2.496 4.323c-4.286 2.367-7.236 6.697-7.643 11.744l-0.003 0.052h29.991c-0.41-5.099-3.36-9.429-7.57-11.758l-0.076-0.038zM9.098 20.176c-0 0-0 0-0 0-0.69 0-1.249-0.559-1.249-1.249s0.559-1.249 1.249-1.249c0.69 0 1.249 0.559 1.249 1.249v0c-0.001 0.689-0.559 1.248-1.249 1.249h-0zM22.902 20.176c-0 0-0 0-0 0-0.69 0-1.249-0.559-1.249-1.249s0.559-1.249 1.249-1.249c0.69 0 1.249 0.559 1.249 1.249v0c-0.001 0.689-0.559 1.248-1.249 1.249h-0z"></path>
          </svg>
        </div>
      </div>
      <div className=" flex flex-col gap-1">
        <h1 className="text-black font-bold text-lg">Android Development</h1>
        <p className="text-xs mr-3 text-gray-500">
          Every year Google developers release exciting new updates to the
          world's most popular operating system. We always have sessions to keep
          you updated and mastering the latest trends in modern Android
          development.
        </p>
      </div>
    </div>
  );
};

export default AndroidBox;
