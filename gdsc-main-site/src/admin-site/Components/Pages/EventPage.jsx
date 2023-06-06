import React from "react";

import Event from "../Events/Event";
import Navbar from "../Navbar";

const EventPage = () => {
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
