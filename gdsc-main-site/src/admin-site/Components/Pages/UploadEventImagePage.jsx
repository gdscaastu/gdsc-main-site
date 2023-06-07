import React from "react";
import Navbar from "../Navbar";
import UnauthorizedPage from "./UnauthorizedPage";
import UploadEventImage from "../Events/UploadEventImage";
const UploadEventImagePage = () => {
  if (!(localStorage.getItem('isAdmin'))) {
    return( <UnauthorizedPage />)
  }
  return (
    <div>
      <Navbar />
      <div className="p-10  ml-72">
        <UploadEventImage />
      </div>
    </div>
  );
};

export default UploadEventImagePage;
