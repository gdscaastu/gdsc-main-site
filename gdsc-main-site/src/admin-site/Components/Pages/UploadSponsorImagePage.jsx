import React from "react";
import Navbar from "../Navbar";
import UpdateProjectForm from "../Project.jsx/UpdateProjectForm";
import UnauthorizedPage from "./UnauthorizedPage";
import UploadImages from "../Sponsors/UploadImage";
const UploadSponsorImage = () => {
  if (!(localStorage.getItem('isAdmin'))) {
    return( <UnauthorizedPage />)
  }
  return (
    <div>
      <Navbar />
      <div className="p-10  ml-72">
        <UploadImages />
      </div>
    </div>
  );
};

export default UploadSponsorImage;
