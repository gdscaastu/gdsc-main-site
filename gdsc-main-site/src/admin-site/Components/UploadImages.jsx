import React from "react";
import ImageDropzone from "./ImageDrop";
import { useState } from "react";
const UploadImages = ({ id }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  return (
    <div className="mb-4 flex ">
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
  );
};

export default UploadImages;
