import React, { useState } from "react";

const ImageDropzone = ({ selectedFiles, setSelectedFiles }) => {
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...files]);
  };

  const handleRemoveFile = (index) => {
    setSelectedFiles((prevSelectedFiles) =>
      prevSelectedFiles.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="relative mb-3 w-[70%]">
      <div className="border-2 border-dashed border-gray-400 rounded-lg p-4 mb-2">
        <label
          htmlFor="image-upload"
          className="cursor-pointer w-full text-gray-400 flex flex-col items-center">
          <span className="block mb-1 text-center">Upload Images</span>
          <span className="block text-xs text-gray-500">
            (Max file size: 5MB, accepted formats: jpg, png,jpeg )
          </span>
          <input
            id="image-upload"
            type="file"
            accept="image/jpeg,image/png"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
      <div className="flex flex-col">
        {selectedFiles.map((file, index) => (
          <div key={index} className="relative mb-2">
            <div className="w-full flex items-center justify-between bg-gray-100 rounded-lg overflow-hidden">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 mx-2"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 2a2 2 0 00-2 2v6a2 2 0 104 0V4a2 2 0 00-2-2zM7 10a2 2 0 114 0v6a2 2 0 11-4 0v-6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-500 truncate">
                  {file.name}
                </span>
              </div>
              <button
                type="button"
                className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs"
                onClick={() => handleRemoveFile(index)}>
                &times;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDropzone;
