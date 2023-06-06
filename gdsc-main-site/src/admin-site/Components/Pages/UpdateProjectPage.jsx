import React from "react";
import Navbar from "../Navbar";
import UpdateProjectForm from "../Project.jsx/UpdateProjectForm";

const UpdateProjectPage = () => {
  return (
    <div>
      <Navbar />
      <div className="p-10  ml-72">
        <UpdateProjectForm />
      </div>
    </div>
  );
};

export default UpdateProjectPage;
