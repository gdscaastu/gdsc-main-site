import React from "react";
import Navbar from "../Navbar";
import AdminProject from "../Project.jsx/AdminProject";

const ProjectPage = () => {
  return (
    <div>
      <Navbar />
      <div className="p-10  ml-72">
        <AdminProject />
      </div>
    </div>
  );
};

export default ProjectPage;
