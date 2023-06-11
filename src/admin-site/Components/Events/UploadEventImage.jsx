import React from "react";
import ImageDropzone from "./ImageDropZone";
import { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { async } from "q";
<<<<<<< HEAD:gdsc-main-site/src/admin-site/Components/Events/UploadEventImage.jsx
import { useNavigate } from "react-router";
const UploadEventImage = (props) => {
=======
<<<<<<<< HEAD:gdsc-main-site/src/admin-site/Components/UploadImages.jsx
import { useNavigate } from "react-router-dom";
const UploadImages = (props) => {
========
import { useNavigate } from "react-router";
const UploadEventImage = (props) => {
>>>>>>>> main:src/admin-site/Components/Events/UploadEventImage.jsx
>>>>>>> main:src/admin-site/Components/Events/UploadEventImage.jsx
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

<<<<<<< HEAD:gdsc-main-site/src/admin-site/Components/Events/UploadEventImage.jsx
  const add = async() => {
=======
<<<<<<<< HEAD:gdsc-main-site/src/admin-site/Components/UploadImages.jsx
  const add = async () => {
========
  const add = async() => {
>>>>>>>> main:src/admin-site/Components/Events/UploadEventImage.jsx
>>>>>>> main:src/admin-site/Components/Events/UploadEventImage.jsx
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("image", selectedFiles[i]);
      console.log(selectedFiles[i]);
    }
    try {
<<<<<<< HEAD:gdsc-main-site/src/admin-site/Components/Events/UploadEventImage.jsx
=======
<<<<<<<< HEAD:gdsc-main-site/src/admin-site/Components/UploadImages.jsx
      const response = await axios.post(
        `https://gdsc-main-site.onrender.com/v1/project/upload-image/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        navigate(`/admin/project`);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
========
>>>>>>> main:src/admin-site/Components/Events/UploadEventImage.jsx
      const response = await axios.post(`https://gdsc-main-site.onrender.com/v1/event/upload-image/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` ,
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      if (response.status === 200) {
        navigate(`/admin/project`);
    } else {
      alert("Something went wrong");
    }
    } catch (error) {
      console.error(error);
  };
<<<<<<< HEAD:gdsc-main-site/src/admin-site/Components/Events/UploadEventImage.jsx
  };
  return (
    <div className="mb-4 flex flex-col ">
      <div className=" mb-6 flex h-12 justify-between shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
        <h1 className="text-lg items-center">Upload Event Images</h1>
      </div>
      <div className="flex">
=======
>>>>>>>> main:src/admin-site/Components/Events/UploadEventImage.jsx
  };
  return (
    <div className=" w-full p-5  ml-7">
      <div className=" w-full mb-6 flex h-12 justify-between shadow-sm bg-white border border-gray-900 text-gray-900  placeholder:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  py-2.5 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light">
        <h1 className="text-lg items-center">Upload Event Images</h1>
      </div>
      <div className="flex mb-4">
>>>>>>> main:src/admin-site/Components/Events/UploadEventImage.jsx
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
<<<<<<< HEAD:gdsc-main-site/src/admin-site/Components/Events/UploadEventImage.jsx
      <button onClick={add}>add</button>
=======
      <div className="flex justify-between">
        <div className="mb-4">
          <button
            type="button"
            className="shadow-sm bg-gray-200 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          >
            Cancel
          </button>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            onClick={add}
            className="shadow-sm bg-green-500  text-white font-bold text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          >
            Save Changes
          </button>
        </div>
      </div>
>>>>>>> main:src/admin-site/Components/Events/UploadEventImage.jsx
    </div>
  );
};

export default UploadEventImage;
