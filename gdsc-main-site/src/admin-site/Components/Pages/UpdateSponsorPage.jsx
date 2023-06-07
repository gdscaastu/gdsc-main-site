import React from "react";
import Navbar from "../Navbar";
import UpdateSponsorForm from "../Sponsors/UpdateSponsor";
import UnauthorizedPage from "./UnauthorizedPage";
const UpdateSponsorPage = () => {
  if (!(localStorage.getItem('isAdmin'))) {
    return( <UnauthorizedPage />)
  }
  return (
    <div>
      <Navbar />
      <div className="p-10  ml-72">
        <UpdateSponsorForm />
      </div>
    </div>
  );
};

export default UpdateSponsorPage;
