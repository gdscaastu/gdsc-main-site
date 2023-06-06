import React from "react";
import ImageDropzone from "./ImageDropZone";
import { useState } from "react";
const UploadImages = ({ id, type }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const add = () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("image", selectedFiles[i]);
      console.log(selectedFiles[i]);
    }
  };

  return (
    <div className="mb-4 flex flex-col ">
      <div className=" mb-6 flex h-12 justify-between shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
        <h1 className="text-lg items-center">Upload Event Images</h1>
      </div>
      <div className="flex">
        <label className="w-[15%] items-center flex" htmlFor="">
          Images:
        </label>
        <div className="w-[90%] flex justify-center items-center overflow-y-auto  h-52 shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
          <ImageDropzone
            selectedFiles={selectedFiles}
            setSelectedFiles={setSelectedFiles}
          />
        </div>
      </div>
      <button onClick={add}>add</button>
    </div>
  );
};

export default UploadImages;
