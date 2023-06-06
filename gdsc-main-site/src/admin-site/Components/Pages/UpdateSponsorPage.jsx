import React from "react";
import Navbar from "../Navbar";
import UpdateSponsorForm from "../Sponsors/UpdateSponsor";

const UpdateSponsorPage = () => {
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
