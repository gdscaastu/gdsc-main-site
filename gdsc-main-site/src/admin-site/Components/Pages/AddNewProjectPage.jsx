import React from "react";
import Navbar from "../Navbar";
import AddNewProjectForm from "../Project.jsx/AddNewProjectForm";

const AddNewProjectPage = () => {
  return (
    <div>
      <Navbar />
      <div className="p-10  ml-72">
        <AddNewProjectForm />
      </div>
    </div>
  );
};

export default AddNewProjectPage;
