import React from "react";
import EventDetail from "../Components/EventComponents/EventDetail";
import Footer from "../Components/Footer";
import MainNavbar from "../Components/Navabar";
import ProjectDetail from "../Components/ProjectsComponent/ProjectDetail";
import { useParams } from "react-router-dom";

const ClientprojectDetailPage = ({ onClose }) => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="lg:w-full bg-white border-gray-200 dark:bg-white shadow-md flex justify-center w-full">
        <MainNavbar />
      </div>
      <div className="lg:w-full bg-white border-gray-200 dark:bg-white shadow-md flex justify-center w-full mb-2"></div>
      <div className="w-full flex justify-center items-center self-center">
        <ProjectDetail onClose={onClose} id={id} />
      </div>
      <div className="lg:w-[90%] w-[100%] lg:mt-20 lg:ml-10 ">
        <Footer />
      </div>
    </div>
  );
};

export default ClientprojectDetailPage;
