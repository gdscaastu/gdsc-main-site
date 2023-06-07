import React from "react";
import Event from "../Events/Event";
import Navbar from "../Navbar";
import UnauthorizedPage from "./UnauthorizedPage";

const EventPage = () => {
  if (!(localStorage.getItem('isAdmin'))) {
    return( <UnauthorizedPage />)
  }
  return (
    <div>
      <Navbar />
      <div className="p-10  ml-72">
        <Event />
      </div>
    </div>
  );
};

export default EventPage;
