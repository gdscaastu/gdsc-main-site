import React from "react";
import ImageDropzone from "./ImageDropZone";
import { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { async } from "q";
import { useNavigate } from "react-router";
const UploadEventImage = (props) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const add = async() => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("image", selectedFiles[i]);
      console.log(selectedFiles[i]);
    }
    try {
      const response = await axios.post(`https://gdsc-main-site.onrender.com/v1/event/upload-image/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` ,
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      if (response.status === 200) {
        navigate(`/admin/event`);
    } else {
      alert("Something went wrong");
    }
    } catch (error) {
      console.error(error);
  };
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

export default UploadEventImage;
