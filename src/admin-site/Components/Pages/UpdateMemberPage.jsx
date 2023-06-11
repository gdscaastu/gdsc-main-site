import React from "react";
import Navbar from "../Navbar";
import MemberUpdateForm from "../Team/UpdateTeam";
import UnauthorizedPage from "./UnauthorizedPage";
const UpdateMemberPage = () => {
  if (!(localStorage.getItem('isAdmin'))) {
    return( <UnauthorizedPage />)
  }
  return (
    <div>
      <Navbar />
      <div className="p-10  ml-72">
        <MemberUpdateForm />
      </div>
    </div>
  );
};

export default UpdateMemberPage;
