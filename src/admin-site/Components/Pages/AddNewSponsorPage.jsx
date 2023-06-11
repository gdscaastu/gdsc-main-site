import React from "react";
import Navbar from "../Navbar";
import AddNewSponsor from "../Sponsors/AddNewSponsor";
import UnauthorizedPage from "./UnauthorizedPage";
const AddNewSponsorPage = () => {
  if (!(localStorage.getItem('isAdmin'))) {
    return( <UnauthorizedPage />)
  }
  
  return (
    <div>
      <Navbar />
      <div className="p-10  ml-72">
        <AddNewSponsor />
      </div>
    </div>
  );
};

export default AddNewSponsorPage;
