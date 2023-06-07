import React from "react";
import Navbar from "../Navbar";
import UnauthorizedPage from "./UnauthorizedPage";
import MemberForm from "../Team/AddNewTeam";
const AddMemberPage = () => {
  if (!(localStorage.getItem('isAdmin'))) {
    return( <UnauthorizedPage />)
  }
  return (
    <div>
      <Navbar />
      <div className="p-10  ml-72">
        <MemberForm />
      </div>
    </div>
  );
};

export default AddMemberPage;
