import React from "react";
import Navbar from "../Navbar";
import UpdateProjectForm from "../Project.jsx/UpdateProjectForm";
import UnauthorizedPage from "./UnauthorizedPage";
import UploadImages from "../UploadImages";
import Members from "../Team/Team";
const AdminTeamPage = () => {
  if (!(localStorage.getItem('isAdmin'))) {
    return( <UnauthorizedPage />)
  }
  return (
    <div>
      <Navbar />
      <div className="p-10  ml-72">
        <Members />
      </div>
    </div>
  );
};

export default AdminTeamPage;
