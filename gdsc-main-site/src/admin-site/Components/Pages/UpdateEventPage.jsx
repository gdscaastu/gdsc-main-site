import React from "react";
import UpdateEventForm from "../Events/UpdateEventForm";
import Navbar from "../Navbar";
import UnauthorizedPage from "./UnauthorizedPage";
const UpdateEventPage = () => {
  if (!(localStorage.getItem('isAdmin'))) {
    return( <UnauthorizedPage />)
  }
  return (
    <div>
      <Navbar />
      <div className="p-10  ml-72">
        <UpdateEventForm />
      </div>
    </div>
  );
};

export default UpdateEventPage;
