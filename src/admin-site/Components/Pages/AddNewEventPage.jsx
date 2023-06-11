import React from "react";
import AddNewEventFom from "../Events/AddNewEventFom";
import Navbar from "../Navbar";
import UnauthorizedPage from "./UnauthorizedPage";
const AddNewEventPage = () => {
  if (!(localStorage.getItem('isAdmin'))) {
    return( <UnauthorizedPage />)
  }
  return (
    <div>
      <Navbar />
      <div className="p-10  ml-72">
        <AddNewEventFom />
      </div>
    </div>
  );
};

export default AddNewEventPage;
