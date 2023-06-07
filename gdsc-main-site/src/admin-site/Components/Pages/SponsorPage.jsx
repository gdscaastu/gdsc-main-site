import React from "react";
import Navbar from "../Navbar";
import Sponsors from "../Sponsors/Sponsors";
import UnauthorizedPage from "./UnauthorizedPage";
const SponsorPage = () => {
  if (!(localStorage.getItem('isAdmin'))) {
    return( <UnauthorizedPage />)
  }
  return (
    <div>
      <Navbar />
      <div className="p-10  ml-72">
        <Sponsors />
      </div>
    </div>
  );
};

export default SponsorPage;
