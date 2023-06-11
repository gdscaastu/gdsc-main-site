import React from "react";
import Navbar from "../Navbar";
import UploadMemberImage from "../Team/UploadMemberImage";
import UnauthorizedPage from "./UnauthorizedPage";
const UploadMemberImagePage = () => {
  if (!(localStorage.getItem('isAdmin'))) {
    return( <UnauthorizedPage />)
  }
  return (
    <div>
      <Navbar />
      <div className="p-10  ml-72">
        <UploadMemberImage />
      </div>
    </div>
  );
};

export default UploadMemberImagePage;
