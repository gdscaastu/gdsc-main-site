import React from "react";
import Navbar from "../Navbar";
import AddNewSponsor from "../Sponsors/AddNewSponsor";

const AddNewSponsorPage = () => {
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
